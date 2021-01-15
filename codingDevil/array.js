let days = ['mon', 'tue', 'wed'];
console.log(days[1]);
days[1] = '화요일';

days.push('thu')
days.unshift('sun')

for(let i =0; i<days.length; i++){
    console.log(days[i])
}

for(let day of days){
    console.log(day)
}

days.forEach(element => {
    console.log(element);
})