var builder = require('botbuilder');
var restaurant = require('./RestaurantCard');
var bank = require('./MyBank');

// Some sections have been omitted

exports.startDialog = function (bot) {
    
    // Replace {YOUR_APP_ID_HERE} and {YOUR_KEY_HERE} with your LUIS app ID and your LUIS key, respectively.
    var recognizer = new builder.LuisRecognizer('https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/b7c652e2-4109-4feb-9d52-7d40208de43b?subscription-key=1aa6de79863c49c9a65cda005c9a5aff&verbose=true&timezoneOffset=0&q=');

    bot.recognizer(recognizer);

   

    bot.dialog('GetMyBank', [
        function (session, args, next) {
            session.dialogData.args = args || {};        
            if (!session.conversationData["username"]) {
                builder.Prompts.text(session, "Enter a username to setup your account.");                
            } else {
                next(); // Skip if we already have this info.
            }
        },
        function (session, results, next) {
            if (!isAttachment(session)) {

                if (results.response) {
                    session.conversationData["username"] = results.response;
                }

                session.send("Retrieving your bank");
                bank.displayMyBank(session, session.conversationData["username"]);  // <---- THIS LINE HERE IS WHAT WE NEED 
            }
        }
    ]).triggerAction({
        matches: 'GetMyBank'
    });
}


function isAttachment(session) { 
    var msg = session.message.text;
    if ((session.message.attachments && session.message.attachments.length > 0) || msg.includes("http")) {
        
        //call custom vision here later
        return true;
    }
    else {
        return false;
    }
}