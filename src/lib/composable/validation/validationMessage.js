/**
 * Validation message templates for standard rules.
 * Used by getValidationMessage() for default/custom error messages.
 *
 * @type {Object<string, function(Object): string>}
 */
export const validationMessages = {
    required:    ({ fieldName }) => `${fieldName || 'This field'} is required.`,
    email:       ({ fieldName }) => `Please enter a valid email address for ${fieldName || 'this field'}.`,
    minLength:   ({ fieldName, value }) => `${fieldName || 'This field'} must be at least ${value} characters long.`,
    maxLength:   ({ fieldName, value }) => `${fieldName || 'This field'} cannot exceed ${value} characters.`,
    minValue:    ({ fieldName, value }) => `${fieldName || 'This field'} must be at least ${value}.`,
    maxValue:    ({ fieldName, value }) => `${fieldName || 'This field'} cannot exceed ${value}.`,
    sameAs:      ({ fieldName, value }) => `${fieldName || 'This field'} does not match ${value}`,
    between:     ({ fieldName, value }) => {
        const [min, max] = value || [];
        return `${fieldName || 'This field'} must be between ${min} and ${max}.`;
    },
    url:         ({ fieldName }) => `Please enter a valid URL for ${fieldName || 'this field'}.`,
    pattern:     ({ fieldName }) => `${fieldName || 'This field'} does not match the required pattern.`,
    integer:     ({ fieldName }) => `${fieldName || 'This field'} must be an integer.`,
    decimal:     ({ fieldName }) => `${fieldName || 'This field'} must be a decimal number.`,
    // Add more as you implement additional rules
    custom:      ({ message }) => message || 'This field is invalid.', // Default for custom validators
};

/**
 * Gets a validation message for a given rule.
 * @param {string} ruleName - The name of the validation rule (e.g. 'required', 'email').
 * @param {Object} [params={}] - Parameters for the template (e.g. fieldName, value).
 * @param {string|null} [customMessage=null] - Custom error message if provided.
 * @returns {string} - The generated validation message.
 */
export function getValidationMessage(ruleName, params = {}, customMessage = null) {
    if (customMessage) return customMessage; // Use custom message if provided
    const messageTemplate = validationMessages[ruleName];
    return typeof messageTemplate === 'function' ? messageTemplate(params) : 'Invalid field.';
}
