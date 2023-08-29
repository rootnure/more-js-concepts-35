const a = () => {
    console.log('a');
    b();
    console.log('aa');
}
const b = () => {
    console.log('b');
    d();
    console.log('bb');
}
const d = () => {
    console.log('d');
    console.log('dd');
}

const x = () => {
    console.log('x');
    y();
    console.log('xx');
}
const y = () => {
    console.log('y');
    z();
    console.log('yy');
}
const z = () => {
    console.log('z');
    console.log('zz');
}

setTimeout( () => {
    console.log('inside timeout');
}, 2000);

fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))

a();
x();