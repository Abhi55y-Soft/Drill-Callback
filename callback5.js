function callback5(callback1, callback2, callback3, boards, lists, cards){
    setTimeout(() => {
        callback1("Thanos", boards)
        .then((res)=> {
            console.log(res);
            return callback2(res.id, lists);
        })
        .then((newRes)=> {
            console.log(newRes);
            newRes[1].forEach(element => {
                if(element.name === 'Mind'){
                    callback3(element.id, cards)
                    .then((subRes)=> {
                        console.log(subRes);
                    })
                    .catch((rej)=> {
                        console.log(rej);
                    });
                }
                else if (element.name === 'Space'){
                    callback3(element.id, cards)
                    .then((subRes)=> {
                        console.log(subRes);
                    })
                    .catch((rej)=> {
                        console.log(rej);
                    });
                }
            });
        })
        .catch((rej)=> {
            console.log(rej);
        });
    });
}

module.exports = callback5;