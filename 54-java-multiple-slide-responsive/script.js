var slides = document.querySelector('.slides'),
    slide = document.querySelectorAll('.slides li'),
    currentIndex = 0,
    slideCount = slide.length,
    slideWidth = 200,
    slideMargin = 30,
    moveAmt = slideWidth + slideMargin,
    maxSlides = 3,
    responsiveMargin = 20,
    prevBtn = document.querySelector('.prev'),
    nextBtn = document.querySelector('.next');

for (var i = 0; i < slideCount; i++){
    var cloneSlide = slide[i].cloneNode(true);
    cloneSlide.classList.add('clone');
    slides.appendChild(cloneSlide);
}
for (var i = slideCount-1; i  >= 0 ; i--){
    var cloneSlide = slide[i].cloneNode(true);
    cloneSlide.classList.add('clone');
    slides.prepend(cloneSlide);
}

//54-가로배열하기
function slideLayout(){
    var newslide = document.querySelectorAll('.slides li');
    newslide.forEach(function(item, index){
        item.style.left = moveAmt*index + 'px';
    })
}
//54-중앙 배치하기
function setSlide(){
    var ulMoveAmt = -slideCount * moveAmt + 'px';
    slides.style.transform = 'translateX(' + ulMoveAmt + ')';
    slides.classList.add('animated');
}
//54
slideLayout();
setSlide();

//button
prevBtn.addEventListener('click', function(){
    moveSlide(currentIndex - 1);
});
nextBtn.addEventListener('click', function(){
    moveSlide(currentIndex + 1);
});

function moveSlide(index){
    // slides.style.left = -index * (slideWidth + slideMargin ) + 'px';
    //currentIndex = index;
    slides.style.left = -index * moveAmt + 'px';
    currentIndex = index;
    
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

//반응형 슬라이드

window.addEventListener('resize', function(){
    var currentWidth = this.document.querySelector('body').offsetWidth;
    if(currentWidth < 700){
        var slidesWidth = slides.offsetWidth;
        var newSlideWidth = (slideWidth - (responsiveMargin * maxSlides-1))/3;
        moveAmt = responsiveMargin + newSlideWidth;

        var newslide = document.querySelectorAll('.slides li');
        newslide.forEach(function(item, index){
            item.style.width = newSlideWidth + 'px';
        })
    }
    else{
        newSlideWidth = slideWidth;
        newslide.forEach(function(item, index){
            item.style.width = newSlideWidth + 'px';
        })
    }
    slideLayout();
    setSlide();
})