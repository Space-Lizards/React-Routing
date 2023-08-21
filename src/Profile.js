import React from 'react';
import { Helmet } from 'react-helmet';

function Profile() {
  return (
    <div>
      <Helmet>
        <title>Profile</title>
      </Helmet>
      <div>
        <h3>Это профиль</h3>
      </div>
    </div>
  );
}

export default Profile;
