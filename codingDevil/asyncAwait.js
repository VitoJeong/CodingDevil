async function getName() {
    // return 'Vito';
    //  = return Promise.resolve('Vito')
    throw new Error('Error,,,,')
}

// console.log(getName());
//Promise {<fulfilled>: "Vito"}
// __proto__: Promise   [[PromiseState]]: "fulfilled"   [[PromiseResult]]: "Vito"

// getName().then((name)=> {
//     console.log(name);
// })
// .catch((err)=> {
//     console.log(err)
// })

const getMessage = (message) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`${message}`)
        }, 2000)
    })
}

async function showMessage(){
    const result = await getMessage('Hello!!');
    console.log(result)
}

console.log('시작');
// showMessage();


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

async function showOrder(){
    try {
        const result1 = await r1();
        const result2 = await r2(result1);
        const result3 = await r3(result2);
        console.log(result3)
    } catch (error) {
        console.log(error)
    } finally {

        console.log('종료')
    }
}

showOrder();