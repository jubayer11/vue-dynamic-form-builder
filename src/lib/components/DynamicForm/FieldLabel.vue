<template>
  <label
      v-if="label"
      :for="forId"
      :class="[
          baseLabelClass,
          customLabelClass,
          uniqueLabelClass
          ]"
  >
    <span
        v-if="isMandatory"
        :class="[
            baseMandatoryClass,
            customMandatoryClass,
            uniqueMandatoryClass
            ]"
    >
      *
    </span>
    {{ label }}
  </label>
</template>

<script setup>
defineProps({
  label: { type: String, required: true },
  forId: { type: String, required: true },
  isMandatory: { type: Boolean, default: false },
  baseLabelClass: { type: String, default: '' },
  customLabelClass: { type: String, default: '' },
  uniqueLabelClass: { type: String, default: '' },
  baseMandatoryClass: { type: String, default: '' },
  customMandatoryClass: { type: String, default: '' },
  uniqueMandatoryClass: { type: String, default: '' },
});
</script>
