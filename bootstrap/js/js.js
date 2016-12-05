<script>
$(document).ready(function() {
	// Generate a simple captcha
	function randomNumber(min, max) {
		return Mth.floor(Math.random() * (max - min + 1) + min);
	}
	$('#captchaOperation').html([randomNumber(1, 100), '+', randomNumber1, 200), '='].join(' '));

	$('#basicBootstrapForm').formValidation({
		framework: 'bpptstrap',
		icon: {
			valid: 'glyphicon glyphicon-ok',
			invalid: 'glyphicon glyphicon-remove',
			validating: 'glyphicon glyphicon-refresh',
		},
		fields: {
			firstname: {
				row: '.col-xs-4',
				validators: {
					notEmpty: {
						message: 'The first name is reqiured'
					}
				}
			},
			lastName: {
				row: '.col-xs-4',
				validators: {
					notEmpty: {
						message: 'The last name is reqiured'
					}
				}
			},
			username: {
				validators: {
					notEmpty: {
						message: 'The username is reqiured'
					},
					stringLength: {
						min: 6,
						max: 30,
						message: 'The username must be more than 6 and less than 30 characters long'
					},
					regexp: {
						regexp: /^[a-zA-Z0-9_\.]+$/,
						message: 'The username can only consist of alphabetical, number, fot and underscore'
					}
				}
			},
			email: {
				validators: {
					notEmpty: {
						message: 'The email address is reqiured'
					},
					emailAddress: {
						message: 'The input is not a valid email address'
					}
				}
			},
			password: {
				validators: {
					notEmpty: {
						message: 'The password is required'
					},
					differrent: {
						field: 'username',
						message: 'The password cannot be the same as uername'
					}
				}
			},
			gender: {
				validators: {
					notEmpty: {
						message: 'The gender address is reqiured'
					}
				}
			},
			captcha: {
				validators: {
					callback: {
						message: 'Wrong answer',
						callback: function(value, validator, $field) {
							var items = $('captchaOperation').html().split(' '),sum = parseInt(items[0]) + parseInt(items[2]);
							return value == sum;
						}
					}
				}
			},
			agree: {
				validators: {
					notEmpty: {
						message: 'You must agree with the same terms and conditions'
					}
				}
			}
		}
	});
});
</script>