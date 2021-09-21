/*Problem 1: Write a function that will return a particular board's information based on
    the boardID that is passed from the given list of boards in boards.json and 
    then pass control back to the code that called it by using a callback function. */

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