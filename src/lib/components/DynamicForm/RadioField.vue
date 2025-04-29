<template>
  <div
      :id="id"
      :class="wrapperClass"
      tabindex="0"
  >
    <div
        v-for="(radio, index) in tagItems"
        :key="radio.id"
        :class="containerClass"
    >
      <!-- Radio Input -->
      <input
          :id="radio.id"
          :type="type"
          :value="radio.id"
          :checked="modelValue === radio.id"
          :class="[inputClass, 'custom-radio']"
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
/**
 * RadioField.vue
 *
 * Renders a schema-driven group of radio inputs for forms.
 *
 * @prop {String} id              - Unique group id (required)
 * @prop {*}      modelValue      - Currently selected value (required)
 * @prop {Array}  tagItems        - Array of radio options [{ id, name }] (required)
 * @prop {String} type            - Input type, defaults to "radio"
 * @prop {Array}  wrapperClass    - Array of classes for the radio group wrapper
 * @prop {Array}  containerClass  - Array of classes for each radio/label container
 * @prop {Array}  inputClass      - Array of classes for radio inputs
 * @prop {Array}  labelClass      - Array of classes for radio labels
 *
 * @emits update:modelValue       - Emits new value when a radio is selected
 * @emits blur                    - Emits field id when blurred (for validation touch)
 *
 * @example
 * <RadioField
 *   id="gender"
 *   :modelValue="gender"
 *   :tagItems="[{id:'male', name:'Male'}, {id:'female', name:'Female'}]"
 *   :wrapperClass="['my-radio-group']"
 *   :inputClass="['radio-input']"
 *   :labelClass="['radio-label']"
 *   @update:modelValue="val => gender = val"
 *   @blur="handleBlur"
 * />
 */
const props = defineProps({
  modelValue: { required: true },
  id: { type: String, required: true },
  tagItems: { type: Array, required: true },
  type: { type: String, default: "radio" },
  wrapperClass: { type: Array, default: () => [] },
  containerClass: { type: Array, default: () => [] },
  inputClass: { type: Array, default: () => [] },
  labelClass: { type: Array, default: () => [] },
});

const emit = defineEmits(['blur', 'update:modelValue']);

/** Emit value on selection */
const updateValue = (value) => {
  emit("update:modelValue", value);
};

/** Emit blur event for parent validation */
function onBlur() {
  emit('blur', props.id);
}
</script>

<style scoped>
input[type="radio"].custom-radio {
  appearance: none;
  -webkit-appearance: none;
  box-sizing: border-box;   /* important for border + width */
  background: #fff;
  border: 2px solid #3b82f6;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  cursor: pointer;
  transition: border 0.2s;
  display: inline-block;
  vertical-align: middle;
  position: relative;
}
input[type="radio"].custom-radio:checked {
  background: #3b82f6;
  border-color: #2563eb;
}
input[type="radio"].custom-radio:checked::after {
  content: '';
  display: block;
  position: absolute;
  left: 50%; top: 50%;
  width: 10px; height: 10px;
  background: #fff;
  border-radius: 50%;
  transform: translate(-50%, -50%);
}
input[type="radio"].custom-radio:focus {
  outline: 2px solid #2563eb;
  outline-offset: 2px;
  box-shadow: 0 0 0 3px #60a5fa33;
}

</style>
