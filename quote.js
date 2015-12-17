var https = require('https');
var slack_host = 'hooks.slack.com'
var slack_path = '/services/blabla/blabla/blabla'

// Entrypoint for AWS Lambda
exports.handler = function(event, context) {

  var message = JSON.stringify({ icon_emoji: ':poop:', username: 'Quote Bot', text: getQuote() });
  sendWebhook(slack_host, slack_path, message);

};



function sendWebhook(host,path,message){

  var optionspost = {
    host: host,
    path: path,
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    }
  };

  var reqPost = https.request(optionspost, function(res) {
      console.log("statusCode: ", res.statusCode);
      if(res.statusCode !== 200) {
         return context.fail('Opppps something went wrong with webhoook post');
      }
  });

  reqPost.write(message);
  reqPost.end();

}



// here we go with the quotes
function getQuote() {
      var myArray = [ "*Quote1*\nblablabla1",
                      "*Quote2*\nblablabla2",
                      "*Quote3*\nblablabla3"
                      ];

        var rand = myArray[Math.floor(Math.random() * myArray.length)];
        var message = rand;
        return message;
}
