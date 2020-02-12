export default class Service {
  constructor(resource) {
    Object.assign(this, resource);
  }

  get name() {
    return this.resource.name;
  }

  get path() {
    return this.route.url;
  }
}
