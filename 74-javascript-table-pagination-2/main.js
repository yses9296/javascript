const rowrsPerPage = 5;
const rows = document.querySelectorAll('#my-table tbody tr');
const rowsCount = rows.length;
const pageCount = Math.ceil(rowsCount / rowrsPerPage); // 100개의 게시물에서 8로 나누엇을 때 12.9, 0.9값을 출력하기 위해 12페이지가 아닌 13페이지가 필요.
const numbers = document.querySelector('#numbers');

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
numberBtn.forEach( (item, idx) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();

        //active
        for (nb of numberBtn){
            nb.classList.remove('active');
        }
        e.target.classList.add('active');

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
    
}//displayRow



//default
const init = numberBtn[0];
init.click();