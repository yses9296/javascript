/* 
    tab-content 안의 div 모두 hide, active되어 있는 div는 열어놓기
    링크를 클릭하면 클릭한 요소의 href 속성의 값을 변수 tabTarget에 저장.
    저장된 값에서 #은 삭제.
    tabTarget = tabs-1
    document.getElementById(tabs-1).style.display = 'block';
*/

var targetLink = document.querySelectorAll('.tab-menu a');
var tabContent = document.querySelectorAll('#tab-content > div');

for(var i =0; i < targetLink.length; i++){
    targetLink[i].addEventListener('click', function(e){
        e.preventDefault();

        //클릭한 메뉴의 href 값가져와서 #지우기
        var orgTarget = e.target.getAttribute('href');
        var tabTarget = orgTarget.replace('#','');

        //모든 content 일단 display none
        for (var j = 0; j < tabContent.length; j++){
            tabContent[j].style.display = 'none';
        }

        //클릭한 해당 메뉴 content display block
        document.getElementById(tabTarget).style.display = 'block';

        //
        for ( var x = 0; x < targetLink.length; x++){
            targetLink[x].classList.remove('active');
            e.target.classList.add('active');
        }
    });
};

document.getElementById('tabs-1').style.display = 'block'
/*
var orgTarget = '#tabs-1'; //a.replace('b', 'c');
var tabTarget = orgTarget.replace('#','');
document.getElementById(tabTarget).style.display = 'block';
*/