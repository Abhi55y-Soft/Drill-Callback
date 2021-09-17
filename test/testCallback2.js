const callback2 = require('../callback2');
const data = require('../jsonfiles/lists.json');

callback2("mcu453ed", data)
.then(res => {
    console.log(res);
})
.catch(rej => {
    console.log(rej);
});
