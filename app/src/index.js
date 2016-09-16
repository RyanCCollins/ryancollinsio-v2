import React from 'react';
import { render } from 'react-dom';
import RouterApp from './utils/routes';
import { history } from '../store/store';
import { routes } from './utils/routes';
import { match } from 'react-router';
import '../styles/styles.scss';

match({ history, routes },
  (error, redirectLocation, renderProps) => {
    if (error) {
      return console.error('Require.ensure error'); // eslint-disable-line
    }
    render(<RouterApp {...renderProps} />, document.getElementById('app'));
  });
