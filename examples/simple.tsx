/* eslint-disable no-console */
import React from 'react';
import notification from '../src';
import '../assets/index.css';

const simpleFn = () => {
  notification.error({
    message: 'message',
    description: 'description',
    onClose() {
      console.log('simple close');
    },
  });
};

const topCenter = () => {
  notification.error({
    message: 'message',
    description: 'description',
    placement: 'topCenter',
    onClose() {
      console.log('top center close');
    },
  });
};

const Demo = () => (
  <div>
    <button type="button" onClick={simpleFn}>
      simple show
    </button>
    <button type="button" onClick={topCenter}>
      top center
    </button>
  </div>
);

export default Demo;
