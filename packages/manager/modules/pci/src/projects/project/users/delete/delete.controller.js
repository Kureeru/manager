import get from 'lodash/get';

export default class PciUsersDeleteController {
  /* @ngInject */
  constructor($translate, PciProjectsProjectUsersService) {
    this.$translate = $translate;
    this.PciProjectsProjectUsersService = PciProjectsProjectUsersService;
  }

  $onInit() {
    this.isLoading = false;
  }

  deleteUser() {
    this.isLoading = true;
    return this.PciProjectsProjectUsersService.delete(this.projectId, this.user)
      .then(() =>
        this.goBack(
          this.$translate.instant(
            'pci_projects_project_users_delete_success_message',
            {
              user: this.user.username,
            },
          ),
        ),
      )
      .catch((err) =>
        this.goBack(
          this.$translate.instant(
            'pci_projects_project_users_delete_error_delete',
            {
              message: get(err, 'data.message', null),
              user: this.user.username,
            },
          ),
          'error',
        ),
      )
      .finally(() => {
        this.isLoading = false;
      });
  }
}
