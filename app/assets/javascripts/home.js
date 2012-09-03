//Validate the email form using jQuery
$(document).ready(function () {
	$("#signUp").validate({
		errorLabelContainer: "#error",
		invalidHandler: function(form, validator) {
			$("div#error").show();
		}
	});
});