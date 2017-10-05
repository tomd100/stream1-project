angular.module('UserService', [])                           //[] means no other dependencies - no other files. 
    .factory('UserAPIService', function($http) {
 
        UserAPIService = {
            callAPI: function(url, data) {
                return $http.post(url, data);
            }
        };
        return UserAPIService;
    });
    
//*************************************************************************************************    
angular.module("MidiAutoService", [])
    .factory('scrollService', function() {
    
    scrollService = {
        pageScroll:function(){
            $(window).scroll(function () {
                if ($(this).scrollTop() > 50) {
                    $('#back-to-top').fadeIn();
                } else {
                    $('#back-to-top').fadeOut();
                }
            });
            // scroll body to 0px on click
            $('#back-to-top').click(function () {
                $('#back-to-top').tooltip('hide');
                $('body,html').animate({
                    scrollTop: 0
                }, 800);
                return false;
            });
        }
    }
    return scrollService;
    })       
//*************************************************************************************************    

    // .factory("variablesService", function() {
    //     variablesService = function(){    
    //         return {
    //             imagePath: "images/" ,
    //             cssPath: "css/"
    //         };
    //     }
    //     return variablesService;
    // });

    .factory("variablesService", function() {
            return {
                imagePath: "images/" ,
                cssPath: "css/"
            };
    });
