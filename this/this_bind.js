// this 바인딩은 함수 호출 방식에 따라 동적으로 호출 가능하다.

// 1. 일반 함수
// 2. 메서드
// 3. 생성자 함수 호출
// 4. Function.prototype.appl/ call/ bind 메서드에 의한 간접 호출

const foo = () =>{
    console.dir(this);
    console.log("hello binding");
}

// 1. 일반 함수 호출
// this는 전역 객체 window를 가리킨다.

foo();

// 2. 메서드 호출
// this는 obj 객체를 가리킨다.

const obj = { foo };
obj.foo();

// 3. 생성자 함수 호출

new foo();

// 4. Function.prototype.appl/ call/ bind 메서드에 의한 간접 호출
// foo 함수 내부의 this는 인수에 의해 결정된다.

const bar = { name : "foo"};

foo.call(bar)
foo.apply(bar)
foo.bind(bar)();