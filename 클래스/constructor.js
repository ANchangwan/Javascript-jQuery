class A{
    constructor(){
        console.log("constructor");
    }
}

new A();

class B{
    constructor(name, age){
        console.log("constructor", name, age);
    }
}

new B("Anchangwan", 27);