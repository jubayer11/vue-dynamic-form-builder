<template>

    <div  class="flexBoxCenter flex-col bg-white p-3 card text-black">
      <div class="w-[24em] sm:w-[70vw] max-w-[40em] card py-[2em] px-[1em] lg:px-[3em] rounded-md">
        <DynamicForm
            :schema="formSchema"
            v-model="formData"
            @submit="handleSubmit"
            ref="customForm"
        />
        <div>
          <pre>{{ formData }}</pre>
        </div>


      </div>
    </div>

</template>

<script setup>
import { computed, reactive, ref } from "vue";
import {FieldType} from "@/utils/dynamicForm/FieldTypeClass.js";
import {fieldType} from "@/utils/dynamicForm/customizableTextField.js";
import {ValidationSetup} from "@/utils/dynamicForm/ValidationSetupClass.js";
import {CustomizableFieldsStyle} from "@/utils/dynamicForm/CustomizableFieldStyleClass.js";
import { CustomizableTextField } from "@/utils/dynamicForm/CustomizableTextFieldClass.js";
import DynamicForm from "@/components/DynamicForm/index.vue"



const items = ref([
  { id: 1, name: 'cricket' },
  { id: 2, name: 'football' },
  { id: 3, name: 'hockey' },
  { id: 1, name: 'cricket' },
  { id: 2, name: 'football' },
  { id: 3, name: 'hockey' },
]);
const tagItems = [
  { id: 2, name: 'abc play ground' },
  { id: 3, name: 'efg play ground' },
  { id: 4, name: 'hij play ground' },
  { id: 5, name: 'klm play ground' },
];

const groupList = [
  { id: 7, name: 'Group A' },
  { id: 8, name: 'Group B' },
  { id: 9, name: 'Group C' },
];

const predefinedData = {
  title: "",
  password: "123456",
  password_confirmation: "123456",
  fees: 300.0,
  activity: 3,
  location: 2,
  groups: [7, 8],
  details: "Predefined Details",
  radio: 8,
  start: '11/12/2024 18:00',
  end: '12/2024',
};

const title = new FieldType({
  fieldType: fieldType.textField,
  label: 'Title',
  placeholder: 'Write title',
  type: 'text',
  forType: 'title',
  mandatory: true,
  defaultValue: predefinedData.title,
});

const password = new FieldType({
  fieldType: fieldType.passwordTextField,
  label: 'Password',
  placeholder: 'write password',
  type: 'password',
  forType: 'password',
  mandatory: true,
  defaultValue: predefinedData.password
});

const passwordConfirmation = new FieldType({
  fieldType: fieldType.textField,
  label: 'Password confirmation',
  placeholder: 'write password confirmation',
  type: 'password',
  forType: 'password_confirmation',
  mandatory: true,
  defaultValue: predefinedData.password_confirmation
});

const fees = new FieldType({
  fieldType: fieldType.textField,
  label: 'Fees',
  placeholder: 'group fees per month',
  type: 'number',
  forType: 'fees',
  mandatory: true,
  defaultValue: predefinedData.fees,
});

const activity = new FieldType({
  fieldType: fieldType.selectField,
  label: 'Activity',
  placeholder: 'select activity',
  forType: 'activity',
  mandatory: true,
  tagItems: items.value,
  defaultValue: predefinedData.activity
});

const location = new FieldType({
  fieldType: fieldType.selectField,
  label: 'Location',
  placeholder: 'select location',
  forType: 'location',
  mandatory: true,
  tagItems: tagItems,
  defaultValue: predefinedData.location
});

const details = new FieldType({
  fieldType: fieldType.textArea,
  label: 'Details',
  placeholder: 'write details',
  type: 'text',
  forType: 'details',
  defaultValue: predefinedData.details,
});

const startDateAndTime = new FieldType({
  fieldType: fieldType.datePickerField,
  label: 'Start Date & Time',
  placeholder: 'start date & time',
  type: 'dateTime',
  forType: 'start',
  mandatory: true,
  defaultValue: '14/12/2024 22:10'

});

const endDateAndTime = new FieldType({
  fieldType: fieldType.datePickerField,
  label: 'End Date & Time',
  placeholder: 'end date & time',
  type: 'month',
  forType: 'end',
  mandatory: true,
  defaultValue:'08/2025'

});

const selectGroup = new FieldType({
  fieldType: fieldType.multiSelect,
  label: 'Select Group',
  placeholder: 'choose group',
  forType: 'groups',
  mandatory: true,
  tagItems: groupList,
  defaultValue: predefinedData.groups
});

const radioField = new FieldType({
  fieldType: fieldType.radioField,
  label: 'Checking Radio Button',
  forType: 'radio',
  mandatory: true,
  tagItems: groupList,
  defaultValue: predefinedData.radio
});

// Field Customizations and Validations
title.setInsetIconType('iconSearch');
title.updateStyle('fieldAndError.field','player__userQuery__searchField');
title.addValidations(ValidationSetup.required('Please provide a title for your submission.'));
fees.addValidations(ValidationSetup.required('Fees is required'));
title.addValidations(ValidationSetup.minLength(5, 'Title must have at least 5 characters.'));
title.addValidations(ValidationSetup.maxLength(10, 'Title have more than 10 characters.'));
title.addValidations(
    ValidationSetup.custom(
        (value,formData) => {
          if (value === formData.password){
            return true;
          }
        },
        'The title must be "Admin".'
    )
);
passwordConfirmation.addValidations(ValidationSetup.sameAs('password'));
password.updateStyle('password.show','checking checking and checking');

const customStyle = new CustomizableFieldsStyle();
const data = reactive(new CustomizableTextField());
const formData = ref(data.getFormData());
const customForm = ref(null);

// Add fields to form
data.addField(title);
data.addField(fees);
data.addField(activity);
data.addField(startDateAndTime);
data.addField(endDateAndTime);
data.addField(location);
data.addField(selectGroup);
data.addField(details);
data.addField(password);
data.addField(passwordConfirmation);
data.addField(radioField);

data.updateSubmitButton(true,'check');
customStyle.update('fieldAndError.field','textField__custom__fieldBackground');
customStyle.update('field.mainDiv','training__create__mainDiv');
customStyle.update('field.wrapper','training__create__wrapper');
customStyle.update('fieldAndError.multiSelect.field','training__create__multiSelect__field');
customStyle.update('fieldAndError.multiSelect.labelAndIcon.tag.view.view','training__create__multiSelect__field__view');
data.updateStyle(customStyle);

const formSchema = computed(() => data);

function LoadMore() {
  //formData.value.title='someTitle';
  formData.value.activity={id:2,name:'football'};
  formData.value.groups=[8,9];
  formData.value.end='11/12/2024 01:20';
  formData.value.details='hello mokles';
  if (customForm.value && typeof customForm.value.handleSubmit === 'function') {
    customForm.value.handleSubmit();
  } else {
    console.error('handleSubmit is not a function on CustomForm');
  }
}

const handleSubmit = async () => {
console.log('form submitted',formData.value);
};
</script>

<style scoped>
/* Add your specific styles below */
</style>
