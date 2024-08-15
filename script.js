//classes
/*
//! Car Practice
class Car{
    constructor(make, model){
        this.make = make;
        this.model = model;
        this.speed = 0;
    }//end constructor
 
    accelerate(mph){
        this.speed += mph;
        console.log(`this car is going ${this.speed} mph`);
    }//end accelerate
 
    brake(mph){
        this.speed -= mph;
        console.log(`this car is going ${this.speed} mph`);
    }
}//end class
 
const shitbox = new Car("nissan", "pathfinder");

console.log(`This car is going ${shitbox.speed} mph.`);
shitbox.accelerate(20);
shitbox.brake(50);
 */
/*
//! Employee Practice

class Employee {
    constructor(name, title, catchPhrase) {
        (this.name = name), (this.title = title), (this.catchPhrase = catchPhrase);
    }
    introduce() {
        console.log(`Hi I am ${this.name}, I am a ${this.title}, ${this.catchPhrase}`);
    }
}

const spongebob = new Employee("Spongebob", "frycook", "I'm ready");
const squidward = new Employee("Squidward", "cashier", "I hate everyone");

spongebob.introduce();
squidward.introduce();
*/

//!Animal Practice

class Animal {
    speak() {
        console.log("Some animal noise");
    }
    nap() {
        console.log("zzz");
    }
}

class Dog extends Animal {
    speak() {
        console.log("barking");
    }
}

class Cat extends Animal {
    speak() {
        console.log("meow");
    }
}

speak();
function speak() {
    console.log("speak 1");
}

function speak() {
    console.log("speak override");
}