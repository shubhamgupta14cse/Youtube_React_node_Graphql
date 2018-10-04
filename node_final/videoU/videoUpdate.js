'use strict';

const fs = require("fs");
const readJson = require("r-json");
const {google} = require('googleapis');
const sampleClient = require('../oauth/sampleclient');
const youtube = google.youtube('v3');

// generate a url that asks permissions for Google+ and Google Calendar scopes
const scopes = ["https://www.googleapis.com/auth/youtube.upload","https://www.googleapis.com/auth/youtubepartner"];

async function videoUpdate(Title,Description,Status,Id) {
  let res = await youtube.videos.update({

      resource: {
            id: Id,
          // Video title and description
          snippet: {
              categoryId:"22",
              title: Title
            , description: Description
          }
          // status of video
        , status: {
              privacyStatus: Status
          }
      }

    , part: "id,snippet,status"

      // Create the readable stream to upload the video
    ,
      auth: sampleClient.oAuth2Client
  });
  console.log(res.data);
}


module.exports = videoUpdate;
