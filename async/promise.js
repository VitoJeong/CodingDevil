// Promise 비동기연산을 위한 내장 Object
// State : pending -> fulfilled or rejected
// Producer and Consumer

// Producer
// promise 생성시, 자동적으로 executor 실행
const promise = new Promise((resolve, reject) => {
    // heavy work (network, read files)
    console.log('doing something...')
    setTimeout(() => {
        resolve('vito')
        // reject(new Error('통신불량~김홀잉이쥬?'))
    }, 1500);
})

// Consumer : then, catch, finally
promise
    .then((value) => {
        console.log(value)
    })
    .catch((error) => {
        console.log(error)
    })
    .finally(() => {
        console.log('Sexy async!')
    })

// Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(11)
    }, 1111);
})

fetchNumber
    .then(num => num*2)
    .then(num => num*2)
    .then(num => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(num - 1)
            }, 1000)
        })
    })
    .then(num => console.log(num))

// Error Handling
const getHen = () => 
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`🐓`)
        }, 1000);
    })
const getEgg = hen => 
    new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve(`${hen} => 🥚`)
            reject(new Error(`error! ${hen} => 🥚`))
        }, 1000);
    })
const getBirth = egg => 
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`${egg} => 🐣`)
        }, 1200);
    })

getHen()
    .then(getEgg)
    .catch(error => {
        return '🤍'
    })
    .then(getBirth)
    .then(console.log)
    .catch(console.log)
// 하나의 파라미터를 그대로 넘긴다면 생략가능

// const name = window.prompt(`당신의 나이를 입력해주세요.`)