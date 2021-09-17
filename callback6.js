function callback6(callback1, callback2, callback3, boards, lists, cards){ 
    setTimeout(() => {
        // callback1("Thanos", boards, (err, result) => {
        //     if (result){
        //         console.log(result);
        //         callback2(result.id, lists, (err, result) => {
        //             if (result){
        //                 console.log(result);
        //                 result[1].forEach(element => {
        //                     console.log(element.id);
        //                     callback3(element.id, cards, (err, result) => {
        //                         if (result){
        //                             console.log(result);
        //                         }else{
        //                             console.log(err);
        //                         }
        //                     });
        //                 });   
        //             }else{
        //                 console.log(err);
        //             }
        //         });
        //     }else{
        //         console.log(err);
        //     }
        // });
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