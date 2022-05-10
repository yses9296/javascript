var $menu1 = document.querySelectorAll('.menu1 li');
var $menu2 = document.querySelectorAll('.menu2 li');
var $menu3 = document.querySelectorAll('.menu3 li');
var $menu4 = document.querySelectorAll('.menu4 li');
//반복문을 이용하여 리스트의 색상을 blue로 변경한다.

// for 
for (var i = 0; i < $menu1.length; i++){
    $menu1[i].style.color = 'blue';
    $menu1[i].addEventListener('mouseover',function(){
        this.style.color = 'red';
    });
    $menu1[i].addEventListener('mouseout',function(){
        this.style.color = 'blue';
    });
}

// forEach
$menu2.forEach( function(item,index){
    $menu2[index].style.color = 'red';
    item.addEventListener('mouseover', function(){
        this.style.color = 'blue';
    })
    item.addEventListener('mouseout', function(){
        this.style.color = 'red';
    })
});

//for in(객체), for of
for (const item of $menu3) {
    item.style.color = 'green';
    item.addEventListener('mouseover', function(){
        this.style.color = 'yellow';
    })
    item.addEventListener('mouseout', function(){
        this.style.color = 'green';
    })
}

//do / while
var j = 0;
do{
    $menu4[j].style.color = 'yellow';
    $menu4[j].addEventListener('mouseover',function(){
        this.style.color = 'green';
    });
    $menu4[j].addEventListener('mouseout',function(){
        this.style.color = 'yellow';
    });

    j++;
}
while(j < $menu4.length)