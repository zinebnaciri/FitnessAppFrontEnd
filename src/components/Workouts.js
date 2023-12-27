// Workouts.js
import React from 'react';
import Layout from './assets/appbar';
import StickyFooter from './assets/footer';

const Workouts = () => {
  return (
    <div>
      <Layout>
      {/* Workouts content */}
      <h1>Workouts</h1>
      <StickyFooter />
      </Layout>
    </div>
  );
};

export default Workouts;
