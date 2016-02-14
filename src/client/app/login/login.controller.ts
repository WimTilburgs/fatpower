 class LoginController {
        static controllerId = 'LoginController';
        title: string;// = 'Ik ben de LoginController';
        
        /* @ngInject */
        static $inject = [
        ];
        constructor(

           
        ) {
            this.init();
        }
        private init() {
            this.title = 'Aanmelden';
        }
        activate(): void {
            

        }
    }

    angular
        .module('App')
        .controller(LoginController.controllerId, LoginController);