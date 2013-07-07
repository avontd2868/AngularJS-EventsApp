'use strict';

eventsApp.factory('eventData', function (){
	return {
		event: {
			name: 'Angular Boot Camp',
			date: '1/1/2013',
			time: '10:30 am',
			location: {
				address: 'Google Headquarters',
				city: 'Mountain View',
				province: 'CA'
			},
			imageUrl: 'img/angularjs-logo.png',
			sessions: [
				{
					name:'Directives Masterclass', 
					upVoteCount:0,
					duration:1
				},
				{
					name:'Scope n shit', 
					upVoteCount:0,
					duration:2
				},
				{
					name:'bitch controllers', 
					upVoteCount:0,
					duration:4
				}
			] 
		}
	};
});