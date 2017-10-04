angular.module("MidiAutoDirective",[])

.directive("faqSetOne", function() {
    return {
        restrict: "A",
        templateUrl: "templates/directives/faq-set-one.html"
    };
})
.directive("faqSetTwo", function() {
    return {
        restrict: "A",
        templateUrl: "templates/directives/faq-set-two.html"
    };
});