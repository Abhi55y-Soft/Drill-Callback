/* 
	Problem 5: Write a function that will use the previously written functions to get the following information. 
    You do not need to pass control back to the code that called it.

    Get information from the Thanos boards
    Get all the lists for the Thanos board
    Get all cards for the Mind and Space lists simultaneously
*/ 

function callback5(callback1, callback2, callback3, boards, lists, cards){
    setTimeout(() => {
        callback1("Thanos", boards, (err, result) => {
            if (result){
                console.log(result);
                callback2(result.id, lists, (err, result) => {
                    if (result){
                        console.log(result);
                        result[1].forEach(element => {
                            if(element.name === 'Mind'){
                                callback3(element.id, cards, (err, result) => {
                                    if (result){
                                        console.log(result);
                                    }else{
                                        console.log(err);
                                    }
                                });
                            }
                            else if (element.name === 'Space'){
                                callback3(element.id, cards, (err, result) => {
                                    if (result){
                                        console.log(result);
                                    }else{
                                        console.log(err);
                                    }
                                });
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

module.exports = callback5;