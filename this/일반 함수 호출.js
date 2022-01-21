// 일반 함수 호출

function foo(){
    console.log("foo is this :", this); // window
    function bar(){
        console.log("bar is this : ", this); // window
    }
    bar();
}

foo();

// 일반 함수로 호출하면 함수 내부에서 this는 전역객체가 바인딩 된다.
// this는 자기 참조 변수이므로 객체를 생성하지 않는 일반 함수에서는 의미없음
// strict mode에서는 undefined가 바인딩 된다.

var value = 1;

const obj = {
    value:10,
    star(){
        console.log("this is inner : ", this);// 내부 객체
        console.log("this is inner value:", this.value); // 10

        function bar(){
            console.log(" this is out : ", this); //window
            console.log("this is out value : ", this.value);// 1
        }
        bar();
    }
};

obj.star();


const obj2 = {
    value:10,
    star(){

        const that = this;

        console.log("this is inner : ", this);
        console.log("this is inner : " ,this.value)
        function foo(){
            console.log("this is out : ", that);
            console.log("this is out value", that.value);
        }
        foo();
    }
}

obj2.star();
