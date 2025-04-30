<!-- DemoPrefilledForm.vue -->
<template>
  <div class="demo-card">
    <h2 class="demo-title">Basic Prefilled Form</h2>
    <p class="demo-desc">
      Shows required/optional fields, validation (including backend error simulation), prefilled data, select/multi-select/date fields, and live feedback.
      Use the toggle below to simulate backend/server-side errors after submitting.
    </p>
    <button @click="showBackendError = !showBackendError" class="demo-toggle-btn">
      Simulate Backend Error: <strong>{{ showBackendError ? 'On' : 'Off' }}</strong>
    </button>
    <DynamicForm
        :schema="formSchema"
        v-model="formData"
        @submit="handleSubmit"
        ref="customForm"
    />
    <div class="demo-json">
      <h3>Form Data (live)</h3>
      <pre>{{ formData }}</pre>
    </div>
  </div>
</template>

<script setup>
/**
 * @file DemoPrefilledForm.vue
 * @summary Demonstrates a basic form with prefilled data, field validation (including backend error simulation),
 * select fields, multi-select fields, date pickers, and live feedback display.
 *
 * Features:
 * - Simulate backend errors manually via toggle button
 * - Prefill fields like name, email, sports, location, etc.
 * - Show custom error messages injected from the backend
 * - Supports required, email, minLength, between, and sameAs and custom validations
 *
 * Intended for demonstrating realistic user form interactions with schema-driven flexibility.
 */

import { ref, computed, reactive } from "vue";
import DynamicForm from "@/components/DynamicForm/index.vue";
import { FieldType } from "@/utils/dynamicForm/FieldTypeClass.js";
import { fieldType } from "@/utils/dynamicForm/customizableTextField.js";
import { ValidationSetup } from "@/utils/dynamicForm/ValidationSetupClass.js";
import { CustomizableTextField } from "@/utils/dynamicForm/CustomizableTextFieldClass.js";

const showBackendError = ref(false);

const defaultGroups = [
  { id: 1, name: "Group A" },
  { id: 2, name: "Group B" },
  { id: 3, name: "Group C" },
  { id: 4, name: "Group D" },
  { id: 5, name: "Group E" },
  { id: 6, name: "Group F" },
  { id: 7, name: "Group G" },
  { id: 8, name: "Group H" },
  { id: 9, name: "Group I" },
  { id: 10, name: "Group J" }
];

const sportsList = [
  { id: 1, name: "Football" },
  { id: 2, name: "Cricket" },
  { id: 3, name: "Hockey" },
  { id: 4, name: "Basketball" },
  { id: 5, name: "Tennis" },
  { id: 6, name: "Badminton" },
  { id: 7, name: "Swimming" },
  { id: 8, name: "Table Tennis" },
  { id: 9, name: "Volleyball" },
  { id: 10, name: "Baseball" }
];

const locationList = [
  { id: 1, name: "Dhaka" },
  { id: 2, name: "London" },
  { id: 3, name: "Chattogram" },
  { id: 4, name: "New York" },
  { id: 5, name: "Sydney" },
  { id: 6, name: "Tokyo" },
  { id: 7, name: "Berlin" },
  { id: 8, name: "Paris" },
  { id: 9, name: "Rome" },
  { id: 10, name: "Toronto" }
];

// Prefilled demo data
const prefilled = {
  name: "Jubayer Ahmed",
  email: "jubayer@email.com",
  age:24,
  group: 1,
  sports: [1, 2],
  location: 1,
  details: "I'm interested in sports management.",
  password: "secret123",
  confirm_password: "secret123",
  start: "14/12/2024 22:10",

};

const nameField = new FieldType({
  fieldType: fieldType.textField,
  label: "Full Name",
  type: 'text',
  placeholder: "Enter your name",
  forType: "name",
  mandatory: true,
  defaultValue: prefilled.name
});
nameField.addValidations(ValidationSetup.required("Name is required."));
nameField.addValidations(ValidationSetup.minLength(2, "Name must be at least 2 characters."));

const emailField = new FieldType({
  fieldType: fieldType.textField,
  label: "Email Address",
  type: 'email',
  placeholder: "Enter your email",
  forType: "email",
  mandatory: true,
  defaultValue: prefilled.email
});
emailField.addValidations(ValidationSetup.required("Email is required."));
emailField.addValidations(ValidationSetup.email("Email must be valid."));

const ageField = new FieldType({
  fieldType: fieldType.textField,
  type: 'number',
  label: "Age",
  placeholder: "Enter your age",
  forType: "age",
  mandatory: false,
  defaultValue: prefilled.age
});
ageField.addValidations(ValidationSetup.between([18, 99], "Age must be between 18 and 99."));




const groupField = new FieldType({
  fieldType: fieldType.selectField,
  label: "Group",
  placeholder: "Select group",
  forType: "group",
  mandatory: true,
  tagItems: defaultGroups,
  defaultValue: prefilled.group
});
groupField.addValidations(ValidationSetup.required("Please select a group."));

const sportsField = new FieldType({
  fieldType: fieldType.multiSelect,
  label: "Sports",
  placeholder: "Select sports",
  forType: "sports",
  tagItems: sportsList,
  defaultValue: prefilled.sports
});
sportsField.addValidations(
    ValidationSetup.custom(
        (value)=>{

        if (Array.isArray(value) && value.length <= 3){
          return true;
        }else{
          return false;
        }
        },
         "You can select up to 3 sports only."
    )
);
const locationField = new FieldType({
  fieldType: fieldType.selectField,
  label: "Location",
  placeholder: "Choose location",
  forType: "location",
  tagItems: locationList,
  defaultValue: prefilled.location
});

const detailsField = new FieldType({
  fieldType: fieldType.textArea,
  label: "Details",
  placeholder: "Write a short description",
  forType: "details",
  defaultValue: prefilled.details
});

detailsField.addValidations(
    ValidationSetup.custom(
        (value,formData) => {
          if (value === formData.password){
            return false;
          }else{
            return true;
          }
        },
        'The details can not be password.'
    )
);

const passwordField = new FieldType({
  fieldType: fieldType.passwordTextField,
  label: "Password",
  placeholder: "Enter password",
  forType: "password",
  mandatory: true,
  defaultValue: prefilled.password
});
passwordField.addValidationsArray([ValidationSetup.required("Password required."),ValidationSetup.minLength(6, "Min 6 characters.")])


const confirmPasswordField = new FieldType({
  fieldType: fieldType.textField,
  type: 'password',
  label: "Confirm Password",
  placeholder: "Confirm your password",
  forType: "password_confirmation",
  mandatory: true,
  defaultValue: prefilled.confirm_password
});
confirmPasswordField.addValidations(ValidationSetup.sameAs("password", "Passwords must match."));

const startField = new FieldType({
  fieldType: fieldType.datePickerField,
  label: "Start Date & Time",
  placeholder: "Pick start date",
  type: "dateTime",
  forType: "start",
  mandatory: true,
  defaultValue: prefilled.start
});



// Build up schema
const data = reactive(new CustomizableTextField());
data.addField(nameField);
data.addField(emailField);
data.addField(ageField);
data.addField(groupField);
data.addField(sportsField);
data.addField(locationField);
data.addField(detailsField);
data.addField(passwordField);
data.addField(confirmPasswordField);
data.addField(startField);
data.updateSubmitButton(true,'Submit');

const formSchema = computed(() => data);
const formData = ref(data.createInitialDataObject());
const customForm = ref(null);

// Handle submit (alert, clear errors)
function handleSubmit() {
  if (showBackendError.value) {
    data.setErrors({
      email: "This email is already registered",
      name: "Name already in use. Please use your full name",
      group: "choose another group",
    });
    showBackendError.value = false;
  } else {
    data.setErrors({});
    alert("Form submitted successfully! (Simulated)");
    showBackendError.value = true;
  }
}
</script>

<style scoped>
.demo-card {
  background: #fff;
  border-radius: 14px;
  padding: 2.5em 2em 2em 2em;
  max-width: 38em;
  min-width: 320px;
  margin: 3em auto;
  box-shadow: 0 2px 14px 0 rgba(0,0,0,0.12);
  display: flex;
  flex-direction: column;
  align-items: stretch;
}

.demo-title {
  font-size: 2em;
  font-weight: 700;
  margin-bottom: 0.3em;
  color: #135cb0;
  letter-spacing: 1px;
}
.demo-toggle-btn {
  background: #ef4444;
  color: #fff;
  border: none;
  font-size: 1rem;
  padding: 0.5em 1.2em;
  border-radius: 6px;
  margin-bottom: 1.5em;
  cursor: pointer;
  font-weight: 500;
  transition: background 0.2s;
}
.demo-toggle-btn:hover {
  background: #b91c1c;
}

.demo-desc {
  font-size: 1em;
  color: #555;
  margin-bottom: 1.2em;
}
.demo-json {
  margin-top: 2em;
  background: #fafafa;
  border-radius: 8px;
  font-size: 0.95em;
  padding: 1em 1.5em;
  color: #233;
  box-shadow: 0 1px 4px rgba(0,0,0,0.03);
}
.demo-json h3 {
  font-size: 1.15em;
  color: #2686e2;
  font-weight: 500;
  margin-bottom: 0.4em;
}
</style>
