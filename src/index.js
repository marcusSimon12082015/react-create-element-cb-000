import React from 'react';
import ReactDOM from 'react-dom';

const title = React.createElement('h1',{},'My First React code');
const paragraph = React.createElement('p',{},'Writing some more HTML. Cool stuff!');
const container = React.createElement('div',{},[title,paragraph]);
ReactDOM.render(
  container,
  document.getElementById('global')
);

const list =
  React.createElement('div', {},
    React.createElement('h1', {}, 'My favorite ice cream flavors'),
    React.createElement('ul', {},
      [
        React.createElement('li', {className:'brown'}, 'Chocolate'),
        React.createElement('li', {className:'white'}, 'Vanilla'),
        React.createElement('li', {className:'yellow'}, 'Banana')
      ]
    )
  );

  
