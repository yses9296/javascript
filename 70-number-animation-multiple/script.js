let progessWrap = document.querySelectorAll('.progress_wrap');

progessWrap.forEach(item =>{
    numAnimation(item);
});

function numAnimation(item){
    let initalRate = 0;
    let targetRate = item.getAttribute('data-num'); //progress_wrap 의 data-num
    let progressBar = item.querySelector('.bar');   //progress_wrap 안 .bar
    let progressRate = item.querySelector('span');  //progress_wrap 안 span
    
    let numAnim = setInterval(function(){

        initalRate++;
        if(initalRate == targetRate){
            clearInterval(numAnim);
        }
        progressBar.style.width = initalRate+"%";
        progressRate.innerText = initalRate+"%";
    
    }, 20);

}//numAnimation


