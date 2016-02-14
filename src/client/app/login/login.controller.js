var LoginController = (function () {
    function LoginController() {
        this.init();
    }
    LoginController.prototype.init = function () {
        this.title = 'Stap 12: selecteer een methode.';
    };
    LoginController.prototype.activate = function () {
    };
    LoginController.controllerId = 'LoginController';
    /* @ngInject */
    LoginController.$inject = [];
    return LoginController;
})();
angular
    .module('App')
    .controller(LoginController.controllerId, LoginController);
//# sourceMappingURL=login.controller.js.map