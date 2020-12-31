// hoisting
console.log(name); // undefined
var name = 'Mike';
// var는 선언하기 전에 사용이 가능하다 => hoisting

// TDZ(Temporal Dead Zone)

// console.log(HELLO)
// 호이스팅은 일어나지만 코드를 예측하여 에러를 발생시킨다.
// let과 const는 TDZ의 영항을 받는다. -> 블록스코프이기때문 
const HELLO = '안녕하세요';

let age = 30;
showAge = () => {
    console.log(age);

    let age = 20;
}
// showAge();
// 호이스팅은 스코프단위로 일어난다.

// 변수의 생성과정
// 1. 선언
// 2. 초기화 단계
// 3. 할당 단계
// var는 선언과 초기화가 동시에 이루어진다.
//
// let은 선언과 초기화가 따로 이루어진다.
//
// const 선언 초기화 할당이 모두 동시에 이루어진다.
// const GENDER;
// GENDER = 'male'; 
    // 에러발생 => Uncaught SyntaxError: Missing initializer in const declaration

// var: 함수 스코프(function-scoped)

// let, const : 블록 스코프(block-scoped)
// 함수뿐아니라 if, for/while, try/catch 안에서만 사용가능

const AGE = 30;
if(AGE>19){
    var txt = AGE.toString();
}

console.log(txt);
// const와 let은 if밖에서 사용불가능!