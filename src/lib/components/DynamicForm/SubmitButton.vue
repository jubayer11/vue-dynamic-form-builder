<template>
  <div  :class="wrapperClass">
    <button
        :class="buttonClass"
        :type="type"
        @click="onClick"
    >
      {{ content }}
    </button>
  </div>
</template>

<script setup>
const props = defineProps({
  content: { type: String, required: true },
  type: { type: String, default: 'button' },
  wrapperClass: { type: Array, default: '' },
  buttonClass: { type: Array, default: '' },
});

const emit = defineEmits(['click']);

function onClick(event) {
  emit('click', event);
}
</script>

<style scoped>
/* Add default styles if needed */
</style>
