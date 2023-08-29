console.log(1);
console.log(2);
// setInterval will call function (1st parameter) after given time (2nd parameter in millisecond) until it stops forcefully or using clearInterval
const intervalId = setInterval( () => {
    console.log(3);
}, 900);
// setTimeout will call function (1st parameter) one time after given time (2nd parameter in millisecond)
setTimeout( () => {
    console.log(4);
    clearInterval(intervalId);
}, 5000);

console.log(5);
console.log(6);