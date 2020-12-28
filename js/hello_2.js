// for문
for(let i=1;i<11;i++){
    // 1부터 10까지 출력
    console.log(i)
}

// while문

let i=0
while(i<10){
    console.log(i)

    i++;
}

// do..while문
let j=0;
do{
    console.log('j : ' + j)
    j++;
}while(j<10)

// break
// while(true){
//     let answer = confirm('계속 할까요?');
//     if(!answer) break;
// }

for(let i=0;i<10;i++){
    if(i%2){
        continue;
    }
    console.log(i)
}

let fruit = prompt('무슨 과일을 사고 싶나요?');

switch (fruit) {
    case '사과':
        console.log('100원입니다.')
        break;
    case '바나나':
        console.log('200원입니다.')
        break;
    case '키위':
        console.log('300원입니다.')
        break;
    case '멜론':
    case '수박':
        console.log('500원입니다.')
        break;

    default:
        console.log('그런 과일은 없습니다.')
        break;
}