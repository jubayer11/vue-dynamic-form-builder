// src/lib/index.js

// 🔹 Import global SCSS — triggers Vite to compile style.css
import './style.scss';

// 🔹 Export component and helpers
import DynamicForm from '@/components/DynamicForm/index.vue';
export { FieldType } from '@/utils/dynamicForm/FieldTypeClass';
export { CustomizableTextField } from '@/utils/dynamicForm/CustomizableTextFieldClass';
export { ValidationSetup } from '@/utils/dynamicForm/ValidationSetupClass';
export { fieldType } from '@/utils/dynamicForm/customizableTextField.js';

export default DynamicForm;
