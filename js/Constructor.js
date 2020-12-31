// 생성자 함수는 첫글자를 대문자로 선언한다.
function User(name,age) {
    // this = {}
    this.name = name;
    this.age = age;
    this.sayName = function(){
        console.log(`My name is ${this.name}.`);
    }
    // return this;
}
// Arrow function 은 constructor 메소드를 가지지 않으므로 생성자 함수로 써 사용될 수 없음

let user1 = new User('Jake',30);
let user2 = new User('Bob',21);

console.log(user1);
console.log(user2);

let user3 = new User('Park',23);
user3.sayName();

function Item(title, price){

    this.title = title;
    this.price = price;
    this.showPrice = function(){
        console.log(`This price is ${price}.`)
    }
}

const item1 = new Item('인형', 3000);
const itme2= Item('가방', 4500); //undefined
console.log(item1,itme2);
item1.showPrice();