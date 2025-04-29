<template>
  <textarea
      :value="modelValue"
      :id="id"
      :class="[
      baseFieldClass,
      customFieldClass,
      uniqueFieldClass,
      { 'textField__default__error': hasError }
    ]"
      :placeholder="placeholder"
      @blur="onBlur"
      @input="onInput"
  ></textarea>
</template>

<script setup>
/**
 * TextAreaField.vue
 *
 * Reusable, schema-driven textarea field for forms.
 *
 * @prop {String}  id                - Unique input id (required)
 * @prop {*}       modelValue        - v-model value (required)
 * @prop {String}  placeholder       - Placeholder text (default: "")
 * @prop {Boolean} hasError          - Show error class if true (default: false)
 * @prop {String}  baseFieldClass    - Base/global class (default: "")
 * @prop {String}  customFieldClass  - Schema-level class (default: "")
 * @prop {String}  uniqueFieldClass  - Field-level class (default: "")
 *
 * @emits update:modelValue          - Emits new value on input
 * @emits blur                       - Emits field id on blur (for validation)
 *
 * @example
 * <TextAreaField
 *   id="bio"
 *   :modelValue="bio"
 *   :placeholder="'Your bio...'"
 *   :baseFieldClass="'textarea-base'"
 *   @update:modelValue="val => bio = val"
 *   @blur="handleBlur"
 * />
 */
const emit = defineEmits(["blur", "update:modelValue"]);

const props = defineProps({
  id: { type: String, required: true },
  modelValue: { required: true },
  placeholder: { type: String, default: "" },
  hasError: { type: Boolean, default: false },
  baseFieldClass: { type: String, default: "" },
  customFieldClass: { type: String, default: "" },
  uniqueFieldClass: { type: String, default: "" },
});

/** Emit updated value for v-model */
function onInput(event) {
  emit('update:modelValue', event.target.value);
}
/** Emit blur event with id */
function onBlur() {
  emit('blur', props.id);
}
</script>
