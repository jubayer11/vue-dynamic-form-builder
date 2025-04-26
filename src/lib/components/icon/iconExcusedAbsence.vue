<template>
  <svg :class="[props.icon]" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path :class="[stroke[0]]" d="M9 1L1 9" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path :class="[stroke[1]]" d="M1 1L9 9" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>


</template>
<script setup>
const props=defineProps({
  icon:{
    type:String,
    default:'icon__default__icon',
  },
  path:{
    type:Array,
    default:['icon__default__icon__path1', 'icon__default__icon__path2'],
  },
  stroke:{
    type:Array,
    default:['icon__default__icon__stroke1', 'icon__default__icon__stroke2'],
  },
});

</script>
<style scoped lang="scss">
@import '@/lib/assets/icon/iconDefault.scss';




</style>