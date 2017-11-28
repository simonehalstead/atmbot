var rest = require('../API/Restclient');

exports.displayMyBank = function getMyBank(session, username){
    var url = 'https://foodapp123.azurewebsites.net/tables/atm';
    rest.getMyBank(url, session, username, handleMyBankResponse)
};
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
    
    // Print all banks the user logged in is surrently with 
    session.send("%s, your bank is: %s", username, allBanks);                
    
}