function callback1 (name, data){
    return new Promise((resolve, reject)=> {
        setTimeout(() => {
            let result = data.find(element => element.name === name);
            let err = new Error("Data Not Found");
            result ? resolve(result) : reject(err);
        }, 2 * 1000);
    });  
}

module.exports = callback1;