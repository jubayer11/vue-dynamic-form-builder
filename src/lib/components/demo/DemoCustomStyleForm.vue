<!-- DemoCustomStyleForm.vue -->
<template>
  <div class="demo-card">
    <h2 class="demo-title">Custom Field Styling</h2>
    <p class="demo-desc">
      Example of <strong>per-field style overrides</strong>: label alignment/color, input backgrounds, dropdown styles, inset icons, custom error styling, and a bold submit.<br>
      <small>
        💡 Mix <code>utility classes</code> and your own <b>CSS</b>! See <b>CustomStyleFormDemo.css</b> for details.
      </small>
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
// Import custom CSS for this demo only (user could import globally)
import "@/assets/CustomStyleFormDemo.css";
import {CustomizableFieldsStyle} from "@/utils/dynamicForm/CustomizableFieldStyleClass.js";

const prefilled = {
  username: "jubayer",
  email: "jubayer@email.com",
  color: "",
  sport: [2],
  bio: "I love Vue!",
};

// 1. Username: Bold, green, right-aligned label; light blue bg, rounded, tall input
const username = new FieldType({
  fieldType: fieldType.textField,
  label: "Username",
  placeholder: "Choose a username",
  forType: "username",
  defaultValue: prefilled.username,
});

username.updateStyle("fieldAndError.field", "dfutils__bg_lightblue dfutils__rounded_lg dfutils__py_lg");
username.updateStyle("label.label", "dfutils__label_right dfutils__label_bold dfutils__label_green");

// 2. Email: Orange label, blue border, custom focus ring, and custom error color
const email = new FieldType({
  fieldType: fieldType.textField,
  label: "Email",
  placeholder: "Enter email",
  type: "email",
  forType: "email",
  defaultValue: prefilled.email,
});
email.updateStyle("label.label", "dfutils__label_orange");
email.updateStyle("fieldAndError.field", "dfutils__border_blue dfutils__focus_ring_blue");
email.updateStyle("fieldAndError.error.message", "dfutils__error_red_shadow"); // See CustomStyleFormDemo.css

email.addValidations(ValidationSetup.required("Email required."));
email.addValidations(ValidationSetup.email("Email must be valid."));

// 3. Color (Select): Yellow background, thick orange border, larger font
const color = new FieldType({
  fieldType: fieldType.selectField,
  label: "Favorite Color",
  placeholder: "Choose color",
  forType: "color",
  tagItems: [
    { id: "red", name: "Red" },
    { id: "green", name: "Green" },
    { id: "blue", name: "Blue" },
    { id: "purple", name: "Purple" },
  ],
  defaultValue: prefilled.color,
});
color.updateStyle("fieldAndError.selectField.field", "dfutils__bg_yellow dfutils__border_orange dfutils__focus_ring_orange dfutils__font_big");
color.updateStyle("fieldAndError.selectField.dropdown.wrapper", "dfutils__select_dropdown_custom");

color.updateStyle('fieldAndError.selectField.dropdown.wrapper', 'my-dropdown-bg-blue')
color.updateStyle('fieldAndError.selectField.dropdown.item', 'my-dropdown-option-white')
color.updateStyle('fieldAndError.selectField.dropdown.itemSelected', 'my-dropdown-option-active')


// 4. Sport: Multi-select with purple tags, big remove icon, and custom dropdown
const sport = new FieldType({
  fieldType: fieldType.multiSelect,
  label: "Favorite Sport",
  placeholder: "Select",
  forType: "sport",
  tagItems: [
    { id: 1, name: "Football" },
    { id: 2, name: "Cricket" },
    { id: 3, name: "Hockey" },
  ],
  defaultValue: prefilled.sport,
});
sport.updateStyle("fieldAndError.multiSelect.labelAndIcon.tag.view.container", "dfutils__tag_purple");
sport.updateStyle("fieldAndError.multiSelect.labelAndIcon.tag.view.remove.value", "dfutils__tag_remove_big");
sport.updateStyle("fieldAndError.multiSelect.labelAndIcon.dropdown.wrapper", "dfutils__select_dropdown_custom");

sport.updateStyle('fieldAndError.multiSelect.labelAndIcon.dropdown.wrapper', 'my-dropdown-bg-red')
sport.updateStyle('fieldAndError.multiSelect.labelAndIcon.dropdown.container.container', 'my-dropdown-option')
sport.updateStyle('fieldAndError.multiSelect.labelAndIcon.dropdown.container.item', 'my-dropdown-item')
sport.updateStyle('fieldAndError.multiSelect.labelAndIcon.dropdown.input', 'my-dropdown-input')



// 5. Bio (Textarea): Totally custom look, user-defined class
const bio = new FieldType({
  fieldType: fieldType.textArea,
  label: "Bio",
  placeholder: "Say something about yourself",
  forType: "bio",
  defaultValue: prefilled.bio,
});
bio.updateStyle("fieldAndError.field", "my-bio-field-class dfutils__border_orange dfutils__focus_ring_orange");

// 6. Password: Inset icon, custom show button, custom border
const password = new FieldType({
  fieldType: fieldType.passwordTextField,
  label: "Password",
  placeholder: "Set password",
  forType: "password",
  defaultValue: "",
});
password.setInsetIconType("iconLock"); // If you render icon based on this, style will apply
password.updateStyle("fieldAndError.field", "dfutils__border_green dfutils__focus_ring_green dfutils__rounded_lg");
password.updateStyle("fieldAndError.insetIcon.icon", "dfutils__icon_icon"); // Custom icon color
password.updateStyle("fieldAndError.insetIcon.path", ["dfutils__icon_path1","dfutils__icon_path2"]); // Custom icon color

password.addValidations(ValidationSetup.required("Password required."));
password.addValidations(ValidationSetup.minLength(6, "Min 6 characters."));

// 7. rainbow select field
const rainbowSelect = new FieldType({
  fieldType: fieldType.selectField,
  label: "Favorite Color",
  placeholder: "Pick a color",
  forType: "color",
  tagItems: [
    { id: 1, name: "Red" },
    { id: 2, name: "Orange" },
    { id: 3, name: "Yellow" },
    { id: 4, name: "Green" },
    { id: 5, name: "Blue" },
    { id: 6, name: "Indigo" },
    { id: 7, name: "Violet" },
  ],
});
rainbowSelect.updateStyle('fieldAndError.selectField.dropdown.wrapper', 'rainbow-dropdown-bg');
rainbowSelect.updateStyle('fieldAndError.selectField.dropdown.item', 'rainbow-dropdown-item');
rainbowSelect.updateStyle('fieldAndError.selectField.dropdown.itemSelected', 'rainbow-dropdown-selected');
// 8. Untouched field for contrast
const untouched = new FieldType({
  fieldType: fieldType.textField,
  label: "Plain Field (No overrides)",
  placeholder: "Default style",
  forType: "plain",
  defaultValue: "",
});
const customStyle = new CustomizableFieldsStyle();


customStyle.update("fieldAndError.submit.button","dfutils__submit_green");

const data = reactive(new CustomizableTextField());
data.addField(username);
data.addField(email);
data.addField(color);
data.addField(sport);
data.addField(bio);
data.addField(password);
data.addField(rainbowSelect);
data.addField(untouched);
data.updateSubmitButton(true, 'Wow Submit');
data.updateStyle(customStyle);

const formSchema = computed(() => data);
const formData = ref(data.createInitialDataObject());
const customForm = ref(null);

function handleSubmit() {
  alert("Form submitted! (Custom style demo)");
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
