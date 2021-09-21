/* 
	Problem 6: Write a function that will use the previously written functions to get the following information. 
    You do not need to pass control back to the code that called it.

    Get information from the Thanos boards
    Get all the lists for the Thanos board
    Get all cards for all lists simultaneously
*/

function callback6(callback1, callback2, callback3, boards, lists, cards){ 
    setTimeout(() => {
        callback1("Thanos", boards)
        .then((res)=> {
            console.log(res);
            return callback2(res.id, lists);
        })
        .then((newRes)=> {
            console.log(newRes);
            newRes[1].forEach(element => {
                callback3(element.id, cards)
                .then((subRes)=> {
                    console.log(subRes);
                })
                .catch((rej)=> {
                    console.log(rej);
                });
            });
        })
        .catch((rej)=> {
            console.log(rej);
        });
    });
}

module.exports = callback6;