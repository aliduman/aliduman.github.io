const translations = new Map([
    ["İçeriğe geç", "Skip to content"],
    ["Hakkımda", "About"], ["Uzmanlık", "Expertise"], ["Çalışmalar", "Work"],
    ["Özgeçmiş", "Resume"], ["İletişim", "Contact"],
    ["İstanbul, Türkiye", "Istanbul, Turkey"], ["2012'den beri profesyonel", "Professional since 2012"],
    ["14+ yıllık deneyimimle karmaşık ürün ihtiyaçlarını sade, sürdürülebilir ve kullanıcı odaklı web deneyimlerine dönüştürüyorum.", "With 14+ years of experience, I turn complex product needs into clear, sustainable and user-focused web experiences."],
    ["Çalışmaları gör", "View selected work"], ["İletişime geç", "Get in touch"],
    ["/Hakkımda", "/About"], ["Merhaba!", "Hello!"],
    ["İstanbul'da yaşayan, 2012'den bu yana dijital ürünler geliştiren bir front-end developer'ım.", "I am an Istanbul-based front-end developer building digital products since 2012."],
    ["Ajans ve ürün şirketlerinde edindiğim deneyimi; sürdürülebilir arayüz mimarileri, modern web teknolojileri ve kullanıcı deneyimi odağında birleştiriyorum.", "I combine my experience across agencies and product companies with sustainable interface architectures, modern web technologies and a strong focus on user experience."],
    ["Fikirden yayına. Hızlı, sade ve gerçek kullanımda karşılığını veren dijital ürünler.", "From idea to launch. Fast, focused digital products that deliver value in real-world use."],
    ["Modernizasyon & Migration", "Modernization & Migration"],
    ["Öne Çıkan Çalışmalar", "Selected Work"], ["/Seçki", "/Selection"],
    ["Makine öğrenmesi destekli ürün arayüzü · Vue.js ile SaaS dönüşümü", "Machine learning-powered product interface · SaaS transformation with Vue.js"],
    ["Yapay zekâ destekli fotoğraf düzenleme ürününün arayüz geliştirmesi", "Interface development for an AI-powered photo editing product"],
    ["Kurumsal Web Components kütüphanesine katkı", "Contribution to the enterprise Web Components library"],
    ["Daha fazla çalışma", "More work"], ["Daha az göster", "Show less"],
    ["Araba.com, Tasit.com ve Garaj Sepeti Marketplace ürünlerinin arayüz geliştirme süreçlerinde görev aldım. Mevcut ürünleri sürdürürken yeni özellikler, hata düzeltmeleri ve responsive deneyimler geliştirdim.", "I contributed to interface development for Araba.com, Tasit.com and Garaj Sepeti Marketplace. Alongside maintaining existing products, I delivered new features, bug fixes and responsive experiences."],
    ["AngularJS tabanlı e-ticaret uygulaması, Angular 2–7 ile CMS çözümleri ve çeşitli SPA projeleri geliştirdim. Kurumsal markalar için web arayüzlerini tasarımdan çalışan ürüne taşıdım.", "I developed an AngularJS-based e-commerce application, CMS solutions with Angular 2–7 and several SPA projects. I took web interfaces for corporate brands from design to working product."],
    ["Kurumsal ERP web uygulamalarının ön yüz geliştirme süreçlerine katkı sağladım; web ve hibrit mobil arayüzlerde yeniden kullanılabilir çözümler ürettim.", "I contributed to frontend development for enterprise ERP applications and built reusable solutions for web and hybrid mobile interfaces."],
    ["Ajans projelerinde mockup ve PSD tasarımlarını responsive web arayüzlerine dönüştürdüm; tarayıcı uyumluluğu ve temel performans iyileştirmeleri üzerinde çalıştım.", "I transformed mockups and PSD designs into responsive web interfaces for agency projects, with a focus on browser compatibility and essential performance improvements."],
    ["/2012—Bugün", "/2012—Present"],
    ["Farklı ölçeklerdeki ekiplerde; e-ticaret, otomotiv ve ilan platformları için kullanıcı odaklı web ürünleri geliştirdim. Teknik yaklaşımım, güçlü arayüz temellerini ürün düşüncesi ve sürekli öğrenmeyle bir araya getiriyor.", "Across teams of different sizes, I have built user-focused web products for e-commerce, automotive and marketplace platforms. My technical approach combines solid interface foundations with product thinking and continuous learning."],
    ["yıl deneyim", "years of experience"], ["şirket + freelance", "companies + freelance"], ["LinkedIn yeteneği", "LinkedIn skills"],
    ["Tem 2021—Bugün", "Jul 2021—Present"], ["Tem 2019—Tem 2021", "Jul 2019—Jul 2021"],
    ["May 2017—Tem 2019", "May 2017—Jul 2019"], ["May 2015—May 2017", "May 2015—May 2017"],
    ["Eyl 2014—May 2015", "Sep 2014—May 2015"], ["Altunizade, İstanbul", "Altunizade, Istanbul"],
    ["May 2013—Haz 2014", "May 2013—Jun 2014"], ["Haz 2012—May 2013", "Jun 2012—May 2013"],
    ["Şub 2012—May 2012", "Feb 2012—May 2012"],
    ["Üsküdar, İstanbul", "Uskudar, Istanbul"],
    ["Türkiye'nin önde gelen teknoloji platformlarından birinde ürün arayüzleri ve sürdürülebilir frontend çözümleri geliştiriyorum.", "I develop product interfaces and sustainable frontend solutions at one of Turkey's leading technology platforms."],
    ["Araba.com dahil otomotiv pazarına yönelik ürünlerin web arayüzlerinde çalıştım.", "I worked on web interfaces for automotive marketplace products, including Araba.com."],
    ["AngularJS tabanlı e-ticaret uygulamaları, Angular 2–7 ile CMS çözümleri ve tek sayfa web uygulamaları geliştirdim.", "I developed AngularJS-based e-commerce applications, CMS solutions with Angular 2–7 and single-page web applications."],
    ["ERP web uygulamalarının frontend geliştirme çalışmalarını yürüttüm.", "I led frontend development work for ERP web applications."],
    ["Ajans projeleri için arayüz taslakları hazırladım ve bunları çalışan web arayüzlerine dönüştürdüm.", "I created interface mockups for agency projects and turned them into production web interfaces."],
    ["Butik web tasarımlarını HTML, CSS ve JavaScript kullanarak çalışan arayüzlere dönüştürdüm; projelerin kullanıcı deneyimi tasarımlarına katkı sağladım.", "I transformed boutique web designs into working interfaces with HTML, CSS and JavaScript, while contributing to user experience design."],
    ["Kurumsal markalar için web siteleri geliştirdim; PSD tasarımlarını arayüze dönüştürdüm ve saf PHP ile hafif içerik yönetim sistemleri hazırladım.", "I built websites for corporate brands, translated PSD designs into frontend interfaces and developed lightweight content management systems with pure PHP."],
    ["Kariyer.net'in yenilenen web sitesi için görsel, teknik ve deneyimsel hata kontrolleri gerçekleştirdim; bulguları dokümante ederek uyumluluk süreçlerine katkı sağladım.", "I performed visual, technical and experiential quality checks for Kariyer.net's redesigned website, documenting findings and contributing to compatibility reviews."],
    ["Eğitim", "Education"], ["/Temeller", "/Foundations"], ["İstanbul Arel Üniversitesi", "Istanbul Arel University"],
    ["Meslek Yüksekokulu", "Vocational School"], ["Bilgisayar Teknolojileri ve Programlama", "Computer Technologies and Programming"],
    ["Bilge Adam, Ethical Hacking ve After Effects seminerleri", "Bilge Adam, Ethical Hacking and After Effects seminars"],
    ["Yeterlilik kimliği: 02934", "Credential ID: 02934"], ["/Teknolojiler", "/Technologies"],
    ["Yazılar", "Writing"], ["/Yakında", "/Coming soon"],
    ["Frontend geliştirme, ürün arayüzleri ve tasarım sistemleri üzerine notlar burada yayınlanacak.", "Notes on frontend development, product interfaces and design systems will be published here."],
    ["İlk yazı hazırlanıyor.", "The first article is in progress."], ["/İletişim", "/Contact"],
    ["Konuşalım.", "Let's talk."], ["Bir projeniz ya da ihtiyaç duyduğunuz bir destek varsa bana e-posta ile ulaşabilirsiniz.", "Have a project in mind or need support? You can reach me by email."],
    ["Ölçeklenebilir ürünler.", "Scalable products."], ["Sağlam arayüzler.", "Robust interfaces."],
    ["Başa dön", "Back to top"],
    ["/Topluluk", "/Community"], ["Konferanslar ve etkinlikler", "Conferences and events"],
    ["2014'ten bu yana katıldığım 74 teknoloji ve topluluk etkinliğini görüntüle.", "Explore 74 technology and community events I have attended since 2014."],
    ["Katıldığım etkinlikler", "Events I have attended"], ["74 etkinlik · 2014—2026", "74 events · 2014—2026"]
]);

const reverseTranslations = new Map([...translations].map(([tr, en]) => [en, tr]));
const textNodes = [];
const textWalker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
        if (!node.nodeValue.trim() || node.parentElement.closest("script, style")) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
    }
});
while (textWalker.nextNode()) textNodes.push(textWalker.currentNode);

const uiCopy = {
    tr: {
        dark: "Koyu temaya geç", light: "Açık temaya geç", menu: "Menüyü aç/kapat",
        mainNav: "Ana menü", language: "Dil seçimi", portraitOpen: "Ali Duman portresini büyüt",
        portraitClose: "Büyütülmüş portreyi kapat", portraitAlt: "Ali Duman, dizüstü bilgisayarının arkasında",
        home: "Ali Duman, ana sayfa", intro: "Giriş", aboutScroll: "Hakkımda bölümüne git",
        moreWork: "Daha fazla çalışma", lessWork: "Daha az göster", communityOpen: "Katıldığım etkinlikleri aç",
        communityClose: "Etkinlik listesini kapat"
    },
    en: {
        dark: "Switch to dark theme", light: "Switch to light theme", menu: "Open or close menu",
        mainNav: "Main navigation", language: "Language selection", portraitOpen: "Enlarge Ali Duman's portrait",
        portraitClose: "Close enlarged portrait", portraitAlt: "Ali Duman behind his laptop",
        home: "Ali Duman, home", intro: "Introduction", aboutScroll: "Go to the About section",
        moreWork: "More work", lessWork: "Show less", communityOpen: "Open events I have attended",
        communityClose: "Close event list"
    }
};

let currentLanguage = document.documentElement.dataset.language || "tr";

function translateTextNodes(language) {
    const dictionary = language === "en" ? translations : reverseTranslations;
    textNodes.forEach((node) => {
        const original = node.nodeValue;
        const trimmed = original.trim();
        const translated = dictionary.get(trimmed);
        if (translated) node.nodeValue = original.replace(trimmed, translated);
    });
}

function updateAccessibleCopy() {
    const copy = uiCopy[currentLanguage];
    document.querySelector(".brand").setAttribute("aria-label", copy.home);
    document.querySelector(".site-nav").setAttribute("aria-label", copy.mainNav);
    document.querySelector(".menu-button").setAttribute("aria-label", copy.menu);
    document.querySelector(".language-switch").setAttribute("aria-label", copy.language);
    document.querySelector("#hero").setAttribute("aria-label", copy.intro);
    document.querySelector(".scroll-hint").setAttribute("aria-label", copy.aboutScroll);
    document.querySelector(".portrait-link").setAttribute("aria-label", document.querySelector(".portrait-link").classList.contains("is-expanded") ? copy.portraitClose : copy.portraitOpen);
    document.querySelector(".portrait-link img").alt = copy.portraitAlt;
    const moreButton = document.querySelector(".work-more-toggle");
    const moreExpanded = moreButton.getAttribute("aria-expanded") === "true";
    moreButton.querySelector("span").textContent = moreExpanded ? copy.lessWork : copy.moreWork;
    moreButton.setAttribute("aria-label", moreExpanded ? copy.lessWork : copy.moreWork);
    document.querySelector(".community-card").setAttribute("aria-label", copy.communityOpen);
    document.querySelector(".community-modal-close").setAttribute("aria-label", copy.communityClose);
}

function renderCommunityEvents() {
    const list = document.querySelector(".community-event-list");
    const locale = currentLanguage === "tr" ? "tr-TR" : "en-GB";
    const dateFormatter = new Intl.DateTimeFormat(locale, { day: "numeric", month: "short", year: "numeric" });
    list.replaceChildren();
    window.MEETUP_EVENTS.forEach((event) => {
        const item = document.createElement("li");
        item.className = "community-event-item";
        const row = document.createElement("div");
        row.className = "community-event-row";
        const date = document.createElement("time");
        date.className = "community-event-date";
        date.dateTime = event.date;
        date.textContent = dateFormatter.format(new Date(event.date));
        const copy = document.createElement("span");
        copy.className = "community-event-copy";
        const title = document.createElement("strong");
        title.textContent = event.title;
        const organizer = document.createElement("span");
        organizer.textContent = event.organizer;
        copy.append(title, organizer);
        row.append(date, copy);
        item.append(row);
        list.append(item);
    });
}

function setLanguage(language, persist = false) {
    currentLanguage = language;
    document.documentElement.lang = language;
    document.documentElement.dataset.language = language;
    translateTextNodes(language);
    document.querySelectorAll(".language-switch [data-language]").forEach((button) => {
        button.setAttribute("aria-pressed", String(button.dataset.language === language));
    });
    const isEnglish = language === "en";
    document.title = isEnglish ? "Ali Duman — Front End Developer" : "Ali Duman — Front End Developer";
    document.querySelector('meta[name="description"]').content = isEnglish
        ? "Ali Duman — Istanbul-based Front End Developer with 14+ years of experience in scalable product interfaces, modernization and design systems."
        : "Ali Duman — 14+ yıllık deneyime sahip İstanbul merkezli Front End Developer. Ölçeklenebilir ürün arayüzleri, modernizasyon ve tasarım sistemleri.";
    document.querySelector('meta[property="og:description"]').content = isEnglish
        ? "I build scalable, fast and user-focused web experiences."
        : "Ölçeklenebilir, hızlı ve kullanıcı odaklı web deneyimleri geliştiriyorum.";
    updateAccessibleCopy();
    renderCommunityEvents();
    if (persist) localStorage.setItem("language", language);
    setTheme(document.documentElement.dataset.theme || "light");
}

document.querySelectorAll(".language-switch [data-language]").forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.language, true));
});

const year = new Date().getFullYear();
document.querySelectorAll("[data-year]").forEach((el) => { el.textContent = year; });

const themeToggle = document.querySelector(".theme-toggle");
const themeColor = document.querySelector('meta[name="theme-color"]');

function setTheme(theme, persist = false) {
    const isDark = theme === "dark";
    const copy = uiCopy[currentLanguage];
    document.documentElement.dataset.theme = theme;
    themeToggle.setAttribute("aria-pressed", String(isDark));
    themeToggle.setAttribute("aria-label", isDark ? copy.light : copy.dark);
    themeToggle.title = isDark ? copy.light : copy.dark;
    themeColor.setAttribute("content", isDark ? "#0b0c0f" : "#fafafa");
    if (persist) localStorage.setItem("theme", theme);
}

setLanguage(currentLanguage);

themeToggle.addEventListener("click", () => {
    const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    setTheme(nextTheme, true);
});

const portraitButton = document.querySelector(".portrait-link");
const portraitImage = portraitButton.querySelector("img");
const portraitSources = {
    src: portraitImage.getAttribute("src"),
    srcset: portraitImage.getAttribute("srcset"),
    sizes: portraitImage.getAttribute("sizes")
};
let portraitClosingTimer;
let portraitMotion;

function getPortraitGeometry(fromRect, toRect) {
    const fromCenterX = fromRect.left + fromRect.width / 2;
    const fromCenterY = fromRect.top + fromRect.height / 2;
    const toCenterX = toRect.left + toRect.width / 2;
    const toCenterY = toRect.top + toRect.height / 2;
    const scale = Math.max(fromRect.width / toRect.width, fromRect.height / toRect.height);
    const scaledHeight = toRect.height * scale;
    const verticalCrop = Math.max(0, ((scaledHeight - fromRect.height) / 2 / scaledHeight) * 100);
    return {
        transform: `translate(${fromCenterX - toCenterX}px, ${fromCenterY - toCenterY}px) scale(${scale})`,
        clipPath: `inset(${verticalCrop}% 0 ${verticalCrop}% 0 round ${getComputedStyle(document.querySelector(".hero-portrait")).borderRadius})`
    };
}

function openPortrait() {
    clearTimeout(portraitClosingTimer);
    portraitMotion?.cancel();
    const sourceRect = portraitButton.getBoundingClientRect();
    portraitImage.srcset = "";
    portraitImage.src = portraitImage.dataset.original;
    portraitImage.sizes = "90vw";
    portraitButton.classList.add("is-expanded");
    portraitButton.setAttribute("aria-expanded", "true");
    portraitButton.setAttribute("aria-label", uiCopy[currentLanguage].portraitClose);
    document.body.classList.add("portrait-expanded");
    if (reducedMotion) return;
    const centeredRect = portraitImage.getBoundingClientRect();
    const startGeometry = getPortraitGeometry(sourceRect, centeredRect);
    portraitMotion = portraitImage.animate([
        {
            transform: startGeometry.transform,
            clipPath: startGeometry.clipPath,
            borderRadius: getComputedStyle(document.querySelector(".hero-portrait")).borderRadius,
            boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)"
        },
        {
            transform: "translate(0, 0) scale(1, 1)",
            clipPath: "inset(0% 0 0% 0 round var(--radius))",
            borderRadius: getComputedStyle(portraitImage).borderRadius,
            boxShadow: "0 35px 100px rgba(0, 0, 0, 0.48)"
        }
    ], { duration: 560, easing: "cubic-bezier(0.2, 0.8, 0.2, 1)", fill: "both" });
}

function finishClosingPortrait() {
    portraitMotion?.cancel();
    portraitButton.classList.remove("is-expanded", "is-closing");
    portraitButton.setAttribute("aria-expanded", "false");
    portraitButton.setAttribute("aria-label", uiCopy[currentLanguage].portraitOpen);
    document.body.classList.remove("portrait-expanded");
    portraitImage.src = portraitSources.src;
    portraitImage.srcset = portraitSources.srcset;
    portraitImage.sizes = portraitSources.sizes;
    portraitButton.focus({ preventScroll: true });
}

function closePortrait() {
    if (!portraitButton.classList.contains("is-expanded")) return;
    if (reducedMotion) {
        finishClosingPortrait();
        return;
    }
    portraitMotion?.cancel();
    const centeredRect = portraitImage.getBoundingClientRect();
    const destinationRect = document.querySelector(".hero-portrait").getBoundingClientRect();
    const destinationGeometry = getPortraitGeometry(destinationRect, centeredRect);
    portraitButton.classList.add("is-closing");
    portraitMotion = portraitImage.animate([
        {
            transform: "translate(0, 0) scale(1, 1)",
            clipPath: "inset(0% 0 0% 0 round var(--radius))",
            borderRadius: getComputedStyle(portraitImage).borderRadius,
            opacity: 1
        },
        {
            transform: destinationGeometry.transform,
            clipPath: destinationGeometry.clipPath,
            borderRadius: getComputedStyle(document.querySelector(".hero-portrait")).borderRadius,
            opacity: 1
        }
    ], { duration: 480, easing: "cubic-bezier(0.4, 0, 0.2, 1)", fill: "both" });
    portraitClosingTimer = window.setTimeout(finishClosingPortrait, 540);
    portraitMotion.finished.then(() => {
        clearTimeout(portraitClosingTimer);
        finishClosingPortrait();
    }).catch(() => {});
}

portraitButton.addEventListener("click", () => {
    if (portraitButton.classList.contains("is-expanded")) closePortrait();
    else openPortrait();
});

const workMoreButton = document.querySelector(".work-more-toggle");
const additionalWork = document.querySelector(".additional-work");

workMoreButton.addEventListener("click", () => {
    const willExpand = workMoreButton.getAttribute("aria-expanded") !== "true";
    workMoreButton.setAttribute("aria-expanded", String(willExpand));
    additionalWork.hidden = !willExpand;
    const copy = uiCopy[currentLanguage];
    workMoreButton.querySelector("span").textContent = willExpand ? copy.lessWork : copy.moreWork;
    workMoreButton.setAttribute("aria-label", willExpand ? copy.lessWork : copy.moreWork);
});

const communityCard = document.querySelector(".community-card");
const communityModal = document.querySelector(".community-modal");
const communityModalClose = document.querySelector(".community-modal-close");

communityCard.addEventListener("click", () => {
    communityModal.showModal();
    communityModal.querySelector(".community-modal-panel").scrollTop = 0;
});

communityModalClose.addEventListener("click", () => communityModal.close());

communityModal.addEventListener("click", (event) => {
    if (event.target === communityModal) communityModal.close();
});

const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector(".site-nav");

function closeMenu() {
    menuButton.setAttribute("aria-expanded", "false");
    nav.classList.remove("open");
}

function toggleMenu() {
    const open = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!open));
    nav.classList.toggle("open", !open);
}

menuButton.addEventListener("click", toggleMenu);

nav.addEventListener("click", (event) => {
    if (!event.target.closest("a")) return;
    closeMenu();
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 900) closeMenu();
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && portraitButton.classList.contains("is-expanded")) {
        closePortrait();
        return;
    }
    if (event.key === "Escape" && nav.classList.contains("open")) {
        closeMenu();
        menuButton.focus();
    }
});

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const revealElements = document.querySelectorAll(".reveal");

if (!reducedMotion && window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
    const tiltState = { currentX: 0, currentY: 0, targetX: 0, targetY: 0, frame: 0 };

    function animatePortraitTilt() {
        tiltState.currentX += (tiltState.targetX - tiltState.currentX) * 0.14;
        tiltState.currentY += (tiltState.targetY - tiltState.currentY) * 0.14;
        portraitButton.style.setProperty("--tilt-x", `${tiltState.currentX.toFixed(2)}deg`);
        portraitButton.style.setProperty("--tilt-y", `${tiltState.currentY.toFixed(2)}deg`);
        const moving = Math.abs(tiltState.targetX - tiltState.currentX) > 0.02 || Math.abs(tiltState.targetY - tiltState.currentY) > 0.02;
        tiltState.frame = moving ? requestAnimationFrame(animatePortraitTilt) : 0;
    }

    function requestTiltFrame() {
        if (!tiltState.frame) tiltState.frame = requestAnimationFrame(animatePortraitTilt);
    }

    portraitButton.addEventListener("pointermove", (event) => {
        if (portraitButton.classList.contains("is-expanded")) return;
        const bounds = portraitButton.getBoundingClientRect();
        const normalizedX = Math.max(-1, Math.min(1, ((event.clientX - bounds.left) / bounds.width - 0.5) * 2));
        const normalizedY = Math.max(-1, Math.min(1, ((event.clientY - bounds.top) / bounds.height - 0.5) * 2));
        tiltState.targetX = normalizedY * -8;
        tiltState.targetY = normalizedX * 10;
        portraitButton.style.setProperty("--glare-x", `${((normalizedX + 1) / 2 * 100).toFixed(1)}%`);
        portraitButton.style.setProperty("--glare-y", `${((normalizedY + 1) / 2 * 100).toFixed(1)}%`);
        requestTiltFrame();
    });

    portraitButton.addEventListener("pointerleave", () => {
        tiltState.targetX = 0;
        tiltState.targetY = 0;
        portraitButton.style.setProperty("--glare-x", "50%");
        portraitButton.style.setProperty("--glare-y", "50%");
        requestTiltFrame();
    });
}

if (reducedMotion) {
    revealElements.forEach((el) => el.classList.add("in-view"));
} else {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
        });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

    revealElements.forEach((el) => observer.observe(el));
}
