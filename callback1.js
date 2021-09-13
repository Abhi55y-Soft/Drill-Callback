const data = require('./jsonfiles/boards.json');

function callback1 (id, cb){
    setTimeout(() => {
        const result = cb(id, data);
        console.log('3',result);
        return result;
    }, 2 * 1000);
}

module.exports = callback1;