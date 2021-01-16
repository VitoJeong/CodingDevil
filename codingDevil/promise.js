new Promise((resolve, reject) => {
    // 
})

const pr = new Promise((resolve, reject) => {
    setTimeout(()=>{
        // resolve('OK')
        // reject(new Error('error,,,'))
    }, 1500)
});
// state : pending(대기) result : undefined

// resolve => state : fulfilled(이행됨) result : 'OK'
// reject => state : rejected(거부됨) result : error

// pr.then((result) => {
//     console.log(`${result} 이행됨`)
// })
// .catch((err) => {
//     console.log(err)
// })
// .finally(() => {
//     console.log('김홀잉')
// })

const f1 = (callback) => {
    setTimeout(function () {
        console.log('1번 주문완료');
        callback();
    }, 1000);
}

const f2 = (callback) => {
    setTimeout(function () {
        console.log('2번 주문완료');
        callback();
    }, 3000);
}

const f3 = (callback) => {
    setTimeout(function () {
        console.log('3번 주문완료');
        callback();
    }, 2000);
}

// console.log('시작')
// f1(function(){
//     f2(function(){
//         f3(function() {
//                 console.log('끝')
//         })
//     })
// })
// 콜백지옥 6초 소요

const r1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('1번 주문완료')
        }, 1000)
    })
}

const r2 = (message) => {
    console.log(message)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('2번 xxx')
            // resolve('2번 주문완료')
        }, 3000)
    })
}

const r3 = (message) => {
    console.log(message)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('3번 주문완료')
        }, 2000)
    })
}

console.log('--------시작')
// 프로미스 체이닝(Promises chaining)
// r1()
// .then((res) => r2(res))
// .then((res) => r3(res))
// .then((res) => console.log(res))
// .catch(console.log)
// .finally(()=>{
//     console.log('끝')
// })
// 6초걸림

// Promise.all
console.time("Promise all");
Promise.all([r1(),r2(),r3()])
.then((res) => {
    console.log(res)
    console.timeEnd("Promise all");
})
// 하나의 정보라도 누락되면 아예 실패로 처리