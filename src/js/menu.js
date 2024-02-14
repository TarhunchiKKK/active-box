let navigationList = document.getElementsByClassName('navigation-list')[0]
let headerContentWrapper = document.getElementsByClassName('header-content-wrapper')[0]
let menu = document.getElementsByClassName('menu')[0]
let [menuIcon, crossIcon] = document.querySelectorAll('.menu img')


let isMenuOpen = false

function toggleMenu() {
    console.log('Toggle')
    if (isMenuOpen) {
        menuIcon.style.display = 'inline-block'
        crossIcon.style.display = 'none'
        headerContentWrapper.classList.toggle('opacity-full')
        navigationList.classList.toggle('active-navigation-list')
    }
    else {
        menuIcon.style.display = 'none'
        crossIcon.style.display = 'inline-block'
        headerContentWrapper.classList.toggle('opacity-full')
        navigationList.classList.toggle('active-navigation-list')
    }
    isMenuOpen = !isMenuOpen
}