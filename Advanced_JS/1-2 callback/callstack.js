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

//실제 콘솔 진행 a  b  c