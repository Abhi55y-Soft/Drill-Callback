const callback2 = require('../callback2');

const cb = (id, data) => {
    let result = [];
    Object.entries(data).forEach(element => {
        if(element[0] === id){
            result = element; 
        }
    });
    return result; 
}
callback2("mcu453ed", cb);