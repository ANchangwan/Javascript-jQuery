
// 1
const person = {
    name : "An",
    // 객체 내부의 this는 메서드를 호출한 객체에 바인딩된다.
    getname(){
        return this.name;
    }
};


console.log(person.getname());

// 2
const anotherName = {
    name:"kim"
};

// getName 메서드를 anotherPerson 객체의 메서드로 할당
anotherName.getName = person.getname;

console.log(anotherName.getName());

const getName = person.getname;

console.log(getName);

// 3
function Person(name){
    this.name = name;
};

Person.prototype.getName = function(){
    return this.name;
}

const me = new Person("Lee");

console.log(me.getName());