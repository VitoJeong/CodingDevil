// setTimeout 일정 시간이 지난 후 함수를 실행
setTimeout(function fn3sec(){
    console.log(3)
}, 3000)

function showName(name){
    console.log(name);
}
setTimeout(showName, 2000, 'Mike')
// setInterval 일정시간 간격으로 함수를 반복
const tId = setInterval(showName, 1000, 'Drake')

clearInterval(tId);
// clearTimeout(); 중단
let num = 0;
function showTime(){
    console.log(`안녕하세요. 접속하신지 ${num++}초가 지났습니다.`);
    if(num > 5) clearInterval(tTime);
}

const tTime = setInterval(showTime, 1000)