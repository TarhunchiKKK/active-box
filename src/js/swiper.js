let slides = document.getElementsByClassName('swiper-slide')
let dots = document.getElementsByClassName('swiper-pagination-item')
let currentSlide = slides.length - 1

function hideSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none'
    }
}

function hideDots() {
    for (let i = 0; i < dots.length; i++) {
        dots[i].style.backgroundColor = '#fff'
    }
}

function nextSlide() {
    if (currentSlide === slides.length - 1) {
        currentSlide = 0
    }
    else {
        currentSlide = currentSlide + 1
    }
    setCurrentSlide(currentSlide)
}

function setCurrentSlide(n) {
    hideSlides()
    hideDots()
    slides[n].style.display = 'flex'
    dots[n].style.backgroundColor = '#7E5D6F'

    console.log(slides[n].style.height)
}

function startAnimation() {
    nextSlide()
    setTimeout(() => {
        startAnimation()
    }, 4000)
}

startAnimation()

// setCurrentSlide(2)