# Youtube_React_Node_App
A full stack real time youtube video upload and updation App built using cutting Edge technology.
This app first require you to log in to your google account and then lets you upload your local files/videos at your youtube channel.

## Getting Started
first make sure you have Node.js installed on your machines .This app is built on the top of the large no of modules npm (node package manager)
support.
if you don't have node installed get it from here;

```
https://nodejs.org/en/
```

I'll reccommend the node side recommended download.
once you have node and npm successfully set up at your device, Please clone or download this repository at your local machine and 
unzip it.
You will find two directory one for server and other for client/React app.
please redirect to both the directory and do a simple npm install in both the folder/projects.
This will installed the project dependencies and required module in the folder , simple do

```
npm install
```
Then start the app on your local server by simply executing

```
npm start
```

This would start the server for server file on localhost:3030 and client side React app on by default localhost:3000.
#### Note : You can test your server endpoint which is a graphql API by simply visiting on the localhost:3030 through your browser to run some graphql queries and mutation and inspect the schemas. 

And your good to go.
At client side please first login and then go to upload and update option .
For video upload first drop or select a video file from your local machine by going to upload box and after that click the
upload button and fill the respective info and upload. 

#### Note: As an indication of the upload status , the form/modal will not dissapear on its own and its input values will not go back to defalut untill the upload is successfull.

For updating the info for an already existing video on your youtube channel ,please first login and then click the update button.
it will open a modal/form to fill new info and ALSO YOUR UNIQUE YOUTUBE ID. if you dont know your video id simply go to youtube and 
play that video and inspect the URL. the last v keyword value of the playing video at youtube is it unique id. For example

```
https://www.youtube.com/watch?v=yNiJkjEwmpw&t=2237s
```
in this example
```
v=yNiJkjEwmpw
```
look at this query and its value yNiJkjEwmpw is the unique ID.



## Screenshots
![app1](https://user-images.githubusercontent.com/17953528/45334106-fbdbad80-b596-11e8-849e-47b4f5756623.png)


![app2](https://user-images.githubusercontent.com/17953528/45334116-06964280-b597-11e8-9c29-cfc6cbe7d0c4.png)


![app3](https://user-images.githubusercontent.com/17953528/45334128-144bc800-b597-11e8-9753-78413da85017.png)

## Built With

* [Babel](https://babeljs.io/) - The Javasript compiler used to execute/convert ES6 code to ES5 for browser support.
* [Webpack](https://webpack.js.org/) - JavaScript module bundler used to bundle javascript files and css files together.
* [Babel-polyfill](https://babeljs.io/docs/en/babel-polyfill) - support browser for ES6 new features that were not present in previous specifications



## Programming paradigm

### Achitecture design
The project follows the MVC(Model-View-Controller ) design implemented through latest ECMA Script 6 modules features.

### Library/module used
Axios -to make AJAX calls to the API by XHR request to fetch data in json,and parse the json data into javascript object.

Factional- used to generate perfect fraction no.

Uniqid- used to generate unique id/value.

### ECMA script 6,7,8 
The application has been programmed following the latest ES6,7,8 featurs and specifications like arrow functions, string template ,modules import/export, async-await,promises etc and thus require dependencies like babel ,webpack and babel polyfill for browser support.

## Getting Started

To set up the project in your local enivironment ,first clone the repository and save it on your local environment/machine.
once you've downloaded the project ,navigate to the src/js directory in the project and edit the config.js file.

To edit the config file you'll need to visit to food2fork site and register for their public API and paste your API key in the config.js
```
https://www.food2fork.com/about/api
```

NOTE -that the free account have a call limit of 50 calls/day , so depending on the no of key you're registering also edit the recipe.js and search.js file in src/js/model directory.

Edit this line by changing the index manually of ${key(2) in both search.jsand recipe.js, set it to 1,2,3,4 or more if you like as per your keys in config.js, this key function in string template gets you the API key from config.js
```
const res = await axios(`${proxy}http://food2fork.com/api/get?key=${key(2)}&rId=${this.rid}`);

```

### Prerequisites

Now to build the project locally you'll need to install npm dependencies and prior to it node and npm if you don not already have it,
download node from here:-
```
https://nodejs.org
```
after sucessfully installing node/npm ,navigate to the project directory and open/run terminal/bash/CLI there and execute:-
```
npm install
```
this would install all the development and built dependencies for your project and necessary npm library for this project,after sucessfull installation you would see a node_module directory in your project directory containing all the necessary module.

Now to run the app on your localhost execute:-
```
npm run start
```
This will run the app on your localhost and build the html and javascript files on the fly.(recommended).

To built the project in distribution directory execute:-
```
npm run dev
```
This would build the project in development mode, the javascript and css file would be bundled by webpack and mutated by babel to ES5 specification code. 


```
npm run build
```
This would do the same thing as the prior step but the bundled file would be built in production mode and thus will have comprably small size and less irrelevant code.






## Acknowledgments

* Udemy
* MDN Web Docs(https://developer.mozilla.org/en-US/)
* stackoverflow
* etc
