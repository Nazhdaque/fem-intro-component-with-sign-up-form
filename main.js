import "./style.css";
import JustValidate from "just-validate";

const validator = new JustValidate("#sign-up-form", {
	successFieldCssClass: ["success-field"],
	errorFieldCssClass: ["error-field"],
	successLabelCssClass: ["labels", "success-label"],
	errorLabelCssClass: ["labels", "error-label"],
	validateBeforeSubmitting: true,
});

validator
	.addField(
		"#first-name",
		[
			{
				rule: "required",
				errorMessage: "First Name cannot be empty",
			},
			{
				rule: "maxLength",
				value: 10,
				errorMessage: "Please no more than 10 characters",
			},
			{
				rule: "minLength",
				value: 2,
				errorMessage: "Please at least 2 characters",
			},
		],
		{
			successMessage: "Nice!",
		}
	)
	.addField(
		"#last-name",
		[
			{
				rule: "required",
				errorMessage: "Last Name cannot be empty",
			},
			{
				rule: "maxLength",
				value: 10,
				errorMessage: "Please no more than 10 characters",
			},
			{
				rule: "minLength",
				value: 2,
				errorMessage: "Please at least 2 characters",
			},
		],
		{
			successMessage: "Perfect!",
		}
	)
	.addField(
		"#email",
		[
			{
				rule: "required",
			},
			{
				rule: "email",
				errorMessage: "Looks like this is not an email",
			},
		],
		{
			successMessage: "Cool!",
		}
	)
	.addField(
		"#password",
		[
			{
				rule: "required",
				errorMessage: "Password cannot be empty",
			},
			{
				rule: "password",
			},
		],
		{
			successMessage: "Super duper!",
		}
	);
