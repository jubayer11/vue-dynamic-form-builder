<!-- DemoRowForm.vue -->
<template>
  <div class="demo-card">
    <h2 class="demo-title">Row/Column Form Layout</h2>
    <p class="demo-desc">
      Example of a responsive 2-column form layout using <code>.dfutils__row</code> and <code>.dfutils__half</code> utility classes. Fields sit side by side on desktop, stack on mobile.
    </p>
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

const defaultGroups = [
  { id: 1, name: "Group A" },
  { id: 2, name: "Group B" },
  { id: 3, name: "Group C" },
];

const firstName = new FieldType({
  fieldType: fieldType.textField,
  label: "First Name",
  placeholder: "Enter first name",
  forType: "first_name",
  mandatory: true,
});
firstName.addValidations(ValidationSetup.required("First name is required."));

const lastName = new FieldType({
  fieldType: fieldType.textField,
  label: "Last Name",
  placeholder: "Enter last name",
  forType: "last_name",
  mandatory: true,
});
lastName.addValidations(ValidationSetup.required("Last name is required."));

const email = new FieldType({
  fieldType: fieldType.textField,
  label: "Email",
  type: "email",
  placeholder: "Enter email",
  forType: "email",
  mandatory: true,
});
email.addValidations(ValidationSetup.required("Email is required."));
email.addValidations(ValidationSetup.email("Email must be valid."));

const phone = new FieldType({
  fieldType: fieldType.textField,
  label: "Phone Number",
  type: "tel",
  placeholder: "Enter phone number",
  forType: "phone",
  mandatory: true,
});
phone.addValidations(ValidationSetup.required("Phone number is required."));
phone.addValidations(ValidationSetup.minLength(8, "Phone must be at least 8 digits."));

const group = new FieldType({
  fieldType: fieldType.selectField,
  label: "Group",
  placeholder: "Select group",
  forType: "group",
  mandatory: true,
  tagItems: defaultGroups,
});
group.addValidations(ValidationSetup.required("Please select a group."));

const startDate = new FieldType({
  fieldType: fieldType.datePickerField,
  label: "Start Date",
  placeholder: "Pick start date",
  type: "date",
  forType: "start_date",
  mandatory: true,
});
startDate.addValidations(ValidationSetup.required());


// --- Layout Setup ---
const data = reactive(new CustomizableTextField());
data.addField(firstName);
data.addField(lastName);
data.addField(email);
data.addField(phone);
data.addField(group);
data.addField(startDate);
data.updateSubmitButton(true, "Submit");

// Apply row/half utility classes for 2-column layout
import { CustomizableFieldsStyle } from "@/utils/dynamicForm/CustomizableFieldStyleClass.js";
const customStyle = new CustomizableFieldsStyle();
customStyle.update("field.mainDiv", "dfutils__row");
customStyle.update("field.wrapper", "dfutils__half");
customStyle.update('fieldAndError.field', 'dfutils__p_md');
customStyle.update('fieldAndError.selectField.field', 'dfutils__py_md dfutils__px_md');
customStyle.update('fieldAndError.multiSelect.field', 'dfutils__py_md dfutils__px_md');

data.updateStyle(customStyle);

const formSchema = computed(() => data);
const formData = ref(data.createInitialDataObject());
const customForm = ref(null);

function handleSubmit() {
  alert("Form submitted! (See formData)");
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
