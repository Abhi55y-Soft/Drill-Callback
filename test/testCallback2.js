const callback2 = require('../callback2');
const data = require('../jsonfiles/lists.json');

const cb = (err, result) => {
    if (result){
        console.log(result);
    }else{
        console.log(err);
    }
}
callback2("mcu453ed", data, cb)