const storeUpload = ({ stream, filename }) =>
  new Promise((resolve, reject) =>
    stream
      .pipe(createWriteStream( "./video/"  +  filename ))
      .on("finish", () => {
        name=filename;
        resolve()
         })
      .on("error", reject)
  );

export default {

  Mutation: {
    uploadFile: async (parent, { file }) => {
      const { stream, filename } = await file;
      await storeUpload({ stream, filename });
      console.log('uploaded');
      return true;
    }
  },
  Query: {
    hello: () => "hi"
  }
};
