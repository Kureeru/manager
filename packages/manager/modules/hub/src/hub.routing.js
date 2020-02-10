export default /* @ngInject */ ($stateProvider) => {
  $stateProvider.state('hub', {
    component: 'ovhManagerHub',
    translations: {
      value: ['.'],
      format: 'json',
    },
    url: '/hub',
  });
};
