/* 
	Problem 4: Write a function that will use the previously written functions to get the following information. 
    You do not need to pass control back to the code that called it.

    Get information from
the Thanos boards
    Get all the lists for the Thanos board
    Get all cards for the Mind list simultaneously
*/

function callback4(callback1, callback2, callback3, boards, lists, cards){
    
    setTimeout(() => {
        let id = '';
        boards.map(element => {if (element.name === "Thanos") id = element.id})
        callback1(id, boards, (err, result) => {
            if (result){
                console.log(result);
                callback2(result.id, lists, (err, result) => {
                    if (result){
                        console.log(result);
                        const mindId = result[1].find(element => element.name === 'Mind');
                        callback3(mindId.id, cards, (err, result) => {
                            if (result){
                                console.log(result);
                            }else{
                                console.log(err);
                            }
                        });
                    }else{
                        console.log(err);
                    }
                });
            }else{
                console.log(err);
            }
        });
    });
}

module.exports = callback4;