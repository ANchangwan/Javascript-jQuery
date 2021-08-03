/*
Promise.reject를 사용하면, catch로 연결된 rejected 상태로 변경됩니다.

 */

Promise.reject(/* value */);

Promise.reject(new Error('resone'))
.then(error =>{})
.catch(error => {
    console.log(error);
}
    )