let slides = document.querySelector(".slides");
let slideArr = document.querySelectorAll(".slide");
let left_btn = document.querySelector('.fa-arrow-left');
let right_btn = document.querySelector('.fa-arrow-right');
let active_slider = document.querySelectorAll('.active_slider input');
let index = 0;
let interval;
let touchStart = 0;
let touchEnd = 0;

function slideShow(index){
    slides.style.transform = `translateX(-${index*100}vw)`;
    active_slider.forEach((slider, i) => {
        if(i == index){
            slider.checked = true;
        }else{
            slider.checked = false;
        }
    })
}

function resetInterval(){
    clearInterval(interval);
    interval = setInterval(() => {
        nextSlide();
    }, 10000);
}

function nextSlide(){
    index = (index+1) % slideArr.length;
    slideShow(index);
}

function prevSlide(){
    index = (index - 1 + slideArr.length) % slideArr.length;
    slideShow(index);
}

right_btn.addEventListener("click", function(){
    nextSlide();
    resetInterval();
})

left_btn.addEventListener("click", function(e){
    prevSlide();
    resetInterval();
})

interval = setInterval(() => {
    nextSlide();
}, 10000);

//touch events started here
slides.addEventListener('touchstart', function(e){
    touchStart = e.changedTouches[0].screenX;
})

slides.addEventListener('touchend', function(e){
    touchEnd = e.changedTouches[0].screenX;

    if(touchStart > touchEnd){
        nextSlide();
        resetInterval();
    }else if(touchEnd > touchStart){
        prevSlide();
        resetInterval();
    }
})

//active slider started here
active_slider.forEach((slider, i) => {
    slider.addEventListener('change', function(){
        slideShow(i);
        index = i;
        resetInterval();
    })
})