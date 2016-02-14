(function() {
'use strict';

    angular
        .module('App')
        .controller('AppController', AppController);

    AppController.$inject = ['$mdDialog','$scope','$mdSidenav','$log'];
    function AppController($mdDialog,$scope,$mdSidenav,$log) {
        var vm = this;
        var alert;
        vm.title = 'FirePower';
        vm.toggleMenu   = toggleMenu;
        vm.showAlert = showAlert;
        vm.showDialog = showDialog;
        $scope.items = [1, 2, 3];
        activate();
        
       function toggleMenu() {
            $mdSidenav('left').toggle();
        }


        
        

        // Internal method
    function showAlert() {
      alert = $mdDialog.alert({
        title: 'Attention',
        textContent: 'This is an example of how easy dialogs can be!',
        ok: 'Close'
      });
      $mdDialog
        .show( alert )
        .finally(function() {
          alert = undefined;
        });
    }

        function activate() { }
        
        function showDialog($event) {
       var parentEl = angular.element(document.body);
       $mdDialog.show({
         parent: parentEl,
         targetEvent: $event,
         template:
           '<md-dialog aria-label="List dialog">' +
           '  <md-dialog-content>'+
           '    <md-list>'+
           '      <md-list-item ng-repeat="item in items">'+
           '       <p>Number {{item}}</p>' +
           '      '+
           '    </md-list-item></md-list>'+
           '  </md-dialog-content>' +
           '  <md-dialog-actions>' +
           '    <md-button ng-click="closeDialog()" class="md-primary">' +
           '      Close Dialog' +
           '    </md-button>' +
           '  </md-dialog-actions>' +
           '</md-dialog>',
         locals: {
           items: $scope.items
         },
         controller: DialogController
      });
      function DialogController($scope, $mdDialog, items) {
        $scope.items = items;
        $scope.closeDialog = function() {
          $mdDialog.hide();
        }
      }}
    }
})();