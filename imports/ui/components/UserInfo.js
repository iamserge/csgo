import React from 'react';
import { Panel, Image} from 'react-bootstrap';
import { Link } from 'react-router';
import PublicNavigation from './PublicNavigation.js';
import AuthenticatedNavigation from './AuthenticatedNavigation.js';


const UserInfo = ({ user }) => (
  <div className="UserInfo">
    <Image src={user.avatarFull} circle />
    <p>{user.personaName}</p>
  </div>                         
);

UserInfo.propTypes = {
  user: React.PropTypes.object,
};

export default UserInfo;
