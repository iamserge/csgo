
import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Col, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import Loading from './Loading.js';
import UserInfo from './UserInfo.js';
let timeout = '';
export default class DocumentEditor extends React.Component {
  

  constructor(params) {
    super(params);
    this.handleType = this.handleType.bind(this);
    this.state = {
      username: '',
      userInfo: {},
      gotInfo: false,
      waiting: false
    }
  }

  handleType(event) {
    
    
    const _this = this;
    const userName = event.target.value;
    if (userName.length == 0) {
      this.setState({
        username: '',
        userInfo: {},
        gotInfo: false
      });
    }


    clearTimeout(timeout);
    timeout = setTimeout(() => {
      if (userName.length > 2)
        _this.setState({
          username: userName,
          userInfo: {},
          gotInfo: true,
          waiting: true
        })
        Meteor.call('steam.getUserInfo', {name: userName }, (err,res) => {
          _this.setState({
            username: userName,
            userInfo: res,
            gotInfo: true,
            waiting: false
          })
          console.log(_this.state);
        });
    }, 500);
  }

  render() {
    
    
    return (
      <Col md={8} mdOffset={2}>
        <FormGroup>
          <FormControl type="text" placeholder="Enter you username" onChange = {this.handleType} className = { this.state.waiting ? ' loading' : '' }/>
          { this.state.waiting && <i className='fa fa-circle-o-notch fa-spin'></i> }
        </FormGroup>
        {
          this.state.gotInfo &&  <UserInfo user = { this.state.userInfo } /> 
        }
      </Col>
    )
  }
}

DocumentEditor.propTypes = {
  doc: React.PropTypes.object,
};
