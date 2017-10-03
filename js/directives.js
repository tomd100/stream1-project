angular.module("MidiAutoDirective",[])
.directive("temp", function() {
    return {
        restrict: "A",
        templateUrl: "templates/directives/temp.tml"
    };
})