// const add = (a, b) => ( {a + b} );
const add = (a, b) => a + b;
add(3, 5);

function calculator( func, a, b) {
    return func(a,b);
}
calculator(add, 3, 5);

// 함수 선언인지, 함수 호출인지 분명하게 알아둘 것.
// 고차함수에서 리턴 값을 인지. 
// 예) const add = () => (e) => {console.log(e.target)}
// add()를 호출 시 (e) => {console.log(e.target)} 부분이 리턴 부분임으로 함수 실행 성공.