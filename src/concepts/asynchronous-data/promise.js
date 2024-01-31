// Promise is a javascript object that shows asynchronous operation done successfully or not
// asynchronous operation is operation that has undefined answer for now and the answer of operation needs some time
//Promise means guarantied that notice you when operation answer using some callback functions

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(5);
        reject('there is an error');
    }, 2000)
})
promise.then(result => {
    console.log(result)
}, error => {
    console.log(error)
})