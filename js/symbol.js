const A = Symbol('id');
const B = Symbol('id');

console.log(A === B);
// Symbol 유일한 식별자(유일성보장)
//  -> 객체의 심볼로 만든 키는 반복문,메서드에서는 건너뜀

Symbol.for()
// Symbol.for() 전역심볼 - 하나의 심볼만 보장받을 수 있음
//  -> 키를 통해 같은 Symbol을 공유
const ID1 = Symbol.for('id');
const ID2 = Symbol.for('id');
console.log(ID1 === ID2)

const superman = {
    name : 'Clark',
    age : 33
}
// superman.showName = function(){};
const showName = Symbol('show name');
superman[showName] = function(){
    console.log(this.name);
}

for (let key in superman){
    console.log(`His ${key} is ${superman[key]}.`);
}