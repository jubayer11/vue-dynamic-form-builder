/**
 * Enum for all supported field types in DynamicForm.
 * Use these values for defining `fieldType` on field config objects.
 *
 * @readonly
 * @enum {string}
 */
export const fieldType = {
    textField: 'textField',          // Standard single-line input (text, email, number, etc.)
    textArea: 'textArea',            // Multi-line text input
    selectField: 'selectField',      // Single-select dropdown
    radioField: 'radioField',        // Radio group input
    multiSelect: 'multiSelect',      // Multi-select input
    passwordTextField: 'passwordTextField', // Password input (masked)
    datePickerField: 'datePickerField',     // Date/time picker
};

