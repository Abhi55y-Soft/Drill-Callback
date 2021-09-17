// function callback2 (id, data, cb){
//     setTimeout(() => {
//         let result = Object.entries(data).find(element => element[0] === id);
//         let err = new Error("Data Not Found");
//         result ? cb(null, result) : cb(err);
//     }, 2 * 1000);
// }

function callback2 (id, data){
    return new Promise((resolve, reject)=> {
        setTimeout(() => {
            let result = Object.entries(data).find(element => element[0] === id);
            let err = new Error("Data Not Found");
            result ? resolve(result) : reject(err);
        }, 2 * 1000);
    });
}

module.exports = callback2;