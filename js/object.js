const superman = {
    name : 'Clark',
    age : 33
}

console.log(superman.name)
console.log(superman['age'])

console.log(superman)

superman.haircolor = 'Black';
superman['hobby'] = 'soccer';
delete superman.age
console.log(superman)

function makeObject(name, age){
    return{
        name : name,
        age : age,
        hobby : 'football'
    }
}

const Mike = makeObject('Mike', 30);

console.log(Mike)

makeObject2 = (name, age) =>{
    return{
        name,
        age,
        hobby : 'football'
    }
}

const Tommy = makeObject2('Tommy', 28);
console.log(Tommy)

console.log('age' in Mike);
console.log('birthday' in Mike);

isAdult = (user) => {
    if(!('age' in user) || user.age < 20){
        return false;
    }

    return true;
}

const Jane = makeObject2('Jane',16);

console.log(isAdult(Tommy))
console.log(isAdult(Jane))

for(item in Mike) {
    console.log(Mike[item])
}

