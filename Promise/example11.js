function p(){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            reject(); // rejected
        }, 1000);
    })
}

p().then(()=>{
    console.log("1000ms 후에 fufilled");
}).catch(() =>{
    console.log("1000ms 후에 rejected됩니다.")
});