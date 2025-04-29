/**
 * CustomizableFieldsStyle
 *
 * A class for managing and updating default and custom CSS class names for all major
 * sections of a dynamic form. Structure matches field groups/types in DynamicForm.
 *
 * Usage example:
 *   const style = new CustomizableFieldsStyle();
 *   style.update('fieldAndError.radioField.input', 'my-radio-input-class');
 *   style.update('mainDiv', 'my-custom-main-div');
 *
 * Use `update(path, value)` to set deeply nested class overrides.
 *
 * Example paths:
 *   - 'mainDiv'
 *   - 'field.label.label'
 *   - 'fieldAndError.radioField.input'
 *   - 'fieldAndError.multiSelect.labelAndIcon.tag.view.remove.value'
 *
 * @class
 */
export class CustomizableFieldsStyle {
    constructor() {
        /** @type {string} Top-level wrapper class for the entire form */
        this.mainDiv = '';
        /** @type {Object} All field-level classes */
        this.field = {
            mainDiv: '',
            wrapper: '',
            container: '',
            label: {
                label: '',
                mandatory: ''
            },
            password: {
                container: '',
                show: ''
            }
        };
        /** @type {Object} Classes for fields, errors, buttons, radio/select/multiSelect, etc. */
        this.fieldAndError = {

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
                label: ''
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
                                value: ''
                            }
                        }
                    },
                    dropdown: {
                        wrapper: '',
                        input: '',
                        container: {
                            container: '',
                            box: '',
                            icon: {
                                icon: '',
                                path: ''
                            },
                            item: ''
                        }
                    }
                }
            },
            error: {
                wrapper: '',
                message: ''
            },
            submit: {
                wrapper: '',
                button: ''
            },
            insetIcon: {
                wrapper: '',
                icon: '',
                path: ['', '']
            }
        };
    }

    /**
     * Deeply updates any style property in the class using a dot-separated path.
     * Example: update('fieldAndError.radioField.input', 'my-radio-input-class')
     *
     * @param {string} property - Dot-separated path to the property.
     * @param {string|Array<string>} value - New class or array of classes to set.
     * @param {Object} [obj=this] - Internal parameter, do not use.
     */
    update(property, value, obj = this) {
        const keys = property.split('.');
        const lastKey = keys.pop();
        console.log(property);
        let target = obj;
        for (const key of keys) {
            if (!(key in target)) {
                throw new Error(`Property ${key} does not exist.`);
            }
            target = target[key];
        }

        if (!(lastKey in target)) {
            throw new Error(`Property ${lastKey} does not exist.`);
        }
        target[lastKey] = value;
    }


}
