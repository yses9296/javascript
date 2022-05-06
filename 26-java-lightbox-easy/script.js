var img = document.querySelectorAll('.gallery img'),
    lightbox = document.querySelector('#lightbox-overlay'),
    lightboxImg = lightbox.querySelector('img');


for (var i = 0; i < img.length; i++){
    img[i].addEventListener('click', function(e){
        e.preventDefault();

        var imgNewSrc = this.getAttribute('data-lightbox');

        //lightboxImg의 src의 값을 큰 이미지의 경로로 지정
        lightboxImg.setAttribute('src', imgNewSrc);

        //클릭시 전체화면 lightbox
        lightbox.classList.add('visible');
    });
}

//lightbox 클릭하면 다시 사라지도록
lightbox.addEventListener('click', function(){
    lightbox.classList.remove('visible');
})