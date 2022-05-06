var barCollapse = document.getElementById('btn-collapse'),
        panelQuestion = document.querySelectorAll('.panel-question');

for (var i = 0; i < panelQuestion.length; i++){

    panelQuestion[i].addEventListener('click', function(){

        remove();
        this.classList.add('active');

    });

    barCollapse.addEventListener('click', function(){
        remove();
    })
}


//panel-question 클래스 active 제거
function remove(){
    for (var j = 0; j < panelQuestion.length; j++){
        panelQuestion[j].classList.remove('active');
    }
}