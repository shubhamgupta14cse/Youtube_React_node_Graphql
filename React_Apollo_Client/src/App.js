import { Upload, Icon, message } from 'antd'
import React from 'react';

import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Dropzone from 'react-dropzone';

import 'antd/lib/date-picker/style/css';
import 'antd/dist/antd.css';

const uploadFileMutation = gql`
  mutation($file: Upload!) {
    uploadFile(file: $file)
  }
`;

export default () => (
  <Mutation mutation={uploadFileMutation}>
    {mutate => (
      <Dropzone onDrop={([file]) => mutate({ variables: { file } })}>
        <p className="ant-upload-drag-icon">
          <Icon type="upload" theme="outlined" />
        </p>
        <p className="ant-upload-text">Click or drag file to this area to upload</p>
        <p className="ant-upload-hint">Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files</p>
      </Dropzone>
    )}
  </Mutation>
);
