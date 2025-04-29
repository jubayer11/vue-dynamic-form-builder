<template>
  <div class="demo-card">
    <h2 class="demo-title">Error Handling Demo</h2>
    <p class="demo-desc">
      Demonstrates setting backend errors on form fields programmatically. Toggle error simulation and submit to see error messages appear.
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
import { ref, computed, reactive } from "vue";
import DynamicForm from "@/components/DynamicForm/index.vue";
import { FieldType } from "@/utils/dynamicForm/FieldTypeClass.js";
import { fieldType } from "@/utils/dynamicForm/customizableTextField.js";
import { ValidationSetup } from "@/utils/dynamicForm/ValidationSetupClass.js";
import { CustomizableTextField } from "@/utils/dynamicForm/CustomizableTextFieldClass.js";

const showBackendError = ref(false);

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

const passwordField = new FieldType({
  fieldType: fieldType.passwordTextField,
  label: "Password",
  placeholder: "Enter password",
  forType: "password",
  mandatory: true,
});
passwordField.addValidations(ValidationSetup.required("Password is required."));
passwordField.addValidations(ValidationSetup.minLength(6, "At least 6 characters."));

const data = reactive(new CustomizableTextField());
data.addField(emailField);
data.addField(passwordField);
data.updateSubmitButton(true, "Login");

const formSchema = computed(() => data);
const formData = ref(data.createInitialDataObject());
const customForm = ref(null);

function handleSubmit() {
  if (showBackendError.value) {
    data.setErrors({
      email: "This email does not exist. (Simulated error)",
      password: "Incorrect password. (Simulated error)",
    });
    showBackendError.value = false;
  } else {
    data.setErrors({});
    alert("Login successful! (Simulated)");
    showBackendError.value = true;
  }
}
</script>

<style scoped>
.demo-card {
  background: #fff;
  border-radius: 14px;
  padding: 2.5em 2em 2em 2em;
  max-width: 32em;
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
