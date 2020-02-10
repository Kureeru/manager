import angular from 'angular';
import '@ovh-ux/manager-core';
import '@uirouter/angularjs';
import 'oclazyload';

const moduleName = 'ovhManagerHub';

angular
  .module(moduleName, ['oc.lazyLoad', 'ui.router', 'ovhManagerCore'])
  .config(
    /* @ngInject */ ($stateProvider) => {
      $stateProvider.state('hub.**', {
        url: '/hub',
        lazyLoad: ($transition$) => {
          const $ocLazyLoad = $transition$.injector().get('$ocLazyLoad');

          return import('./hub.module').then((mod) =>
            $ocLazyLoad.inject(mod.default || mod),
          );
        },
      });
    },
  );

export default moduleName;
