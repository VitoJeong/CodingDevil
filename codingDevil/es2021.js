const str1= "Hello World";
console.log(str1.replaceAll("l", "~"))
// 첫번째인수에 해당하는 모든 문자를 두번째 인수의 문자로 대치

const resPromise = new Promise((res, rej) => {
    setTimeout(() => {
        res("따상상")
    }, 2000);
})

const rejPromise = new Promise((res, rej) => {
    setTimeout(() => {
        rej("떡락")
    }, 1000);
})
// 가장 먼저 완료된 결과값 반환
Promise.race([rejPromise, resPromise])
    .then(() => console.log("성공"))
    .catch(e => console.log(e))

// 가장 먼저 이행된 결과값 반환
Promise.any([rejPromise, resPromise])
    .then(() => console.log("성공"))
    .catch(e => console.log(e))

let num = 0;

let a = num || 3;// a = 3
// 0이거나 null undefined일경우 뒤의 값을 사용
let b = num ?? 3; // b = 0 
// null 이나 undefined일 경우 뒤의 값을 사용

let billion = 1_000_000_000

// const weakUser = new werkRef(Object);
// 가비지컬렉터를 응용한 약한 참조 -> 신중하게 사용해야함