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
            this.title = 'Stap 12: selecteer een methode.';
        }
        activate(): void {
            

        }
    }

    angular
        .module('App')
        .controller(LoginController.controllerId, LoginController);