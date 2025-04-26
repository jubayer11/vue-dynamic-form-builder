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
    ]"
      @blur="onBlur"
      @input="onInput"

  />
</template>

<script setup>


const emit = defineEmits(['blur', 'update:modelValue']);

const props=defineProps({
  id: { type: String, required: true },
  type: { type: String, default: 'text' }, // e.g., 'text', 'email', 'number'
  placeholder: { type: String, default: '' },
  modelValue: { required: true }, // Prop for two-way binding
  hasError: { type: Boolean, default: false },
  baseFieldClass: { type: String, default: '' },
  customFieldClass: { type: String, default: '' },
  uniqueFieldClass: { type: String, default: '' },
});




function onBlur() {
  emit('blur',props.id);
}
function onInput(event) {
  emit('update:modelValue', event.target.value);
}


</script>
