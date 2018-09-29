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





## Built With

* [React.js]
* [GraphQL]
* [Node.js]
* [Apollo Client]
* [googleapis]




## Programming paradigm

### Achitecture design
The project is built on two side 
 * Client side that make graphql mutation through apollo clients to our server side graphql API middleware endpoints.
 * Server side node.js server and graphql API endpoints using graphql-Yoga and other graphql modules.This server side application then make a REST call to youtube data API to get authentication and upload and update data.
 
#### Authentication
The server side application make an REST call to get oauth 2 authentication which Youtube Data API support for fetching and uploading data.
the oAuth2Client is provided by googleapis module and is used to authorize the API call and get the authentication token.
For fetching token and authorizing the server listen at port:3000 i.e where google send authentication token.

## AREA OF IMPROVEMENTS.
*  Implementing server side node pipeling which will direct upload video to youtube server without saving it to our node server directory.
* Response handling on client side and making app  more interactive .
* Implementing delete ,download , channel info and content retrival operation.
* Increasing the scope to drive.google and others google api.

### Note: This project is still under development and have a diverse scope of improvements and features implementations.

## Acknowledgments

* React documentation:https://reactjs.org/docs/getting-started.html
* https://reactjs.org/docs/handling-events.html
* stackoverflow
* Formik:https://jaredpalmer.com/formik
* Github
* Apollo Client: https://www.apollographql.com/docs/react/api/react-apollo.html#mutation
* https://codeburst.io/graphql-and-apollo-client-by-example-part-3-a2aef2d0de7c
* Ben Awad(youtube): https://www.youtube.com/user/99baddawg/search?query=mutation
* Jayden Seric(github):https://github.com/jaydenseric
* GraphQL: https://www.howtographql.com/advanced/0-clients/
* https://graphql.org/graphql-js/running-an-express-graphql-server/
* MUTATION: https://graphql.org/graphql-js/mutations-and-input-types/
* Antd: https://ant.design/docs/react/introduce
* anthony alicea(udemy): learn and understand node.js:https://www.udemy.com/understand-nodejs/
* etc
