// await를 사용하는 경우, 항상 async 함수 안에서 사용되어야 한다.

function p(ms){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve(ms);
        }, ms);
    });
}

(async function main(){
    const ms = await p(1000);
    console.log(`${ms} ms 후에 실행된다.`);
})();

//async 함수에서 await를 만나면 await가 끝날 때까지 기다린다.
// async함수는 한줄 한줄 끝날때까지 기다린다.