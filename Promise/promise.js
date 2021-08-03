/*
생성자를 통해서 프로미스 객체를 만들 수 있습니다.
생성자의 인자로 executor 라는 함수를 이용합니다.
*/

/*
executor 함수는 resolve 와 reject를 인자로 가집니다.
    (resolve, reject) =>{...}
    resolve 와 reject는 함수입니다.
    resolve(), reject()
*/


new Promise(/*excutor 함수*/ (resolve, reject) => {});

/*
생성자를 통해서 프로미스 객체를 만드는 순간 pending (대기) 상태라고 합니다.
 */

/*
executor 함수 인자 중 하나인 resolve 함수를 실행하면, fufilled(이행) 상태가 됩니다.
 */
new Promise((resolve, reject) =>{
    //
    // ...
    resolve(); // fulfilled(이행)
});

/*
executor 함수 인자 중 하나인 reject 함수를 실행하면, rejected (거부) 상태가 됩니다.
 */
new Promise((resolve, reject) =>{
    //
    // ...
    reject(); // rejected(이행)
});

/*
p라는 프로미스 객체는 1000ms 후에 fufilled 됩니다.  
*/
const p = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve(); // fufilled
    }, 1000);
});

p.then(() =>{
    console.log("1000ms 후에 fufilled 됩니다.");
});

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

p().then(()=> {
    console.log("1000ms 후에 fufilled");
})