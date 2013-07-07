'use strict';

eventsApp.controller('EditEventController',

	function EditEventController($scope) {
		$scope.snippet = '<span style="color:red">hi there</span>';
		

		$scope.saveEvent= function(event, newEventForm) {
			console.log(event);
			console.log(newEventForm);
			if(newEventForm.$valid) {
				window.alert('event ' + event.name + 'saved!');
			}
		}

		$scope.cancelEdit= function(event) {
			window.location = "EventDetails.html";
		}		

	}
);