function callback4(callback1, callback2, callback3, boards, lists, cards){
    
    setTimeout(() => {
        callback1("Thanos", boards, (err, result) => {
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