export class ValidationSetup {
    constructor(type, value = null, message = null, customValidator = null) {
        this.type = type; // Type of validation, e.g., 'required', 'minLength'
        this.value = value; // Additional parameters for validation, e.g., minimum length
        this.message = message; // Custom message for the validation rule
        this.customValidator = customValidator; // Custom validation function (if applicable)
    }
    static required(message = null) {
        return new ValidationSetup('required', null, message);
    }
    static email(message = null) {
        return new ValidationSetup('email', null, message);
    }
    static minLength(length, message = null) {
        return new ValidationSetup('minLength', length, message);
    }
    static maxLength(length, message = null) {
        return new ValidationSetup('maxLength', length, message);
    }
    static minValue(value, message = null) {
        return new ValidationSetup('minValue', value, message);
    }
    static maxValue(value, message = null) {
        return new ValidationSetup('maxValue', value, message);
    }
    static sameAs(fieldToMatch, message = null) {
        return new ValidationSetup('sameAs',fieldToMatch,message);
    }
    static custom(validatorFn, message = null) {
        return new ValidationSetup('custom', null, message, validatorFn);
    }

}