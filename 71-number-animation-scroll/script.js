
document.querySelector('h2').innerHTML = '<a href="#">New Link</a>';

let progessWrap = document.querySelector('.progress_wrap'),
    trrigerPoint = progessWrap.offsetTop - 400,
    progressBar = progessWrap.querySelector('.bar'),
    progressRate = progessWrap.querySelector('span'),
    targetRate = parseInt(progessWrap.getAttribute('data-num')),
    initalRate = 0,
    numAnimation = null,
    executed = false;

//스크롤
window.addEventListener('scroll', function(){
    let scrollAmt = this.scrollY;

    if(scrollAmt > trrigerPoint){
        if(!executed){
            startNumberAnimation();
            executed = true;
        }
        
    }
    
});

/*
function startNumberAnimation(){
    if(numAnimation == null){
        numAnimation = setInterval(function(){

            initalRate++;
            if(initalRate == targetRate){
                clearInterval(numAnimation);
            }
            progressBar.style.width = `${initalRate}%`;
            progressRate.innerText = `${initalRate}%`;
        
        }, 20);
    }
}
*/
function startNumberAnimation(){
    let numAnimation2 = setInterval(function(){

        initalRate++;
        if(initalRate == targetRate){
            clearInterval(numAnimation2);
        }
        progressBar.style.width = `${initalRate}%`;
        progressRate.innerText = `${initalRate}%`;
    
    }, 20);
}



