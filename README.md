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
 </br>
 4.</br>
 const a = x => x*x;
 console.log(a(5)) // 25
 
 

</pre>

<h2>preventDefault() </h2>
<p>
a 태그나 submit 태그를 누르면 창이 새로고침이 된다. 이러한 문제점을 해결하기 위해서 preventDefault가 필요하다.</br>
preventDefault는 새로고침을 막을 수 있다. submit이 실행되면 바로 새로고침되는 문제가 발생하는데 이 함수를 이용하면</br>
submit 이벤트만 발생하고 새로고침은 발생하지 않는다.</br>
<pre>
const on_login_submit = (event) =>{
   event.preventDefault();
   console.log(event);
}
</pre>
<h2>querySelector(selectors)</h2>
 <p>
  html 문서내에 일치하는 선택자 또는 선택자 뭉치와 일치하는 첫번째 Element를 반환한다. 일치하는 요소가 없으면  null을 반환한다.
  <h3>구문</h3>
  <pre>
   const select_element = document.querySelector(seletors);
  </pre>
  
  select_element라는 변수에 html 문서 내에 id값 class값을 저장해서 자바스크립트로 동적으로 html를 동적으로 만들 수 있다.</br> 
 </p>
