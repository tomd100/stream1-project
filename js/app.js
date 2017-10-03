// JavaScript File

angular.module('MidiAuto', ['ngRoute', 'RouteControllers', 'UserService', 'angular-storage', 'MidiAutoService', 'MidiAutoDirective']); // these are dependencies - adding UserService links the service to the app..?

angular.module('MidiAuto')
.config(function ($locationProvider, $routeProvider) {
    
    $locationProvider.html5Mode(true); 

// define routes:
// this is substituting text within the url - making them look more logical and easier to read. 
// the website appears to have a logical structure. 

    $routeProvider
    
//*************************************************************************************************    
        .when('/', {
            templateUrl: 'templates/home.html',
            controller: 'HomeController'
        })
        
        .when('/faq',{
            templateUrl: 'templates/faq.html',
            controller: 'FaqController'
        })
        
        .when('/contact',{
            templateUrl: 'templates/contact.html',
            controller: 'ContactController'
        });
        
//*************************************************************************************************
});
