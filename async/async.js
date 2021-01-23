// async & await

// 1. async
async function fetchUser() {

    // async 함수 블럭 안의 코드들이 자동으로 Promise로 변환됨
    return 'vito';
}

const user = fetchUser();
user.then(console.log)
console.log(user) //Promise {<fulfilled>: "vito"}

// 2. await
function delay(ms) {
    return new Promise(res => setTimeout(res, ms))
}

async function getApple(param) {
    await delay(1500)
    if(param<100) throw 'error!!!';
    return '🍎'
} // 2초후 Promise를 반환

async function getBanana() {
    await delay(1499)
    return '🍌'
}

function pickFruits() {
    return getApple()
    .then(apple => {
        return getBanana()
        .then(banana => `${apple} + ${banana}`)
    })
}

// pickFruits().then(console.log)

async function pickFruitsWithAsync(param) {
    const applePromise = getApple(param);
    const bananaPromise = getBanana();

    let apple = await applePromise;
    let banana = await bananaPromise;
    return `${apple} + ${banana}`;
}

pickFruitsWithAsync(222).then(console.log)

function pickAllFruits() {
    return Promise.all([getApple(122), getBanana()]).then(fruit => fruit.join(' + '))
}

pickAllFruits().then(console.log)

function pickOne() {
    return Promise.race([getApple(), getBanana()])
}

pickOne().then(console.log)


function loginUser(id, pwd) {
    setTimeout(() => {
        if(
            (id === 'vito' && pwd === '0121') ||
            (id === 'apple' && pwd === 'iphone')
        ) {
            return id;
        } else {
            throw 'not found'
        }
    }, 1000);
}

function getprivilege(user) {
    setTimeout(() => {
        if(user === 'vito') {
            return {name: user, role: 'admin'};
        } else {
            throw 'no access'
        }
    }, 500);
    
}

const id = prompt('Enter your ID:)');
const pwd = prompt('Enter your password.');
async function login(id,pwd) {
    const result = await loginUser(id,pwd).then(user => getprivilege(user))

    return result;
}

login(id, pwd).then(console.log).catch(console.log);