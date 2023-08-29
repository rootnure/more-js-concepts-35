console.log(1);
console.log(2);
setTimeout(() => console.log('lazy logged'), 2000);
console.log(4);
console.log(5);
console.log(6);

function doSomething() {
    console.log(3);
}