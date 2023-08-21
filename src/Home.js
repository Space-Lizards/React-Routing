import React from 'react';
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Main</title>
      </Helmet>
      <div>
        <h3>Это главная</h3>
      </div>
    </div>
  );
};

export default Home;
