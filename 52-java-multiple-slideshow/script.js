var slides = document.querySelector('.slides'),
    slide = document.querySelectorAll('.slides li'),
    currentIndex = 0,
    slideCount = slide.length,
    slideWidth = 200,
    slideMargin = 30,
    prevBtn = document.querySelector('.prev'),
    nextBtn = document.querySelector('.next');

makeClone();

function makeClone(){
    for (var i = 0; i < slideCount; i++){
        //a.cloneNode(), a.cloneNode(true)>> 자신 포함 자식까지 클론 복사 true
        var cloneSlide = slide[i].cloneNode(true);
        cloneSlide.classList.add('clone');
        //a.appendClid(b);
        slides.appendChild(cloneSlide);
    }
    for (var i = slideCount-1; i  >= 0 ; i--){
        //a.cloneNode(), a.cloneNode(true)>> 자신 포함 자식까지 클론 복사 true
        var cloneSlide = slide[i].cloneNode(true);
        cloneSlide.classList.add('clone');
        //a.prepend(b);
        slides.prepend(cloneSlide);
    }

    updateWidth();
    setIntialPos();
    setTimeout(function(){
        slides.classList.add('animated');
    }, 100)
}

function updateWidth(){
    var currentSlides = document.querySelectorAll('.slides li');
    var newSlideCount = currentSlides.length;
    var newWidth = (slideWidth + slideMargin ) * newSlideCount - slideMargin + 'px';
    slides.style.width = newWidth;
}

function setIntialPos(){
    var initialTranslateValue = -(slideWidth + slideMargin ) * slideCount;
    slides.style.transform = 'translateX('+initialTranslateValue+'px)';
}


//button
prevBtn.addEventListener('click', function(){
    moveSlide(currentIndex - 1);
})
nextBtn.addEventListener('click', function(){
    moveSlide(currentIndex + 1);
})

function moveSlide(index){
    slides.style.left = -index * (slideWidth + slideMargin ) + 'px';
    currentIndex = index;

    //nextBtn/prevBtn 끝까지 간 이후 currentIndex 0으로 left 0으로 변경하여 중앙에 다시 오도록, 유저는 인식 불가
    if(currentIndex == slideCount || currentIndex == -slideCount){
        setTimeout(function(){
            slides.classList.remove('animated');
            slides.style.left = '0px';
            currentIndex = 0;
        }, 500);
        setTimeout(function(){
            slides.classList.add('animated');
        },600);
    }
}


//javascript 53 - 자동 슬라이드 기능 구현
//clearInterval 
var timer = undefined;
function autoSlide(){
    if(timer == undefined){
        timer = setInterval(function(){
            moveSlide(currentIndex + 1);
        },3000);
    }
}
function stopSlide(){
    clearInterval(timer);
    timer = undefined;
}

autoSlide();

slides.addEventListener('mouseenter', function(){
    stopSlide()
});
slides.addEventListener('mouseleave', function(){
    autoSlide();
});