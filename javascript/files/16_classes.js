//in class we have a constructor that takes properties

class Student{
    constructor(name,age){
        this.name = name;
        this.age = age
    }
    age(){
        console.log(`age is ${this.age}`);
    }
}
const st1 = new Student("vineet",22)
console.log(st1.name)
console.log(st1.age)


// class inheritance inherits all the methods from another class.
class Branch extends Student {
    constructor(name,age,branch){
        super(name,age);
        this.branch = branch;
    }
    display(){
        console.log(`Student name is ${this.name} and his age is ${this.age} and branch is ${this.branch}`);
    }
}

let std1 = new Branch("vineet",22,"science");
std1.display();


//static in class is used to define static methods and variables you can call static methods from class but not from objects.
class Car {
    constructor(name){
        this.name=name;
    }
    static display(x){
        console.log(`Hello ${x.name}`);
    }
}

const car1 = new Car("bmw");
Car.display(car1);


class Art{
    constructor (stdname,age,artstyle){
        this.stdname = stdname;
        this.age = age;
        this.artstyle = artstyle;
    }
    display(){
        console.log(`${this.stdname} age is ${age} and his fav artstyle is ${this.artstyle}`);
    }
}


class Exams extends Art {
    constructor(stdname,age,artstyle,results){
        super(stdname,age,artstyle);
        this.results = results;
    }
    static display(x){
        console.log(`${x.stdname} age is ${x.age} and his fav artstyle is ${x.artstyle} and marks obatined is ${x.results}`);
    }
}
let std2 = new Exams("vineet",22,"realism","A")
Exams.display(std2)


