const callback3 = require('../callback3');

const cb = (id, data) => {
    let result = [];
    Object.entries(data).forEach(element => {
        if(element[0] === id){
            result = element; 
        }
    });
    return result; 
}
callback3("qwsa221", cb);