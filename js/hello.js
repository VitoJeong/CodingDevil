const NAME = "VITO";
let age = "27";
let grade; // undefined
let user = null // null -> null 과 undefined는 다르다.
let a = "입니다."

console.log(NAME);
console.log('1/0 = ' + 1/0);
console.log('NAME/2 = ' + NAME/2);

console.log("나는 " + NAME + ", " + age + "살" + a );

// const PROMPTNAME = window.prompt("이름을 입력하세요.");
// const PROMPTNAME = window.prompt("이름을 입력하세요.", "아무개");
const CHECKADULT = window.confirm("당신은 성인 입니까?"); // boolean
// alert("환영합니다. " + PROMPTNAME + "님!");
// alert(`환영합니다. ${PROMPTNAME}님!`);
window.alert(`${CHECKADULT}`)