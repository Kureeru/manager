export default class PaymentMethod {
  constructor(paymentMethod) {
    Object.assign(this, paymentMethod);
  }

  getStatusCategory() {
    switch (this.status) {
      case 'CREATED':
      case 'CANCELING':
      case 'CREATING':
        return 'info';
      case 'CANCELED':
      case 'ERROR':
      case 'EXPIRED':
        return 'error';
      case 'MAINTENANCE':
      case 'PAUSED':
        return 'warning';
      case 'VALID':
        return 'success';
      default:
        return 'info';
    }
  }
}
