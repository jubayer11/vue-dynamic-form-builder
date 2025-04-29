<template>
  <input
      :id="id"
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      :class="[
      baseFieldClass,
      customFieldClass,
      uniqueFieldClass,

      { 'textField__default__error': hasError },
         baseIconPaddingClass,
      customIconPaddingClass,
      uniqueIconPaddingClass,
    ]"
      @blur="onBlur"
      @input="onInput"
  />
</template>

<script setup>
/**
 * TextField.vue
 *
 * A reusable input field for dynamic forms with full theming support.
 *
 * @prop {String}   id                - Unique input id (required)
 * @prop {String}   type              - Input type (e.g., text, email, number) (default: 'text')
 * @prop {String}   placeholder       - Input placeholder (default: '')
 * @prop {*}        modelValue        - v-model (input value, required)
 * @prop {Boolean}  hasError          - Adds error class if true (default: false)
 * @prop {String}   baseFieldClass    - Base/global input class (default: '')
 * @prop {String}   customFieldClass  - Schema/form-level input class (default: '')
 * @prop {String}   uniqueFieldClass  - Field-level input class (default: '')
 *
 * @emits update:modelValue           - Emits new value for two-way binding
 * @emits blur                        - Emits field id on blur (for validation touch)
 *
 * @example
 * <TextField
 *   id="firstName"
 *   type="text"
 *   :modelValue="firstName"
 *   :placeholder="'First Name'"
 *   :baseFieldClass="'input-base'"
 *   @update:modelValue="val => firstName = val"
 *   @blur="handleBlur"
 * />
 */
const props = defineProps({
  id: { type: String, required: true },
  type: { type: String, default: 'text' },
  placeholder: { type: String, default: '' },
  modelValue: { required: true },
  hasError: { type: Boolean, default: false },
  baseFieldClass: { type: String, default: '' },
  customFieldClass: { type: String, default: '' },
  uniqueFieldClass: { type: String, default: '' },
  baseIconPaddingClass: { type: String, default: '' },
  customIconPaddingClass: { type: String, default: '' },
  uniqueIconPaddingClass: { type: String, default: '' }
});

const emit = defineEmits(['blur', 'update:modelValue']);

/** Handle blur event, emit with id (for validation touch) */
function onBlur() {
  emit('blur', props.id);
}

/** Handle input event, emit new value for v-model */
function onInput(event) {
  emit('update:modelValue', event.target.value);
}
</script>
