const sideNavLinks = document.querySelectorAll('.side-bar-link');
const currentPath = location.href;
const sideNavLength = sideNavLinks.length;

const openMenuButton = document.getElementById('menuOpenNavButton');
const closeMenuButton = document.getElementById('menuCloseNavButton');
const menuSection = document.getElementById('menuNavSection');

const toggleSideBarButton = document.getElementById('toggleSideBarButton');
const toggleOtherLinksButton = document.getElementById('toggleOtherLinksButton');

const sideBarSection = document.getElementById('sideBar');
const otherLinksSection = document.getElementById('otherLinks');

toggleSideBarButton.addEventListener('click', () => {
    if (otherLinksSection.classList.contains('hide-sections')) {
        sideBarSection.classList.toggle('hide-sections')
        sideBarSection.classList.toggle('show-sections')
    }
    else if (!otherLinksSection.classList.contains('hide-sections')) {
        otherLinksSection.classList.remove('show-sections')
        otherLinksSection.classList.add('hide-sections')
        sideBarSection.classList.remove('hide-sections')
        sideBarSection.classList.add('show-sections')
    }
})

toggleOtherLinksButton.addEventListener('click', () => {
    if (sideBarSection.classList.contains('hide-sections')) {
        otherLinksSection.classList.toggle('hide-sections')
        otherLinksSection.classList.toggle('show-sections')
    }
    else if (!sideBarSection.classList.contains('hide-sections')) {
        sideBarSection.classList.remove('show-sections')
        sideBarSection.classList.add('hide-sections')
        otherLinksSection.classList.remove('hide-sections')
        otherLinksSection.classList.add('show-sections')

    }
})


openMenuButton.addEventListener('click', () => {
    menuSection.classList.remove('hide')
})

closeMenuButton.addEventListener('click', () => {
    menuSection.classList.add('hide')
})




for (let i = 0; i < sideNavLength; i++) {
    if (sideNavLinks[i].href == currentPath) {
        sideNavLinks[i].classList.add('side-bar-active');
    }
}


