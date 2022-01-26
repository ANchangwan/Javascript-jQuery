// apply, call, bind 메서드는 function.prototype의 메서드다. 즉, 이들 메서드는 모든 함수가 상속받아 사용할 수 있다.
function getThisBinding(){
    return this;
}

const thisArg = { a:1};

console.log(getThisBinding());


// getThisBinding 함수를 호출하면서 인수로 전달한 객체를 getThisBinding 함수의 this에 바인딩된다.
console.log(getThisBinding.apply(thisArg));
console.log(getThisBinding.call(thisArg));


