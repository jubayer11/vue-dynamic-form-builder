<template>
  <div :class="containerClass">
    <!-- Password Input -->
    <input
        :id="id"
        :type="showPassword ? 'text' : 'password'"
        :value="modelValue"
        :placeholder="placeholder"
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

    <!-- Password Visibility Toggle -->
    <div
        :class="[
        toggleClass,
        { 'password-visible': showPassword, 'password-hidden': !showPassword }
      ]"
        @click="togglePasswordVisibility"
        style="cursor:pointer;"
    >
      {{ showPassword ? 'Hide' : 'Show' }}
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

/**
 * PasswordField.vue
 *
 * A reusable password input with toggle visibility, fully themeable for dynamic forms.
 *
 * @prop {String}   id                - Unique input id (required)
 * @prop {String}   placeholder       - Placeholder text (default: '')
 * @prop {*}        modelValue        - v-model value (required)
 * @prop {Boolean}  hasError          - Applies error class if true (default: false)
 * @prop {String}   baseFieldClass    - Base/global class (default: '')
 * @prop {String}   customFieldClass  - Schema-level class (default: '')
 * @prop {String}   uniqueFieldClass  - Field-level class (default: '')
 * @prop {Array}    containerClass    - Classes for input + toggle container (default: [])
 * @prop {Array}    toggleClass       - Classes for toggle (default: [])
 *
 * @emits update:modelValue           - Emits new value on input
 * @emits blur                        - Emits field id on blur (for validation)
 *
 * @example
 * <PasswordField
 *   id="account-password"
 *   :modelValue="password"
 *   :placeholder="'Password...'"
 *   :containerClass="['password-container']"
 *   :toggleClass="['toggle-btn']"
 *   @update:modelValue="val => password = val"
 *   @blur="handleBlur"
 * />
 */
const props = defineProps({
  id: { type: String, required: true },
  placeholder: { type: String, default: '' },
  modelValue: { required: true },
  hasError: { type: Boolean, default: false },
  baseFieldClass: { type: String, default: '' },
  customFieldClass: { type: String, default: '' },
  uniqueFieldClass: { type: String, default: '' },
  baseIconPaddingClass: { type: String, default: '' },
  customIconPaddingClass: { type: String, default: '' },
  uniqueIconPaddingClass: { type: String, default: '' },
  containerClass: { type: Array, default: () => [] },
  toggleClass: { type: Array, default: () => [] },

});

const emit = defineEmits(['blur', 'update:modelValue']);

/** Controls password visibility state */
const showPassword = ref(false);

/** Emits new value for v-model */
function onInput(event) {
  emit('update:modelValue', event.target.value);
}

/** Emits blur event with id (for parent validation touch) */
function onBlur() {
  emit('blur', props.id);
}

/** Toggle between password and plain text */
function togglePasswordVisibility() {
  showPassword.value = !showPassword.value;
}
</script>
