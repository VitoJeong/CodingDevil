// function

function showError(){
    window.alert('aaaaa')
}

// showError()

function sayHello(name){
    let msg = `Hello`;
    if(name){
        msg += `, ${name}`;
    }
    console.log(msg);
}

sayHello('Imas');
sayHello();
sayHello('Bebe');

// 전역변수 지역변수
let msg = 'Welcome';
console.log(msg);

function hello(name){
    let msg = 'Hello'

    console.log(msg + ' ' + name);
}

hello('Mike');
console.log(msg)

// -> 공통으로 사용하거나 재사용이 잦은 경우가 아닌경우 지역변수를 사용
let name = 'Tommy';

// function sayHi(name){
    //     let newName = name || 'friend';
    //     let msg = `Hello, ${newName}`;
//     console.log(msg)
// }
function sayHi(name = `friend`){
    let msg = `Hello, ${name}`;
    console.log(msg)
}
sayHi();
sayHi('Jane');

function add(num1, num2){
    return num1 + num2;
}
const result = add(2,3);
console.log(result);

function showAlert(){
    alert('에러가 발생했습니다.');
    return;
    alert('이 코드는 절대 실행되지 않습니다.');
}

const res = showAlert();
console.log(res);