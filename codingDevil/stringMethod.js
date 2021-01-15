
let desc = `죽는 날까지 하늘을 우러러
한점 부끄럼이 없기를
잎새에 이는 바람에도
나는 괴로와 했다.`
console.log(desc)
console.log(desc.length)

desc = '안녕하세요';
console.log(desc[2]);
desc[3] = '삼';
console.log(desc);

desc = 'Hi guys.'
console.log(desc.toUpperCase())
console.log(desc.toLowerCase())

// 문자열 잘라내는 함수 slice, substring, substr, trim(공백제거)
const CDA = 'a'.codePointAt(0);
console.log(CDA);

let list = [
    '01. ss',
    '02. kmmk-h',
    '03. 2ffd',
    '04. sdfd',
    '05. boix0'
]

let newList = [];

for(let i in list){
    newList.push(list[i].slice(4));
}

console.log(newList)

// 금칙어 : 콜라
//  if(str.indexOf('콜라') > -1)
//  if(str.includes('콜라'))
function hasCola(str){
    if(str.includes('콜라')){
        console.log('금칙어가 있습니다.')
    }else{
        console.log('통과')
    }
}

hasCola('와 사이다가 짱이야!') // -1
hasCola('무슨소리! 콜라가 최고')
hasCola('콜라') // 0