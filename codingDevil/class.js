class User{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // 생성자 - 인스턴스 변수를 넘겨받은 파라미터를 통해 초기화
    showName() {
        console.log(this.name);
    }
    // 메서드는 프로토타입에 저장
}

const Ellon = new User("Ellon", 35);

class Car{
    constructor(color) {
        this.color = color;
        this.wheels = 4;
    
    }
    drive(){
        console.log('DRIVE!!!!');
    }
    stop(){
        console.log('Stop,,,,');
    }
}

class BMW extends Car{
    // constructor() {
    //     super();
    //     this.lotation = {
    //         lat : 1,
    //         long : 1,
    //     }
    // } // color : undefined
    constructor(color) {
        super(color);
        this.lotation = {
            lat : 1,
            long : 1,
        }
    }
    // 생성자 생략시 기본으로 생성됨
    // constructor(...args){
    //     super(...args);
    // }
    park(){
        console.log('Park.')
    }
    stop(){
        super.stop();
        console.log('OFF');
    }
    // Method Overriding
}

const z4 = new BMW('Blue')