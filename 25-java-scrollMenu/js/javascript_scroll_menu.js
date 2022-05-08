document.addEventListener('DOMContentLoaded', function(){
    var menu = document.querySelectorAll('.container ul li'),
        section = document.querySelectorAll('#contents > section'),
        lastPosition = 0;


    for (var i = 0; i < menu.length; i++){
        menu[i].addEventListener('click', function(e){
            e.preventDefault();

            var idx = this.getAttribute('data-num');
            var target = section[idx].offsetTop;

            // window.scroll(0, target);  //해당위치로 이동. 절대값
            // window.scrollTo(0,target); //해당위치로 이동. 절대값
            // window.scrollBy(x, -50);   //현재 위치에서 50뺀 위치로 이동. 상대값
            // 대상.scrollIntoView();     //대상위치로 이동
            
            section[idx].scrollIntoView({
                behavior: 'smooth'
            })

            // var scrollInterval = setInterval(function(){
            //     if(target - window.pageYOffset > 50 || window.pageYOffset - tt > 50){
            //         if(target > lastPosition){
            //             window.scrollBy(0, 55);
            //         }
            //         else{
            //             window.scrollBy(0, -55);
            //         }
            //     }
            //     else{
            //         clearInterval(scrollInterval);
            //         window.scrollTo(0, target);
            //         lastPosition = target;
            //     }
            // }, 15);
        })
    }

    window.addEventListener('scroll', function(){
        var scrollTop =  this.scrollY || this.scrollTop;

        for(var i = 0; i < section.length; i++){
            if(section[i].offsetTop < scrollTop){
                var idx = section[i].getAttribute('data-num');
                for (var j = 0; j < menu.length; j++){
                    menu[j].classList.remove('on');
                }
                menu[idx].classList.add('on');                
            }
        }
    })
    

}); //DOMContentLoaded