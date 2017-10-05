
angular.module("MidiAutoServices", [])

//*************************************************************************************************

    .factory("variablesService", function() {
        
        return {
            logoImagePath: "images/logo/" ,
            homeImagePath: "images/home/" ,
            faqImagePath: "images/faq/" ,
            contactImagePath: "images/contact/" ,
            aboutImagePath: "images/about/" ,
            
            cssPath: "css/"
        };
    })
    
//*************************************************************************************************

    .factory('APIService', function($http) {
 
        return {
            callAPI: function(url, data) {
                return $http.post(url, data);
            }
        };
    })
    
//*************************************************************************************************    

    .factory('scrollService', function() {
    
        return {
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
        };
    });       
    
//*************************************************************************************************    
