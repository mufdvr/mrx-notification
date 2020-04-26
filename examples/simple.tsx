/* eslint-disable no-console */
import React from 'react';
import notification from '../src';
import '../assets/index.css';

const simpleFn = () => {
  notification.error({
    message: 'test',
    description: 'des',
    onClose() {
      console.log('simple close');
    },
  });
};

const Demo = () => (
  <div>
    <button type="button" onClick={simpleFn}>
      simple show
    </button>
  </div>
);

export default Demo;
