const callback3 = require('../callback3');
const data = require('../jsonfiles/cards.json');

callback3("qwsa221", data)
.then(res => {
    console.log(res);
})
.catch(rej => {
    console.log(rej);
});