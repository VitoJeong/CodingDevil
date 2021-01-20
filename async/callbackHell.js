// JavaScript is synchronous.
// Execute the code block by order after hoisting.

// Synchronous callback
function printImmediately(print) {
    print();
}
// 함수선언식은 가장 위에서 선언됨(hoisting)

printImmediately(() => console.log('hello'));

// Asynchronous callback
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}

printWithDelay(() => console.log('async callback'), 1200);

//////////////////////// Callback Hell
class UserStorage {

    loginUser(id, pwd, onSuccess, onError) {
        setTimeout(() => {
            if(
                (id === 'vito' && pwd === '0121') ||
                (id === 'apple' && pwd === 'iphone')
            ) {
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if(user === 'vito') {
                onSuccess({name: user, role: 'admin'});
            } else {
                onError(new Error('no access'));
            }
        }, 1000);
    }
}

const userStorage = new UserStorage();
const id = prompt('Enter your ID:)');
const pwd = prompt('Enter your password.');

console.time('callback');
userStorage.loginUser(
    id, 
    pwd, 
    user => {
        userStorage.getRoles(user, 
            userWithRole => {
                console.timeEnd('callback')
                alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role!`);
            },
            error => {
                console.log(error);
                console.timeEnd('callback')
            }
            )
        },
        error => {
            console.log(error);
            console.timeEnd('callback')
    }
)