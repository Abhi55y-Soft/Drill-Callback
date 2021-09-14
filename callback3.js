// const data = require('./jsonfiles/cards.json');

// function callback3 (id, cb){
//     setTimeout(() => {
//         const result = cb(id, data);
//         console.log('3',result);
//         return result;
//     }, 2 * 1000);
// }

// module.exports = callback3;

function callback3 (id, data, cb){
    setTimeout(() => {
        let result = Object.entries(data).find(element => element[0] === id);
        let err = new Error("Data Not Found");
        result ? cb(null, result) : cb(err)
        if (result){
            cb(null, result);
            return result;
        }else{
            cb(err);
            return err;
        }
    }, 2 * 1000);
}

module.exports = callback3;