const request = require('request');
const keys = require('../watson-app/keys');
var SpeechToText = require('watson-developer-cloud/speech-to-text/v1');
var fs = require('fs');
let readJSON = require('./response.json');

var speechToText = new SpeechToText({
 //These are the parameters to send the key to the API
  iam_apikey: `${keys.watsonKeySpeechtoText}`,
  url: 'https://stream.watsonplatform.net/speech-to-text/api/',
  json: true
  
});

var params = {
  // Allows you to set your parameters for your file
  //You can change the name of the file in line 14.
  audio: fs.createReadStream('./resources/DreamClip.mp3'),
  content_type: 'audio/mp3'
  
};
 

speechToText.recognize(params, function(err, response, body) {
    
  if (err){
      
      //This prints out the error that Watson SDK gives
      //Shows that speech could not be identified
      
    console.log(err);
    console.log('failed to recognize speech');
  } else {
  
  //This prints the json result as a string into the console. 
  
    var watsonJSON = JSON.stringify(response, null, 1);
    fs.writeFile("response.json", watsonJSON)
    

}

   //This command turns the response.json into a string that is printed in the console.
console.log(JSON.stringify(readJSON.results[0].alternatives[0].transcript));

    



});


  