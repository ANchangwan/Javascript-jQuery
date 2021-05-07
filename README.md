# Javascript-jQuery

<h2>JAVASCRIPT란?</h2>
<p>브라우저를 제어하기 위해 넷스케이프에서 개발한 언어 사용자의 클릭,계산기,달력 등의 이벤트 조작에 대응하기 위한 언어</br> AJAX활용(구글맵) -> Debug툴에 발전 -> V8엔진의 개발 -> Nodejs 등장 -> Desktop, IOT, 사용범위 확대 -> 여러 플랫폼 제작사에서 자바 스크립트 개발자를 끌어 안기 환경 조성</br></p>

<h2><변수 형></h2>
<p>  
- var로 선언 (var a= 1;) -> ES6부터 const 사용</br>
- 동적언어이므로 자료형을 선언할 필요없음</br>
동적 언어 -> 자료형 선언 없이 자료형을 알아서 선택해줌, 단점: 실행속도가 느려지고 실행과정에서 오류가 발생할 수 있음 </br>
ex) 파이썬, 자바스크립트</br>
정적 언어 -> 자료형을 선언해줘야 한다. 단점, 일일이 선언해줘야 된다. 대신 실행이 빠르고 오류 발생이 적다.</br>
ex) c언어, 자바</br>
- 기본 자료형과 객체(Object) 두가지로 나뉜다.</br>
</p>

<h2>함수</h2>

<pre>
 1. </br>
 function 함수명 (변수, 변수){
    console.log(변수);
 }
 </br>
 2.</br>
 var a = function 함수명(변수,변수){
    console.log(변수);
 }
 </br>
 3.</br>
 function 함수명(a,b){
  this.first = a;
  this.second = b;
 }
 var a = new 함수명(변수, 변수);
 console.log(a.first);
 console.log(a.second);
 
 

</pre>
