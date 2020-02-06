import controller from './controller';
import template from './template.html';

const component = {
  require: {
    navbarCtrl: '^^ouiNavbar',
  },
  bindings: {
    subsidiary: '@',
  },
  controller,
  template,
};

export default component;
