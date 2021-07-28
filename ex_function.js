//#1 함수 선언문으로 정의하는 방법

//함수 선언문으로 정의한 함수는 호출문이 그보다 앞에 위치해도 호출할 수 있다.
// 자바스크립트 엔진이 함수 선언문을 프로그램의 첫멀리 또는 함수의 첫머릴로 끌어올리기 때문이다.


function f(x) {return x*x };

//ex)
console.log(f(5)) // 25출력
function f(x) {return x*x};

// 2~4 함수 선언 방법은 무조건 실행문 앞에 함수가 있어야 합니다.

//#2 함수 리터럴로 정의하는 방법
const f = function(x){
  return x*x;
};


// #3
// Function 생성자로 정의하는 방법
// 잘 씌이지 않음
const f = new Function("x", "return x*x");

// # 4
// ES6
const f = x => x*x; 
