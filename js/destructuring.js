let dd = ['cat', 'louis', 'lulu', 'dog']

let [dd1, dd2, dd3, dd4] = dd;

console.log(dd1)
console.log(dd2)
console.log(dd3)

let [a,b,c] = [1,2];
console.log(a)
console.log(c)

console.log('Rest Parameters, Spread syntax==============');

showName = (name) => {
    console.log(name);
}

showName('Mike')
showName('Mike','Jane') // Mike
showName() // undefined

// arguments
// 함수로 넘어 온 모든 인수에 접근
// 함수내에서 이용 가능한 지역 변수
// length/ index
// Array 형태의 객체 - 배열의 내장메서드 없음

function showNameWithArg(name) {
    console.log(arguments.length)
    console.log(arguments[0])
    console.log(arguments[1])
}
showNameWithArg('Mike','Jane') 

showNameWithRestParam = (...names) => {
    console.log(names)
}
showNameWithRestParam('Mike','Jane') 

add = (...numbers) => {
    let result = 0
    numbers.forEach((num) => (result+=num));
    console.log(result);
}

add(1,2,3,4,5)
add(1,2,3,4,5,6,7,8,9,10)

function makeUser(name, age, ...skills){
    this.name = name;
    this.age = age;
    this.skills = skills;
}

const makeUser1 = new makeUser('Mike', 33, 'html', 'css')
const makeUser2 = new makeUser('Kim', 17, 'ES6', 'React', 'html')
const makeUser3 = new makeUser('Sergio', 16, 'english')

console.log(makeUser1)
console.log(makeUser2)
console.log(makeUser3)

let arr1= [1,2,3];
let arr2= [4,5,6];

let totalArr = [0, ...arr1, ...arr2, 7,8,9];
console.log(`totalArr = ${totalArr}`)

// 456123
arr1.forEach((num)=> {
    arr2.push(num);
})

console.log(`pushArr = ${arr2}`)

let user = {name:'Park'};
let age = {age:30};
let fe = ['JS','React'];
let lang = ['Korean','English'];

// user = Object.assign({}, user, age, {
//     skills : [],
// })

// fe.forEach(item => {
//     user.skills.push(item);
// })

user = {
    ...user,
    ...age,
    skills:[...fe, ...lang]
}

console.log(user)