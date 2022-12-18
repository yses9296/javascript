const x = 'x';

function c(){
    const y = 'y';
    console.log('This is function C')
}
function a(){
    const x = 'x';
    console.log('This is function A');

    function b(){
        const z = 'z';
        console.log('This is function B');
        c();
    }

    b();
}

a();

// 콘솔 출력 순서 a  b  c
// 스택 구조 (FILO 선입후출)
// 큐 구조 (FIFO 선입선출)