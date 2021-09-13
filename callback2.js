const data = require('./jsonfiles/lists.json');

function callback2 (id, cb){
    setTimeout(() => {
        const result = cb(id, data);
        console.log('3',result);
        return result;
    }, 2 * 1000);
}

module.exports = callback2;