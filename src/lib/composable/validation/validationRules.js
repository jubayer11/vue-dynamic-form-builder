import { getValidationMessage } from './validationMessage.js';
import {email, helpers, maxLength, maxValue, minLength, minValue, required, sameAs} from "@vuelidate/validators";
import {computed} from "vue";

export function generateValidationRules(fields,formData) {

    //console.log('on rules ',formData);
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
            //console.log('validation.type',validation.type);
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
