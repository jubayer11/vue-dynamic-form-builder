export class CustomizableFieldsStyle {
    constructor() {
        this.mainDiv= '';
        this.field= {
            mainDiv: '',
            wrapper: '',
            container: '',
            label: {
                label: '',
                mandatory: ''
            }
        };
        this.fieldAndError= {
            wrapper: '',
            field: '',
            radioField: {
                wrapper: '',
                    container: '',
                    input: '',
                    label: ''
            },
            selectField: {
                wrapper:'',
                field:'',
                labelAndIcon:{
                    wrapper:'',
                    label:'',
                    icon: {
                        icon:'',
                        path:'',
                    },
                },
                dropdown: {
                    wrapper:'',
                    input:'',
                    list:'',
                    item:'',
                    itemSelected:''
                }
            },
            multiSelect: {
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
            // insetIcon: {
            //     wrapper: '',
            //         icon: '',
            //         path: ['', '']
            // }
        };
    }

    update(property, value, obj = this) {

        const keys = property.split('.');
        const lastKey = keys.pop();
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

    // Method to get the current style object
    getStyle() {
        return {
            mainDiv: this.mainDiv,
            field: { ...this.field },
            fieldAndError: { ...this.fieldAndError }
        };
    }

}

// // Usage
// const customizableFieldsStyle1 = new customizableFieldsStyle();
// customizableFieldsStyle.update('mainDiv', 'textField__default__mainDiv');
// customizableFieldsStyle.update('field.mainDiv', 'textField__default__field__mainDiv');
// customizableFieldsStyle.update('field.wrapper', 'textField__default__field__wrapper');
// customizableFieldsStyle.update('field.label.label', 'textField__default__field__container__label');
// // Update other properties and nested properties similarly
//
// console.log(customizableFieldsStyle.getStyle());
