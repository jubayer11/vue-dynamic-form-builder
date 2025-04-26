<template>
  <div :class="[
      style?.mainDiv,
      schema?.style?.mainDiv]">

    <div :class="[
      style?.field?.mainDiv,
      schema?.style?.field?.mainDiv]">

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


          <div
              :class="[
                style?.fieldAndError?.wrapper,
                schema?.style?.fieldAndError?.wrapper,
                item?.customStyle?.fieldAndError?.wrapper]">

            <TextField
                v-if="isTextField(item)"
                :id="item.forType"
                v-model="localModel[item.forType]"
                :placeholder="item.placeholder"
                :type="item.type"
                :hasError="v$[item.forType].$error"
                :baseFieldClass="style?.fieldAndError?.field"
                :customFieldClass="schema?.style?.fieldAndError?.field"
                :uniqueFieldClass="item?.customStyle?.fieldAndError?.field"
                @blur="handleBlur"
            />
            <PasswordField
                v-else-if="item.fieldType===fieldType.passwordTextField"
                :id="item.forType"
                v-model="localModel[item.forType]"
                :placeholder="item.placeholder"
                :hasError="v$[item.forType].$error"
                :baseFieldClass="style?.fieldAndError?.field"
                :customFieldClass="schema?.style?.fieldAndError?.field"
                :uniqueFieldClass="item?.customStyle?.fieldAndError?.field"
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
            />
            <DatePickerField
                v-else-if="item.fieldType === fieldType.datePickerField"
                :id="item.forType"
                v-model="localModel[item.forType]"
                :placeholder="item.placeholder"
                :pickerType="item.type"
                :hasError="v$[item.forType].$error"
                :baseFieldClass="style?.fieldAndError?.field"
                :customFieldClass="schema?.style?.fieldAndError?.field"
                :uniqueFieldClass="item?.customStyle?.fieldAndError?.field"
                @blur="handleBlur"

            />
            <TextAreaField
                v-else-if="item.fieldType === fieldType.textArea"
                :id="item.forType"
                v-model="localModel[item.forType]"
                :placeholder="item.placeholder"
                :hasError="v$[item.forType].$error"
                :baseFieldClass="style?.fieldAndError?.field"
                :customFieldClass="schema?.style?.fieldAndError?.field"
                :uniqueFieldClass="item?.customStyle?.fieldAndError?.field"
                @blur="handleBlur"
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

            >
            </MultiSelect>
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
            <FieldErrorMessages
                v-if="v$[item.forType].$error || schema?.errorField?.[item.forType]"
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


import {computed, nextTick, onBeforeMount, reactive, shallowRef, watch} from "vue";
import {useVuelidate} from "@vuelidate/core";
import '@vuepic/vue-datepicker/dist/main.css';
import style from "@/utils/dynamicForm/styleState.js"
import {importDynamicIconComponentForTextField} from "@/composable/dynamicIconImport/index.js";


//importing component
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

//props and emits
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
  onSubmit: { type: Function, required: false },
});
const localModel = reactive({ ...props.modelValue });

defineExpose({
  handleSubmit,
});
watch(
    () => props.modelValue,
    (newVal) => {
      Object.assign(localModel, newVal);
    },
    { deep: true }
);


const emit = defineEmits(["update:modelValue"]);

//ref and reactive state
const dynamicIconComponent= shallowRef({});

//life cycle hook
onBeforeMount(()=>{
  setupDynamicIcons();
})

//methods and asynchronous method
function setupDynamicIcons() {
  for (let i=0;i<props.schema?.fields.length;i++){
    if (props.schema?.fields[i].insetIconType!==null){
      importDynamicIconComponentForTextField(props.schema?.fields[i].insetIconType,i,dynamicIconComponent);
    }
  }
}

// const updateFieldValue = (key, value) => {
//   //console.log('checking value',key,value);
//        //props.modelValue[key]=value;
//   //emit("update:modelValue", { ...props.modelValue, [key]: value });
//   //console.log('checking props',props.modelValue);
//
//
//
//   const updatedModel = { ...props.modelValue, [key]: value };
//   emit("update:modelValue", updatedModel);
// };
const updateFieldValue = (key, value) => {
  localModel[key] = value;
  emit("update:modelValue", { ...localModel });
};
const handleBlur = async (field) => {
  await nextTick();
  v$.value[field]?.$touch();
  await v$.value.$validate();

  //console.log('Checking field:', field);
  //console.log('Errors for field:', v$.value[field].$error);
  //console.log('FormData:', props.modelValue);
};


async function handleSubmit(){
  const isValid = await v$.value.$validate();
  if (isValid){
    props.onSubmit();
  }
  else {
    v$.value.$touch();
  }
}

function isTextField(item) {
  return (
      item.fieldType === fieldType.textField &&
      ['text', 'number', 'email', 'url','password'].includes(item.type)
  );
}



// dynamic validation
const rules = computed(() => generateValidationRules(props.schema.fields,localModel));
//console.log('checking rules',rules.value);
const v$ = useVuelidate(rules,localModel);

//console.log('checking $v', v$.value);


</script>
<style  lang="scss">
@import "@/assets/textField/defaultTextFieldStyle.scss";
@import "@/assets/textField/customTextFieldStyle.scss";
@import '@/assets/icon/iconDefault.scss';
@import "@/assets/textField/userList.scss";


</style>

<style>


</style>