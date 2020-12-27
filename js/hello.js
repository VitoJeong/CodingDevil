const NAME = "VITO";
let age = 17;
let grade; // undefined
let user = null // null -> null 과 undefined는 다르다.
let a = "입니다."

// console.log(NAME);
console.log('1/0 = ' + 1/0);
console.log('NAME/2 = ' + NAME/2);

console.log("나는 " + NAME + ", " + age + "살" + a );

// window객체 prompt 사용 예제
// const PROMPTNAME = window.prompt("이름을 입력하세요.");
// const PROMPTNAME = window.prompt("이름을 입력하세요.", "아무개");
// alert("환영합니다. " + PROMPTNAME + "님!");
// alert(`환영합니다. ${PROMPTNAME}님!`);


// window객체 confirm 사용 예제
// const CHECKADULT = window.confirm("당신은 성인 입니까?"); // boolean
// window.alert(`${CHECKADULT}`)

// const mathScore = prompt("수학점수");
// const engScore = prompt("영어점수");
// // prompt로 입력받은 값 = string타입

// const result = (mathScore + engScore)/2;
// // "8090"/ 2 -> 4045 자동형변환
// console.log(result);


// JavaScript의 기본 형변환 function 
// String() Number() Boolean()
// Number(null) => 0
// Number(undefined) => NaN

// let num = 10;
// // num += 5; // num = num + 5;와 동일
// let result = num++;

// console.log(result);

// 비교연산자
console.log(10 > 5);
console.log(10 == 5);
console.log(10 != 5);

const A = 1;
const B = "1";

console.log("== : " + A == B);
console.log("=== : " + A === B);

// 제어문(if, if else, else)
age = 15;
if(age> 19){
    console.log("환영합니다.");
}else if(age === 19){
    console.log("수능 잘 치세요.");
}else{
    console.log("안녕히 가세요.");
}

console.log("-------------------------------------------");

// 논리연산자 ||(OR), &&(AND), !(NOT)

age = 10;

if(NAME === 'TOM' || age > 19){
    console.log('OR통과');
} else {
    console.log('응 돌아가');
}

if(NAME === 'TOM' && age > 19){
    console.log('AND통과');
} else {
    console.log('응 돌아가');
}

let isAdult = age > 19;

if(!isAdult){
    console.log('돌아가..');
}

const GENDER = 'F';
isAdult = true;

// if(GENDER === 'M' && NAME === 'Mike' || isAdult){
    // AND연산자가 OR연산자보다 우선순위가 높음
if(GENDER === 'M' && (NAME === 'Mike' || isAdult)){
    console.log('통과');
} else {
    console.log('돌아가~')
}