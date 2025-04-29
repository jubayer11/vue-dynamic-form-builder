<template>
  <VueDatePicker
      v-model="internalValue"
      :id="id"
      :class="[
      baseFieldClass,
      customFieldClass,
      uniqueFieldClass,
      { 'textField__default__error': hasError }
    ]"
      :type="pickerType"
      :placeholder="placeholder"
      :month-picker="pickerType === 'month'"
      :time-picker="pickerType === 'time'"
      :year-picker="pickerType === 'year'"
      :week-picker="pickerType === 'week'"
      :enable-time-picker="pickerType === 'dateTime'"
      :format="customFormatDate"
      :is-24="is24Hour"
      @blur="onBlur"
  />
</template>

<script setup>
import { onMounted, ref, watch } from 'vue';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import moment from "@/utils/helper/moment.js";

/**
 * DatePickerField.vue
 *
 * Schema-driven date/time input using VueDatePicker.
 * Handles flexible input/output formatting for dynamic forms.
 *
 * @prop {String}   id                - Unique input id (required)
 * @prop {*}        modelValue        - v-model value (string/Date, required)
 * @prop {String}   placeholder       - Input placeholder (default: '')
 * @prop {Boolean}  hasError          - Show error class if true (default: false)
 * @prop {String}   baseFieldClass    - Base/global input class (default: '')
 * @prop {String}   customFieldClass  - Schema-level input class (default: '')
 * @prop {String}   uniqueFieldClass  - Field-level input class (default: '')
 * @prop {String}   pickerType        - Picker type ('date', 'month', 'time', 'year', 'week', 'dateTime') (default: 'date')
 * @prop {Boolean}  is24Hour          - Use 24-hour format (default: false)
 *
 * @emits update:modelValue           - Emits formatted value on change
 * @emits blur                        - Emits field id on blur (for validation)
 *
 * @example
 * <DatePickerField
 *   id="start"
 *   :modelValue="startDate"
 *   :pickerType="'dateTime'"
 *   :baseFieldClass="'date-field'"
 *   @update:modelValue="val => startDate = val"
 *   @blur="handleBlur"
 * />
 */

const props = defineProps({
  id: { type: String, required: true },
  modelValue: { required: true },
  placeholder: { type: String, default: '' },
  hasError: { type: Boolean, default: false },
  baseFieldClass: { type: String, default: '' },
  customFieldClass: { type: String, default: '' },
  uniqueFieldClass: { type: String, default: '' },
  pickerType: { type: String, default: 'date' },
  is24Hour: { type: Boolean, default: false }
});

const emit = defineEmits(['blur', 'update:modelValue']);
const internalValue = ref(null);

onMounted(() => {
  internalValue.value = parseDate(props.modelValue, props.pickerType);
});

function customFormatDate(date) {

  if (!date) return '';
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  const hours = props.is24Hour
      ? String(date.getHours()).padStart(2, '0')
      : (date.getHours() % 12 || 12);
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const amPm = date.getHours() >= 12 ? 'PM' : 'AM';

  switch (props.pickerType) {
    case 'time':
      return props.is24Hour
          ? `${hours}:${minutes}`
          : `${hours}:${minutes} ${amPm}`;
    case 'dateTime':
      return props.is24Hour
          ? `${day}/${month}/${year} ${hours}:${minutes}`
          : `${day}/${month}/${year} ${hours}:${minutes} ${amPm}`;
    case 'date':
      return `${day}/${month}/${year}`;
    case 'month':
      return `${month}/${year}`;
    case 'year':
      return `${year}`;
    case 'week': {
      const week = moment(date).isoWeek(); // ISO Week number
      const year = moment(date).isoWeekYear(); // ISO Week year
      return `${week}-${year}`; // Correct format: "21-2025"
    }
    default:
      return `${day}/${month}/${year}`;
  }
}

function formatDate(value, pickerType) {
  if (!value) return null;
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
    case 'week': {
      const week = moment(value).isoWeek();
      const year = moment(value).isoWeekYear();
      return `${week}-${year}`;
    }
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
          ? { hours: date.hour(), minutes: date.minute(), seconds: 0 }
          : null;
    }
    case 'dateTime':
      return moment(value, 'DD/MM/YYYY HH:mm', true).isValid()
          ? moment(value, 'DD/MM/YYYY HH:mm').toDate()
          : null;
    case 'date':
      return moment(value, 'DD/MM/YYYY', true).isValid()
          ? moment(value, 'DD/MM/YYYY').toDate()
          : null;
    case 'month': {
      const date = parsedDate('MM/YYYY');
      return date.isValid()
          ? { month: date.month(), year: date.year() }
          : null;
    }
    case 'year': {
      const date = parsedDate('YYYY');
      return date.isValid() ? date.year() : null;
    }
    case 'week': {
      const [week, year] = value.split('-');
      if (week && year) {
        return moment().year(parseInt(year)).isoWeek(parseInt(week)).startOf('isoWeek').toDate();
      }
      return null;
    }

    default: {
      const date = parsedDate('DD/MM/YYYY');
      return date.isValid()
          ? { day: date.date(), month: date.month() + 1, year: date.year() }
          : null;
    }
  }
}

watch(
    () => props.modelValue,
    (newValue) => {
      const parsedValue = parseDate(newValue, props.pickerType);
      if (internalValue.value !== parsedValue) {
        internalValue.value = parsedValue;
      }
    }
);

watch(
    () => internalValue.value,
    (newValue) => {
      const formatValue = formatDate(newValue, props.pickerType);
      if (props.modelValue !== formatValue) {
        emit('update:modelValue', formatValue);
      }
    }
);

function onBlur() {
  emit('blur', props.id);
}
</script>

<style scoped>
/* Add component-specific styles here if needed */
</style>
