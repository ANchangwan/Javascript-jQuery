function p(ms){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve(ms);
            //reject(new Error("resone"));
        }, ms);
    });
}

// Promise.all
(async function main(){
    const result = await Promise.all([1000,2000,3000]);
    console.log(result);
})();

// Promise.race
(async function main(){
    const result = await Promise.race([1000,2000,3000]);
    console.log(result);
})();