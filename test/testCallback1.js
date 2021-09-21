const callback1 = require('../callback1');
const data = require('../jsonfiles/boards.json');

callback1("mcu453ed", data, (err, result) => {
    if (result){
        console.log(result);
    }else{
        console.log(err);
    }
});

