// arrow function
let add=(num1, num2) => {
    // return num1+num2;
    return num1+num2;
}

let showError = () => {
    console.log('error')
}
showError();

const sayHello = (name) => {
    const msg = `Hello, ${name}`;
    console.log(msg);
}

const sum = (num1,num2) => num1 + num2;

console.log(sum(33,22))