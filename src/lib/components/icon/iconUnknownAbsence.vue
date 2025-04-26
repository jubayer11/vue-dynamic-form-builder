<template>
  <svg :class="[props.icon]" viewBox="0 0 9 13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path :class="[stroke[0]]" d="M1 3.12137C1.24881 2.41406 1.73993 1.81764 2.38635 1.43773C3.03277 1.05782 3.79279 0.918948 4.53179 1.04571C5.2708 1.17247 5.94109 1.55668 6.42396 2.13029C6.90683 2.7039 7.17111 3.4299 7.16999 4.17969C7.16999 6.29633 3.99504 7.35464 3.99504 7.35464" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path :class="[stroke[1]]" d="M4.07812 11.5879H4.08871" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
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