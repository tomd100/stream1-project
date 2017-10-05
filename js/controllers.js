
angular.module("RouteControllers", [])

    .controller("IndexController", function($scope, scrollService, variablesService) {

        console.log("Index");
        
        scrollService.pageScroll();
        
        $scope.logoImagePath = variablesService.logoImagePath;
        $scope.homeImagePath = variablesService.homeImagePath;
        $scope.faqImagePath = variablesService.faqImagePath;
        $scope.contactImagePath = variablesService.contactImagePath;
        $scope.aboutImagePath = variablesService.aboutImagePath;
        
        $scope.cssPath = variablesService.cssPath;
        
        console.log($scope.logoImagePath);
        console.log($scope.homeImagePath);
        console.log($scope.faqImagePath);
        console.log($scope.contactImagePath);
        console.log($scope.aboutImagePath);                        
        console.log($scope.cssPath);
        
    })
    
//*************************************************************************************************

    .controller("HomeController", function($scope, scrollService, variablesService) {

        console.log("Home");
        
    })
    
//*************************************************************************************************    

    .controller("FaqController", function($scope, scrollService){

        console.log("FAQ");

    })
    
//*************************************************************************************************    

    .controller("ContactController", function($scope, scrollService, APIService, store) {

        console.log("Contact");
        
        store.remove("testObject");     // not sure I need this for the project.
        $scope.registrationUser = {};   // Check name - might change
        
        var URL = "https://morning-castle-91468.herokuapp.com/";
        
        // scrollService.pageScroll();
        
    })
//*************************************************************************************************

    .controller("AboutController", function($scope, scrollService) {

        console.log("About");        
        
    })
        
//*************************************************************************************************