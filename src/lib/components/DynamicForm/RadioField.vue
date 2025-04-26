<template>
  <div
      :id="id"
      :class="wrapperClass"
      tabindex="0"
  >
    <div
        v-for="(radio, index) in tagItems"
        :key="index"
        :class="containerClass"
    >
      <!-- Radio Input -->
      <input
          :id="radio.id"
          :type="type"
          :value="radio.id"
          :checked="modelValue === radio.id"
          :class="inputClass"
          @change="updateValue(radio.id)"
          @blur="onBlur"
      />

      <!-- Radio Label -->
      <label
          :for="radio.id"
          :class="labelClass"
      >
        {{ radio.name }}
      </label>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

// Props
const props = defineProps({
  modelValue: { required: true },
  id: { type: String, required: true },
  tagItems: { type: Array, required: true },
  type: { type: String, default: "radio" },
  wrapperClass: { type: Array, default: "" },
  containerClass: { type: Array, default: "" },
  inputClass: { type: Array, default: "" },
  labelClass: { type: Array, default: "" },
});

// Emit events
const emit = defineEmits(['blur',"update:modelValue"]);

// Method to update the value
const updateValue = (value) => {
  emit("update:modelValue", value);
};
function onBlur() {
  emit('blur',props.id);
}
</script>

<style scoped>
/* Add scoped styles if needed */
</style>
