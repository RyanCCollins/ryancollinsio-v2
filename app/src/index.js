import React from 'react';
import { render } from 'react-dom';
import router from './utils/routes';
import '../styles/styles.scss';

render(router, document.getElementById('app'));
