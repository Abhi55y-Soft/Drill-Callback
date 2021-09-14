const callback3 = require('../callback3');
const data = require('../jsonfiles/cards.json');

callback3("qwsa221", data, (err, result) => {
    if (result){
        console.log(result);
    }else{
        console.log(err);
    }
});