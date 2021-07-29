// 객체 리터럴
// 직접 선언해서 만드는 방식
const Person = {
    name:"anchangwan",
    age:function(){
        console.log("27", this);
    },
    region:function(){
        console.log("inchen", this.name); 
    },
    ex:()=>console.log("ex", this.name),
};

console.log(Person.name);
Person.age();
Person.region();
Person.ex();