/*
fulfilled 되거나 rejected 된 후에 최정적으로 실행할 것이 있다면, finally()를 설정하고, 함수를 인자를 넣습니다.
*/

function p(){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve(new Error("bad"));
        }, 1000);
    })
}

p()
    .then((message)=> {
    console.log("1000ms 후에 fufilled", message);
    }).catch((error)=>{
    console.log("1000ms 후에 rejected됩니다.", error);
    })
    .finally(()=>{
        console.log("end");
    })