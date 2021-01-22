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

    login = (id, pwd) => {
        return new Promise((res, rej) => {
            setTimeout(() => {
                if(
                    (id === 'vito' && pwd === '0121') ||
                    (id === 'apple' && pwd === 'iphone')
                ) {
                    res(id);
                } else {
                    rej(new Error('not found'));
                }
            }, 1000);
        })
        
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

    getprivilege = (user) => {
        return new Promise((res, rej) => {
            setTimeout(() => {
                if(user === 'vito') {
                    res({name: user, role: 'admin'});
                } else {
                    rej(new Error('no access'));
                }
            }, 500);
        })
        
    }
}

const userStorage = new UserStorage();
const id = prompt('Enter your ID:)');
const pwd = prompt('Enter your password.');

console.time('callback');
// userStorage.loginUser(
//     id, 
//     pwd, 
//     user => {
//         userStorage.getRoles(user, 
//             userWithRole => {
//                 console.timeEnd('callback')
//                 alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role!`);
//             },
//             error => {
//                 console.log(error);
//                 console.timeEnd('callback')
//             }
//             )
//         },
//         error => {
//             console.log(error);
//             console.timeEnd('callback')
//     }
// )

userStorage.login(id, pwd)
    .then(id => userStorage.getprivilege(id))
    .then(userWithRole => alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role!`))
    .catch(console.log)
    .finally(() => {
        
        console.log('로그인 구현!')
        console.timeEnd('callback')

    })