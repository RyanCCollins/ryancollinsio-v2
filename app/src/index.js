import React from 'react';
import { render } from 'react-dom';
import RouterApp from './utils/routes';
import { history } from './store/store';
import { routes } from './utils/routes';
import { match } from 'react-router';
import runtime, { install } from 'offline-plugin/runtime';
import '../styles/styles.scss';

match({ history, routes },
  (error, redirectLocation, renderProps) => {
    if (error) {
      return console.error('Require.ensure error'); // eslint-disable-line
    }
    render(<RouterApp {...renderProps} />, document.getElementById('app'));
  });

 // eslint-disable
install({
  onUpdating: () => {
    console.log('SW Event:', 'onUpdating');
  },
  onUpdateReady: () => {
    console.log('SW Event:', 'onUpdateReady');
    // Tells to new SW to take control immediately
    runtime.applyUpdate();
  },
  onUpdated: () => {
    console.log('SW Event:', 'onUpdated');
    // Reload the webpage to load into the new version
    window.location.reload();
  },

  onUpdateFailed: () => {
    console.log('SW Event:', 'onUpdateFailed');
  }
}); // eslint-enable
