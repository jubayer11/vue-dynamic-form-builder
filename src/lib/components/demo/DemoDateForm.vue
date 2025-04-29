<!-- DemoDateForm.vue -->
<template>
  <div class="demo-card">
    <h2 class="demo-title">Date/Time Picker Demo</h2>
    <p class="demo-desc">
      Example showing <strong>all supported date/time picker types</strong> inside one form:<br>
      <small>
        📅 Types: <b>date</b>, <b>dateTime</b>, <b>month</b>, <b>time</b>, <b>year</b>, <b>week</b>.
      </small>
    </p>

    <DynamicForm
        :schema="formSchema"
        v-model="formData"
        ref="formRef"
        @submit="handleSubmit"
    />

    <div class="demo-json">
      <h3>Form Data (live)</h3>
      <pre>{{ formData }}</pre>
    </div>

    <div class="form-footer">
      <button class="form-submit-btn" @click="manualSubmit">Submit</button>
    </div>
  </div>
</template>

<script setup>
/**
 * @file DemoDateForm.vue
 * @summary Demonstrates all supported date and time picker types within a single form.
 *
 * Features:
 * - Showcases six picker types: date, dateTime, month, time, year, week
 * - Displays all types together for easy visual and functional testing
 * - Supports manual submission through an external submit button
 * - Dynamic formatting and internal value management for each picker type
 *
 * Intended to demonstrate full date/time flexibility within the dynamic form system.
 */

import { ref, computed, reactive } from "vue";
import DynamicForm from "@/components/DynamicForm/index.vue";
import { FieldType } from "@/utils/dynamicForm/FieldTypeClass.js";
import { fieldType } from "@/utils/dynamicForm/customizableTextField.js";
import { CustomizableTextField } from "@/utils/dynamicForm/CustomizableTextFieldClass.js";

// Define form fields
const dateField = new FieldType({
  fieldType: fieldType.datePickerField,
  label: "Date",
  placeholder: "Pick a date",
  type: "date",
  forType: "date",
});
const dateTimeField = new FieldType({
  fieldType: fieldType.datePickerField,
  label: "Date & Time",
  placeholder: "Pick date and time",
  type: "dateTime",
  forType: "dateTime",
});
const monthField = new FieldType({
  fieldType: fieldType.datePickerField,
  label: "Month",
  placeholder: "Pick a month",
  type: "month",
  forType: "month",
});
const timeField = new FieldType({
  fieldType: fieldType.datePickerField,
  label: "Time Only",
  placeholder: "Pick a time",
  type: "time",
  forType: "time",
});
const yearField = new FieldType({
  fieldType: fieldType.datePickerField,
  label: "Year Only",
  placeholder: "Pick a year",
  type: "year",
  forType: "year",
});
const weekField = new FieldType({
  fieldType: fieldType.datePickerField,
  label: "Week",
  placeholder: "Pick a week",
  type: "week",
  forType: "week",
});

// Build the schema
const data = reactive(new CustomizableTextField());
data.addField(dateField);
data.addField(dateTimeField);
data.addField(monthField);
data.addField(timeField);
data.addField(yearField);
data.addField(weekField);

const formSchema = computed(() => data);
const formData = ref(data.createInitialDataObject());
const formRef = ref(null);

// Submission handlers
function handleSubmit() {
  alert("Form submitted!\n" + JSON.stringify(formData.value, null, 2));
}

function manualSubmit() {
  if (formRef.value && typeof formRef.value.handleSubmit === "function") {
    formRef.value.handleSubmit();
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
.form-footer {
  margin-top: 2em;
  display: flex;
  justify-content: flex-end;
}
.form-submit-btn {
  background: #18bb89;
  color: #fff;
  font-size: 1.05em;
  font-weight: 600;
  border: none;
  padding: 0.7em 1.8em;
  border-radius: 0.5em;
  cursor: pointer;
  transition: background 0.2s;
}
.form-submit-btn:hover {
  background: #149e71;
}
</style>
