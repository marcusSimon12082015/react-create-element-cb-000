import React from 'react';
import ReactDOM from 'react-dom';

const title = React.createElement('h1',{},'My First React code');
ReactDOM.render(
  title,
  document.getElementById('global')
);
