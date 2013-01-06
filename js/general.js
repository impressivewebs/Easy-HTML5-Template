/*globals $ */

// The script below does essentially nothing other than define some nearly empty methods and a few settings for demonstration purposes
// You can delete this whole thing, or do whatever you want with it

// variable for caching settings
var s = null,

	PrimaryNameSpace = {
		// define your oft-used settings below
		settings: {
			basicExample: $('.main'),
			nestedExample: {
				first: true,
				second: true,
				third: true,
				fourth: true,
				fifth: ['one', 'two', 'three', 'four', 'five', 'six']
			},

			foo: 'bar'
		},

		// the method that initializes stuff
		init: function () {
			/*	the line below is included to reference the settings 
				without always having to type "this.settings" each time */
			s = this.settings;
			// using firebug you can view all settings with "console.log(s)";

			// after you do stuff here, you can call the next method
			// You can use "this" in the current context to reference "PrimaryNameSpace" directly
			this.nextMethod();

		},

		nextMethod: function () {
			// do stuff here
		},

		anotherMethod: function () {
			// do more stuff here
		}

		// remember not to use a trailing comma after the last method is defined; you could leave a dummy method here to prevent that error
	};

// The section below initializes the whole thing; you could pass in some JSON data or some other object that needs to be worked with, and call individual methods.

$(function () {
	PrimaryNameSpace.init();
	PrimaryNameSpace.anotherMethod();
});