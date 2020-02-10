import angular from 'angular';

import hubComponent from './hub.component';
import routing from './hub.routing';

const moduleName = 'ovhManagerHubModule';

angular
  .module(moduleName, [])
  .config(routing)
  .component('ovhManagerHub', hubComponent)
  .run(/* @ngTranslationsInject:json ./translations */);

export default moduleName;
