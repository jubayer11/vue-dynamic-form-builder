<template>
    <VueDatePicker
        v-model="internalValue"
        :id="id"
        :class="[
        baseFieldClass,
        customFieldClass,
        uniqueFieldClass,
        { 'textField__default__error': hasError },
      ]"
        :type="pickerType"
        :placeholder="placeholder"
        :month-picker="pickerType === 'month'"
        :time-picker="pickerType === 'time'"
        :year-picker="pickerType==='year'"
        :week-picker="pickerType==='week'"
        :enable-time-picker="pickerType==='dateTime'"
        :format="customFormatDate"
        :is-24="is24Hour"
        @blur="onBlur"

    />
</template>

<script setup>
import {onMounted, ref, watch} from 'vue';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import moment from "@/utils/helper/moment.js";

// Define props
const props = defineProps({
  id: { type: String, required: true },
  modelValue: { required: true },
  placeholder: { type: String, default: '' },
  hasError: { type: Boolean, default: true },
  baseFieldClass: { type: String, default: '' },
  customFieldClass: { type: String, default: '' },
  uniqueFieldClass: { type: String, default: '' },
  containerClass: { type: String, default: '' },
  pickerType: { type: String, default: 'date' }, // 'date', 'month', 'time'
  is24Hour: { type: Boolean, default: false }, // 24-hour format
});

// Define emits
const emit = defineEmits(['blur', 'update:modelValue']);
// Internal state
const internalValue = ref(null);

onMounted(() => {
  console.log('checking value',props.modelValue);
  internalValue.value = parseDate(props.modelValue, props.pickerType);
  console.log('checking on mounted',internalValue.value,'modelValue',props.modelValue);
});
const customFormatDate = (date) => {
  if (!date) return '';
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  const hours = date.getHours() % 12 || 12; // Convert to 12-hour format
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const amPm = date.getHours() >= 12 ? 'PM' : 'AM';

  switch (props.pickerType) {
    case 'time':
      return `${hours}:${minutes} ${amPm}`;
    case 'dateTime':
      return `${day}/${month}/${year} ${hours}:${minutes} ${amPm}`;
    case 'date':
      return `${day}/${month}/${year}`;
    case 'month':
      return `${month}/${year}`;
    case 'year':
      return `${year}`;
    default:
      return `${day}/${month}/${year}`;
  }
};
function formatDate(value, pickerType) {
  if (!value) return null; // Explicitly return null for invalid or empty values

  switch (pickerType) {
    case 'time':
      return moment(value).format('HH:mm');
    case 'dateTime':
      return moment(value).format('DD/MM/YYYY HH:mm');
    case 'date':
      return moment(value).format('DD/MM/YYYY');
    case 'month':
      return moment(value).format('MM/YYYY');
    case 'year':
      return moment(value).format('YYYY');
    default:
      return moment(value).format('DD/MM/YYYY');
  }
}


function parseDate(value, pickerType) {
  if (!value) return null;

  const parsedDate = (format) => moment(value, format, true);

  switch (pickerType) {
    case 'time': {
      const date = parsedDate('HH:mm');
      return date.isValid()
          ? {
            hours: date.hour(),
            minutes: date.minute(),
            seconds: 0, // Default seconds to 0
          }
          : null;
    }
    case 'dateTime':
      return moment(value, 'DD/MM/YYYY HH:mm', true).isValid()
          ? moment(value, 'DD/MM/YYYY HH:mm').toISOString()
          : null;
    case 'date':
      return moment(value, 'DD/MM/YYYY', true).isValid()
          ? moment(value, 'DD/MM/YYYY').toISOString()
          : null;

    case 'month': {
      const date = parsedDate('MM/YYYY');
      return date.isValid()
          ? {
            month: date.month(),
            year: date.year(),
          }
          : null;
    }
    case 'year': {
      const date = parsedDate('YYYY');
      return date.isValid() ?  date.year(): null;
    }
    default: {
      const date = parsedDate('DD/MM/YYYY');
      return date.isValid()
          ? {
            day: date.date(),
            month: date.month() + 1,
            year: date.year(),
          }
          : null;
    }
  }
}





//Watch for changes in props.modelValue
watch(
    () => props.modelValue,
    (newValue) => {
      const parsedValue = parseDate(newValue, props.pickerType);

      // Update internalValue only if it differs from the current value
      if (internalValue.value !== parsedValue) {
        internalValue.value = parsedValue;
        //console.log('is Value Changing on props', internalValue.value);
      }
    }
);

// Emit changes back to the parent
watch(
    () => internalValue.value,
    (newValue) => {
      // Only emit if the value has changed
      const formatValue = formatDate(newValue, props.pickerType);
      if (props.modelValue !== formatValue) {
        emit('update:modelValue', formatValue);
        //console.log('is Value Changing on emitting', formatDate(newValue, props.pickerType));
      }
    }
);


// Emit blur event
function onBlur() {
  emit('blur',props.id);
}


</script>

<style scoped>
/* Add any specific styles for DatePickerField if needed */
</style>
