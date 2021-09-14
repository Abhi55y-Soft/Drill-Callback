function callback6(callback1, callback2, callback3, boards, lists, cards){
    
    setTimeout(() => {
        callback1("Thanos", boards, (err, result) => {
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
                                }else{
                                    console.log(err);
                                }
                            });
                            // if(element.name === 'Mind'){
                            //     callback3(element.id, cards, (err, result) => {
                            //         if (result){
                            //             console.log(result);
                            //         }else{
                            //             console.log(err);
                            //         }
                            //     });
                            // }
                            // else if (element.name === 'Space'){
                            //     callback3(element.id, cards, (err, result) => {
                            //         if (result){
                            //             console.log(result);
                            //         }else{
                            //             console.log(err);
                            //         }
                            //     });
                            // }
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