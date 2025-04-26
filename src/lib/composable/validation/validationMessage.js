export const validationMessages = {
    required: ({ fieldName }) => `${fieldName || 'This field'} is required.`,
    email: ({ fieldName }) => `Please enter a valid email address for ${fieldName || 'this field'}.`,
    minLength: ({ fieldName, value }) => `${fieldName || 'This field'} must be at least ${value} characters long.`,
    maxLength: ({ fieldName, value }) => `${fieldName || 'This field'} cannot exceed ${value} characters.`,
    minValue: ({ fieldName, value }) => `${fieldName || 'This field'} must be at least ${value}.`,
    maxValue: ({ fieldName, value }) => `${fieldName || 'This field'} cannot exceed ${value}.`,
    sameAs: ({fieldName, value})=> `${fieldName || 'This field'} does not matches with  ${value}`,
    custom: ({ message }) => message || 'This field is invalid.', // Default for custom validators
};


export function getValidationMessage(ruleName, params = {}, customMessage = null) {
    if (customMessage) return customMessage; // Use custom message if provided
    const messageTemplate = validationMessages[ruleName];
    return typeof messageTemplate === 'function' ? messageTemplate(params) : 'Invalid field.';
}
