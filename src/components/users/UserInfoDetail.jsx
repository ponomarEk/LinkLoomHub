import React from 'react';

const UserInfoDetail = ({ icon, text, bold }) => (
  <div className="mb-2 flex items-center gap-3">
    {icon}
    <p className={`${bold ? 'font-semibold' : ''} text-gray-500 truncate text-sm`}>{text}</p>
  </div>
);

export default UserInfoDetail;
