
let animateTarget = document.querySelectorAll('.animate__animated');

/*
 윈도우 스크롤 실행시 할 일
    그 스크롤양이 각 animateTarget의 화면상단에서 거리(-400)보다 많다면
        excuted 거짓일 시,
            그 요소의 data-effect 속성명 값을 확인 >> 그 요소의 class명 추가.
            excuted 참으로 변경
*/



window.addEventListener('scroll', function(){
    let offset = this.window.pageYOffset || this.window.scrollY;
    console.log("offset: "+offset);

    animateTarget.forEach(function(item){
        let targetOffset = item.offsetTop - 500 ;
        console.log("target: "+targetOffset);

        if(targetOffset < offset){
            let targetClass = item.getAttribute('data-effect');
            item.classList.add(targetClass);
        }
    });
   
});