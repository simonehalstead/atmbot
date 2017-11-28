var rest = require('../API/Restclient');

exports.displayMyBank = function getMyBank(session, username){
    var url = 'https://foodapp123.azurewebsites.net/tables/atm';
    rest.getMyBank(url, session, username, handleMyBankResponse)
};
exports.sendMyBank = function postMyBank(session, username, myBank){
    var url = 'https://foodapp123.azurewebsites.net/tables/atm';
    rest.postMyBank(url, username, myBank);
};


exports.deleteMyBank = function deleteMyBank(session,username,myBank){
    var url  = 'https://foodapp123.azurewebsites.net/tables/atm';


    rest.getMyBank(url,session, username,function(message,session,username){
     var   allBanks = JSON.parse(message);

        for(var i in allBanks) {

            if (allBanks[i].myBank === myBank && allBanks[i].username === username) {


                rest.deleteMyBank(url,session,username,myBank, allBanks[i].id ,handleDeletedBankResponse)

            }
        }


    });


};


function handleDeletedBankResponse(body,session,username, myBank){

        console.log('Done');


}
function handleMyBankResponse(message, session, username) {
    var myBankResponse = JSON.parse(message);
    var allBanks = [];
    for (var index in myBankResponse) {
        var usernameReceived = myBankResponse[index].username;
        console.log(myBankResponse[index]);
        var myBank = myBankResponse[index].myBank;

        //Convert to lower case whilst doing comparison to ensure the user can type whatever they like
        if (username.toLowerCase() === usernameReceived.toLowerCase()) {
            //Add a comma after all favourite foods unless last one
            if(myBankResponse.length - 1) {
                allBanks.push(myBank);
            }
            else {
                allBanks.push(myBank + ', ');
            }
        }        
    }
    
    // Print all banks the user logged in is currently with 
    session.send("%s, your bank is: %s", username, allBanks);                
    
}

