/* 
	Problem 2: Write a function that will return all lists that belong to a board based on 
    the boardID that is passed to it from the given data in lists.json. 
    Then pass control back to the code that called it by using a callback function.
*/

function callback2 (id, data){
    return new Promise((resolve, reject)=> {
        setTimeout(() => {
            let result = Object.entries(data).find(element => element[0] === id);
            let err = new Error("Data Not Found");
            result ? resolve(result) : reject(err);
        }, 2 * 1000);
    });
}

module.exports = callback2;