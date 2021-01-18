// Generator
// 함수의 실행을 중간에 멈췄다가 재개할 수 있는 기능

// iterable
// Symbol.iterator() 메서드가 있다.
// Symbol.iterator는 iterator를 반환해야 한다.

// iterator
// next() 를 가진다.
// next()는 value와 done속성을 가진 객체를 반환한다.
// 모든 작업이 끝나면 done은 true가 된다.
const arr = [1,2,3,4,5];
// 배열은 Symbol.iterator를 가지고 있다.
const it = arr[Symbol.iterator]();

function* fn() {
    yield 4;
    yield 5;
    yield 6;
}

const a = fn();

console.log(a[Symbol.iterator]() === a); // true
for(let num of a){
    console.log(num);
}

function* sayHello(){
    const hi1 = yield "Hey~";
    console.log(hi1);
    
    const hi2 = yield "Sexy";
    console.log(hi2);

    return hi1 + hi2;

}

const b = sayHello();

function* gen1(){
    yield "w";
    yield "o";
    yield "r";
    yield "l";
    yield "d";
}

function* gen2(){
    yield "Hello,";
    yield* gen1();
    yield "!";
}