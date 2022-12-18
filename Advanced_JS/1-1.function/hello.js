// const add = (a, b) => ( {a + b} );
const add = (a, b) => a + b;
add(3, 5);

function calculator( func, a, b) {
    return func(a,b);
}
calculator(add, 3, 5);