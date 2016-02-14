/**
 * You must include the dependency on 'ngMaterial' 
 */
var myApp = angular.module('App', ['ngMaterial','ngRoute']);
 
 myApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
    when('/',{
    templateUrl: 'app/home/home.html',
        controller: 'AppController as vm'
    }).
      when('/dialogs', {
        templateUrl: 'app/dialogs.html',
        controller: 'AppController as vm'
      }).
      when('/login', {
        templateUrl: 'app/login/login.html',
        controller: 'LoginController as vm'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);
 
 myApp.config(function ($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('indigo')
            .accentPalette('pink')
            .warnPalette('red')
            .backgroundPalette('grey')
 });
    
    
     //     .config(function($mdDateLocaleProvider) {
        //   // Example of a French localization.
        //   $mdDateLocaleProvider.months = ['janvier', 'février', 'mars','janvier', 'février', 'mars','janvier', 'février', 'mars','janvier', 'février', 'mars'];
        //   $mdDateLocaleProvider.shortMonths = ['janv', 'févr', 'mars','janv', 'févr', 'mars','janv', 'févr', 'mars','janv', 'févr', 'mars'];
        //   $mdDateLocaleProvider.days = ['dimanche', 'lundi', 'mardi','woensdag','donderdag','vrijdag','zaterdag'];
        //   $mdDateLocaleProvider.shortDays = ['Zo', 'Ma', 'Di','Wo','Do','Vr','Za'];
        //   // Can change week display to start on Monday.
        //   $mdDateLocaleProvider.firstDayOfWeek = 1;
        //   // Optional.
        //   $mdDateLocaleProvider.dates = [1, 2, 3, 4, 5, 6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
        //   // Example uses moment.js to parse and format dates.
        //   $mdDateLocaleProvider.parseDate = function(dateString) {
        //     var m = moment(dateString, 'L', true);
        //     return m.isValid() ? m.toDate() : new Date(NaN);
        //   };
        //   $mdDateLocaleProvider.formatDate = function(date) {
        //     return moment(date).format('L');
        //   };
        //   $mdDateLocaleProvider.monthHeaderFormatter = function(date) {
        //     return myShortMonths[date.getMonth()] + ' ' + date.getFullYear();
        //   };
        //   // In addition to date display, date components also need localized messages
        //   // for aria-labels for screen-reader users.
        //   $mdDateLocaleProvider.weekNumberFormatter = function(weekNumber) {
        //     return 'Week ' + weekNumber;
        //   };
        //   $mdDateLocaleProvider.msgCalendar = 'Kalender';
        //   $mdDateLocaleProvider.msgOpenCalendar = 'Open de kalender';