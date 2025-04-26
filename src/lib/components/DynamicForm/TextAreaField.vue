<template>
  <textarea
      :value="modelValue"
      :id="id"
      :class="[
      baseFieldClass,
      customFieldClass,
      uniqueFieldClass,
      { 'textField__default__error': hasError },
    ]"
      :placeholder="placeholder"
      @blur="onBlur"
      @input="onInput"
  ></textarea>
</template>

<script setup>
const emit = defineEmits(["blur", "update:modelValue"]);

// Props
const props = defineProps({
  id: { type: String, required: true },
  modelValue: { required: true }, // Two-way binding with v-model
  placeholder: { type: String, default: "" },
  hasError: { type: Boolean, default: false },
  baseFieldClass: { type: String, default: "" },
  customFieldClass: { type: String, default: "" },
  uniqueFieldClass: { type: String, default: "" },
});

function onInput(event) {
  emit('update:modelValue', event.target.value);
}
function onBlur() {
  emit('blur',props.id);
}

</script>
