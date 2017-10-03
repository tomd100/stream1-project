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

angular.module('MidiAutoService', [])
    .factory('MidiAutoAPIService', function($http) {
        
        MidiAutoAPIService = {
            getTodos: function(url, data, token){
                var header = "Authorization: JWT " + token;
                return $http.get(url, {params:{"username":data}}, header);  // might be more data than this. 
            }
        };
        return MidiAutoAPIService;
    });
    
//*************************************************************************************************    