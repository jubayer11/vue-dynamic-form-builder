<template>
  <svg :class="[props.icon]" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path :class="[path[0]]" d="M8.17912 0.483986C8.48901 0.174095 8.90932 -4.61774e-09 9.34757 0C9.78582 4.61774e-09 10.2061 0.174095 10.516 0.483986C10.8259 0.793877 11 1.21418 11 1.65243C11 2.09068 10.8259 2.51099 10.516 2.82088L3.11586 10.221L0 11L0.778964 7.88414L8.17912 0.483986Z" fill="white"/>
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
});

</script>
<style scoped lang="scss">
@import '@/lib/assets/icon/iconDefault.scss';




</style>