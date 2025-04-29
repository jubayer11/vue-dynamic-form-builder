
<template>
  <div class="my-flex-center my-flex-col my-bg-white my-p-3 my-card my-text-black">
    <div class="my-form-wrapper">
      <DynamicForm
          :schema="formSchema"
          v-model="formData"
          @submit="handleSubmit"
          ref="customForm"
      />
      <div>
        <pre>{{ formData }}</pre>
      </div>
      <button @click="showBackendError = !showBackendError" class="my-demo-toggle-btn">
        Toggle Backend Error (Current: {{ showBackendError ? 'Error' : 'Success' }})
      </button>
    </div>
  </div>
</template>


<script setup>
import {computed, reactive, ref} from "vue";
import {FieldType} from "@/utils/dynamicForm/FieldTypeClass.js";
import {fieldType} from "@/utils/dynamicForm/customizableTextField.js";
import {ValidationSetup} from "@/utils/dynamicForm/ValidationSetupClass.js";
import {CustomizableFieldsStyle} from "@/utils/dynamicForm/CustomizableFieldStyleClass.js";
import { CustomizableTextField } from "@/utils/dynamicForm/CustomizableTextFieldClass.js";
import DynamicForm from "@/components/DynamicForm/index.vue"

const showBackendError = ref(false);

const items = ref([
  { id: 1, name: 'cricket' },
  { id: 2, name: 'football' },
  { id: 3, name: 'hockey' },
  { id: 4, name: 'cricket' },
  { id: 5, name: 'football' },
  { id: 6, name: 'hockey' },
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

// // Field Customizations and Validations
title.setInsetIconType('iconSearch');
details.updateStyle('wrapper','dfutils__w_full');
selectGroup.updateStyle('wrapper','dfutils__w_full')
radioField.updateStyle('wrapper','dfutils__w_full');
title.addValidations(ValidationSetup.required('Please provide a title for your submission.'));


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
selectGroup.addValidations(ValidationSetup.required());


passwordConfirmation.addValidations(ValidationSetup.sameAs('password'));
password.updateStyle('password.show','checking checking and checking');

//fees.addValidations(ValidationSetup.integer('Fees must be an integer.'));

fees.addValidations(ValidationSetup.between([1,5],'hello how are you'));


const customStyle = new CustomizableFieldsStyle();

const data=reactive(new CustomizableTextField());

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

const formData = ref(data.createInitialDataObject());

data.updateSubmitButton(true,'check');

customStyle.update('field.mainDiv','dfutils__row');
customStyle.update('field.wrapper','dfutils__half');

data.updateStyle(customStyle);

const formSchema = computed(() => data);

// function LoadMore() {
//   //formData.value.title='someTitle';
//   formData.value.activity={id:2,name:'football'};
//   formData.value.groups=[8,9];
//   formData.value.end='11/12/2024 01:20';
//   formData.value.details='hello mokles';
//   if (customForm.value && typeof customForm.value.handleSubmit === 'function') {
//     customForm.value.handleSubmit();
//   } else {
//     console.error('handleSubmit is not a function on CustomForm');
//   }
// }

// Simulate backend errors on submit
const handleSubmit = () => {
  if (showBackendError.value) {
    // Simulate backend error response
    data.setErrors({
      title: 'This title is already taken. (Simulated backend error)',
      activity: 'Please select a valid activity. (Simulated backend error)',
    });
    showBackendError.value = false; // Next submit = success
  } else {
    // No backend errors (success)
    data.setErrors({}); // Clear errors if any
    alert('Form submitted successfully! (Simulated)');
    showBackendError.value = true; // Next submit = error
  }
};


</script>

<style scoped>
/* Main container centering (used to be flexBoxCenter flex-col) */
.my-flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

/* Column layout */
.my-flex-col {
  flex-direction: column;
}

/* Card & background */
.my-bg-white {
  background: #fff;
}
.my-card {
  box-shadow: 0 2px 12px rgba(0,0,0,0.07);
  border-radius: 12px;
}

/* Padding */
.my-p-3 {
  padding: 1.25rem;
}

/* Text color */
.my-text-black {
  color: #222;
}

/* Main form wrapper (was w-[24em] sm:w-[70vw] max-w-[40em] ...rounded-md) */
.my-form-wrapper {
  width: 50em;
  max-width: 40em;
  min-width: 300px;
  padding: 2em 1em;
  margin: 0 auto;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 2px 12px rgba(0,0,0,0.08);
}

/* Responsive for small screens */
@media (max-width: 600px) {
  .my-form-wrapper {
    width: 90vw;
    padding: 1em 0.5em;
  }
}

/* Toggle button (was mb-2 bg-red-500) */
.my-demo-toggle-btn {
  background: #ef4444;
  color: #fff;
  border: none;
  font-size: 1rem;
  padding: 0.5em 1.2em;
  border-radius: 6px;
  margin-bottom: 0.5em;
  cursor: pointer;
  font-weight: 500;
  transition: background 0.2s;
}
.my-demo-toggle-btn:hover {
  background: #b91c1c;
}
</style>

