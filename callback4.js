/* 
	Problem 4: Write a function that will use the previously written functions to get the following information. 
    You do not need to pass control back to the code that called it.

    Get information from
the Thanos boards
    Get all the lists for the Thanos board
    Get all cards for the Mind list simultaneously
*/

function callback4(callback1, callback2, callback3, boards, lists, cards){
    setTimeout(()=> {
        callback1("Thanos", boards)
        .then((res)=> {
            console.log(res);
            return callback2(res.id, lists);
        })
        .then((newRes)=> {
            console.log(newRes);
            const mindId = newRes[1].find(element => element.name === 'Mind');
            return callback3(mindId.id, cards);
        })
        .then((finalRes)=> {
            console.log(finalRes);
        })
        .catch((rej)=> {
            console.log(rej);
        })
    });
}

module.exports = callback4;