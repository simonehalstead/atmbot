var request = require('request');

exports.getBankData = function getData(url,session, callback){

    request.get(url, function(err,res,body){
        if(err){
            console.log(err);
        }else {
            //callback(body, session);
            console.log(body)
            
        }
    });
};

exports.getMyBank = function getData(url, session, username, callback){
    request.get(url, {'headers':{'ZUMO-API-VERSION': '2.0.0'}}, function handleGetResponse(err,res,body){
        if(err){
            console.log(err);
        }else {
            callback(body, session, username);
        }
    });
};
exports.deleteMyBank = function deleteData(url,session, username ,myBank, id, callback){
    var options = {
        url: url + "\\" + id,
        method: 'DELETE',
        headers: {
            'ZUMO-API-VERSION': '2.0.0',
            'Content-Type':'application/json'
        }
    };

    request(options,function (err, res, body){
        if( !err && res.statusCode === 200){
            console.log(body);
            callback(body,session,username, myBank);
        }else {
            console.log(err);
            console.log(res);
        }
    })

};
exports.postMyBank = function SendData(url, username, myBank){
    var options = {
        url: url,
        method: 'POST',
        headers: {
            'ZUMO-API-VERSION': '2.0.0',
            'Content-Type':'application/json'
        },
        json: {
            "username" : username,
            "myBank" : myBank
        }
      };
      
      request(options, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            console.log(body);
        }
        else{
            console.log(error);
        }
      });
};