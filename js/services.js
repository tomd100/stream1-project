
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
    // .factory('modaService', function() {
    
    //     return { 
    //     ModalService.showModal({
    //         templateUrl: "contact-confirm",
    //         controller: "ContactController"
    //     }).then(function(modal) {
    //     //it's a bootstrap element, use 'modal' to show it
    //         modal.element.modal();
    //         modal.close.then(function(result) {
    //             console.log(result);
    //         });
    //     });