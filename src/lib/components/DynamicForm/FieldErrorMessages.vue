<template>
  <div
      :class="wrapperStyle"
      v-if="errors.length || backendError"
  >
    <div
        :class="messageStyle"
    >
      {{ errors[0]?.$message || backendError}}.

    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  wrapperStyle: {
    type: Array,
    default: () => ([]),
  },
  messageStyle: {
    type: Array,
    default: () => ([]),
  },
  errors: {
    type: Object,
    default: () => ({}),
  },
  backendError:{
    type:String,
    default:'',
  },
});


</script>

<style scoped>
/* Add component-specific styles here if needed */
</style>
