/* 
    ecma2016
    const : 절대 변하지 않는 변수
    var : 변하는 변수
*/
const target = document.querySelector('.target');
const links = document.querySelectorAll('.mynav a');
const colors = ['deepskyblue', 'orange', 'black', 'green', 'gold', 'magenta' , 'darkblue'];

//links
links.forEach((item, index) => {
    item.addEventListener('click',function(e){
        e.preventDefault();
    });
    item.addEventListener('mouseover', mouserEnterFunc);
});

function mouserEnterFunc(){
    if(!this.parentNode.classList.contains('active')){
        for (let i = 0; i < links.length; i++){
            //if(links[i].parentNode.classList.contains('active'))
            links[i].parentNode.classList.remove('active');
            links[i].style.opacity = 0.25;
        }
        this.parentNode.classList.add('active');
        this.style.opacity = 1;

        const width = this.getBoundingClientRect().width;
        const height = this.getBoundingClientRect().height;
        const left = this.getBoundingClientRect().left + window.pageXOffset;
        const top = this.getBoundingClientRect().top + window.pageYOffset;
        const colorIndex = Math.floor(Math.random() * links.length);

        console.log("width: " + width + "height: " + height);
        console.log("left: " + left + "top: " + top);


        target.style.width = `${width}px`;
        target.style.height = `${height}px`;
        target.style.top = `${top}px`;
        target.style.left = `${left}px`;
        target.style.borderColor = colors[colorIndex];
        console.log("target active");
    }
};//mouserEnterFunc


function resize(){
    const active = document.querySelector('.mynav ul li.active');
    if(active){
        const left = active.getBoundingClientRect().left + window.pageXOffset;
        const top = active.getBoundingClientRect().top + window.pageYOffset;
        target.style.top = `${top}px`;
        target.style.left = `${left}px`;
    }
}//resize

window.addEventListener('resize', resize);