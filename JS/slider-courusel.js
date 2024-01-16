const slider = document.getElementsByClassName('slider')[0]

const viewer_points = slider.getElementsByClassName('point')

const slides = slider.getElementsByClassName('slider-card')
const slides_count = slides.length

let slide_index = 0
let next_slide = 0

function nextCard()
{   
    next_slide = slide_index + 1
    if (next_slide === slides_count) next_slide = 0

    animate()

    slide_index = next_slide
}

function linear(timeFraction) {
    return timeFraction;
}

function animate({timing, draw, duration})
{
    let start = performance.now();
  
    requestAnimationFrame(function animate(time) {
        // timeFraction изменяется от 0 до 1
        let timeFraction = (time - start) / duration;
        if (timeFraction > 1) timeFraction = 1;
  
        // вычисление текущего состояния анимации
        let progress = timing(timeFraction);
  
        draw(progress); // отрисовать её
  
        if (timeFraction < 1) {
            requestAnimationFrame(animate);
        }
    });
}

setInterval(nextCard, 3000)