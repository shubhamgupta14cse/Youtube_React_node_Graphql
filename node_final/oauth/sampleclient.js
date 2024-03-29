'use strict';

/**
 * This is used by several samples to easily provide an oauth2 workflow.
 */

const {google} = require('googleapis');
const http = require('http');
const url = require('url');
const querystring = require('querystring');
const opn = require('opn');
const destroyer = require('server-destroy');
const fs = require('fs');
const path = require('path');

const keyPath = path.join(__dirname, 'credentials.json');
let keys = {
  redirect_uris: ['http://localhost:4000/oauth2callback'],
};
if (fs.existsSync(keyPath)) {
  const keyFile = require(keyPath);
  keys = keyFile.installed || keyFile.web;
}

const invalidRedirectUri = `The provided keyfile does not define a valid
redirect URI. There must be at least one redirect URI defined, and this sample
assumes it redirects to 'http://localhost:4000/oauth2callback'.  Please edit
your keyfile, and add a 'redirect_uris' section.  For example:
"redirect_uris": [
  "http://localhost:4000/oauth2callback"
]
`;

class SampleClient {
  constructor(options) {
    this._options = options || {scopes: []};

    // validate the redirectUri.
    if (!keys.redirect_uris || keys.redirect_uris.length === 0) {
      throw new Error(invalidRedirectUri);
    }
    const redirectUri = keys.redirect_uris[keys.redirect_uris.length - 1];
    const parts = url.parse(redirectUri, false);
    if (
      redirectUri.length === 0 ||
      parts.port !== '4000' ||
      parts.hostname !== 'localhost' ||
      parts.path !== '/oauth2callback'
    ) {
      throw new Error(invalidRedirectUri);
    }

    // create an oAuth client to authorize the API call
    this.oAuth2Client = new google.auth.OAuth2(
      keys.client_id,
      keys.client_secret,
      redirectUri
    );
  }

  // Open an http server to accept the oauth callback. In this
  async authenticate(scopes) {
    return new Promise((resolve, reject) => {
      // grab the url that will be used for authorization
      this.authorizeUrl = this.oAuth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: scopes.join(' '),
      });
      const server = http
        .createServer(async (req, res) => {
          try {
            if (req.url.indexOf('/oauth2callback') > -1) {
              const qs = querystring.parse(url.parse(req.url).query);
              res.end(
                'Authentication successful! Please return to the console.'
              );
              server.destroy();
              const {tokens} = await this.oAuth2Client.getToken(qs.code);
              this.oAuth2Client.credentials = tokens;
              resolve(this.oAuth2Client);
            }
            else if(req.url.indexOf('/redirect')> -1){
              //res.redirect(this.authorizeUrl);
              res.writeHead(302, {
                 Location : this.authorizeUrl
                    });
              res.end();
            }
          } catch (e) {
            reject(e);
          }
        })
        .listen(4000, () => {
          // open the browser to the authorize url to start the workflow
          //opn(this.authorizeUrl, {wait: false}).then(cp => cp.unref());
        });
      destroyer(server);
    });
  }
}

module.exports = new SampleClient();
