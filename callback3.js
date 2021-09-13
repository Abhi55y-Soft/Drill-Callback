const data = require('./jsonfiles/cards.json');

function callback3 (id, cb){
    setTimeout(() => {
        const result = cb(id, data);
        console.log('3',result);
        return result;
    }, 2 * 1000);
}

module.exports = callback3;