import { FieldType } from "@/utils/dynamicForm/FieldTypeClass.js";
import { fieldType } from "@/utils/dynamicForm/customizableTextField.js";

/**
 * Utility class for defining a dynamic form schema.
 * - Stores field definitions, form-level styles, submit button config, and backend error messages.
 * - Provides an initial data object for use in Vue form state.
 */
export class CustomizableTextField {
    constructor() {
        this.fields = []; // Array of FieldType objects (form schema)
        this.style = '';  // Optional style config
        this.submitButton = {
            isSubmitButton: false,
            content: '',
            type: 'submit',
        };
        this.errorField = {}; // Backend error messages
    }

    /**
     * Add a new FieldType to the schema.
     * @param {FieldType} field
     */
    addField(field) {
        if (field instanceof FieldType) {
            this.fields.push(field);
        }
    }

    /**
     * Set backend validation errors for the form (for error display).
     * @param {Object} backendErrors
     */
    setErrors(backendErrors) {
        this.errorField = backendErrors;
    }

    /**
     * Returns an initial data object for the form with all fields and their default values.
     * @returns {Object}
     */
    createInitialDataObject() {
        const obj = {};
        for (const field of this.fields) {
            // Multi-select gets [], others get '' if no default
            if (field.fieldType === fieldType.multiSelect) {
                obj[field.forType] = field.getDefaultValue() || [];
            } else {
                obj[field.forType] = field.getDefaultValue() || '';
            }
        }
        return obj;
    }

    /**
     * Update form-level style config.
     * @param {*} value
     */
    updateStyle(value) {
        this.style = value;
    }

    /**
     * Configure submit button appearance.
     * @param {boolean} isTrue
     * @param {string} content
     * @param {string} [type='submit']
     */
    updateSubmitButton(isTrue, content, type = 'submit') {
        this.submitButton.isSubmitButton = isTrue;
        this.submitButton.content = content;
        this.submitButton.type = type;
    }

    // -----------------------------------------------------------------------
    // The following are only for advanced/rare usage—leave commented out
    // -----------------------------------------------------------------------

    // /**
    //  * Replace all fields in the schema (rarely needed).
    //  * @param {Array<FieldType>} items
    //  */
    // setField(items) {
    //     this.fields = items;
    // }

    // /**
    //  * Update a field's defaultValue in the schema.
    //  * Not needed for ordinary v-model-based forms.
    //  */
    // updateFieldValue(fieldName, value) {
    //     const field = this.fields.find(f => f.forType === fieldName);
    //     if (field) {
    //         field.setDefaultValue(value);
    //     }
    //     this.fields = [...this.fields];
    //     // console.log(this.fields);
    // }
}
