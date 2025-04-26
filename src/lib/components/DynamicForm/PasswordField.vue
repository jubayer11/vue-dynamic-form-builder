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
      ]"
        @blur="onBlur"
        @input="onInput"
    />

    <!-- Password Toggle -->
    <div
        :class="[
        toggleClass,
        { 'password-visible': showPassword, 'password-hidden': !showPassword }
      ]"
        @click="togglePasswordVisibility"
    >
      {{ showPassword ? 'Hide' : 'Show' }}
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// Define emitted events
const emit = defineEmits(['blur', 'update:modelValue']);

// Define props
const props = defineProps({
  id: { type: String, required: true },
  placeholder: { type: String, default: '' },
  modelValue: { required: true }, // Two-way binding with v-model
  hasError: { type: Boolean, default: false },
  baseFieldClass: { type: String, default: '' },
  customFieldClass: { type: String, default: '' },
  uniqueFieldClass: { type: String, default: '' },
  containerClass: { type: Array, default: '' },
  toggleClass: { type: Array, default: '' },
});


const showPassword = ref(false);
function onInput(event) {
  emit('update:modelValue', event.target.value);
}
function onBlur() {
  emit('blur',props.id);
}
// Toggle password visibility
function togglePasswordVisibility() {
  showPassword.value = !showPassword.value;
}
</script>
