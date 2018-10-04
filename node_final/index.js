const { GraphQLServer } = require("graphql-yoga");
const { createWriteStream } = require("fs");
const express =require( 'express');
const graphqlHTTP =require ('express-graphql');
const bodyParser =require("body-parser");
const{ graphqlExpress } =require("graphql-server-express");
const { makeExecutableSchema } =require ("graphql-tools");
const { apolloUploadExpress } =require ('apollo-upload-server');
const express_graphql =require('express-graphql');
//const graphqlHTTP =require ('express-graphql');
const { graphqlUploadExpress }=require( 'graphql-upload');
const videoUpload = require('./videoU/videoUpload');
const videoUpdate = require('./videoU/videoUpdate');
const sampleClient = require('./oauth/sampleclient');

let token;
const scopes = ["https://www.googleapis.com/auth/youtube.upload","https://www.googleapis.com/auth/youtubepartner"];

//const port =3030
let name;
const options={
  port:3030,
}

const typeDefs = `
  scalar Upload

  type info {
    title: String!
    description: String!
    type: String!

  }

  type auth {
    request :String!
  }

  type Mutation {
    authentication(request: String!):Boolean
    uploadFile(file: Upload!): Boolean
    uploadInfo(title: String!, description: String!, type: String!):Boolean
    updateFile(title: String!, description: String!, type: String!,Id: String!):  Boolean
  }

  type Query {
    hello: String
  }
`;

const storeUpload = ({ stream, filename }) =>
  new Promise((resolve, reject) =>
    stream
      .pipe(createWriteStream( "./video/"  +  filename ))
      .on("finish", () => {
        //save file name
        name=filename;
        console.log(name)
        resolve()
         })
      .on("error", reject)
  );

const resolvers = {
  Mutation: {
  // get authentication from google
    authentication: async (parents,{request}) => {
      try{
        token=await sampleClient
          .authenticate(scopes)
          .catch(console.error);
        console.log(request);
        console.log(token);
        if(token){
          return true;
        }
      }catch(e){
        return false;
      }



    },

    uploadFile: async (parents, { file }) => {

      try{
      const { stream, filename } = await file;
      await storeUpload({ stream, filename });
      console.log('uploaded_at_node');
      return true;
    }catch (e) {
      return false;
    }


    },

    uploadInfo: async (parents, { file ,title, description, type}) => {

      // upload video to youtube
      try {
        await videoUpload(title, description, type,"./video/" + name)
        console.log("uploading")
        return true;

      } catch (e) {
        return false;
      }

    },

  updateFile: async (parents, {title, description, type,Id}) => {
    // update video at youtube
    try {
      await videoUpdate(title, description, type ,Id)
      console.log("uploading")
      return true;

    } catch (e) {
      return false;
    }

  },
},


/*
  Query: {
    hello: () => "hi"
  },
*/

};

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});




const server = new GraphQLServer({ typeDefs, resolvers });
server.start(options,({port}) => console.log(`Server is running on localhost:${port}`));
