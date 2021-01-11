// 1. Lexical 환경
//  변수 초기화 -> 사용X 
//  함수는 바로 초기화 -> 사용가능
//  변수를 통한 함수표현식은 사용x
let one; // undefined 사용가능
one =1;

function addOne(num) {
    console.log(one + num);
}

addOne(`addOne(5) = ${addOne(5)}`) //내부 Lexical환경
// 내부 -> 외부 -> 전역

// Closure
// 함수와 렉시컬 환경의 조합
// 함수가 생성될 당시의 외부 변수를 기억
// 생성 이후에도 계속 접근가능
function makeAdder(x){
    return function(y){
        return x+y;
    }
}

const add3 = makeAdder(3); // x:3 makeAdder Lexical환경
console.log(`add3(2) = ${add3(2)}`) // y:2 => 5

const add10 = makeAdder(10);
console.log(`add10(4) = ${add10(4)}`) // 14
console.log(`add3(1) = ${add3(1)}`) // 4

function makeCounter() {
    let num = 0;
    // function의 외부변수 -> 은닉화
    return function() {
        return num++;
    }
}

let counter = makeCounter();

console.log(counter());
console.log(counter());
console.log(counter());