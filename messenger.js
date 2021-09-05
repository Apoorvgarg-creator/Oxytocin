const repl = require("repl");
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

const messaenger_function = async (req) => {
  const msg = req.body["Body"];
  var reply = stringMapFunction[msg];
  client.messages
    .create({
      body: reply,
      from: "whatsapp:+14155238886",
      to: req.body.From,
    })
    .then((message) => console.log(message.sid))
    .done();
};

module.exports = {
  messaenger_function,
};
