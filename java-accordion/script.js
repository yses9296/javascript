var btnCollapse = document.getElementById('btn-collapse'),
    heading = document.getElementsByClassName('panel-heading'),
    question = document.getElementsByClassName('panel-question'),
    answer = document.getElementsByClassName('panel-body');

//제목을 클릭하면 할 일
for (var i = 0; i < heading.length; i++){
    heading[i].addEventListener('click', function(event){
        //question 반복문
        for(var j = 0; j < question.length; j++){
            question[j].classList.remove('active');

            //heading의 부모 question에 active class 추가
            event.target.parentNode.classList.add('active');

            activateBody();
        }
        
    });
};

function activateBody(){
    //panel-body 모두 안 보이도록 answer, display:none;
    for (var i = 0; i < answer.length; i++){
        answer[i].style.display = 'none';
    }

    //panel-question에 active가 있으면, 자식 중 panel-body가 나타나도록
    var activePanel = document.querySelector('.panel-question.active .panel-body');
    activePanel.style.display = 'block';
};

activateBody();

//Collapseall 클릭하면 모든 answer 안 보이도록
btnCollapse.addEventListener('click', function(){
    for (var i = 0; i < answer.length; i++){
        answer[i].style.display = 'none';
    }
});