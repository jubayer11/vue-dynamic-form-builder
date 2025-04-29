import { helpers } from "@vuelidate/validators";

/**
 * Class to define validation rules for dynamic form fields.
 * Each static method returns a new ValidationSetup instance for the given rule.
 */
export class ValidationSetup {
    /**
     * @param {string} type - The validation rule type, e.g. 'required', 'minLength', 'pattern', etc.
     * @param {any} value - Additional parameter for the rule (length, value to match, regex, etc).
     * @param {string|null} message - Optional custom error message.
     * @param {function|null} customValidator - Custom validation function (for 'custom' rule).
     */
    constructor(type, value = null, message = null, customValidator = null) {
        this.type = type;
        this.value = value;
        this.message = message;
        this.customValidator = customValidator;
    }

    /** Field is required (not empty). */
    static required(message = null) {
        return new ValidationSetup('required', null, message);
    }

    /** Value must be a valid email address. */
    static email(message = null) {
        return new ValidationSetup('email', null, message);
    }

    /** Value must have at least the given string length. */
    static minLength(length, message = null) {
        return new ValidationSetup('minLength', length, message);
    }

    /** Value must not exceed the given string length. */
    static maxLength(length, message = null) {
        return new ValidationSetup('maxLength', length, message);
    }

    /** Value must be at least the given numeric value. */
    static minValue(value, message = null) {
        return new ValidationSetup('minValue', value, message);
    }

    /** Value must not exceed the given numeric value. */
    static maxValue(value, message = null) {
        return new ValidationSetup('maxValue', value, message);
    }

    /** Value must be equal to another field's value (forType of that field). */
    static sameAs(fieldToMatch, message = null) {
        return new ValidationSetup('sameAs', fieldToMatch, message);
    }


    /**
     * Value must be between min and max (inclusive).
     * @param {[number, number]} range - Array of [min, max].
     * @param {string|null} message
     */
    static between(range, message = null) {
        return new ValidationSetup('between', range, message);
    }

    /**
     * Value must be a valid URL.
     * @param {string|null} message
     */
    static url(message = null) {
        return new ValidationSetup('url', null, message);
    }

    /**
     * Value must be an integer.
     * @param {string|null} message
     */
    static integer(message = null) {
        return new ValidationSetup('integer', null, message);
    }

    /**
     * Value must be a decimal (float).
     * @param {string|null} message
     */
    static decimal(message = null) {
        return new ValidationSetup('decimal', null, message);
    }


    /** Custom validation function. */
    static custom(validatorFn, message = null) {
        return new ValidationSetup('custom', null, message, validatorFn);
    }

}
