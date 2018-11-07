# WATSON API CALL
This project calls the Watson Speech to Text API. It will send it a mp3 file to Watson, and Watson will send a transcript of the file clip back to the console.


This is a beta version of this project. There are kinks that need to be worked out, but it gets the job done. 
#### Under Development
The console does not properly display the correct part of the JSON. 

### How to Run
In order to run this program, you must upload an MP3 file of 100 MB or less. In voicetotext.js you must change the file path in line 18 to the path of your MP3. 
At this point, simply type in " cd watson-app" then " node voicetotext.js" and you will see the transcript of your mp3 speech. 
## Built With

Obviously change these to fit your needs - You must list your API here with links!!!!

* [Nodejs](https://nodejs.org/en/docs/) - Backend
* [Watson SDK](https://console.bluemix.net/catalog/services/speech_to_text) -API


## Author

* jdbeck0

## License

This project is licensed under the GNU General Public License - see the [LICENSE.md](LICENSE.md) file for details

