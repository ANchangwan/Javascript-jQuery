function p(ms){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve(ms);
            //reject(new Error("resone"));
        }, ms);
    });
}

async function asyncP(){
    const ms = await p(1000);
    return 'Mark ' + ms;
}

(async function main(){
    try{
        const name = await asyncP();
        console.log(name);
    } catch (error){
        console.log(error);
    } finally{
        console.log("end");
    }
})();