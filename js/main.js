import {settings} from "./settings";

settings.noJs.classList.add('js_enabled');
settings.header.classList.remove('no_js');
settings.monLogoChange.src = settings.whiteLogoSource;
window.addEventListener("scroll", e => {

    if (settings.header.getBoundingClientRect().bottom <= 0) {
        settings.header.classList.add(settings.navAppear);
        settings.monLogoChange.src = settings.blackLogoSource;
    }

    if (settings.header.classList.contains(settings.navAppear)) {
        settings.header.classList.add(settings.navAppeared);
    }

    if (window.scrollY === 0){
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

