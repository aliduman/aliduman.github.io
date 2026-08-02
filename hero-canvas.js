(() => {
    const canvas = document.querySelector(".hero-canvas");
    const hero = document.querySelector(".hero");
    if (!canvas || !hero) return;

    const context = canvas.getContext("2d");
    const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let width = 0;
    let height = 0;
    let pixelRatio = 1;
    let animationFrame = 0;
    let lastTime = 0;
    let visible = true;
    let particles = [];
    let glyphs = [];
    const pointer = {
        x: 0, y: 0, targetX: 0, targetY: 0,
        canvasX: 0, canvasY: 0, lastX: 0, lastY: 0,
        velocityX: 0, velocityY: 0, energy: 0, active: false, lastMove: 0
    };

    function palette() {
        const dark = document.documentElement.dataset.theme === "dark";
        return dark
            ? { star: "109,143,255", line: "109,143,255", shape: "244,244,245", glow: "109,143,255" }
            : { star: "37,99,235", line: "37,99,235", shape: "9,9,11", glow: "37,99,235" };
    }

    function random(min, max) {
        return min + Math.random() * (max - min);
    }

    function createScene() {
        const particleCount = width < 600 ? 50 : Math.min(120, Math.round(width / 13));
        const glyphCount = width < 600 ? 7 : 14;
        particles = Array.from({ length: particleCount }, () => ({
            x: random(0, width),
            y: random(0, height),
            radius: random(0.6, 2.1),
            speed: random(6, 20),
            drift: random(-8, 8),
            alpha: random(0.22, 0.78),
            phase: random(0, Math.PI * 2)
        }));
        glyphs = Array.from({ length: glyphCount }, (_, index) => ({
            x: random(width * 0.04, width * 0.96),
            y: random(height * 0.1, height * 0.82),
            size: random(width < 600 ? 18 : 24, width < 600 ? 34 : 54),
            rotation: random(-0.35, 0.35),
            speed: random(4, 10),
            phase: random(0, Math.PI * 2),
            alpha: random(0.09, 0.23),
            type: index % 4
        }));
    }

    function resize() {
        const bounds = hero.getBoundingClientRect();
        width = Math.max(1, bounds.width);
        height = Math.max(1, bounds.height);
        pixelRatio = Math.min(devicePixelRatio || 1, 2);
        canvas.width = Math.round(width * pixelRatio);
        canvas.height = Math.round(height * pixelRatio);
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;
        context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
        createScene();
        if (reducedMotion) draw(0, 0);
    }

    function drawGrid(colors) {
        const spacing = width < 600 ? 52 : 72;
        context.save();
        context.translate(pointer.x * 16 + pointer.velocityX * pointer.energy * 12, pointer.y * 16 + pointer.velocityY * pointer.energy * 12);
        context.strokeStyle = `rgba(${colors.line},0.06)`;
        context.lineWidth = 1;
        for (let x = -spacing; x < width + spacing; x += spacing) {
            context.beginPath();
            context.moveTo(x, 0);
            context.lineTo(x, height);
            context.stroke();
        }
        for (let y = -spacing; y < height + spacing; y += spacing) {
            context.beginPath();
            context.moveTo(0, y);
            context.lineTo(width, y);
            context.stroke();
        }
        context.restore();
    }

    function drawConnections(colors) {
        context.save();
        context.lineWidth = 0.8;
        for (let i = 0; i < particles.length; i += 1) {
            const a = particles[i];
            for (let j = i + 1; j < particles.length; j += 1) {
                const b = particles[j];
                const dx = a.x - b.x;
                const dy = a.y - b.y;
                const distance = Math.hypot(dx, dy);
                const limit = width < 600 ? 90 : 130;
                if (distance >= limit) continue;
                context.strokeStyle = `rgba(${colors.line},${(1 - distance / limit) * 0.11})`;
                context.beginPath();
                context.moveTo(a.x + pointer.x * 7, a.y + pointer.y * 7);
                context.lineTo(b.x + pointer.x * 7, b.y + pointer.y * 7);
                context.stroke();
            }
        }
        context.restore();
    }

    function drawGlyph(glyph, colors, time) {
        const motionBoost = 1 + pointer.energy * 3.4;
        const floatY = Math.sin(time * 0.00055 * motionBoost + glyph.phase) * (11 + pointer.energy * 8);
        context.save();
        context.translate(
            glyph.x + pointer.x * 28 + pointer.velocityX * pointer.energy * 28,
            glyph.y + floatY + pointer.y * 22 + pointer.velocityY * pointer.energy * 20
        );
        context.rotate(glyph.rotation + Math.sin(time * 0.00028 * motionBoost + glyph.phase) * 0.1 + pointer.velocityX * pointer.energy * 0.24);
        context.strokeStyle = `rgba(${colors.shape},${glyph.alpha})`;
        context.fillStyle = `rgba(${colors.glow},${glyph.alpha * 0.42})`;
        context.lineWidth = 1.4;
        const size = glyph.size;

        if (glyph.type === 0) {
            context.beginPath();
            context.moveTo(-size * 0.45, -size * 0.3);
            context.lineTo(-size * 0.75, 0);
            context.lineTo(-size * 0.45, size * 0.3);
            context.moveTo(size * 0.45, -size * 0.3);
            context.lineTo(size * 0.75, 0);
            context.lineTo(size * 0.45, size * 0.3);
            context.moveTo(size * 0.15, -size * 0.48);
            context.lineTo(-size * 0.15, size * 0.48);
            context.stroke();
        } else if (glyph.type === 1) {
            context.strokeRect(-size * 0.65, -size * 0.45, size * 1.3, size * 0.9);
            context.beginPath();
            context.moveTo(-size * 0.42, -size * 0.18);
            context.lineTo(size * 0.1, -size * 0.18);
            context.moveTo(-size * 0.42, size * 0.04);
            context.lineTo(size * 0.38, size * 0.04);
            context.moveTo(-size * 0.42, size * 0.25);
            context.lineTo(-size * 0.05, size * 0.25);
            context.stroke();
            context.fillRect(size * 0.22, size * 0.17, size * 0.22, size * 0.14);
        } else if (glyph.type === 2) {
            context.beginPath();
            context.arc(0, 0, size * 0.48, 0, Math.PI * 1.55);
            context.stroke();
            context.beginPath();
            context.arc(0, 0, size * 0.18, 0, Math.PI * 2);
            context.fill();
            context.beginPath();
            context.moveTo(-size * 0.55, size * 0.05);
            context.lineTo(-size * 0.42, size * 0.31);
            context.lineTo(-size * 0.27, size * 0.08);
            context.stroke();
        } else {
            context.beginPath();
            context.moveTo(-size * 0.42, -size * 0.5);
            context.lineTo(size * 0.2, -size * 0.13);
            context.lineTo(-size * 0.03, -size * 0.02);
            context.lineTo(size * 0.18, size * 0.38);
            context.lineTo(-size * 0.02, size * 0.48);
            context.lineTo(-size * 0.23, size * 0.08);
            context.lineTo(-size * 0.42, size * 0.28);
            context.closePath();
            context.stroke();
        }
        context.restore();
    }

    function draw(time, delta) {
        const colors = palette();
        context.clearRect(0, 0, width, height);
        pointer.x += (pointer.targetX - pointer.x) * 0.035;
        pointer.y += (pointer.targetY - pointer.y) * 0.035;
        pointer.energy *= 0.965;
        pointer.velocityX *= 0.91;
        pointer.velocityY *= 0.91;
        drawGrid(colors);

        if (pointer.active && pointer.energy > 0.015) {
            const glow = context.createRadialGradient(pointer.canvasX, pointer.canvasY, 0, pointer.canvasX, pointer.canvasY, 150);
            glow.addColorStop(0, `rgba(${colors.glow},${0.07 + pointer.energy * 0.09})`);
            glow.addColorStop(1, `rgba(${colors.glow},0)`);
            context.fillStyle = glow;
            context.beginPath();
            context.arc(pointer.canvasX, pointer.canvasY, 150, 0, Math.PI * 2);
            context.fill();
        }

        particles.forEach((particle) => {
            if (!reducedMotion) {
                const speedBoost = 1 + pointer.energy * 6;
                particle.y -= particle.speed * speedBoost * delta * 0.001;
                particle.x += (particle.drift + pointer.velocityX * pointer.energy * 55) * delta * 0.001;
                if (pointer.active) {
                    const dx = particle.x - pointer.canvasX;
                    const dy = particle.y - pointer.canvasY;
                    const distance = Math.max(1, Math.hypot(dx, dy));
                    const radius = width < 600 ? 100 : 150;
                    if (distance < radius) {
                        const force = (1 - distance / radius) * (0.28 + pointer.energy * 2.6) * delta;
                        particle.x += (dx / distance) * force;
                        particle.y += (dy / distance) * force;
                    }
                }
                if (particle.y < -8) { particle.y = height + 8; particle.x = random(0, width); }
                if (particle.x < -8) particle.x = width + 8;
                if (particle.x > width + 8) particle.x = -8;
            }
            const twinkle = 0.7 + Math.sin(time * 0.0015 + particle.phase) * 0.3;
            context.fillStyle = `rgba(${colors.star},${particle.alpha * twinkle})`;
            context.beginPath();
            context.arc(particle.x + pointer.x * 8, particle.y + pointer.y * 8, particle.radius, 0, Math.PI * 2);
            context.fill();
        });

        drawConnections(colors);
        glyphs.forEach((glyph) => {
            if (!reducedMotion) {
                glyph.y -= glyph.speed * (1 + pointer.energy * 3.6) * delta * 0.001;
                if (glyph.y < -glyph.size) glyph.y = height + glyph.size;
            }
            drawGlyph(glyph, colors, time);
        });
    }

    function animate(time) {
        const delta = Math.min(40, time - lastTime || 16);
        lastTime = time;
        if (visible && !document.hidden) draw(time, delta);
        animationFrame = requestAnimationFrame(animate);
    }

    window.addEventListener("pointermove", (event) => {
        const bounds = hero.getBoundingClientRect();
        const inside = event.clientX >= bounds.left && event.clientX <= bounds.right && event.clientY >= bounds.top && event.clientY <= bounds.bottom;
        pointer.active = inside;
        if (!inside) return;
        const now = performance.now();
        const elapsed = Math.max(8, now - pointer.lastMove);
        const deltaX = event.clientX - pointer.lastX;
        const deltaY = event.clientY - pointer.lastY;
        const distance = Math.hypot(deltaX, deltaY);
        pointer.velocityX = Math.max(-1, Math.min(1, deltaX / elapsed * 0.8));
        pointer.velocityY = Math.max(-1, Math.min(1, deltaY / elapsed * 0.8));
        pointer.energy = Math.max(pointer.energy, Math.min(1, distance / 42));
        pointer.canvasX = event.clientX - bounds.left;
        pointer.canvasY = event.clientY - bounds.top;
        pointer.targetX = pointer.canvasX / width - 0.5;
        pointer.targetY = pointer.canvasY / height - 0.5;
        pointer.lastX = event.clientX;
        pointer.lastY = event.clientY;
        pointer.lastMove = now;
    }, { passive: true });

    hero.addEventListener("pointerleave", () => { pointer.active = false; });

    new ResizeObserver(resize).observe(hero);
    new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; }, { threshold: 0.01 }).observe(hero);
    new MutationObserver(() => { if (reducedMotion) draw(0, 0); }).observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    resize();
    if (!reducedMotion) animationFrame = requestAnimationFrame(animate);

    window.addEventListener("pagehide", () => cancelAnimationFrame(animationFrame), { once: true });
})();
