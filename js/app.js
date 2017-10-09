
angular.module('MidiAuto', ['ngRoute', 'RouteControllers', 'MidiAutoServices', 'MidiAutoDirectives']); // these are dependencies - adding UserService links the service to the app..?

angular.module('MidiAuto')
    .config(function ($locationProvider, $routeProvider) {
    
        $locationProvider.html5Mode(true); 

//*************************************************************************************************    

        $routeProvider
        
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
            })
            
            .when('/about',{
                templateUrl: 'templates/about.html',
                controller: 'AboutController'
            });
        
//*************************************************************************************************
    });
