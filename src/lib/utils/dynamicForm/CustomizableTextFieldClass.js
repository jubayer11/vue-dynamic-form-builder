import {FieldType} from "@/utils/dynamicForm/FieldTypeClass.js";
import {fieldType} from "@/utils/dynamicForm/customizableTextField.js";


export class CustomizableTextField {
    constructor() {
        this.fields=[];
        this.style='';
        this.submitButton={
            isSubmitButton:false,
            content:'',
            type: 'submit',
        };
        this.formData = {};
        this.errorField={};
    }

    addField(field){
        if (field instanceof FieldType) {
            this.fields.push(field);

            if (field.fieldType === fieldType.selectField || field.fieldType ===fieldType.radioField) {
                this.formData[field.forType] = field.getDefaultValue() || '';
            } else if (field.fieldType === fieldType.multiSelect) {
                this.formData[field.forType] = field.getDefaultValue() || [];
            } else {
                this.formData[field.forType] = field.getDefaultValue() || '';
            }
        }
    }
    setErrors(backendErrors) {
        this.errorField = backendErrors; // Clear previous errors
    }
    getFormData() {
        return this.formData;
    }

    setField(item){
        this.fields=item;
    }
    updateStyle(value){
        this.style=value;
    }

    updateSubmitButton(isTrue,content,type='submit'){
        this.submitButton.isSubmitButton=isTrue;
        this.submitButton.content=content;
        this.submitButton.type=type

    }
    updateFieldValue(fieldName, value) {
        // Update the formData if the field exists
        if (this.formData.hasOwnProperty(fieldName)) {
            this.formData[fieldName] = value;
        }

        // Update the corresponding field in the fields array
        const field = this.fields.find(f => f.forType === fieldName);
        if (field) {
            field.setDefaultValue(value);
        }
        this.fields = [...this.fields];
    }

    }