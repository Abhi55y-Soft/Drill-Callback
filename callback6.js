/* 
	Problem 6: Write a function that will use the previously written functions to get the following information. 
    You do not need to pass control back to the code that called it.

    Get information from the Thanos boards
    Get all the lists for the Thanos board
    Get all cards for all lists simultaneously
*/

function callback6(callback1, callback2, callback3, boards, lists, cards){ 
    setTimeout(() => {
        let id = '';
        boards.map(element => {if (element.name === "Thanos") id = element.id})
        callback1(id, boards, (err, result) => {
            if (result){
                console.log(result);
                callback2(result.id, lists, (err, result) => {
                    if (result){
                        console.log(result);
                        result[1].forEach(element => {
                            console.log(element.id);
                            callback3(element.id, cards, (err, result) => {
                                if (result){
                                    console.log(result);
                                }
                            });
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

module.exports = callback6;