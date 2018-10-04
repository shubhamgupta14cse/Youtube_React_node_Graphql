import React ,{Component} from 'react';
import ReactDOM from 'react-dom';
import { createUploadLink } from 'apollo-upload-client';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';
import { Button, Radio, Icon } from 'antd';

import 'antd/dist/antd.css';

//import WrappedDemo from "./form";
import App from './App' ;
import ButtonSiz from "./oauth"

import registerServiceWorker from './registerServiceWorker';
import Collections from './uploadInfo';
import CollectionsPage from "./updateVideo"

//http://139.59.23.198:3030/

const link = createUploadLink({ uri: 'http://localhost:3030/' });

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

let wrapper= {
    textAlign: 'center',
    justifyContent: 'center',


}

let wrappers= {
    textAlign: 'center',
    justifyContent: 'center',
    width: 500,
    marginTop:0,



}

let button= {
    position: 'absolute'

}

 class Apps extends Component {
  state = {
    keys: '2',
  };

  stateChange=(value)=>{
    this.setState({ keys: value });

  }
    render() {
      if(this.state.keys === '1'){
        return (<div>
          <ApolloProvider client={client}>
            <App />
          </ApolloProvider>
          <br />
          <br />
          <br />
          <br />
          <ApolloProvider client={client}>
            <Collections  />
          </ApolloProvider>
          <div style={wrappers}>
            <Button type="primary" onClick={()=>this.stateChange('2')} icon="previous" size={"large"}>Go Back</Button>
          </div>
        </div>
        )
      }
      else{
        return(
          <div>
            <br />
            <br />
            <ApolloProvider client={client}>
              <ButtonSiz />
            </ApolloProvider>
            <br />
            <br />
            <br />
            <br />
            <br />
              <div style={wrapper}>
                <Button type="primary" onClick={()=>this.stateChange('1')} icon="download" size={"large"}>Upload</Button>
              </div>
            <br />
            <br />
            <br />
            <br />
            <br />
              <ApolloProvider client={client}>
                <CollectionsPage />
              </ApolloProvider>

          </div>

        )
      }
    }
  };


ReactDOM.render(  <Apps/>,  document.getElementById('root'),);
registerServiceWorker();
