import {ValidationSetup} from "@/utils/dynamicForm/ValidationSetupClass.js";


export class FieldType {
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
        this.fieldType = fieldType;
        this.label = label;
        this.placeholder = placeholder;
        this.type = type;
        this.forType = forType;
        this.isMandatory = mandatory;
        this.tagItems= tagItems;
        this.validations = validation || [];
        this.defaultValue = defaultValue;
        this.insetIconType=insetIconType;
        this.customStyle = {
            wrapper:'',
            container:'',
            label: {
                label:'',
                mandatory:''
            },
            password:{
                container:'',
                show:'',
            },
            fieldAndError:{
              wrapper:'',
              field:'',
               radioField:{
                  wrapper:'',
                  container: '',
                  input:'',
                  label:'',
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
               multiSelect:{
                   field:'',
                   labelAndIcon:{
                       wrapper:'',
                       label:'',
                       icon: {
                           icon:'',
                           path:'',
                       },
                       tag:{
                           view:{
                               view: '',
                               wrapper:'',
                               container:'',
                               value:'',
                               remove:{
                                   container:'',
                                   value:'',
                               },
                           },
                       },
                       dropdown: {
                           wrapper:'',
                           input:'',
                           container:{
                               container:'',
                               box:'',
                               icon:{
                                   icon:'',
                                   path:'',
                               },
                               item:'',
                           },

                       }
                   }
               },
               insetIcon:{
                    wrapper:'textField__default__field__insetIcon__wrapper',
                    icon:'textField__default__field__insetIcon__icon',
                    path:["textField__default__field__insetIcon__path1","textField__default__field__insetIcon__path2"],

                },
               error:{
                  wrapper:'',
                  message:'',
               },
            },
        };
    }
    setDefaultValue(value) {
        this.defaultValue = value;
    }

    getDefaultValue() {
        return this.defaultValue;
    }

    setFieldType(value) {
        this.fieldType = value;
    }

    setLabel(value) {
        this.label = value;
    }

    setType(value) {
        this.type = value;
    }

    setForType(value) {
        this.forType = value;
    }

    setPlaceholder(value) {
        this.placeholder = value;
    }

    setIsMandatory(value) {
        this.isMandatory = value;
    }

    setTextFieldStyle(value) {
        this.textFieldStyle = value;
    }

    setValidations(value) {
        this.validations = value;
    }
    setTagItems(value){
        this.tagItems=value;
    }
    setIsDatePicker(){
        this.isDatePicker=true;
    }
    addValidations(value) {
        if (!(value instanceof ValidationSetup)) {
            throw new Error('Invalid validation rule. Must be an instance of ValidationRule.');
        }
        this.validations.push(value);
    }
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
    setInsetIconType(value){
        this.insetIconType=value;
    }


    setStyle(value) {
        this.style = value;
    }
    updateStyle(property, value, obj = this.customStyle) {

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

    getFieldType() {
        return this.fieldType;
    }

    getLabel() {
        return this.label;
    }

    getType() {
        return this.type;
    }

    getForType() {
        return this.forType;
    }

    getPlaceholder() {
        return this.placeholder;
    }

    getIsMandatory() {
        return this.isMandatory;
    }

    getTextFieldStyle() {
        return this.textFieldStyle;
    }

    getValidations() {
        return this.validations;
    }

    getStyle() {
        return this.style;
    }
}

// // Example usage:
// const fieldStyle = new FieldStyle();
//
// // Update individual values using setters
// fieldStyle.setFieldType('textField');
// fieldStyle.setLabel('Email');
// fieldStyle.setType('email');
// fieldStyle.setForType('email');
// fieldStyle.setPlaceholder('enter email here');
// fieldStyle.setIsMandatory(true);
// fieldStyle.setTextFieldStyle(0);
// fieldStyle.setValidations([{ type: 'required' }, { type: 'email' }]);
// fieldStyle.setStyle({
//     textFieldStyle: {
//         paddingLeft: '35px'
//     }
// });
//
// console.log(fieldStyle);
