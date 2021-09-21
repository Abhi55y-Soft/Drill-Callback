/* 
	Problem 1: Write a function that will return a particular board's information based on
     the boardID that is passed from the given list of boards in boards.json and 
     then pass control back to the code that called it by using a callback function.
*/

function callback1 (id, data, cb){
    setTimeout(() => {
        let result = data.find(element => element.id === id);
        let err = new Error("Data Not Found");
        result ? cb(null, result) : cb(err);
    }, 2 * 1000);
}

module.exports = callback1;