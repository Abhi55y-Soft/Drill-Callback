/* 
	Problem 3: Write a function that will return all cards that belong to a particular list based on 
    the listID that is passed to it from the given data in cards.json.
     Then pass control back to the code that called it by using a callback function.
*/

function callback3 (id, data, cb){
    setTimeout(() => {
        let result = Object.entries(data).find(element => element[0] === id);
        let err = new Error("Data Not Found");
        result ? cb(null, result) : cb(err);
    }, 2 * 1000);
}

module.exports = callback3;