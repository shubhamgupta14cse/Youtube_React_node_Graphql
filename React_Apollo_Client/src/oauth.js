import React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Dropzone from 'react-dropzone';
import { Button, Radio, Icon } from 'antd';

import 'antd/lib/date-picker/style/css';
import 'antd/dist/antd.css';

const uploadFileMutation = gql`
  mutation($request: String!) {
    authentication(request: $request)
  }
`;

let wrapper= {
    textAlign: 'center',
    justifyContent: 'center',

}

let button= {
    position: 'absolute'

};

class ButtonSiz extends React.Component {
  state = {
    size: 'large',
  };

  handleSizeChange = (e) => {
    this.setState({ size: e.target.value });
  }

    render() {
      const size = this.state.size;
      return(
        <Mutation mutation={uploadFileMutation}>
          {mutate => (
            <div style={wrapper}>
              <Button onClick={ ()=>mutate({ variables: {request: 'true',} })} type="primary" icon="download" size={size}>Login</Button>
            </div>
          )}
        </Mutation>
   )}
 }
export default ButtonSiz;
