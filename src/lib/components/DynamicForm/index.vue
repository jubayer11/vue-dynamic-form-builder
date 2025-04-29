<!--
  DynamicForm.vue

  This component renders a highly customizable dynamic form.
  - Supports field-level, schema-level, and global (base) style overrides via layered class binding.
  - Uses localModel (reactive) for two-way binding and validation, then emits changes up via update:modelValue.
  - Accepts a schema describing all fields, styles, and validation config.

  CSS Class Merge Pattern:
    Each section (field, label, etc) merges classes from:
      1. Base style (from import style)
      2. Schema-level overrides (schema.style)
      3. Field-level overrides (item.customStyle)
    This provides max flexibility for design/theming.
    See README for usage pattern details.

  See also:
    - FieldLabel, FieldErrorMessages, and input components for field rendering
    - Validation logic: uses vuelidate + dynamic rule generation

  -- See specific inline comments for further details.
-->
<template>
  <!-- Root div for the form layout -->
  <div :class="[
      style?.mainDiv,
      schema?.style?.mainDiv]">

    <div :class="[
      style?.field?.mainDiv,
      schema?.style?.field?.mainDiv]">

      <!-- Iterate over form fields defined in schema -->
      <div :class="[
        style?.field?.wrapper,
        schema?.style?.field?.wrapper,
        item?.customStyle?.wrapper]"
           v-for="(item,index) in schema?.fields"
           :key="item.forType">

        <div :class="[
          style?.field?.container,
          schema?.style?.field?.container,
          item?.customStyle?.container]">

          <!--
            Label rendering, supporting class overrides:
              - baseLabelClass: global style
              - customLabelClass: schema (form-wide) override
              - uniqueLabelClass: field-specific override
           -->
          <FieldLabel
              :label="item.label"
              :forId="item.forType"
              :isMandatory="item.isMandatory"
              :baseLabelClass="style?.field?.label?.label"
              :customLabelClass="schema?.style?.field?.label?.label"
              :uniqueLabelClass="item?.customStyle?.label?.label"
              :baseMandatoryClass="style?.field?.label?.mandatory"
              :customMandatoryClass="schema?.style?.field?.label?.mandatory"
              :uniqueMandatoryClass="item?.customStyle?.label?.mandatory"
          />

          <!-- Field and error wrapper -->
          <div
              :class="[
                style?.fieldAndError?.wrapper,
                schema?.style?.fieldAndError?.wrapper,
                item?.customStyle?.fieldAndError?.wrapper]">

            <!-- Field rendering based on type -->
            <!-- All v-models bind to localModel to keep validation reactive -->
            <div
                :class="[
                    style?.fieldAndError?.fieldAndIcon.wrapper,
                    schema?.style?.fieldAndError?.fieldAndIcon.wrapper,
                    item?.customStyle?.fieldAndError?.fieldAndIcon.wrapper
                ]"
            >


            <TextField
                v-if="isTextField(item)"
                :id="item.forType"
                :modelValue="localModel[item.forType]"
                :placeholder="item.placeholder"
                :type="item.type"
                :hasError="v$[item.forType].$error"
                :baseFieldClass="style?.fieldAndError?.field"
                :customFieldClass="schema?.style?.fieldAndError?.field"
                :uniqueFieldClass="item?.customStyle?.fieldAndError?.field"
                :baseIconPaddingClass="item.insetIconType ? style?.fieldAndError?.fieldAndIcon?.fieldWithIcon : ''"
                :customIconPaddingClass="item.insetIconType ? schema?.style?.fieldAndError?.fieldAndIcon?.fieldWithIcon : ''"
                :uniqueIconPaddingClass="item.insetIconType ? item?.customStyle?.fieldAndError?.fieldAndIcon?.fieldWithIcon : ''"
                @blur="handleBlur"
                @update:modelValue="value => updateFieldValue(item.forType, value)"
            />
            <PasswordField
                v-else-if="item.fieldType===fieldType.passwordTextField"
                :id="item.forType"
                :modelValue="localModel[item.forType]"
                :placeholder="item.placeholder"
                :hasError="v$[item.forType].$error"
                :baseFieldClass="style?.fieldAndError?.field"
                :customFieldClass="schema?.style?.fieldAndError?.field"
                :uniqueFieldClass="item?.customStyle?.fieldAndError?.field"
                :baseIconPaddingClass="item.insetIconType ? style?.fieldAndError?.fieldAndIcon?.fieldWithIcon : ''"
                :customIconPaddingClass="item.insetIconType ? schema?.style?.fieldAndError?.fieldAndIcon?.fieldWithIcon : ''"
                :uniqueIconPaddingClass="item.insetIconType ? item?.customStyle?.fieldAndError?.fieldAndIcon?.fieldWithIcon : ''"
                :containerClass="[
                  style?.field?.password?.container,
                  schema?.style?.field?.password?.container,
                  item?.customStyle?.password?.container
                  ]"
                :toggleClass="[
                    style?.field?.password?.show,
                    schema?.style?.field?.password?.show,
                    item?.customStyle?.password?.show
                    ]"
                @blur="handleBlur"
                @update:modelValue="value => updateFieldValue(item.forType, value)"

            />
            <DatePickerField
                v-else-if="item.fieldType === fieldType.datePickerField"
                :id="item.forType"
                :modelValue="localModel[item.forType]"
                :placeholder="item.placeholder"
                :pickerType="item.type"
                :hasError="v$[item.forType].$error"
                :baseFieldClass="style?.fieldAndError?.field"
                :customFieldClass="schema?.style?.fieldAndError?.field"
                :uniqueFieldClass="item?.customStyle?.fieldAndError?.field"
                @blur="handleBlur"
                @update:modelValue="value => updateFieldValue(item.forType, value)"

            />
            <TextAreaField
                v-else-if="item.fieldType === fieldType.textArea"
                :id="item.forType"
                :modelValue="localModel[item.forType]"
                :placeholder="item.placeholder"
                :hasError="v$[item.forType].$error"
                :baseFieldClass="style?.fieldAndError?.field"
                :customFieldClass="schema?.style?.fieldAndError?.field"
                :uniqueFieldClass="item?.customStyle?.fieldAndError?.field"
                @blur="handleBlur"
                @update:modelValue="value => updateFieldValue(item.forType, value)"

            />
            <SelectField
                v-else-if="item.fieldType===fieldType.selectField && item.tagItems.length > 0"
                :id="item.forType"
                :modelValue="localModel[item.forType]"
                :placeholder="item.placeholder"
                :tagItems="item.tagItems"
                :baseFieldClass="style?.fieldAndError?.selectField"
                :customFieldClass="schema?.style?.fieldAndError?.selectField"
                :uniqueFieldClass="item?.customStyle?.fieldAndError?.selectField"
                :hasError="v$[item.forType].$error"
                @update:modelValue="(value) => updateFieldValue(item.forType,value)"
                @blur="handleBlur"
            />
            <RadioField
                v-else-if="item.fieldType === fieldType.radioField"
                :id="item.forType"
                :modelValue="localModel[item.forType]"
                :tagItems="item.tagItems"
                :wrapperClass="[
                    style?.fieldAndError?.radioField?.wrapper,
                    schema?.style?.fieldAndError?.radioField?.wrapper,
                    item?.customStyle?.fieldAndError?.radioField?.wrapper,
                    { 'textField__default__error': v$[item.forType].$error }
                    ]"
                :containerClass="[
                    style?.fieldAndError?.radioField?.container,
                    schema?.style?.fieldAndError?.radioField?.container,
                    item?.customStyle?.fieldAndError?.radioField?.container
                    ]"
                :inputClass="[
                    style?.fieldAndError?.radioField?.input,
                    schema?.style?.fieldAndError?.radioField?.input,
                    item?.customStyle?.fieldAndError?.radioField?.input
                    ]"
                :labelClass="[
                    style?.fieldAndError?.radioField?.label,
                    schema?.style?.fieldAndError?.radioField?.label,
                    item?.customStyle?.fieldAndError?.radioField?.label
                    ]"
                @update:modelValue="(value) => updateFieldValue(item.forType,value)"
                @blur="handleBlur"
            />
            <MultiSelect
                v-else-if="item.fieldType===fieldType.multiSelect"
                :multiSelectClass="style?.fieldAndError?.multiSelect"
                :customMultiSelectClass="schema?.style?.fieldAndError?.multiSelect"
                :uniqueStyle="item?.customStyle?.fieldAndError?.multiSelect"
                :id="item.forType"
                :items="item.tagItems"
                :label="item.placeholder"
                :hasError="v$[item.forType].$error"
                :modelValue="localModel[item.forType]"
                @update:modelValue="(value) => updateFieldValue(item.forType,value)"
                @blur="handleBlur"
            />
            <!-- Dynamic icon support for fields with insetIconType -->
            <component
                v-if="item?.insetIconType!==null"
                :class="[
                    style?.fieldAndError?.insetIcon?.wrapper,
                    schema?.style?.fieldAndError?.insetIcon?.wrapper,
                    item?.customStyle?.fieldAndError?.insetIcon?.wrapper
                ]"
                :icon="item?.customStyle?.fieldAndError?.insetIcon?.icon"
                :path="item?.customStyle?.fieldAndError?.insetIcon?.path"
                :is="dynamicIconComponent[index]"
            >
            </component>
            <!-- Show Vuelidate or backend errors -->
            </div>
            <FieldErrorMessages

                :backendError="schema?.errorField?.[item.forType]"
                :wrapperStyle="[
                  style?.fieldAndError?.error?.wrapper,
                  schema?.style?.fieldAndError?.error?.wrapper,
                  item?.customStyle?.fieldAndError?.error?.wrapper]"
                :messageStyle="[
                    style?.fieldAndError?.error?.message,
                    schema?.style?.fieldAndError?.error?.message,
                    item?.customStyle?.fieldAndError?.error?.message
                ]"
                :errors="v$[item.forType].$errors"
            />
          </div>

        </div>
      </div>
    </div>
    <!-- Submit Button (conditionally shown) -->
    <SubmitButton
        v-show="schema?.submitButton?.isSubmitButton"
        :content="schema?.submitButton?.content"
        :type="schema?.submitButton?.type"
        :wrapperClass="[
            style?.fieldAndError?.submit?.wrapper,
            schema?.style?.fieldAndError?.submit?.wrapper
            ]"
        :buttonClass="[
            style?.fieldAndError?.submit?.button,
            schema?.style?.fieldAndError?.submit?.button
            ]"
        @click="handleSubmit"
    />
  </div>
</template>

<script setup>
/**
 * --- DynamicForm Component Logic ---
 *
 * - Uses a local reactive model (`localModel`) for field binding and validation.
 * - Watches parent-provided `modelValue` to keep local state in sync.
 * - Emits updates on any field change via update:modelValue.
 * - Handles dynamic validation rule generation via vuelidate.
 * - Merges base, schema, and field-specific classes for styling flexibility.
 */

import {computed, nextTick, onBeforeMount, reactive, shallowRef, watch} from "vue";
import {useVuelidate} from "@vuelidate/core";
import '@vuepic/vue-datepicker/dist/main.css';
import style from "@/utils/dynamicForm/styleState.js"
import {importDynamicIconComponentForTextField} from "@/composable/dynamicIconImport/index.js";

// Import field components
import FieldLabel from "@/components/DynamicForm/FieldLabel.vue";
import TextField from "@/components/DynamicForm/TextField.vue";
import PasswordField from "@/components/DynamicForm/PasswordField.vue";
import DatePickerField from "@/components/DynamicForm/DatePickerField.vue";
import TextAreaField from "@/components/DynamicForm/TextAreaField.vue";
import SelectField from "@/components/DynamicForm/SelectField.vue";
import RadioField from "@/components/DynamicForm/RadioField.vue";
import MultiSelect from "@/components/DynamicForm/MultiSelect.vue";
import SubmitButton from "@/components/DynamicForm/SubmitButton.vue";
import {generateValidationRules} from "@/composable/validation/validationRules.js";
import FieldErrorMessages from "@/components/DynamicForm/FieldErrorMessages.vue";
import {fieldType} from "@/utils/dynamicForm/customizableTextField.js";

// --- Props ---
const props=defineProps({
  /**
   * Form schema object describing fields and configuration.
   * @type {Object}
   * @required
   */
  schema:{
    type:Object,
    required:true,
  },
  /**
   * Form model data (used with v-model).
   * @type {Object}
   * @required
   */
  modelValue: { type: Object, required: true },

});

// --- Local State ---
// Use a local reactive model for better control and validation.
const localModel = reactive({ ...props.modelValue });

defineExpose({
  handleSubmit,
});

// Sync localModel with parent prop
watch(
    () => props.modelValue,
    (newVal) => {
      Object.assign(localModel, newVal);
    },
    { deep: true }
);

// --- Emits ---
const emit = defineEmits(['update:modelValue', 'submit']);


// --- Dynamic Icon Loading ---
const dynamicIconComponent= shallowRef({});

// On mount, load any dynamic icon components needed for fields.
onBeforeMount(()=>{
  setupDynamicIcons();
})

function setupDynamicIcons() {
  for (let i=0;i<props.schema?.fields.length;i++){
    if (props.schema?.fields[i].insetIconType!==null){
      importDynamicIconComponentForTextField(props.schema?.fields[i].insetIconType,i,dynamicIconComponent);
    }
  }
}

// --- Field Value Updates ---
// All updates flow via localModel + emit for one-way data flow
const updateFieldValue = (key, value) => {
  localModel[key] = value;
  emit("update:modelValue", { ...localModel });  //  passing the reactive object!
};

// --- Validation (Blur Handler) ---
const handleBlur = async (field) => {
  await nextTick();
  v$.value[field]?.$touch();
  await v$.value.$validate();
};

// --- Form Submit Handler ---
// REMOVE onSubmit from props

// In your component, emit the submit event instead of calling a prop
async function handleSubmit(){
  console.log('check after',localModel);

  const isValid = await v$.value.$validate();
  if (isValid){
    emit("submit", { ...localModel }); // Pass data if you want!
  } else {
    v$.value.$touch();
  }

  console.log('check after',localModel);
}


// --- Helper: Detect if standard text input field
function isTextField(item) {
  return (
      item.fieldType === fieldType.textField &&
      ['text', 'number', 'email', 'url','password','tel'].includes(item.type)
  );
}

// --- Dynamic validation rules ---
const rules = computed(() => generateValidationRules(props.schema.fields,localModel));
const v$ = useVuelidate(rules,localModel);

</script>

