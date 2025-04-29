import { ValidationSetup } from "@/utils/dynamicForm/ValidationSetupClass.js";

/**
 * FieldType
 * ----------
 * Defines a field for use in the Dynamic Form system.
 * Handles configuration, validations, and style overrides for each field.
 *
 * @example
 * // Basic usage:
 * const titleField = new FieldType({
 *   fieldType: fieldType.textField,
 *   label: 'Title',
 *   forType: 'title',
 *   mandatory: true,
 *   defaultValue: '',
 * });
 * titleField.addValidations(ValidationSetup.required('Title required'));
 * titleField.updateStyle('fieldAndError.field', 'custom__fieldClass');
 */
export class FieldType {
    /**
     * @param {Object} options - Field configuration object
     * @param {string} options.fieldType - Field type identifier (e.g., 'textField', 'selectField')
     * @param {string} options.label - Display label for the field
     * @param {string} [options.placeholder] - Placeholder text
     * @param {string} [options.type='text'] - Input type (text, number, etc.)
     * @param {string} options.forType - Key name in form data
     * @param {boolean} [options.mandatory=false] - If true, marks field as required
     * @param {Array} [options.tagItems=[]] - Items for select/multi/radio fields
     * @param {string|null} [options.insetIconType=null] - Type of icon, if any
     * @param {Array<ValidationSetup>} [options.validation=[]] - Array of validation rules
     * @param {*} [options.defaultValue=null] - Default value for the field
     */
    constructor({
                    fieldType,
                    label,
                    placeholder = '',
                    type = 'text',
                    forType,
                    mandatory = false,
                    tagItems = [],
                    insetIconType = null,
                    validation = [],
                    defaultValue = null,
                }) {
        /** @type {string} */
        this.fieldType = fieldType;
        /** @type {string} */
        this.label = label;
        /** @type {string} */
        this.placeholder = placeholder;
        /** @type {string} */
        this.type = type;
        /** @type {string} */
        this.forType = forType;
        /** @type {boolean} */
        this.isMandatory = mandatory;
        /** @type {Array} */
        this.tagItems = tagItems;
        /** @type {Array<ValidationSetup>} */
        this.validations = validation || [];
        /** @type {*} */
        this.defaultValue = defaultValue;
        /** @type {string|null} */
        this.insetIconType = insetIconType;

        /**
         * Nested style object for all field-level style overrides.
         * Use updateStyle() for updates.
         * @type {Object}
         */
        /**
         * Field-level style overrides for fine-tuned theming.
         *
         * Structure reference:
         * {
         *   wrapper: '',             // Main outer wrapper for the field row (used everywhere)
         *   container: '',           // Inner container for label + input (all field types)
         *   label: {
         *     label: '',             // Label text (all fields)
         *     mandatory: ''          // Required asterisk (all fields with required flag)
         *   },
         *   password: {
         *     container: '',         // Only for password fields (PasswordField)
         *     show: '',              // Show/hide button (PasswordField)
         *   },
         *   fieldAndError: {
         *     wrapper: '',           // Input+error wrapper (all fields)
         *     field: '',             // Input element itself (text, number, textarea, date, etc.)
         *     radioField: {
         *       wrapper: '',         // Radio field row
         *       container: '',       // Radio field group container
         *       input: '',           // Radio input
         *       label: '',           // Radio label
         *     },
         *     selectField: {
         *       wrapper: '',         // Select component main wrapper
         *       field: '',           // Select input
         *       labelAndIcon: {      // Select label and icon wrapper
         *         wrapper: '',
         *         label: '',
         *         icon: { icon: '', path: '' }
         *       },
         *       dropdown: {
         *         wrapper: '',       // Dropdown menu wrapper
         *         input: '',
         *         list: '',
         *         item: '',
         *         itemSelected: ''
         *       }
         *     },
         *     multiSelect: {
         *       field: '',           // MultiSelect main input
         *       labelAndIcon: {
         *         wrapper: '',
         *         label: '',
         *         icon: { icon: '', path: '' },
         *         tag: {
         *           view: {
         *             view: '',     // Tag view (each selected value)
         *             wrapper: '',
         *             container: '',
         *             value: '',
         *             remove: { container: '', value: '' }
         *           },
         *         },
         *         dropdown: {
         *           wrapper: '',
         *           input: '',
         *           container: {
         *             container: '',
         *             box: '',
         *             icon: { icon: '', path: '' },
         *             item: '',
         *           },
         *         }
         *       }
         *     },
         *     insetIcon: {
         *       wrapper: '',         // Inset icon wrapper (for fields with icons)
         *       icon: '',            // Icon style
         *       path: []             // SVG path(s)
         *     },
         *     error: {
         *       wrapper: '',         // Error message wrapper
         *       message: '',         // Error message style
         *     },
         *   },
         * }
         */
        this.customStyle = {
            wrapper: '',
            container: '',
            label: {
                label: '',
                mandatory: ''
            },
            password: {
                container: '',
                show: '',
            },
            fieldAndError: {
                wrapper: '',
                fieldAndIcon:{
                    wrapper:'',
                    fieldWithIcon:'',
                },
                field: '',
                radioField: {
                    wrapper: '',
                    container: '',
                    input: '',
                    label: '',
                },
                selectField: {
                    wrapper: '',
                    field: '',
                    labelAndIcon: {
                        wrapper: '',
                        label: '',
                        icon: {
                            icon: '',
                            path: '',
                        },
                    },
                    dropdown: {
                        wrapper: '',
                        input: '',
                        list: '',
                        item: '',
                        itemSelected: ''
                    }
                },
                multiSelect: {
                    mainWrapper:'',
                    field: '',
                    labelAndIcon: {
                        wrapper: '',
                        label: '',
                        icon: {
                            icon: '',
                            path: '',
                        },
                        tag: {
                            view: {
                                view: '',
                                wrapper: '',
                                container: '',
                                value: '',
                                remove: {
                                    container: '',
                                    value: '',
                                },
                            },
                        },
                        dropdown: {
                            wrapper: '',
                            input: '',
                            container: {
                                container: '',
                                box: '',
                                icon: {
                                    icon: '',
                                    path: '',
                                },
                                item: '',
                            },
                        }
                    }
                },
                insetIcon: {
                    wrapper: 'textField__default__field__insetIcon__wrapper',
                    icon: 'textField__default__field__insetIcon__icon',
                    path: ["textField__default__field__insetIcon__path1", "textField__default__field__insetIcon__path2"],
                },
                error: {
                    wrapper: '',
                    message: '',
                },
            },
        };
    }

    // --- Value Methods ---

    /**
     * Set the default value of the field.
     * @param {*} value
     */
    setDefaultValue(value) {
        this.defaultValue = value;
    }

    /**
     * Get the default value.
     * @returns {*}
     */
    getDefaultValue() {
        return this.defaultValue;
    }

    // --- Validation Methods ---

    /**
     * Add a single validation rule.
     * @param {ValidationSetup} value
     */
    addValidations(value) {
        if (!(value instanceof ValidationSetup)) {
            throw new Error('Invalid validation rule. Must be an instance of ValidationSetup.');
        }
        this.validations.push(value);
    }

    /**
     * Add multiple validation rules at once.
     * @param {Array<ValidationSetup>} values
     */
    addValidationsArray(values) {
        if (!Array.isArray(values)) {
            throw new Error('Invalid input. Must be an array of ValidationSetup instances.');
        }
        values.forEach((value) => {
            if (!(value instanceof ValidationSetup)) {
                throw new Error('Invalid validation rule. Each item must be an instance of ValidationSetup.');
            }
            this.validations.push(value);
        });
    }

    // --- Icon Methods ---

    /**
     * Set the type of inset icon for this field.
     * @param {string|null} value
     */
    setInsetIconType(value) {
        this.insetIconType = value;
    }

    // --- Style Methods ---

    /**
     * Update a deeply nested style property via dot notation.
     * @param {string} property - Dot-notated path (e.g., 'fieldAndError.field')
     * @param {string|Array} value - New style class or object
     * @param {Object} [obj=this.customStyle] - For internal use
     */
    updateStyle(property, value, obj = this.customStyle) {
        const keys = property.split('.');
        const lastKey = keys.pop();
        let target = obj;
        for (const key of keys) {
            if (!(key in target)) {

                throw new Error(`${property} Property ${key} does not exist.`);
            }
            target = target[key];
        }
        if (!(lastKey in target)) {
            throw new Error(`Property ${lastKey} does not exist.`);
        }
        target[lastKey] = value;
    }
}

// --- Example usage (in docs, not in the package file) ---
// const titleField = new FieldType({
//   fieldType: fieldType.textField,
//   label: 'Title',
//   forType: 'title',
//   mandatory: true,
//   defaultValue: '',
// });
// titleField.addValidations(ValidationSetup.required('Title required'));
// titleField.updateStyle('fieldAndError.field', 'custom__fieldClass');
