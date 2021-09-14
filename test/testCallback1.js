const callback1 = require('../callback1');
const data = require('../jsonfiles/boards.json');

const cb = (err, result) => {
    if (result){
        console.log(result);
    }else{
        console.log(err);
    }
}
callback1("Thanos", data, cb);

