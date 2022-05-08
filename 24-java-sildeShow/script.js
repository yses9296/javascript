//문서의 내용이 모두 로드되면 할 일 >> index.html head 부분에 script 넣기 
//대상.addEventListener('', 할 일);
//DOMContentLoaded

document.addEventListener('DOMContentLoaded', function(){


    //변수 지정
    /*
        클래스명 container 변수명 $sliderWrap
        클래스명 slider-container 변수명 $sliderContainer
        클래스명 slide 변수명 $slide
        이전 버튼 변수명 navPrev
        다음 버튼 변수명 navNext
    */

    var sliderWrap = document.querySelector('.container'),
        sliderContainer = document.querySelector('.slider-container'),
        slide = document.querySelectorAll('.slide'),
        navPrev = document.getElementById('prev'),
        navNext = document.getElementById('next'),
        sildeHeight = 0,
        currentIndex = 0;

    //슬라이드의 높이 확인하여 부모의 높이로 지정하기 - 대상.offsetHeight
    for (var i = 0; i < slide.length; i++){

        if(sildeHeight < slide[i].offsetHeight){
            sildeHeight = slide[i].offsetHeight;
        }
        sliderWrap.style.height = sildeHeight+ 'px';
        sliderContainer.style.height = sildeHeight+ 'px';

    //슬라이드가 있으면 가로로 배열하기
        slide[i].style.left = (100 * i) + '%';
    }

    //슬라이드 이동 함수


    //버튼 기능 업데이트 함수
    function goToSlide(idx){
        sliderContainer.style.left = -100 * idx + '%';
        sliderContainer.classList.add('animated');
        currentIndex = idx;
    }

    //버튼을 클릭하면 슬라이드 이동시키기
    navPrev.addEventListener('click', function(){
        //goToSlide(currentIndex - 1);
        if(currentIndex == 0){
            // navPrev.classList.add('disabled');
            goToSlide(slide.length - 1);
        }
        else{
            // navPrev.classList.remove('disabled');
            goToSlide(currentIndex - 1);
        }
    });
    navNext.addEventListener('click', function(){
        //goToSlide(currentIndex + 1);
        if(currentIndex == slide.length-1){
            // navNext.classList.add('disabled');
            goToSlide(0);
        }
        else{
            // navNext.classList.remove('disabled');
            goToSlide(currentIndex + 1);
        }
    });


    //자동 슬라이드 

});
//DOMContentLoaded
