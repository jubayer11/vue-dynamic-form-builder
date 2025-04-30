
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
