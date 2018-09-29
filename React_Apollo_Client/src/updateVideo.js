import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Modal, Form, Input, Radio } from 'antd';
import { graphql, } from "react-apollo";
import gql from 'graphql-tag';


const uploadFileMutation = gql`
  mutation($title: String!, $description: String!, $type: String!, $Id: String!) {
    updateFile(title: $title, description: $description, type: $type ,Id:$Id)
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
          title="Update Your Youtube Video"
          okText="Update"
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Form layout="vertical">

            <FormItem label="New Title">
              {getFieldDecorator('title', {
                rules: [{ message: 'Please input the title of collection!' }],
              })(
                <Input />
                 )}

            </FormItem>

            <FormItem label="YouTube video ID">
              {getFieldDecorator('Id', {

                rules: [{ required: true, message: 'Please input you youtube video unique ID!' }],
              })(
                <Input />
              )}
            </FormItem>

            <FormItem label="New Description">
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

class CollectionsPage extends React.Component {
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
      await this.props.mutate({ variables: {title: values.title, description :values.description, type:values.modifier ,Id:values.Id }})
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
      <div style={wrapper}>
        <Button type="primary" size={'large'} onClick={this.showModal}>Update Info</Button>
        <CollectionCreateForm
          wrappedComponentRef={this.saveFormRef}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
        />
      </div>
    );
  }
}
export default graphql(uploadFileMutation)(CollectionsPage);
//ReactDOM.render(<CollectionsPage />, mountNode);
