<!-- DemoManualSubmitForm.vue -->
<template>
  <div class="demo-card">
    <h2 class="demo-title">Manual Submit & Actions</h2>
    <p class="demo-desc">
      Example of using your own buttons outside the form, manually triggering form validation and submission.
      You control the button placement, text, and additional actions like reset or custom loading.
    </p>
    <DynamicForm
        :schema="formSchema"
        v-model="formData"
        @submit="handleSubmit"
        ref="customForm"
    />
    <div class="manual-actions">
      <button class="action-btn submit-btn" @click="manualSubmit">
        Submit
      </button>
      <button class="action-btn reset-btn" @click="resetForm">
        Reset
      </button>
    </div>
    <div class="demo-json">
      <h3>Form Data (live)</h3>
      <pre>{{ formData }}</pre>
    </div>
  </div>
</template>

<script setup>
/**
 * @file DemoManualSubmitForm.vue
 * @summary Demonstrates manual form submission and external button control.
 *
 * Features:
 * - Submit button and Reset button handled manually outside the form
 * - Custom placement and styling of action buttons
 * - Manually trigger form validation and submission through `handleSubmit()`
 * - Reset form data to initial prefilled values
 * - Supports required, email format, and age validation
 *
 * Intended to showcase how developers can control form actions independently while using the dynamic form system.
 */
import { ref, computed, reactive } from "vue";
import DynamicForm from "@/components/DynamicForm/index.vue";
import { FieldType } from "@/utils/dynamicForm/FieldTypeClass.js";
import { fieldType } from "@/utils/dynamicForm/customizableTextField.js";
import { ValidationSetup } from "@/utils/dynamicForm/ValidationSetupClass.js";
import { CustomizableTextField } from "@/utils/dynamicForm/CustomizableTextFieldClass.js";

// Simple form fields
const nameField = new FieldType({
  fieldType: fieldType.textField,
  label: "Name",
  placeholder: "Enter your name",
  forType: "name",
  mandatory: true,
});
nameField.addValidations(ValidationSetup.required("Name is required."));

const emailField = new FieldType({
  fieldType: fieldType.textField,
  label: "Email",
  type: "email",
  placeholder: "Enter your email",
  forType: "email",
  mandatory: true,
});
emailField.addValidations(ValidationSetup.required("Email is required."));
emailField.addValidations(ValidationSetup.email("Email must be valid."));

const ageField = new FieldType({
  fieldType: fieldType.textField,
  type: "number",
  label: "Age",
  placeholder: "Enter your age",
  forType: "age",
  mandatory: false,
});
ageField.addValidations(ValidationSetup.between([10, 120], "Age must be between 10 and 120."));

// Build up schema and remove built-in submit
const data = reactive(new CustomizableTextField());
data.addField(nameField);
data.addField(emailField);
data.addField(ageField);
data.updateSubmitButton(false); // REMOVE built-in submit

const formSchema = computed(() => data);
const formData = ref(data.createInitialDataObject());
const customForm = ref(null);

function handleSubmit() {
  alert("Submitted with manual button!");
}

function manualSubmit() {
  // Call handleSubmit() on DynamicForm instance, will trigger validation + emit if valid
  if (customForm.value && typeof customForm.value.handleSubmit === "function") {
    customForm.value.handleSubmit();
  } else {
    console.error("handleSubmit is not a function on CustomForm");
  }
}

function resetForm() {
  Object.assign(formData.value, data.createInitialDataObject());
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
.demo-desc {
  font-size: 1em;
  color: #555;
  margin-bottom: 1.2em;
}
.manual-actions {
  display: flex;
  justify-content: center;
  gap: 1em;
  margin: 1em 0 0.5em 0;
}
.action-btn {
  padding: 0.65em 2.2em;
  border-radius: 6px;
  border: none;
  font-size: 1.13em;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.17s;
}
.submit-btn {
  background: #2686e2;
  color: #fff;
}
.submit-btn:hover {
  background: #135cb0;
}
.reset-btn {
  background: #eaeaea;
  color: #135cb0;
}
.reset-btn:hover {
  background: #ddd;
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
