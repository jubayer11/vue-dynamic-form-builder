<template>
  <div
      :class="wrapperStyle"

  >
    <div :class="messageStyle">
      {{ (errors[0]?.$message || backendError) || '\u00A0' }}
    </div>
  </div>
</template>

<!--
/**
 * FieldErrorMessages.vue
 *
 * Displays validation and backend error messages for form fields.
 * - Renders the first Vuelidate error message or backend error if present.
 * - Accepts full theme-ability via wrapper/message class arrays.
 *
 * @prop {Array}  wrapperStyle   - Classes for error message wrapper (default: []).
 * @prop {Array}  messageStyle   - Classes for message text (default: []).
 * @prop {Array}  errors         - Vuelidate $errors array (default: []).
 * @prop {String} backendError   - Backend error string (default: '').
 *
 * @example
 * <FieldErrorMessages
 *   :wrapperStyle="['my-error-wrapper']"
 *   :messageStyle="['my-message']"
 *   :errors="v$[field].$errors"
 *   :backendError="schema.errorField?.[field]"
 * />
 */
-->

<script setup>
const props = defineProps({
  wrapperStyle: {
    type: Array,
    default: () => [],
  },
  messageStyle: {
    type: Array,
    default: () => [],
  },
  errors: {
    type: Array, // Vuelidate $errors is always array
    default: () => [],
  },
  backendError: {
    type: String,
    default: '',
  },
});
</script>

<style scoped>
/* Add component-specific styles here if needed */
</style>
