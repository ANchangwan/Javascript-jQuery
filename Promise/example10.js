/*
then을 설정하는 시점을 정확히하고,
함수의 실행과 동시에 프로미스 객체를 만들면서 pending이 시작하도록 하기 위해
프로미스 객체를 생성하면서 리턴하는 함수 (p)를 만들어 함수 (p) 실행과 동시에 then을 설정합니다.
 */

function p(){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve();
        }, 1000);
    })
}

p().then(()=>{
    console.log("1000ms 후에 fufilled");
});