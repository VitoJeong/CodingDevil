let days = ['mon', 'tue', 'wed', 'thu', 'sat'];
let res = days.splice(1,3, 'sun', 'fri') // n에서 m 까지 요소 대체
console.log(days)
console.log(res) // n에서 m까지 반환

// slice(n,m) n부터 m까지 반환
// concat(arr) 합쳐 새배열 반환

let dd = ['cat', 'louis', 'lulu', 'dog']
// arr는 보통 안 씀
dd.forEach((item, idx, arr) => {
    console.log(`${idx+1}. ${item}`)
})

console.log(dd.indexOf('louis'))
console.log(dd.includes('teemo'))

let arr = [1,2,3,4,5]
let result = arr.find((item) => {
    return item % 2 === 0;
})
console.log(result)
// 첫번째 요소만 반환

result = arr.filter((item) => {
    return item % 2 === 0;
})
console.log(result)
// 모든 요소 반환

let newDD = dd.map((element, index) => {
    return Object.assign({}, element, {
        bool : element.length > 3
    })
})
console.log(newDD)

// join, split
arr = [13,8,5,27]

arr.sort((a,b)=>{
    return a - b;
})

console.log(arr)

// lodash찾아볼것
// for, forof, foreach
result = 0;
arr.forEach((num) => {
    result += num;
})
console.log(result)

resut = arr.reduce((prev, cur)=>{
    console.log(prev)
    return prev + cur;
},100)
console.log(result)

let stockList = [
    {ticker: 'QCOM', MC:176},
    {ticker: 'TSM', MC:553},
    {ticker: 'TSLA', MC:773},
    {ticker: 'NIKE', MC:228},
    {ticker: 'LVMH', MC:260},
    {ticker: 'NVDA', MC:330}
]

result = stockList.reduce((prev, cur)=>{
    if(cur.MC > 280) {
        prev.push(cur.ticker);
    }
    return prev;
},[]);

console.log(result)