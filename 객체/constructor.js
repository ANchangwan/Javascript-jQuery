function A(name, age){
    console.log(name, age);
}

new A("anchangwan", 27); // 객체 생성


// 객체에 속성 추가하기 
// 값을 속성으로 넣기

function B() {
    this.name = "anchangwan";
    this.age = 27;
}

const a = new B();
console.log(a);

// 함수를 속성으로 넣기
function c() {
    this.hello = function(){
        console.log("hello javascript");
    }
}

const C = new c();

C.hello();

// new Function() 생성자 함수
