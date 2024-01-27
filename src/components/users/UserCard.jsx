import React from 'react';
import { FaBuilding, FaEnvelope, FaPhone, FaUser } from 'react-icons/fa';

import { LinkButton } from '..';
import UserInfoDetail from './UserInfoDetail';

const UserCard = ({ id, name, email, company, phone }) => (
  <li className="bg-white rounded-md shadow-lg overflow-hidden p-5">
    <UserInfoDetail icon={<FaUser />} text={name} bold={true} />
    <UserInfoDetail icon={<FaEnvelope />} text={email} />
    <UserInfoDetail icon={<FaPhone />} text={phone} />
    <UserInfoDetail icon={<FaBuilding />} text={company.name} />
    <div className="flex justify-between pt-5">
      <LinkButton path={`/users/${id}/albums`} name={'Albums'} color={'blue'} />
      <LinkButton path={`/users/${id}/posts`} name={'Posts'} color={'green'} />
    </div>
  </li>
);

export default UserCard;
