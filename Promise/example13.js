/*
executor의 reject 함수를 실행할때 인자를 넣어 실행하면, catch의 callback 함수의 인자로 받을 수 있습니다.
reject("error");
then((resone) => {...})
*/

function p(){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            reject("erro"); // rejected
        }, 1000);
    })
}

p().then(()=>{
    console.log("1000ms 후에 fufilled");
}).catch(resone =>{
    console.log("1000ms 후에 rejected됩니다.", resone);
});