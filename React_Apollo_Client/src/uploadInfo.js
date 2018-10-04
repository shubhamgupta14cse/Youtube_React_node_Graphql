import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Modal, Form, Input, Radio } from 'antd';
import { graphql, } from "react-apollo";
import gql from 'graphql-tag';


const uploadFileMutation = gql`
  mutation($title: String!, $description: String!, $type: String!) {
    uploadInfo(title: $title, description: $description, type: $type )
  }
`;

let wrapper= {
    textAlign: 'center',
    justifyContent: 'center',


}

let button= {
    position: 'absolute'

}

const FormItem = Form.Item;
const CollectionCreateForm = Form.create()(
  class extends React.Component {
    render() {
      const { visible, onCancel, onCreate, form } = this.props;
      const { getFieldDecorator } = form;
      return (
        <Modal
          visible={visible}
          title="Create a new collection"
          okText="Upload"
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Form layout="vertical">

            <FormItem label="Title">
              {getFieldDecorator('title', {
                rules: [{ required: true, message: 'Please input the title of collection!' }],
              })(
                <Input />
              )}
            </FormItem>

            <FormItem label="Description">
              {getFieldDecorator('description')(<Input type="textarea" />)}
            </FormItem>
            <FormItem className="collection-create-form_last-form-item">
              {getFieldDecorator('modifier', {
                initialValue: 'public',
              })(
                <Radio.Group>
                  <Radio value="public">Public</Radio>
                  <Radio value="private">Private</Radio>
                  <Radio value="Unlisted">Unlisted</Radio>
                </Radio.Group>
              )}
            </FormItem>
          </Form>
        </Modal>
      );
    }
  }
);

class Collections extends React.Component {
  state = {
    visible: false,
  };

  showModal = () => {
    this.setState({ visible: true });
  }

  handleCancel = () => {
    this.setState({ visible: false });
  }

  handleCreate = () => {
    const form = this.formRef.props.form;
    form.validateFields(async (err, values) => {
      if (err) {
        return;
      }
      await this.props.mutate({ variables: {title: values.title, description :values.description, type:values.modifier}})
      console.log('Received values of form: ', values);
      form.resetFields();
      this.setState({ visible: false });
      return values;
    });
  }

  saveFormRef = (formRef) => {
    this.formRef = formRef;
  }

  render() {
    return (
      <div>
      <br/>
      <br/>
      <div >
        <br/>

        <Button style={{ width:120,marginTop:10}}type="primary"  icon="upload" onClick={this.showModal}>UPLOAD</Button>
        <CollectionCreateForm
          wrappedComponentRef={this.saveFormRef}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
        />
      </div>
      </div>
    );
  }
}
export default graphql(uploadFileMutation)(Collections);
//ReactDOM.render(<CollectionsPage />, mountNode);
