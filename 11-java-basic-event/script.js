/*
var btn = document.getElementById('submit'),
    container = document.querySelector('.container'),
    paragraph = document.getElementsByTagName('p');
    

btn.addEventListener('click', function(e){
    e.preventDefault();
    paragraph[0].style.color = 'blue';
    console.log('버튼이 클릭되었습니다.');
});

container.addEventListener('mouseenter', function(){
    console.log('마우스 들어옴');
});
container.addEventListener('mouseleave', function(){
    console.log('마우스 나감');
});

window.addEventListener('keydown', function(event){
    console.log(event.key);
    console.log(event.keyCode);
});
*/

var btt = document.getElementById('back-to-top'),
    docElem = document.documentElement,
    offset,
    scrollPos,
    docHeight;

//문서 높이 계산
// docHeight = docElem.scrollHeight;
// docHeight = docElem.offsetHeight;
docHeight = Math.max(docElem.offsetHeight, docElem.scrollHeight);
// scrollPos = docElem.scrollTop;

if (docHeight != 'undefined'){
    docHeight = Math.max(docElem.offsetHeight, docElem.scrollHeight);
    offset = docHeight / 6;
}

//스크롤 이벤트
window.addEventListener("scroll",function(){
    
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop || window.scrollY; //호환성 
    console.log("scrollTop: "+scrollTop);
    console.log("offset: "+offset);
    document.querySelector(".pageOffset span").innerText = parseInt(scrollTop);
    

    scrollPos = docElem.scrollTop;
    console.log(scrollPos);

    btt.className = (scrollPos > offset) ? 'visible' : ''; //if 문 축약버전
    /*
    (scrollPos > offset) ? 'visible' : '';
    
    if(scrollTop > offset){
        btt.classList.add('visible');
    }
    else{
        btt.classList.remove('visible');
    } */

    /*
        - .className : 기존의 class명을 새로운 값으로 교체, 없을 시 새로운 값 지정
        - .classList.add('className') : class 명 추가
    */

});



btt.addEventListener('click', function(event){
    event.preventDefault();//링크의 본연의 기능을 막는다.
    // docElem.scrollTop = 0;
    scrollToTop();

});

function scrollToTop(){
    //일정 시간마다 할 일
    //var scrollInterval = setInterval (할 일, 시간);
    //0.0015s = 15
    //function(){ ... }
    //실제로 할 일 윈도우 스크롤이 0이 아닐 때 window.scrollBy(0,-55);
    //스크롤이 0일 때 setInterval 멈춰라. clearInterval(scrollInterval);

    var scrollInterval = setInterval(function(){
        if(scrollPos != 0){
            window.scrollBy(0,-30);
        }
        else{
            clearInterval(scrollInterval);
        }

    },15);
}