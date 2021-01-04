let n = 'name';
let a = 'age';

const user = {
    [1 + 4] : 5,
    [n] : "ZionT",
    [a] : 29
}

console.log(user)

// const cloneUser = user; 
// -> 참조값만 복사됨

const cloneUser = Object.assign({gender:'male'}, user);
cloneUser.name = 'Crush';
cloneUser[5] = 22;
console.log(cloneUser);
// Object.assign(초기값, 객체) 객체를 복제, 병합해서 반환

const nameUser = {name : 'Mike'}
const info1 = {age : 30}
const info2 = {gender : 'male'}

Object.assign(nameUser, info1, info2)
console.log(nameUser)

console.log(Object.values(nameUser));
// Object.values 객체 value들을 배열로 반환

console.log(Object.entries(nameUser));
// Object.entries 키와 값의 배열을 반환

const arr = [
    ['name', 'Teemo'],
    ['age',14],
    ['gender','male']
];

console.log(Object.fromEntries(arr));
// Object.fromEntries 키와 값의 배열을 객체로

function makeObj(key, val){
    return{
        [key]: val,
    };
}

const obj = makeObj('성별', '남자');
console.log(obj);
