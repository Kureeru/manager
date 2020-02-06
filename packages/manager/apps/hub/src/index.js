import 'script-loader!jquery'; // eslint-disable-line
/* eslint-disable import/no-webpack-loader-syntax, import/extensions */
import 'script-loader!moment/min/moment-with-locales.min.js';
/* eslint-enable import/no-webpack-loader-syntax, import/extensions */
import { Environment } from '@ovh-ux/manager-config';
import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import isString from 'lodash/isString';

import 'ovh-ui-angular';
import ovhManagerCore from '@ovh-ux/manager-core';
import ovhManagerNavbar from '@ovh-ux/manager-navbar';

import atInternet from './components/at-internet';
import preload from './components/manager-preload';

import controller from './controller';
import routing from './routing';
import './index.scss';
import 'ovh-ui-kit/dist/oui.css';

Environment.setRegion(__WEBPACK_REGION__);
Environment.setVersion(__VERSION__);

angular
  .module(
    'managerHubApp',
    [
      atInternet,
      'oui',
      ovhManagerCore,
      ovhManagerNavbar,
      preload,
      uiRouter,
      __NG_APP_INJECTIONS__,
    ].filter(isString),
  )
  .controller('HubController', controller)
  .config(
    /* @ngInject */ ($locationProvider) => $locationProvider.hashPrefix(''),
  )
  .config(
    /* @ngInject */ (TranslateServiceProvider) => {
      const defaultLanguage = TranslateServiceProvider.getUserLocale();
      // set moment locale
      moment.locale(defaultLanguage.split('_')[0]);
    },
  )
  .config(routing);
