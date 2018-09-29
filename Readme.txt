
GEETING STARTED
please set up the project by installing npm dependencies in both the client and server file.you might need to install some packages manually which i have installed globally
on my machine, those are very bascis dependencies and if the server side throw any error just look for the import and required file double check with packages.json and install them globally.
this is because of the various varsions conflicts and support with consistent updating of node and react community.

after successfully setting up the dependencies second step is to getting the youtube data api oauthentication credentials file(.json) simply go to youtube data api on google developer console
and create an app , enable youtube data api for that app/project/ configure the localhost and localhost call back option for you port. the simple download that credentials file(.json) and paste 
it into the ./YouTube_React_Node_Upload\Node_GraphQL_Server\oauth directory (in the oauth directory in node server directory in main app).PLEASE MAKE SURE TO CHANGE THE
NAME OF THE FILE AS credentials.json.

and you are good to go.

do npm start on both the directory (react_client and node_server)



note that both the side would run on your localhost the server is manually configured by me to run on localhost:3030 which is where you can also access the graphQL API 
endpoint. just go to localhost:3030 in your browser for manually making mutation and queries , see the schemas and gain a better understanding of our graphql middleware
API.




If you want you can manually configure/change the  port for Nodeserver/Grapphql endpoint by opening the package .json and mutating the start keyword.



The client side react app by default run on the port 3000 and you can also do teh same configuration for port by same method if you want and so id the redirected URL. FOR 
google to send you the authorization portal. and the node server would also listen to 3000 for oauth2 token at server.
the client side react app use apollo client and other apollo dependencies to make mutation and upload video files.


THE WORK FLOW

please first go the the login option and authenticate your google account at which you need to upload file.
then go it either upload or update option.
 
for uploading video first drag or open file in upload option whic will make mutation request to server and stores the video to our node server directory
then fill the form by clicking to upload button and press upload.
note: the form will automaticall disappere when the video would be secessfully uploaded to the youtube server, till then the input values will remain same in fields and afetr successfull 
upload the input value would be reset to default options indication sucessful upload.



AREA OF IMPROVEMENTS.
1. implementing server side node pipeling which will direct upload video to youtube server without saving it to our node server directory.
2.Response handling on client side and making app  more interactive .
3.implementing delete ,download , channel info and content retrival operation.
4.increasing the scope to drive.google and others google api.







note: the form modal













 