const callback2 = require('../callback2');
const data = require('../jsonfiles/lists.json');

callback2("mcu453ed", data, (err, result) => {
    if (result){
        console.log(result);
    }else{
        console.log(err);
    }
});