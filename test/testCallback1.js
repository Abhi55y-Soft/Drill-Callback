const callback1 = require('../callback1');
const data = require('../jsonfiles/boards.json');

callback1("Thanos", data)
.then(res => {
    console.log(res);
})
.catch(rej => {
    console.log(rej);
});

