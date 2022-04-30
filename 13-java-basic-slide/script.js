//변수 지정
var slideWrapper = document.getElementsByClassName("container"),
    slideContainer = document.getElementsByClassName("slider-container"),
    slides = document.getElementsByClassName("slide"),
    slideCount = slides.length,
    currentIndex = 0,
    topHeight = 0,
    navPrev = document.getElementById('prev'),
    navNext = document.getElementById('next');

//슬라이드의 높이 확인하여 부모의 높이로 지정하기
function calculateTallestSlide(){
    /*
        for (시작; 끝값(조건); 증감){...}
    */
    for (var i = 0; i < slideCount; i++ ){
        if(slides[i].offsetHeight > topHeight){
            topHeight = slides[i].offsetHeight;
        }
    }

    slideWrapper[0].style.height = topHeight+"px";
    slideContainer[0].style.height = topHeight+"px";
}

calculateTallestSlide();

//슬라이드가 있으면 가로로 배열하기
/*
    for (시작; 조건; 증감){
        slides[0].style.left = ??? + '%'; 
    }
*/
for (var i = 0; i < slideCount; i++){
    slides[i].style.left = i*(100) + '%'; 
}

//슬라이드 이동 함수
navPrev.addEventListener('click', function(){});
navNext.addEventListener('click', function(){});