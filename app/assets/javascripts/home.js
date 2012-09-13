//Validate the email form using jQuery
$(document).ready(function () {
	//Move cursor to main input field
	$("#input-form").focus();
	//Enable someone to hit backspace if form is focussed
	document.onkeydown = function (e) {
	if (!e) {
		var e = window.event;
	}
	if (e.keyCode === 8 && !input.value) {
		history.back();
	}
	};
	//Validate form
	$("#signUp").validate({
		errorLabelContainer: "#error",
		invalidHandler: function(form, validator) {
			$("div#error").show();
		}
	});
});