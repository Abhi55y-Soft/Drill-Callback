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