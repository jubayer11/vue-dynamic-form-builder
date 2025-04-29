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

/**
 * FieldLabel Props:
 * - label:            The label text (required)
 * - forId:            The id to link to the input element (required)
 * - isMandatory:      Show star/asterisk if true (default: false)
 * - baseLabelClass:   Global label class
 * - customLabelClass: Schema/form-level label class override
 * - uniqueLabelClass: Field-level label class override
 * - baseMandatoryClass: Global class for mandatory/star
 * - customMandatoryClass: Schema-level class for star
 * - uniqueMandatoryClass: Field-level class for star
 */
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
