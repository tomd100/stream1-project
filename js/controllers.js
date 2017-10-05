// JavaScript File

angular.module("RouteControllers", [])

//*************************************************************************************************

    .controller("HomeController", function($scope, scrollService, variablesService) {
    // .controller("HomeController", function($scope, scrollService) {
        // $scope.title = "Midi Automation";
        
        $scope.title = "Midi Automation";
        scrollService.pageScroll();
        
        $scope.imagePath = variablesService.imagePath;
        $scope.cssPath = variablesService.cssPath;
        // console.log($scope.imagePath);
        // console.log($scope.cssPath);
        
    })
    
//*************************************************************************************************    

    .controller("FaqController", function($scope, scrollService){
        $scope.title = "Midi Automation";
        scrollService.pageScroll();
    })
    
//*************************************************************************************************    

    .controller("ContactController", function($scope, scrollService, UserAPIService, store) {
        $scope.title = "Midi Automation";
        store.remove("testObject");     // not sure I need this for the project.
        $scope.registrationUser = {};   // Check name - might change
        
        var URL = "https://morning-castle-91468.herokuapp.com/";
        scrollService.pageScroll();
    })
//*************************************************************************************************

    .controller("AboutController", function($scope, scrollService) {
        $scope.title = "Midi Automation";
        scrollService.pageScroll();
    })
        
//*************************************************************************************************