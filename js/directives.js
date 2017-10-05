
angular.module("MidiAutoDirectives",[])

.directive("faqSetOne", function() {
    return {
        restrict: "EA",
        templateUrl: "templates/directives/faq-set-one.html"
    };
})
.directive("faqSetTwo", function() {
    return {
        restrict: "EA",
        templateUrl: "templates/directives/faq-set-two.html"
    };
})

.directive("faqSetThree", function() {
    return {
        restrict: "EA",
        templateUrl: "templates/directives/faq-set-three.html"
    };
});