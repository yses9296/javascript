/* 
    li 안의 data-lightbox 값을 가져와 lightbox-overlay 안 img src에 넣기 >> 전체 크게 보기
    #lightbox-overlay에 visible class 추가

    (gallery a 태그에 id를 정의를 안하는 이유 >> 로딩이 오래 걸려 효율성 X)
    data- >>사용자 속성 >> 웹 표준
*/

//문서 자체에 클릭하면 발생하는 이벤트 함수
document.addEventListener('click', lightbox);

function lightbox(e){
    var elem = e.target, //클릭한 그 요소가 무엇인지 elem에 저장
        elemId = elem.getAttribute('id'), //클릭한 요소의 id명을 elemId에 저장 >> lightbox-image 이거나 lightbox-overlay 클릭하면 visible 지우기
        lightBox = document.getElementById('lightbox-overlay'),
        lightBoxImg = document.getElementById('lightbox-image'),
        newImg = new Image(); //새로운 이미지 요소 생성

    if(elem.hasAttribute('data-lightbox')){
        e.preventDefault(); //링크의 기본속성(기능)은 막고

        /*
            lightbox-image 빈 이미지 먼저 로드 ** 순서 중요
            (로드하지 않으면 이미지 나오지 X)
        */
        newImg.onload = function(){ //이미지가 로드되면
            lightBoxImg.src = this.src; //새로 생성된 이미지의 src 속성을 lightBoxImg src의 빈 속성에 넣는다.
        }

        newImg.src= elem.getAttribute('data-lightbox'); //data-lightbox의 값을 가져온다
        lightBox.classList.add('visible');
    }

    if(elemId == 'lightbox-overlay' || elemId == 'lightbox-image'){
        lightBox.classList.remove('visible');
    }

}

/*
    var img = new Image(); //img태그 생성
    img.src="myImage.png"; //img src 추가
*/ 