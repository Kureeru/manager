import template from './template.html';
import controller from './controller';

export default {
  bindings: {
    plans: '<',
    onChange: '&',
    user: '<',
  },
  controller,
  template,
};
