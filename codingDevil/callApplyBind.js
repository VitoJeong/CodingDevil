const tom = {
    name : 'Tom'
}

function showThisName(){
    console.log(this.name);
}

showThisName(); // window 객체
showThisName.call(tom);
// call
// 함수를 호출할때 call을 사용하고 this로 사용할 객체를 지정할 수 있다

function update(birthYear, occupation){
    this.birthYear = birthYear;
    this.occupation = occupation;
    console.log(this)
}
// 두 번째 이후부터의 매개변수는 함수가 처리할 매개변수를 순서대로 정할 수 있다
update.call(tom, 1999, 'singer');

const park = {
    name: 'Park',
}
update.apply(park, [2001, 'teacher']);
// apply
// 함수뒤에 붙여 매개변수를 배열로 전달하여 this와 매개변수를 지정할 수 있다

const nums = [3,6,4,2,8];

const min = Math.min.apply(null, nums);
const max = Math.max.call(null, ...nums);

console.log(min)
console.log(max)

const updateP = update.bind(park);
// bind
// this의 값을 영구히 바꿀 수 있습니다.

updateP(1988, 'police');

const user = {
    name : 'Tommy',
    showName: function (){
        console.log(`hello, ${this.name}`);
    },
};

user.showName();

let fn = user.showName;

fn.call(user);
fn.apply(user);

let boundFn = fn.bind(user);

boundFn();