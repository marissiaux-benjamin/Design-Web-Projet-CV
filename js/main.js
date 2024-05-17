import {settings} from "./settings";

//apparation de la nav principale au scroll
settings.noJs.classList.add('js_enabled');
settings.header.classList.remove('no_js');
settings.monLogoChange.src = settings.whiteLogoSource;
window.addEventListener("scroll", () => {

    if (settings.header.getBoundingClientRect().bottom <= 0) {
        settings.header.classList.add(settings.navAppear);
        settings.monLogoChange.src = settings.blackLogoSource;
    }

    if (settings.header.classList.contains(settings.navAppear)) {
        settings.header.classList.add(settings.navAppeared);
    }

    if (window.scrollY === 0) {
        settings.header.classList.remove(settings.navAppeared);
        settings.header.classList.remove(settings.navAppear);
        settings.monLogoChange.src = settings.whiteLogoSource;
    }

    if (window.innerWidth < settings.windowWidth) {
        settings.header.classList.remove(settings.navAppeared);
        settings.header.classList.remove(settings.navAppear);
        settings.monLogoChange.src = settings.whiteLogoSource;
    }

});

//apparation au défilement

const ratio = 0.1;
const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
}

function handleIntersect(entries, observer) {
    entries.forEach(entry => {
        if (entry.intersectionRatio > ratio) {
            entry.target.classList.add('reveal-visible');
            observer.unobserve(entry.target);
        } else {
        }
    });
}

const observer = new IntersectionObserver(handleIntersect, options);

document.querySelectorAll('[class*="reveal-"]').forEach(revealElement => {
    observer.observe(revealElement);
});


