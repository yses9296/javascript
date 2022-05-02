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
function goToSlide(idx){
    slideContainer[0].style.left = idx*(-100)+"%";
    slideContainer[0].classList.add('animated');
    currentIndex = idx;

    // updateNav();

}

//버튼 기능 업데이트 함수
function updateNav(){
    if(currentIndex == 0){
        navPrev.classList.add('disabled');
    }
    else{
        navPrev.classList.remove('disabled');
    }

    if(currentIndex == slideCount-1){
        navNext.classList.add('disabled');
    }
    else{
        navNext.classList.remove('disabled');
    }
}

//버튼을 클릭하면 슬라이드 이동시키기
navPrev.addEventListener('click', function(e){
    e.preventDefault();
    // goToSlide(currentIndex -1);
    //처음이 아니라면, 이전으로 이동.. >> goToSlide(currentIndex -1);
    //처음이라면 >> goToSlide(????);

    if(currentIndex > 0){
        goToSlide(currentIndex -1);
    }
    else{
        goToSlide(slideCount-1);
    }
});
navNext.addEventListener('click', function(e){
    e.preventDefault();
    // goToSlide(currentIndex + 1);
    if(currentIndex < slideCount-1){
        goToSlide(currentIndex +1);
    }
    else{
        goToSlide(0);
    }
});

//첫 번째 슬라이드 먼저 보이도록 하기
goToSlide(0);