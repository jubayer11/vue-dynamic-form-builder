<!-- DemoPopupForm.vue -->
<template>
  <div>
    <!-- Trigger Button -->
    <button class="popup-trigger-btn" @click="show = true">Open Popup Form</button>

    <!-- Popup Modal -->
    <transition name="fade">
      <div v-if="show" class="modal-overlay" @click.self="close">
        <div class="modal-content" @keydown.esc="close" tabindex="0">
          <div class="modal-header">
            <h2>Popup Form Example</h2>
            <button class="modal-close-btn" @click="close" title="Close">&times;</button>
          </div>
          <div class="modal-body">
            <DynamicForm
                :schema="formSchema"
                v-model="formData"
                ref="popupForm"
                @submit="handleSubmit"
            />
          </div>
          <div class="modal-footer">
            <button class="modal-cancel-btn" @click="close">Cancel</button>
            <button class="modal-submit-btn" @click="manualSubmit">Submit</button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
/**
 * @file DemoPopupForm.vue
 * @summary Demonstrates rendering a fully functional form inside a modal popup.
 *
 * Features:
 * - Opens a dynamic form inside a custom-built modal window
 * - Submit and cancel buttons outside the form component
 * - Manual submit trigger using exposed `handleSubmit()` function
 * - Responsive and accessible modal (ESC key closes modal)
 * - Includes field validation for name and email
 *
 * Intended to showcase dynamic form handling within modal dialogs without relying on any third-party UI libraries.
 */
import { ref, computed, reactive } from "vue";
import DynamicForm from "@/components/DynamicForm/index.vue";
import { FieldType } from "@/utils/dynamicForm/FieldTypeClass.js";
import { fieldType } from "@/utils/dynamicForm/customizableTextField.js";
import { ValidationSetup } from "@/utils/dynamicForm/ValidationSetupClass.js";
import { CustomizableTextField } from "@/utils/dynamicForm/CustomizableTextFieldClass.js";

const show = ref(false);

const nameField = new FieldType({
  fieldType: fieldType.textField,
  label: "Name",
  placeholder: "Enter your name",
  forType: "name",
});
nameField.addValidations(ValidationSetup.required("Name is required."));

const emailField = new FieldType({
  fieldType: fieldType.textField,
  label: "Email",
  type: "email",
  placeholder: "Enter your email",
  forType: "email",
});
emailField.addValidations(ValidationSetup.required("Email is required."));
emailField.addValidations(ValidationSetup.email("Must be a valid email."));

const data = reactive(new CustomizableTextField());
data.addField(nameField);
data.addField(emailField);

const formSchema = computed(() => data);
const formData = ref(data.createInitialDataObject());
const popupForm = ref(null);

function close() {
  show.value = false;
}
function handleSubmit() {
  alert("Popup form submitted!\n" + JSON.stringify(formData.value, null, 2));
  close();
}
function manualSubmit() {
  if (popupForm.value && typeof popupForm.value.handleSubmit === "function") {
    popupForm.value.handleSubmit();
  }
}
</script>

<style scoped>
/* Trigger Button */
.popup-trigger-btn {
  background: #3272dc;
  color: #fff;
  border: none;
  padding: 0.8em 2em;
  font-size: 1.1em;
  border-radius: 0.5em;
  cursor: pointer;
  margin-bottom: 1.7em;
  transition: background 0.2s;
}
.popup-trigger-btn:hover { background: #225299; }

/* Modal Overlay and Content */
.modal-overlay {
  position: fixed;
  z-index: 90;
  inset: 0;
  background: rgba(16, 32, 48, 0.37);
  display: flex;
  justify-content: center;
  align-items: center;
  animation: fadeIn 0.12s;
}
@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

.modal-content {
  background: #fff;
  border-radius: 1.1em;
  box-shadow: 0 6px 24px 0 rgba(22,46,76,0.23);
  width: 98vw;
  max-width: 400px;
  min-width: 320px;
  padding: 1.2em 1.7em 1.5em 1.7em;
  position: relative;
  outline: none;
  display: flex;
  flex-direction: column;
  gap: 0.2em;
}
.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.7em;
}
.modal-header h2 {
  font-size: 1.35em;
  color: #15457a;
  font-weight: 700;
}
.modal-close-btn {
  background: none;
  border: none;
  font-size: 2em;
  color: #666;
  cursor: pointer;
  margin-left: 1em;
  transition: color 0.15s;
}
.modal-close-btn:hover { color: #e85151; }
.modal-body { margin-bottom: 1.3em; }
.modal-footer {
  display: flex;
  justify-content: flex-end;
  gap: 1em;
  margin-top: 0.2em;
}
.modal-cancel-btn,
.modal-submit-btn {
  font-size: 1.05em;
  border: none;
  border-radius: 0.5em;
  padding: 0.6em 1.5em;
  cursor: pointer;
  transition: background 0.18s;
}
.modal-cancel-btn {
  background: #ebeff3;
  color: #466;
}
.modal-cancel-btn:hover { background: #e1e1e1; }
.modal-submit-btn {
  background: #18bb89;
  color: #fff;
  font-weight: 600;
}
.modal-submit-btn:hover { background: #149e71; }
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.12s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
