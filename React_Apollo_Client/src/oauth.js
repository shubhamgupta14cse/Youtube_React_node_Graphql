import React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Dropzone from 'react-dropzone';
import { Button, Radio, Icon } from 'antd';
import axios from 'axios';

import 'antd/lib/date-picker/style/css';
import 'antd/dist/antd.css';

const uploadFileMutation = gql`
  mutation($request: String!) {
    authentication(request: $request)
  }
`;
let redirect_url;
let win;
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
              <Button onClick={async ()=>{  mutate({ variables: {request: 'true',} }); /*redirect_url=await axios.get('http://localhost:4000/redirect/');*/ win = window.open('http://localhost:4000/redirect/', '_blank');win.focus();}} type="primary" icon="download" size={size}>Login</Button>
            </div>
          )}
        </Mutation>
   )}
 }
export default ButtonSiz;
