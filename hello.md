# Vue Dynamic Form Builder

![Vue 3 Compatible](https://img.shields.io/badge/Vue%203-Compatible-%23349b43)  
![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)  
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)  
![Demo Coming Soon](https://img.shields.io/badge/Demo-Coming%20Soon-blue)

---

## Build fully customizable, schema-driven forms — with complete developer freedom.

Vue Dynamic Form Builder gives you the tools to create fully dynamic, validated, and beautifully styled forms — while keeping total control over structure, behavior, layout, and appearance.  
It’s built to empower developers who want flexibility beyond typical rigid form builders.

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

---

## 🛠️ Field Types Overview

Vue Dynamic Form Builder supports a range of field types, covering most common real-world form needs.  
Each field type can be customized individually for label, placeholder, validation, styling, and behavior.

| Field Type | Description |
|:---|:---|
| `textField` | Standard single-line input (text, email, number, tel, url, etc.) |
| `textArea` | Multi-line text input for longer content (comments, descriptions, etc.) |
| `selectField` | Single-select dropdown list. |
| `radioField` | Radio button group for choosing one option from multiple. |
| `multiSelect` | Multi-select dropdown with tag-style selections. |
| `passwordTextField` | Password input field with hidden characters. |
| `datePickerField` | Modern date/time picker supporting date, time, month, week, and year modes. |

---

✅ All field types are internally modular — meaning you can easily extend, customize, or override their behavior as needed.

✅ Field-specific styling and validation rules are applied cleanly at the schema level.

✅ The system is designed to be flexible — you can mix multiple field types in a single form freely.

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

---
## 📦 Installation

```bash
npm install @jubayer/vue-dynamic-form-builder
```

or, if you are testing it locally:

```bash
git clone https://github.com/your-username/vue-dynamic-form-builder.git
cd vue-dynamic-form-builder
npm install
```

---

## ⚙️ Required Peer Dependencies

This package uses Vuelidate internally for dynamic validation handling.  
You must manually install the following peer dependencies in your project:

```bash
npm install vue @vuelidate/core @vuelidate/validators
```

| Package | Purpose | Recommended Version |
|:---|:---|:---|
| vue | Vue.js core framework (Vue 3.x required) | ^3.5.13 or latest |
| @vuelidate/core | Validation engine for rules like required, email, etc. | ^2.0.3 |
| @vuelidate/validators | Common validator functions for your fields | ^2.0.4 |

✅ You do not need to manually import or configure Vuelidate inside your app.  
It is automatically handled inside the Dynamic Form system.

---

## 📦 Included Internal Dependencies

The following libraries are bundled inside the Dynamic Form Builder package:  
(You do not need to install these separately)

| Library | Purpose |
|:---|:---|
| moment | Flexible and reliable date/time formatting. |
| lodash (isEqual) | Internal deep object comparison for form data checking. |
| @vuepic/vue-datepicker | Lightweight and modern Date/Time picker UI for date-related fields. |

✅ These dependencies are handled and maintained inside the package.  
✅ No manual installation or imports needed.



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

```javascript
const nameField = new FieldType({
  fieldType: 'textField',
  label: 'Name',
  forType: 'name',
});
data.addField(nameField);
```

You can add validation, default values, field-specific styles, and more.

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

### ✨ How to Customize

- **Schema Level (Affect all fields together)**:
  ```javascript
  import { CustomizableFieldsStyle } from 'vue-dynamic-form-builder';

  const customStyle = new CustomizableFieldsStyle();
  customStyle.update('field.mainDiv', 'dfutils__row');
  customStyle.update('field.wrapper', 'dfutils__half');
  data.updateStyle(customStyle);
  ```

- **Field Level (Affect a specific field only)**:
  ```javascript
  username.updateStyle('fieldAndError.field', 'dfutils__bg_lightblue dfutils__rounded_lg dfutils__py_lg');
  username.updateStyle('label.label', 'text-bold text-green-600');
  ```

### 👉 You Can Override:

- Field input appearance
- Label styling and alignment
- Dropdown wrapper, input, item, selection
- Multi-select tag view and dropdown
- Validation error message display
- Inset icon styles (password fields, custom icons)
- Submit button look and feel

✅ You can mix it easily with your own utility classes (Tailwind, Bootstrap, etc.) or create your own custom classes.

✅ Layout-level design changes (row layout, column width, spacing) are best handled at the **schema-level** (`CustomizableFieldsStyle`).

✅ Specific per-field fine-tuning (color, background, margin) is best handled at the **field-level** (`FieldType.updateStyle()`).

---
### 📜 Validation System

The Dynamic Form Builder includes a powerful **schema-based validation system** powered by [Vuelidate](https://vuelidate-next.netlify.app/).  
Each field can define validations declaratively during schema setup — no manual form-wide watchers or rules.

---

### ✅ How to Add Validations

You can attach validations using either `addValidations()` or `addValidationsArray()`:

```js
nameField.addValidations(ValidationSetup.required("Name is required."));
nameField.addValidations(ValidationSetup.minLength(2, "Min 2 characters"));
```

```js
passwordField.addValidationsArray([
  ValidationSetup.required("Password required."),
  ValidationSetup.minLength(6, "Min 6 characters.")
]);
```

You can also skip the message for auto-label fallback:

```js
emailField.addValidations(ValidationSetup.email());
```

---

### 🔐 Custom Validations

Your form supports full **custom logic validation** via `ValidationSetup.custom()`.

Each custom validator receives:
- `value` → current field value
- `formData` → full live form object

✅ Must return `true` for valid, `false` for invalid.

```js
sportsField.addValidations(
  ValidationSetup.custom(
    (value) => Array.isArray(value) && value.length <= 3,
    'You can select up to 3 sports only.'
  )
);
```

```js
titleField.addValidations(
  ValidationSetup.custom(
    (value, formData) => value === formData.password,
    'Title must match your password.'
  )
);
```

You can even negate matches:

```js
detailsField.addValidations(
  ValidationSetup.custom(
    (value, formData) => value !== formData.password,
    'Details cannot match the password.'
  )
);
```

---

### 🧩 Supported Validation Methods

| Method | Description |
|--------|-------------|
| `required()` | Value must not be empty |
| `email()` | Must be valid email format |
| `minLength(n)` | Minimum string length |
| `maxLength(n)` | Maximum string length |
| `minValue(n)` | Minimum numeric value |
| `maxValue(n)` | Maximum numeric value |
| `between([min, max])` | Numeric range inclusive |
| `sameAs(fieldName)` | Match another field’s value |
| `url()` | Must be a valid URL |
| `integer()` | Must be a whole number |
| `decimal()` | Must be a float/decimal number |
| `custom(fn)` | Custom validation logic (return true/false) |

---

### 📌 Notes

- Use `.addValidations()` for single rules
- Use `.addValidationsArray([...])` for multiple rules
- Custom validations can leverage the full `formData` object

---

### 🧠 Example Full Setup

```js
const passwordField = new FieldType({
  fieldType: 'passwordTextField',
  forType: 'password',
  label: 'Password',
  mandatory: true,
  placeholder: 'Enter password',
  defaultValue: 'secret123'
});

passwordField.addValidationsArray([
  ValidationSetup.required('Password is required.'),
  ValidationSetup.minLength(6, 'Password must be at least 6 characters.')
]);

const confirmPasswordField = new FieldType({
  fieldType: 'textField',
  forType: 'password_confirmation',
  label: 'Confirm Password',
  type: 'password',
  defaultValue: 'secret123'
});

confirmPasswordField.addValidations(
  ValidationSetup.sameAs('password', 'Passwords must match.')
);
```

You can add all of this dynamically inside a reactive form schema builder.

---

### 📡 Backend Error Injection (Recommended)

Whether you're using auto or manual submit — you can inject backend/server-side validation errors like this:

```js
data.setErrors({
  email: "This email is already registered.",
  name: "Username already taken.",
});
```

For real-world usage, wrap your submit logic in `try/catch`:

```js
const handleSubmit = async () => {
  try {
    startAnimation();
    const response = await yourApiCall(formData.value);

    if (response.success) {
      alert("Form submitted successfully!");
    }
  } catch (error) {
    if (error?.response?.data?.errors) {
      data.setErrors(error.response.data.errors);
    } else {
      console.error("Unexpected error:", error);
    }
  } finally {
    stopAnimation();
  }
};
```

✅ Works the same for **manual** and **automatic** form submissions.  
✅ Display logic is built-in — fields will highlight and show error messages automatically.

---

## 👐 Manual vs Automatic Submit

By default, the DynamicForm renders its own submit button inside the form.

You can **choose** between:

| Type | Description |
|:---|:---|
| **Automatic Submit** | Built-in submit button appears automatically. |
| **Manual Submit** | Disable built-in submit and control everything yourself (buttons, loading, etc.) |

---

### 🔹 Automatic Submit (default)

Just let the form render its own button:

```js
const data = reactive(new CustomizableTextField());
data.updateSubmitButton(true, 'Submit'); // Label is customizable

const formSchema = computed(() => data);
```

✅ When the user clicks **Submit**, validation and submit handling happens automatically.

---

### 🔹 Manual Submit

You can disable the built-in button:

```js
const data = reactive(new CustomizableTextField());
data.updateSubmitButton(false); // No submit button inside the form

const formSchema = computed(() => data);
```

Then control the submission manually from **outside**:

```vue
<template>
  <DynamicForm
    :schema="formSchema"
    v-model="formData"
    ref="customForm"
    @submit="handleSubmit"
  />

  <div class="action-buttons">
    <button @click="manualSubmit">Submit</button>
    <button @click="resetForm">Reset</button>
  </div>
</template>

<script setup>
import { ref, computed, reactive } from 'vue';
import { CustomizableTextField } from 'vue-dynamic-form-builder';

const customForm = ref(null);
const data = reactive(new CustomizableTextField());
const formSchema = computed(() => data);
const formData = ref(data.createInitialDataObject());

function handleSubmit() {
  console.log('Form submitted:', formData.value);
}

function manualSubmit() {
  if (customForm.value && typeof customForm.value.handleSubmit === 'function') {
    customForm.value.handleSubmit(); // Triggers validation + submit
  }
}

function resetForm() {
  Object.assign(formData.value, data.createInitialDataObject());
}
</script>
```

✅ You are **fully in charge** of:
- Button placement
- Button text
- Reset/clear form actions
- Loading indicators

✅ Perfect for advanced flows like popups, confirmation modals, loading spinners, etc.

---

### ✅ Advantages of Manual Mode
- Custom UX (e.g., confirmation popup before submitting)
- Better control over loading states
- Dynamic disable/enable of buttons based on form state

---

### ✅ Advantages of Automatic Mode
- Faster setup for simple forms
- No need to manually handle submit

---

### 📢 Important Tip

> Regardless of manual or automatic submission, backend/server-side error handling (e.g., `data.setErrors()`) is a separate topic and explained under the **Validation System** section.


```js
data.setErrors({
  email: "Email already taken.",
  name: "Name already in use."
});
```

---

### 🎯 Conclusion

| When | Recommendation |
|:---|:---|
| Quick basic forms | Use Automatic Submit |
| Custom flow needed (modals, confirm, multi-steps) | Use Manual Submit |

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

By default, built-in submit button is disabled.  
But if you want to make sure manually:

```javascript
data.updateSubmitButton(false); // Disables built-in submit button
```

✅ Then you can control Submit/Reset buttons completely from outside the form.

---

### 4. How can I inject backend/server-side validation errors into the form?

Inside your submit method (usually in a `try/catch` block), you can inject backend errors like this:

```javascript
const handleSubmit = async () => {
  try {
    startAnimation();
    const response = await yourApiCall(formData.value);

    if (response.success) {
      alert("Form submitted successfully!");
    }
  } catch (error) {
    if (error?.response?.data?.errors) {
      data.setErrors(error.response.data.errors);
    } else {
      console.error("Unexpected error:", error);
    }
  } finally {
    stopAnimation();
  }
};
```

✅ Backend errors should match the `forType` of your fields:

```javascript
data.setErrors({
  email: "This email is already registered.",
  name: "Username already taken.",
});
```

✅ `forType: "email"` in your field and `email` key in your error object must match.

---

### 5. How do I apply custom styles to a specific field only?

You can override the classes of a single field by using `updateStyle()`:

```javascript
username.updateStyle("fieldAndError.field", "dfutils__bg_lightblue dfutils__rounded_lg dfutils__py_lg");
username.updateStyle("label.label", "dfutils__label_right dfutils__label_bold dfutils__label_green");
```

✅ You can customize different parts like input field, label, error message, dropdown item, etc.

---

### 6. Can I control the default value of a field?

Yes!  
You can set `defaultValue` when creating a field:

```javascript
const prefilled = {
  username: "jubayer",
  email: "jubayer@email.com",
};

const username = new FieldType({
  fieldType: fieldType.textField,
  label: "Username",
  forType: "username",
  defaultValue: prefilled.username,
});

const email = new FieldType({
  fieldType: fieldType.textField,
  label: "Email",
  forType: "email",
  type: "email",
  defaultValue: prefilled.email,
});
```

✅ The form will be prefilled automatically with these values.

---

### 7. Can I dynamically add or remove fields from the form after creation?

Currently, **the package does not officially provide dynamic add/remove after creation**.

However, technically, you could manipulate the schema and rebind the form manually if needed.  
It would involve rebuilding the schema and resetting the form — but this is an advanced use case.

✅ Focus is on defining a clean schema first, not dynamic field injection at runtime.

---

### 8. Can I create a fully custom field type if needed?

Yes!  
Since each field (e.g., `TextField.vue`, `DatePickerField.vue`) is modular, you can:

- Create your own custom field component.
- Add it to your system by extending the form builder classes.
- Manage its validation, style, and data manually.

✅ This system is extensible — not locked to predefined fields only.

---

### 9. How do I validate a field using a custom validation function?

You can add custom validation using `ValidationSetup.custom()`:

```javascript
detailsField.addValidations(
  ValidationSetup.custom(
    (value, formData) => value !== formData.password,
    'The details cannot match your password.'
  )
);
```

Or for array validation:

```javascript
sportsField.addValidations(
  ValidationSetup.custom(
    (value) => Array.isArray(value) && value.length <= 3,
    "You can select up to 3 sports only."
  )
);
```

✅ Custom functions receive `value` and full `formData`, and must return `true` (valid) or `false` (invalid).

---

### 10. Can I use the form inside a popup modal? How does validation and submission behave inside modals?

Yes!  
You can render the `<DynamicForm>` inside a popup/modal without any issues.

Example (`DemoPopupForm.vue`):

```vue
<DynamicForm
  :schema="formSchema"
  v-model="formData"
  ref="popupForm"
  @submit="handleSubmit"
/>

<button @click="manualSubmit">Submit</button>

<script setup>
function manualSubmit() {
  if (popupForm.value && typeof popupForm.value.handleSubmit === "function") {
    popupForm.value.handleSubmit(); // Triggers validation and submit
  }
}
</script>
```

✅ Validation, manual submit, and backend error handling work exactly the same inside modals as outside.

✅ No third-party UI libraries needed — you can use your own modal implementation.

---


## 🧪 Demo Gallery

Explore real-world examples of how you can use `@jubayer/vue-dynamic-form-builder` to build powerful and flexible forms.

Each example is available inside the `demo/` folder.  
(You can also see live previews in the demo app.)

| Demo | Highlights |
|:---|:---|
| **Basic Prefilled Form** | Prefilled data, required fields, email validation, realistic backend error simulation |
| **Row/Column Layout Form** | Responsive row-based layout, half-width fields, structured visual grouping |
| **Manual Submit + Custom Buttons** | External submit and reset buttons, full manual form control |
| **Custom Styling per Field** | Customize label, input, error styling at the individual field level |
| **Popup Form in Modal** | Form working inside a modal, handles validation and submission properly |
| **All Date/Time Picker Modes** | Includes date, time, month, week, and year pickers |

🔗 **Live Demo**: Coming Soon

### 📂 Where to Find Demo Files

| Demo | File Location |
|:---|:---|
| Basic Prefilled Form | `demo/DemoPrefilledForm.vue` |
| Row/Column Layout Form | `demo/DemoRowForm.vue` |
| Manual Submit + Custom Buttons | `demo/DemoManualSubmitForm.vue` |
| Custom Styling per Field | `demo/DemoCustomStyleForm.vue` |
| Popup Form in Modal | `demo/DemoPopupForm.vue` |
| All Date/Time Picker Modes | `demo/DemoDateForm.vue` |

---

✅ **Note:**  
The demos use real schema-driven configurations, realistic validations, and show flexible form layouts.  
They reflect **production-grade use cases** — not just basic examples.

---

## 📜 License
[MIT License](./LICENSE) © 2025 Jubayer Ahmed

---
## 🙌 Credits
Designed and developed with ❤️ by  
**Jubayer Ahmed**  
Dynamic Systems • Clean Code • Developer Empowerment
---
## 🎯 Final Touches
- Full Vue 3 + Composition API ready
- 100% lightweight and modular
- No rigid styles — you control everything
- Inspired by real-world problems, built for serious developers
---

✨ End of README ✨

If you enjoy this package, consider starring ⭐ the repository — it helps more developers discover it!

🤝 Interested in contributing?  
Feel free to open issues, suggest improvements, or submit pull requests — collaboration is always welcome!