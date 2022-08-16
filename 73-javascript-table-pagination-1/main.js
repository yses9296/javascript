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
        for (nb of numberBtn){
            nb.classList.remove('active');
        }
        e.target.classList.add('active');
    });
})