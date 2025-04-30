# Vue Dynamic Form Builder

![Vue 3 Compatible](https://img.shields.io/badge/Vue%203-Compatible-%23349b43)  
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](./LICENSE)  
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)  
[![Live Demo](https://img.shields.io/badge/Demo-Live%20Now-brightgreen)](https://jubayer11.github.io/vue-dynamic-form-builder/)  
[![npm](https://img.shields.io/npm/v/@jubayer11/vue-dynamic-form-builder)](https://www.npmjs.com/package/@jubayer11/vue-dynamic-form-builder)  




<!-- Divider after badges -->
---

## Build fully customizable, schema-driven forms — with complete developer freedom.

Vue Dynamic Form Builder gives you the tools to create fully dynamic, validated, and beautifully styled forms — while keeping total control over structure, behavior, layout, and appearance.  
It’s built to empower developers who want flexibility beyond typical rigid form builders.

<!-- Divider after intro paragraph -->
---

## 🚀 Why Use Vue Dynamic Form Builder?

- **True Flexibility:**  
  Full control over structure, fields, validation, styling, and submission logic — not tied to rigid presets.

- **Schema-Driven:**  
  Define your entire form — fields, layouts, validations — using simple JavaScript objects. No repetitive HTML or template duplication.

- **Lightweight and Clean:**  
  No bulky UI frameworks. Built purely with Vue 3 Composition API and clean, extensible CSS utilities.

- **Fully Extensible:**  
  Easily add new field types, create custom validation rules, and inject your own UI components if needed.

- **Manual or Auto Submission:**  
  Decide whether the form handles submit automatically — or give yourself full manual control over when and how it submits.

- **Frontend-Agnostic:**  
  Designed to adapt easily to any backend API and frontend system — with no assumptions about your stack or styling.

<!-- Divider after Why Use -->
---

## 🏗️ Internal Structure Overview

Vue Dynamic Form Builder is built with a lightweight, highly modular internal architecture to maximize flexibility and developer control.

It uses a **schema-driven approach**:  
You define your form structure using JavaScript objects (`CustomizableTextField` + `FieldType`), and the form renders itself automatically based on that schema.

---

### 🔹 Core Components

| Part | Purpose |
|:---|:---|
| **CustomizableTextField** | Master class that manages the full form: adds fields, controls submit button, handles global styles, collects backend errors. |
| **FieldType** | Blueprint for each individual field (e.g., text, textarea, select, radio, multi-select, password, date picker). Defines label, placeholder, validations, custom styles, etc. |
| **ValidationSetup** | Utility to easily attach built-in and custom validations declaratively to fields. |
| **DynamicForm.vue** | The main engine: dynamically renders the form from the schema, connects Vuelidate for live validation, manages form state and submission. |
| **textFieldStyle** | Global default styling system for inputs, labels, errors, and wrappers. Can be overridden globally, per-form, or per-field. |

---

### 🔹 Internal Utilities and Libraries

| Utility | Purpose |
|:---|:---|
| **Vuelidate** | Used internally to power all validation logic dynamically. No manual Vuelidate setup needed by the user. |
| **Moment.js** | Used for formatting and parsing dates and times inside `datePickerField` inputs. |
| **Lodash (isEqual)** | Used to deeply compare form data structures (e.g., for form reset, backend error matching). |
| **@vuepic/vue-datepicker** | Integrated internally for rendering modern and flexible date/time pickers. |

---

### 🔹 Supported Field Types

| Field Type | Description |
|:---|:---|
| `textField` | Standard single-line input (text, email, number, etc.) |
| `textArea` | Multi-line textarea input |
| `selectField` | Single-select dropdown menu |
| `radioField` | Radio button group |
| `multiSelect` | Multi-select dropdown (with tag view and custom styling) |
| `passwordTextField` | Password input with hidden characters |
| `datePickerField` | Modern date/time picker (date, month, week, year modes) |

✅ Each field is built as an independent Vue component internally — following clean modular structure.

---

### 🔹 Internal Flow

The internal flow of the Dynamic Form system is simple yet powerful:

1. **You define a form schema** using `CustomizableTextField` and `FieldType`.
2. **You bind the schema** to the `<DynamicForm>` component with `v-model` for form data.
3. **DynamicForm.vue dynamically renders** all fields based on your schema — applying global and per-field styles.
4. **Vuelidate is wired automatically** — every field's validation is live with no manual setup.
5. **Submissions** can be automatic (built-in button) or manual (external button triggering validation and submit).
6. **Backend validation errors** can be injected anytime using `setErrors()`, and fields display mapped errors immediately.
7. **Styling is fully customizable** globally (schema-wide) or per-field — supporting your own utility classes (Tailwind, Bootstrap, etc.)

---

### 🎯 Key Architectural Principles

- **Schema First** → You control everything through configuration, not through heavy templates.
- **Modular Fields** → Every field type is a clean, isolated component (`TextField`, `SelectField`, `DatePickerField`, etc.)
- **Validation as Data** → All field validations are attached declaratively through `ValidationSetup`.
- **Zero Lock-In** → No opinionated UI framework — you are free to style and extend freely.
- **Error Handling Built-In** → Live frontend validation + backend error injection supported out of the box.

---

✅ **Result:**  
You get a real-world form builder that feels **native, flexible, and fully under your control** — while staying lightweight, fast, and clean.

<!-- Divider after Internal Structure Overview -->
---
## 🛠️ Field Types Overview

Vue Dynamic Form Builder supports a range of field types, covering most common real-world form needs.  
Each field type can be customized individually for label, placeholder, validation, styling, and behavior.

| Field Type | Description |
|:---|:---|
| `textField` | Standard single-line input (text, email, number, tel, url, etc.) |
| `textArea` | Multi-line text input for longer content (comments, descriptions, etc.) |
| `selectField` | Single-select dropdown list |
| `radioField` | Radio button group for choosing one option from multiple |
| `multiSelect` | Multi-select dropdown with tag-style selections |
| `passwordTextField` | Password input field with hidden characters |
| `datePickerField` | Modern date/time picker supporting date, time, month, week, and year modes |

✅ All field types are internally modular — meaning you can easily extend, customize, or override their behavior as needed.

✅ Field-specific styling and validation rules are applied cleanly at the schema level.

✅ The system is designed to be flexible — you can mix multiple field types in a single form freely.

<!-- Divider after Field Types Overview -->
---

## ✨ Features

- **Schema-Driven:**  
  Define all fields and layouts with a simple JavaScript schema.

- **Highly Flexible Field Types:**  
  Supports:
    - Standard Inputs (`text`, `email`, `number`, `password`, `tel`, `url`)
    - Text Area
    - Select Dropdown
    - Multi-Select Dropdown (with tag views and custom dropdown styles)
    - Radio Button Group
    - Date/Time Pickers (`date`, `dateTime`, `month`, `time`, `year`, `week`)

- **Per-Field Design Overrides:**
    - Every field part (`div`, `input`, `label`, `error message`, `dropdown item`, etc.) can have custom CSS classes through the schema.
    - Global defaults (`textFieldStyle`) provided but fully overridable.

- **Validation System:**
    - Includes built-in validations like:
        - Required
        - Email format
        - Minimum/Maximum Length
        - Minimum/Maximum Value
        - Value Range (Between)
        - URL format
        - Integer validation
        - Decimal (float) validation
        - Same-As (field matching)
        - Fully Custom Function Validators

- **Backend Error Injection:**  
  Accept and display backend validation errors automatically, mapping them to the correct fields.

- **Manual or Auto Submission:**  
  Choose between built-in submit button or fully manual form control (submit/reset from outside).

- **Popup Modal Support:**  
  Render fully functional forms inside modals without relying on external UI libraries.

- **Developer Friendly:**  
  Designed with real-world control, composability, and full extensibility — not a rigid black-box solution.

- **No UI Framework Lock-in:**  
  Seamlessly integrate with your own CSS, Tailwind, Bootstrap, or any design system of your choice.

<!-- Divider after Features -->
---

# 📦 Installation Guide

## 1. Install via NPM

```bash
npm install @jubayer11/vue-dynamic-form-builder
```

## 2. Install Required Peer Dependencies

This package uses Vuelidate internally for validation.  
You must manually install the following dependencies:

```bash
npm install vue@^3.5.13 @vuelidate/core@^2.0.3 @vuelidate/validators@^2.0.4
```

| Package               | Purpose                                              | Recommended Version |
|-----------------------|------------------------------------------------------|----------------------|
| vue                   | Vue.js core framework (Vue 3.x required)             | ^3.5.13 or latest    |
| @vuelidate/core       | Validation engine (e.g., required, email)            | ^2.0.3               |
| @vuelidate/validators | Validator functions for your fields                  | ^2.0.4               |

✅ Vuelidate setup is already handled internally — no need to import or configure it manually.

---

## 📦 Included Internal Dependencies

The following libraries are bundled inside the Dynamic Form Builder package:  
(You do not need to install these separately.)

| Library | Purpose |
|:---|:---|
| moment | Flexible and reliable date/time formatting |
| lodash (isEqual) | Internal deep object comparison for form data checking |
| @vuepic/vue-datepicker | Lightweight and modern Date/Time picker UI for date-related fields |

✅ These dependencies are handled and maintained inside the package.  
✅ No manual installation or imports needed.

<!-- Divider after Internal Dependencies -->
---
## 3. Import Required CSS

The package includes all styling bundled into a single compiled CSS file.

Add this line in your project (typically in `main.js` or `main.ts`):

```js
import '@jubayer11/vue-dynamic-form-builder/dist/style.css';
```


Then, to run locally:

```bash
npm run dev      # Start local dev server (demo site)
npm run build    # Build for production
```

---

## ✅ You're Ready!

Now you're ready to use the Vue Dynamic Form Builder.  
Import the component and helper classes inside the local component where you plan to use the form:

```js
import DynamicForm  from '@jubayer11/vue-dynamic-form-builder'
import { FieldType } from '@jubayer11/vue-dynamic-form-builder'
import { fieldType } from '@jubayer11/vue-dynamic-form-builder'
import { ValidationSetup } from '@jubayer11/vue-dynamic-form-builder'
import { CustomizableTextField } from '@jubayer11/vue-dynamic-form-builder'
``` 

Drop `<DynamicForm />` into your Vue 3 component and bind it with a schema.

---

## 🔧 Optional: Local Development (Testing Source Code)

If you want to test or contribute to the package locally:

```bash
git clone https://github.com/jubayer11/vue-dynamic-form-builder.git
cd vue-dynamic-form-builder
npm install
```

---

## ⚡ Quick Start

Get started immediately with just a few lines of code!

```vue
<template>
  <DynamicForm
    :schema="formSchema"
    v-model="formData"
    @submit="handleSubmit"
  />
</template>

<script setup>
import { ref, computed, reactive } from 'vue';
import { FieldType, CustomizableTextField } from '@jubayer/vue-dynamic-form-builder';

const nameField = new FieldType({
  fieldType: 'textField',
  label: 'Name',
  forType: 'name',
  placeholder: 'Enter your name',
});

const data = reactive(new CustomizableTextField());
data.addField(nameField);

const formSchema = computed(() => data);
const formData = ref(data.createInitialDataObject());

function handleSubmit() {
  console.log('Form submitted:', formData.value);
}
</script>
```

✅ This shows:
- Dynamic form generated by schema
- Form data two-way bound via `v-model`
- Manual submit action (`@submit` event)

<!-- Divider after Quick Start -->
---
## 🛠️ Schema Structure

Every form is generated dynamically based on a **schema object**.

The two core classes are:

- **CustomizableTextField** — controls the overall form structure
- **FieldType** — defines individual fields and their behaviors

```javascript
import { FieldType, CustomizableTextField } from '@jubayer/vue-dynamic-form-builder';

const nameField = new FieldType({
  fieldType: 'textField',
  label: 'Name',
  forType: 'name',
});

const data = new CustomizableTextField();
data.addField(nameField);
```

✅ You can add:
- Validations (required, email, range, same-as, custom)
- Default values
- Field-specific custom styling
- Flexible per-field behaviors

✅ The system is fully dynamic — you control fields, design, validations, and behavior via pure JavaScript.

---

## 🎨 Styling & Design Customization

Use `updateStyle()` to control field design flexibly at different levels.

### 🧑‍💼 Style Hierarchy (How it works internally)

- **Default Style** (`baseFieldClass`) — Global fallback from `textFieldStyle`.
- **Custom Schema Style** (`customFieldClass`) — Layout-wide style changes (example: row layout, background colors, spacing).
- **Per-Field Style** (`uniqueFieldClass`) — Specific to a single field (example: making only the "Username" field bold green).

Final applied class order:

```html
<input
  :class="[
    baseFieldClass,
    customFieldClass,
    uniqueFieldClass,
    { 'textField__default__error': hasError },
    baseIconPaddingClass,
    customIconPaddingClass,
    uniqueIconPaddingClass,
  ]"
/>
```

---

### ✨ How to Customize

- **Schema Level (affect all fields together):**
  ```javascript
  import { CustomizableFieldsStyle } from 'vue-dynamic-form-builder';

  const customStyle = new CustomizableFieldsStyle();
  customStyle.update('field.mainDiv', 'dfutils__row');
  customStyle.update('field.wrapper', 'dfutils__half');
  data.updateStyle(customStyle);
  ```

- **Field Level (affect a specific field only):**
  ```javascript
  username.updateStyle('fieldAndError.field', 'dfutils__bg_lightblue dfutils__rounded_lg dfutils__py_lg');
  username.updateStyle('label.label', 'text-bold text-green-600');
  ```

✅ You can override:
- Input appearance
- Label styling
- Dropdown behavior
- Multi-select tags
- Error display
- Submit button styling

✅ You can fully mix TailwindCSS, Bootstrap, or custom CSS classes easily.

---

## 📜 Validation System

The Dynamic Form Builder includes a powerful **schema-based validation system** powered by [Vuelidate](https://vuelidate-next.netlify.app/).

Each field can define validations declaratively during schema setup — no manual form-wide watchers or rules.

---

### ✅ How to Add Validations

Attach validations using either:

```javascript
nameField.addValidations(ValidationSetup.required('Name is required.'));
nameField.addValidations(ValidationSetup.minLength(2, 'Min 2 characters.'));
```

Or attach multiple validations at once:

```javascript
passwordField.addValidationsArray([
  ValidationSetup.required('Password required.'),
  ValidationSetup.minLength(6, 'Min 6 characters.')
]);
```

You can also skip message for auto-label fallback:

```javascript
emailField.addValidations(ValidationSetup.email());
```

---

### 🔐 Custom Validations

Use `ValidationSetup.custom()` to define full logic-based validations:

```javascript
sportsField.addValidations(
  ValidationSetup.custom(
    (value) => Array.isArray(value) && value.length <= 3,
    'You can select up to 3 sports only.'
  )
);
```

Or field-to-field comparisons:

```javascript
detailsField.addValidations(
  ValidationSetup.custom(
    (value, formData) => value !== formData.password,
    'Details cannot match the password.'
  )
);
```

✅ Custom functions receive both `value` and the full `formData`.

✅ Must return `true` (valid) or `false` (invalid).

---

### 🧩 Supported Validation Methods

| Method | Description |
|:---|:---|
| `required()` | Must not be empty |
| `email()` | Must be valid email |
| `minLength(n)` | Minimum string length |
| `maxLength(n)` | Maximum string length |
| `minValue(n)` | Minimum number |
| `maxValue(n)` | Maximum number |
| `between([min, max])` | Number must be between |
| `sameAs(fieldName)` | Field must match another field |
| `url()` | Must be a valid URL |
| `integer()` | Must be a whole number |
| `decimal()` | Must be a float |
| `custom(fn)` | Fully custom validation logic |

---

### 📡 Backend Error Injection (Recommended)

Whether using auto or manual submit — you can inject backend validation errors easily:

```javascript
data.setErrors({
  email: 'This email is already registered.',
  name: 'Username already taken.'
});
```

✅ Keys must match `forType` defined during field creation.

✅ Display will automatically happen (highlighted error + message).

---

### 🧠 Real-world Backend Example:

```javascript
const handleSubmit = async () => {
  try {
    startAnimation();
    const response = await yourApiCall(formData.value);

    if (response.success) {
      alert('Form submitted successfully!');
    }
  } catch (error) {
    if (error?.response?.data?.errors) {
      data.setErrors(error.response.data.errors);
    } else {
      console.error('Unexpected error:', error);
    }
  } finally {
    stopAnimation();
  }
};
```

✅ No need to manually track field-level errors — DynamicForm handles it internally.

<!-- Divider after Validation System -->
---

## 👐 Manual vs Automatic Submit

By default, DynamicForm renders a built-in submit button inside the form.

✅ But you can disable it and manage submission **fully manually**.

---

### 🔹 Automatic Submit (default)

```javascript
const data = reactive(new CustomizableTextField());
data.updateSubmitButton(true, 'Submit');
```

✅ Clicking submit triggers validation and fires `@submit` event automatically.

---

### 🔹 Manual Submit

You can disable the built-in submit button:

```javascript
const data = reactive(new CustomizableTextField());
data.updateSubmitButton(false);
```

And manage the form from the parent:

```vue
<template>
  <DynamicForm
    :schema="formSchema"
    v-model="formData"
    ref="customForm"
    @submit="handleSubmit"
  />
  <button @click="manualSubmit">Submit</button>
  <button @click="resetForm">Reset</button>
</template>

<script setup>
const customForm = ref(null);

function manualSubmit() {
  if (customForm.value && typeof customForm.value.handleSubmit === 'function') {
    customForm.value.handleSubmit();
  }
}

function resetForm() {
  Object.assign(formData.value, data.createInitialDataObject());
}
</script>
```

✅ Full control over:
- Button placement
- Loading states
- Conditional disables
- Popup-confirm submissions

---
## ❓ FAQ

### 1. How do I reset the form to its initial state?

You can reset the form by copying the initial data object back into your `formData`:

```javascript
function resetForm() {
  Object.assign(formData.value, data.createInitialDataObject());
}
```

✅ `formData` will be reset to the default values defined in your schema.

---

### 2. How do I manually trigger form submission?

If you are using manual submit mode, you can trigger form submission like this:

```html
<button class="action-btn submit-btn" @click="manualSubmit">
  Submit
</button>
```

```javascript
function manualSubmit() {
  if (customForm.value && typeof customForm.value.handleSubmit === "function") {
    customForm.value.handleSubmit(); // Validates and emits submit event
  } else {
    console.error("handleSubmit is not a function on CustomForm");
  }
}
```

✅ This will trigger validation and call your custom `handleSubmit` method if validation passes.

---

### 3. How do I disable the built-in submit button and control buttons manually?

By default, the built-in submit button is disabled.  
But to ensure manual control, call:

```javascript
data.updateSubmitButton(false); // Disables built-in submit button
```

✅ You can then manage Submit/Reset externally.

---

### 4. How can I inject backend/server-side validation errors into the form?

Inside your submit method (usually in a `try/catch` block), you can inject backend errors like this:

```javascript
data.setErrors({
  email: "This email is already registered.",
  name: "Username already taken.",
});
```

✅ Backend error keys must match field `forType`.

✅ DynamicForm automatically highlights the field and shows the message.

---

### 5. How do I apply custom styles to a specific field only?

Use `updateStyle()`:

```javascript
username.updateStyle("fieldAndError.field", "dfutils__bg_lightblue dfutils__rounded_lg dfutils__py_lg");
username.updateStyle("label.label", "dfutils__label_right dfutils__label_bold dfutils__label_green");
```

✅ Field-specific styling is very flexible.

---

### 6. Can I control the default value of a field?

Yes!  
You can set `defaultValue` when creating a field:

```javascript
const username = new FieldType({
  fieldType: fieldType.textField,
  label: "Username",
  forType: "username",
  defaultValue: "jubayer",
});
```

✅ Prefills initial values inside the form automatically.

---

### 7. Can I dynamically add or remove fields from the form after creation?

Currently, **the package does not officially provide dynamic add/remove after creation**.

✅ You could manipulate the schema manually and rebuild, but the focus is on predefining a clean schema first.

---

### 8. Can I create a fully custom field type if needed?

Yes!  
Since fields like `TextField.vue` and `DatePickerField.vue` are modular components:

✅ You can create your own field component.  
✅ Extend DynamicForm easily.  
✅ Handle validation, styling, and schema mapping yourself.

---

### 9. How do I validate a field using a custom validation function?

Use `ValidationSetup.custom()`:

```javascript
detailsField.addValidations(
  ValidationSetup.custom(
    (value, formData) => value !== formData.password,
    "Details cannot match the password."
  )
);
```

✅ You have full access to the current field value and the entire form.

---

### 10. Can I use the form inside a popup modal? How does validation and submission behave inside modals?

Yes!  
DynamicForm works perfectly inside a popup/modal.

Example:

```vue
<DynamicForm
  :schema="formSchema"
  v-model="formData"
  ref="popupForm"
  @submit="handleSubmit"
/>

<button @click="manualSubmit">Submit</button>
```

✅ Manual submission inside modals works exactly like outside forms.

✅ No third-party libraries needed — just your custom modal.

<!-- Divider after FAQ -->
---

## 🧪 Demo Gallery

Explore real-world examples of how you can use `@jubayer/vue-dynamic-form-builder` to build powerful and flexible forms.

Each example is available inside the `demo/` folder.

| Demo | Highlights |
|:---|:---|
| **Basic Prefilled Form** | Prefilled data, required fields, email validation, backend error simulation |
| **Row/Column Layout Form** | Responsive row layout, half-width fields, structured grouping |
| **Manual Submit + Custom Buttons** | External submit/reset buttons, full manual control |
| **Custom Styling per Field** | Per-field label, input, and error styling overrides |
| **Popup Form in Modal** | Full form handling inside a modal |
| **All Date/Time Picker Modes** | Supports date, time, month, week, and year picking |

🔗 **Live Demo**: [https://jubayer11.github.io/vue-dynamic-form-builder/](https://jubayer11.github.io/vue-dynamic-form-builder/)


### 📂 Where to Find Demo Files

| Demo | File Location |
|:---|:---|
| **Basic Prefilled Form** | `src/demo/components/demo/DemoPrefilledForm.vue` |
| **Row/Column Layout Form** | `src/demo/components/demo/DemoRowForm.vue` |
| **Manual Submit + Custom Buttons** | `src/demo/components/demo/DemoManualSubmitForm.vue` |
| **Custom Styling per Field** | `src/demo/components/demo/DemoCustomStyleForm.vue` |
| **Popup Form in Modal** | `src/demo/components/demo/DemoPopupForm.vue` |
| **All Date/Time Picker Modes** | `src/demo/components/demo/DemoDateForm.vue` |


✅ Demos are real-world, production-grade examples.

<!-- Divider after Demo Gallery -->
---

## 📜 License

[MIT License](./LICENSE) © 2025 Jubayer Ahmed

<!-- Divider after License -->
---

## 🙌 Credits

Designed and developed with ❤️ by **Jubayer Ahmed** ([Portfolio](https://www.jubayerahmed.com/)) — Dynamic Systems • Clean Code • Developer Empowerment

<!-- Divider after Credits -->
---

## 🎯 Final Touches

- Full Vue 3 + Composition API ready
- 100% lightweight and modular
- No rigid styles — you control everything
- Inspired by real-world problems, built for serious developers

<!-- Divider after Final Touches -->
---

✨ End of README ✨

If you enjoy this package, consider starring ⭐ the repository — it helps more developers discover it!

🤝 Interested in contributing?  
Feel free to open issues, suggest improvements, or submit pull requests — collaboration is always welcome!

