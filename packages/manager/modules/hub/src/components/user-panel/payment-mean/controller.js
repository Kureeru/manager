import PaymentMethod from './payment-method.class';

export default class ManagerHubPaymentMeanCtrl {
  /* @ngInject */
  constructor($q, ovhPaymentMethod, RedirectionService) {
    this.$q = $q;
    this.ovhPaymentMethod = ovhPaymentMethod;
    this.RedirectionService = RedirectionService;
  }

  $onInit() {
    this.isLoading = true;
    return this.ovhPaymentMethod
      .getDefaultPaymentMethod()
      .then((paymentMethod) => {
        this.paymentMethod = new PaymentMethod(paymentMethod);
      })
      .finally(() => {
        this.isLoading = false;
      });
  }
}
