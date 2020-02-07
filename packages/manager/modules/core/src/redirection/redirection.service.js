import get from 'lodash/get';
import constants from './redirection.constants';

export default class RedirectionService {
  /* @ngInject */
  constructor(coreConfig) {
    this.coreConfig = coreConfig;
  }

  getUser() {
    return this.OvhApiMe.get().$promise;
  }

  getURL(id) {
    const regionConstants = constants[this.coreConfig.getRegion()];
    return get(regionConstants, id);
  }
}
