const callback1 = require('../callback1');

const cb = (id, data) => {
    let result = [];
    data.forEach(element => {
        if(element.id === id){
            result = element; 
        }
    });
    return result; 
}
callback1("mcu453ed", cb);

