function callback1 (name, data, cb){
    setTimeout(() => {
        let result = data.find(element => element.name === name);
        let err = new Error("Data Not Found");
        result ? cb(null, result) : cb(err);
    }, 2 * 1000);
}

module.exports = callback1;