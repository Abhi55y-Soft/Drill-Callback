const callback3 = require('../callback3');
const data = require('../jsonfiles/cards.json');

const cb = (err, result) => {
    if (result){
        console.log(result);
    }else{
        console.log(err);
    }
}
callback3("qwsa221", data, cb);