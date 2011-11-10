/*globals $ window document */

$(function () {
	var s = null,
	
	PrimaryNameSpace = {
		settings : {
			basicExample: $(".main"),
			nestedExample : {
				first: true,
				second: true,
				third: true,
				fourth: true,
				fifth : ['one', 'two', 'three', 'four', 'five', 'six']
			},

			foo: "bar"
		},

		init: function () {
			s = this.settings;
			this.nextMethod();
		},

		nextMethod: function () {
			s = this.settings;
		},

		anotherMethod: function () {
			s = this.settings;
		}

	};

	PrimaryNameSpace.init();

});