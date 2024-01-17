const slider = document.getElementsByClassName('slider')[0]

const viewer_points = slider.getElementsByClassName('point')

const slides = slider.getElementsByClassName('slider-card')
const slides_count = slides.length

let slide_index = 0
let next_slide = 0
let prev_slide = slides.length - 1

function nextCard()
{   
    slides[prev_slide].classList.remove('prev')

    next_slide = slide_index + 1
    if (next_slide === slides_count) next_slide = 0

    slides[slide_index].classList.remove('select')
    slides[slide_index].classList.add('prev')
    prev_slide = slide_index

    slides[next_slide].classList.add('select')

    viewer_points[slide_index].classList.remove('select')
    viewer_points[next_slide].classList.add('select')

    slide_index = next_slide
}

setInterval(nextCard, 8000)