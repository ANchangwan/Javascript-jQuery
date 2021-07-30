class Parent{
    name;
    constructor(name){
        this.name = name;
    }
    hello(){
        console.log("hello",this.name);
    }

}

class Child extends Parent{
    age;
    constructor(name, age){
        super(name);
        this.age = age;
    }
    hello(){
        console.log("hello", this.age, this.name);
    }
}

const a = new Parent("anchangwan");
const b = new Child("anchangwan", 27);

a.hello();
b.hello();