'use strict';

const fs = require("fs");
const readJson = require("r-json");
const {google} = require('googleapis');
const sampleClient = require('../oauth/sampleclient');
const youtube = google.youtube('v3');

// generate a url that asks permissions for Google+ and Google Calendar scopes
/*const scopes = ["https://www.googleapis.com/auth/youtube.upload","https://www.googleapis.com/auth/youtubepartner"];
let OAuth2Client=
 {
  domain: null,
  _events: {},
  _eventsCount: 0,
  _maxListeners: undefined,
  transporter: DefaultTransporter {},
  credentials:
   { access_token: 'ya29.GlwkBpNxq0BzzHRechmS9ThOP-JYlQAyfLDIsDcKnxGvK0Uppq3Qa271PQQaCHGC1THbLjDicL5vIWzqTa8SiJuQJxOlXJvlxnMCjITprTzczJErcYUhjEhVIq0GDQ',
     scope: 'https://www.googleapis.com/auth/youtubepartner https://www.googleapis.com/auth/youtube.upload',
     token_type: 'Bearer',
     expiry_date: 1537957647505 },
  certificateCache: null,
  certificateExpiry: null,
  refreshTokenPromises: Map {},
  _clientId: '165568688586-m51c0r9bm8luk8kd9q9h0b10bv2dbjfg.apps.googleusercontent.com',
  _clientSecret: 'KIEoB72orfKtmXFCxyWNulVK',
  redirectUri: 'http://localhost:3000/oauth2callback',
  authBaseUrl: undefined,
  tokenUrl: undefined,
  eagerRefreshThresholdMillis: 300000 }; */




async function videoUpload(Title,Description,Status,Path) {
  let res =await youtube.videos.insert({
      resource: {
          // Video title and description
          snippet: {
              title: Title
            , description: Description
          }
          // status of video
        , status: {
              privacyStatus: Status
          }
      }

    , part: "snippet,status"

      // Create the readable stream to upload the video
    , media: {
          body: fs.createReadStream(Path)
      },
      auth:sampleClient.oAuth2Client


  });
  console.log(res.data);
}


module.exports = videoUpload;
