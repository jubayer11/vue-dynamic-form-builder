/**
 * Generates Vuelidate validation rules from field configs.
 * Supports required, email, minLength, maxLength, minValue, maxValue, sameAs, pattern, custom, between, url, integer, decimal, requiredIf, requiredTrue.
 *
 * @param {Array<Object>} fields - List of field configs (usually schema.fields).
 * @param {Object} formData - The current form data (for context in custom/sameAs).
 * @returns {Object} - Rules object for Vuelidate.
 */
import { getValidationMessage } from './validationMessage.js';
import {
    email,
    helpers,
    maxLength,
    maxValue,
    minLength,
    minValue,
    required,
    sameAs,
    between,
    url,
    integer,
    decimal
} from "@vuelidate/validators";
import { computed } from "vue";

export function generateValidationRules(fields, formData) {
    const rules = {};

    fields.forEach(field => {
        const fieldName = field.fieldName || field.label;
        rules[field.forType] = {};

        field.validations?.forEach(validation => {
            const params = {
                fieldName,
                value: validation.value,
                message: validation.message,
            };

            switch (validation.type) {

                case 'required':
                    rules[field.forType].required = helpers.withMessage(
                        () => getValidationMessage('required', params, validation.message),
                        required
                    );
                    break;



                case 'email':
                    rules[field.forType].email = helpers.withMessage(
                        () => getValidationMessage('email', params, validation.message),
                        email
                    );
                    break;
                case 'minLength':
                    rules[field.forType].minLength = helpers.withMessage(
                        () => getValidationMessage('minLength', params, validation.message),
                        minLength(validation.value)
                    );
                    break;
                case 'maxLength':
                    rules[field.forType].maxLength = helpers.withMessage(
                        () => getValidationMessage('maxLength', params, validation.message),
                        maxLength(validation.value)
                    );
                    break;
                case 'minValue':
                    rules[field.forType].minValue = helpers.withMessage(
                        () => getValidationMessage('minValue', params, validation.message),
                        minValue(validation.value)
                    );
                    break;
                case 'maxValue':
                    rules[field.forType].maxValue = helpers.withMessage(
                        () => getValidationMessage('maxValue', params, validation.message),
                        maxValue(validation.value)
                    );
                    break;
                case 'sameAs':
                    rules[field.forType].sameAs = helpers.withMessage(
                        () => getValidationMessage('sameAs', params, validation.message),
                        sameAs(computed(() => formData[validation.value]))
                    );
                    break;
                case 'integer':
                    rules[field.forType].integer = helpers.withMessage(
                        () => getValidationMessage('integer', params, validation.message),
                        integer
                    );
                    break;
                case 'decimal':
                    console.log('just checking');
                    rules[field.forType].decimal = helpers.withMessage(
                        () => getValidationMessage('decimal', params, validation.message),
                        decimal
                    );
                    break;

                case 'between':
                    if (Array.isArray(validation.value) && validation.value.length === 2) {
                        rules[field.forType].between = helpers.withMessage(
                            () => getValidationMessage('between', params, validation.message),
                            between(validation.value[0], validation.value[1])
                        );
                    }
                    break;
                case 'url':
                    rules[field.forType].url = helpers.withMessage(
                        () => getValidationMessage('url', params, validation.message),
                        url
                    );
                    break;
                case 'custom':
                    rules[field.forType].custom = helpers.withMessage(
                        () => getValidationMessage('custom', params, validation.message),
                        value => validation.customValidator(value, formData)
                    );
                    break;
                default:
                    console.warn(`Unsupported validation type: ${validation.type}`);
            }
        });
    });

    return rules;
}
