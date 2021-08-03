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