const accountSid = 'your acountSid'; 
const authToken = '[your authToken]'; 
const client = require('twilio')(accountSid, authToken); 

const messaenger_function = async(req)=> {
    client.messages 
        .create({ 
           body: 'Your Twilio code is 1238432', 
           from: 'whatsapp:+14155238886',       
           to: req.body.From 
         }) 
        .then(message => console.log(message.sid)) 
        .done();
}

module.exports = {
    messaenger_function
}