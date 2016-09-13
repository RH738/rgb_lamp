    angular.
    module('rgbLampApp', []).
    component('scheduleList', {
        templateUrl: 'schedule-list/schedule-list.template.html',
        controller: function scheduleController($http) {
            var ctrl = this;



            $http.get('/:Entries').
            then(function(res){
                ctrl.entries = res.data;
            }, function(res){
                console.error("error from server = " + res);
            });
        }
    })
