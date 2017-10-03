// JavaScript File

angular.module("RouteControllers", [])

//*************************************************************************************************

    .controller("HomeController", function($scope) {
        $scope.title = "Midi Automation";
    })
    
//*************************************************************************************************    

    .controller("FaqController", function($scope, $location, MidiAutoAPIService, store){
        $scope.title = "Midi Automation";
        var URL = "https://morning-castle-91468.herokuapp.com/";
        
        // $scope.authToken = store.get("authToken");
        // $scope.username = store.get("username");
        
        // $scope.todos= [];
        
        // $scope.refreshTodos = function(){
        //     TodoAPIService.getTodos(URL + "todo/", $scope.username, $scope.authToken)
        //         .then(function(results) {
        //             $scope.todos = results.data || [];
        //             console.log($scope.todos);
        //     }).catch(function(err) {
        //         console.log(err.data);
        //     });
        // } // why does simply adding a refreshTodos fuction actually refresh the page
        
        // $scope.refreshTodos(); 
        
        // $scope.submitForm = function(){
        //     if($scope.todoForm.$valid) {
        //         $scope.todo.username = $scope.username;
        //         $scope.todos.push($scope.todo);
                
        //     TodoAPIService.createTodo(URL + "todo/", $scope.todo, $scope.authToken)
        //         .then(function(results){
        //             console.log(results);
        //             $scope.refreshTodos();
        //         }).catch(function(err){
        //             console.log(err.data);
        //         });
        //     }
        // };
    })
    
//*************************************************************************************************    

    .controller("ContactController", function($scope, UserAPIService, store) {
        $scope.title = "Midi Automation";
        store.remove("testObject");     // not sure I need this for the project.
        $scope.registrationUser = {};   // Check name - might change
        
        var URL = "https://morning-castle-91468.herokuapp.com/";
        
        // $scope.login = function(){
        //     UserAPIService.callAPI(URL + "/accounts/api-token-auth/", $scope.data)
        //         .then(function(results) {
        //             $scope.token = results.data.token;
        //             store.set("username", $scope.registrationUser.username);
        //             store.set("authToken", $scope.token);
        //         })
        //         .catch(function(err) {
        //             console.log(err);
        //         });
        // }
        
                // when you click submit this function is run. The link to this is in the html. 
        // $scope.submitForm = function() {
        //     if ($scope.registrationForm.$valid) { // if the registration form is valid
        //         $scope.registrationUser.username = $scope.user.username;
        //         $scope.registrationUser.password = $scope.user.password;
    
        //         UserAPIService.callAPI(URL + "accounts/register/", $scope.registrationUser)
        //             .then(function(results) {
        //                 $scope.data = results.data;
        //                 alert("You have successfully registered to Angular Todo");
        //                 $scope.login();
        //             })
        //             .catch(function(err) {
        //                 alert("Oops! Something went wrong!");
        //                 console.log(err);
        //             });
        //     }
        // };

    }); 
    
//*************************************************************************************************