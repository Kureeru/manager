import angular from 'angular';
import component from './component';
import '@ovh-ux/manager-core';
import '@ovh-ux/ng-translate-async-loader';
import 'angular-translate';

import shortcutTile from './shortcut-tile';

const moduleName = 'ovhManagerHubShortcuts';

angular
  .module(moduleName, [
    'ngTranslateAsyncLoader',
    'oui',
    'ovhManagerCore',
    'pascalprecht.translate',
    shortcutTile,
  ])
  .component('ovhManagerHubShortcuts', component)
  .run(/* @ngTranslationsInject:json ./translations */);

export default moduleName;
