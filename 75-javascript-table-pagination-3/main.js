const rowrsPerPage = 5;
const rows = document.querySelectorAll('#my-table tbody tr');
const rowsCount = rows.length;
const pageCount = Math.ceil(rowsCount / rowrsPerPage); // 100개의 게시물에서 8로 나누엇을 때 12.9, 0.9값을 출력하기 위해 12페이지가 아닌 13페이지가 필요.
const numbers = document.querySelector('#numbers');

//변수 추가
const prevBtn = document.querySelector('.pagination .prevBtn');
const nextBtn = document.querySelector('.pagination .nextBtn');
let pageActiveIdx = 0; //현재 보고 있는 페에지그룹 번호
let currentPagenum = 0; //현재 보고 있는 페이지네이션 번호
let maxPageNum = 3; //페이지그룹 최대 개수


//페이지네이션 생성
/*
    대상.innerHTML = <li><a href="">1</a></li>
*/

//For Loop
for (let i = 1; i <= pageCount; i++){
    // numbers.innerHTML = '<li><a href="">'+ i +'</a></li>';
    // numbers.innerHTML = numbers.innerHTML + `<li><a href="">${i}</a></li>`;
    numbers.innerHTML += `<li><a href="">${i}</a></li>`;
}

const numberBtn = numbers.querySelectorAll('a');

function hideBtn(){
    // 페이지네이션 번호 감추기.
    for (nb of numberBtn){
        nb.style.display = 'none';
    }
}

numberBtn.forEach( (item, idx) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();

        //table 
        displayRow(idx);
    });
});//numberBtn forEach



function displayRow(idx){
    console.log(idx);
    /* 
        idx 0: 
        100개 목록 
        인덱스번호 0 ~ 4
        slice(시작번호, 끝번호)
        rows.slice(idx, idx+rowrsPerPage -1) >> rows 그대로 slice 불가! (Node LIst이기 떄문)
        >> NodeList htmlcollectio -> array
        Array.from(대상) or [...대상]
    */

    // case 1: 
    // let rowsArray = Array.from(rows);

    //case 2:
    let rowsArray = [...rows];
    let start = idx * rowrsPerPage;
    let end = start + rowrsPerPage;

    //먼저 모든 게시물 Hide
    for ( ra of rowsArray ){
        ra.style.display = 'none';
    }
    //해당 인덱스 게시물 Show
    let newRows = rowsArray.slice(start, end);

    for (nr of newRows){
        nr.style.display = '';
    }
    
    //active
    for (nb of numberBtn){
        nb.classList.remove('active');
    }
    numberBtn[idx].classList.add('active');
    
}//displayRow



//default
const init = numberBtn[0];
init.click();

//페이지네이션 그룹 표시 함수
function displayPage(num){
    //다시 모든 버튼 감추기.
    hideBtn();
    let totalPageCount = Math.ceil(pageCount / maxPageNum);
    let pageArr = [...numberBtn];
    let start = num * maxPageNum;
    let end = start + maxPageNum;

    let pageListArr = pageArr.slice(start, end);

    for (let item of pageListArr){
        item.style.display = 'block';
    }

    if(pageActiveIdx == 0){
        prevBtn.style.display = 'none';
        nextBtn.style.display = 'block';
    }
    else if (pageActiveIdx == totalPageCount-1){
        prevBtn.style.display = 'block';
        nextBtn.style.display = 'none';
    }
    else {
        prevBtn.style.display = 'block';
        nextBtn.style.display = 'block';
    }
}

prevBtn.addEventListener('click', function(e){
    e.preventDefault();
    pageActiveIdx++;
})
displayPage(0)