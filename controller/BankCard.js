var rest = require('../API/Restclient');
var builder = require('botbuilder');

//Calls 'getNutritionData' in RestClient.js with 'getFoodNutrition' as callback to get ndbno of food
exports.displayBankCards = function getBankData(bankName, session){
    var url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-36.8485,174.7633&radius=500&type=bank"+bankName+"&key=AIzaSyAsGzcmH3-Uw1J1Rd2EYgYR1BzART4wMAg";

    rest.getGoogleData(url, session,bankName, displayBankCards);
}

//Parses JSON to get the ndbno. Calls 'getNutritionData' in RestClient.js with 'displayNutritionCards' as callback to get nutrition information
function displayBankCards(message, bankName, session) {
    var attachment = [];
    var banks = JSON.parse(message);
    
    //For each restaurant, add herocard with name, address, image and url in attachment
    for (var index in banks.businesses) {
        var bank = banks.businesses[index];
        var name = bank.name;
        var imageURL = bank.image_url;
        var url = bank.url;
        var address = bank.location.address1 + ", " + bank.location.city;

        var card = new builder.HeroCard(session)
            .title(name)
            .text(address)
            .images([
                builder.CardImage.create(session, imageURL)])
            .buttons([
                builder.CardAction.openUrl(session, url, 'More Information')
            ]);
        attachment.push(card);

    }

    //Displays restaurant hero card carousel in chat box 
    var message = new builder.Message(session)
        .attachmentLayout(builder.AttachmentLayout.carousel)
        .attachments(attachment);
    session.send(message);
}
