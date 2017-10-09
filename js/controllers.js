
angular.module("RouteControllers", [])

    .controller("IndexController", function($scope, scrollService, variablesService) {
        
        // Need to consider whether to make the cotrollers objects on the $scope = better practice
        // var indexController = this;  
        // Also: consider the use of the $inject property to better manage dependencies
        
        console.log("Index");
        
        scrollService.pageScroll();
        
        $scope.logoImagePath = variablesService.logoImagePath;
        $scope.homeImagePath = variablesService.homeImagePath;
        $scope.faqImagePath = variablesService.faqImagePath;
        $scope.contactImagePath = variablesService.contactImagePath;
        $scope.aboutImagePath = variablesService.aboutImagePath;
        
        $scope.cssPath = variablesService.cssPath;
        
        // console.log($scope.logoImagePath);
        // console.log($scope.homeImagePath);
        // console.log($scope.faqImagePath);
        // console.log($scope.contactImagePath);
        // console.log($scope.aboutImagePath);                        
        // console.log($scope.cssPath);
        
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

    .controller("ContactController", function($scope, scrollService) {

        console.log("Contact");
        
        $scope.submitInfoForm = {};
        // $scope.submitInfoForm.submitted=false;

        $scope.submitForm = function() {
            
            // $scope.contactInfoForm.submitted=true;   
            
            // console.log($scope.user.name);
            // console.log($scope.user.email);
            // console.log($scope.user.comment);

            if ($scope.contactInfoForm.$valid) { // if the registration form is valid
            
                $scope.submitInfoForm.name = $scope.user.name;
                $scope.submitInfoForm.email = $scope.user.email;
                $scope.submitInfoForm.comment = $scope.user.comment;
                
                $scope.user.name="";
                $scope.user.email="";
                $scope.user.comment="";
                
                $scope.contactInfoForm.submitted=false;
                
                // submit form
                console.log($scope.submitInfoForm.name);
                console.log($scope.submitInfoForm.email);
                console.log($scope.submitInfoForm.comment);
                
            } else {
                
                console.log($scope.contactInfoForm.submitted)
                $scope.contactInfoForm.submitted=true;
                
            }
            
        };
        
    })
//*************************************************************************************************

    .controller("AboutController", function($scope, scrollService) {

        console.log("About");        
        
    })
        
//*************************************************************************************************