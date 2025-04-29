<template>
  <div
      :class="[
      baseFieldClass?.wrapper,
      customFieldClass?.wrapper,
      uniqueFieldClass?.wrapper
    ]"
      ref="selectWrapper"
  >
    <!-- Trigger -->
    <div
        :class="[
        baseFieldClass?.field,
        customFieldClass?.field,
        uniqueFieldClass?.field
      ]"
        @click="toggleDropdown"
        tabindex="0"
    >
      <div
          :class="[
          baseFieldClass?.labelAndIcon?.wrapper,
          customFieldClass?.labelAndIcon?.wrapper,
          uniqueFieldClass?.labelAndIcon?.wrapper
        ]"
      >
        <div
            :class="[
            baseFieldClass?.labelAndIcon?.label,
            customFieldClass?.labelAndIcon?.label,
            uniqueFieldClass?.labelAndIcon?.label
          ]"
        >
          {{ selectedLabel || placeholder }}
        </div>
        <!-- Icons: up when open, down when closed -->
        <svg
            v-if="isOpen"
            :class="[
            baseFieldClass?.labelAndIcon?.icon?.icon,
            customFieldClass?.labelAndIcon?.icon?.icon,
            uniqueFieldClass?.labelAndIcon?.icon?.icon
          ]"
            viewBox="0 0 16 16"
            fill="none"
        >
          <path
              :class="[
              baseFieldClass?.labelAndIcon?.icon?.path,
              customFieldClass?.labelAndIcon?.icon?.path,
              uniqueFieldClass?.labelAndIcon?.icon?.path
            ]"
              d="M3 10L8 5L13 10"
              stroke="#2E90FA"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
          />
        </svg>
        <svg
            v-else
            :class="[
            baseFieldClass?.labelAndIcon?.icon?.icon,
            customFieldClass?.labelAndIcon?.icon?.icon,
            uniqueFieldClass?.labelAndIcon?.icon?.icon
          ]"
            viewBox="0 0 20 20"
            fill="none"
        >
          <path
              :class="[
              baseFieldClass?.labelAndIcon?.icon?.path,
              customFieldClass?.labelAndIcon?.icon?.path,
              uniqueFieldClass?.labelAndIcon?.icon?.path
            ]"
              d="M16.25 7.5L10 13.75L3.75 7.5"
              stroke="#2E90FA"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>

    <!-- Dropdown -->
    <div
        v-if="isOpen"
        :class="[
        baseFieldClass?.dropdown?.wrapper,
        customFieldClass?.dropdown?.wrapper,
        uniqueFieldClass?.dropdown?.wrapper
      ]"
    >
      <input
          :class="[
          baseFieldClass?.dropdown?.input,
          customFieldClass?.dropdown?.input,
          uniqueFieldClass?.dropdown?.input
        ]"
          v-model="searchQuery"
          type="text"
          name="search"
          placeholder="search item here"
      >
      <ul
          :class="[
          baseFieldClass?.dropdown?.list,
          customFieldClass?.dropdown?.list,
          uniqueFieldClass?.dropdown?.list
        ]"
      >
        <!-- Deselect Option -->
        <li
            :class="[
            baseFieldClass?.dropdown?.item,
            customFieldClass?.dropdown?.item,
            uniqueFieldClass?.dropdown?.item,
            {
              [baseFieldClass?.dropdown?.itemSelected]: selectedItem.value === '',
              [customFieldClass?.dropdown?.itemSelected]: selectedItem.value === '',
              [uniqueFieldClass?.dropdown?.itemSelected]: selectedItem.value === ''
            }
          ]"
            @click="deselectOption"
        >
          None
        </li>
        <!-- Options -->
        <li
            v-for="item in filteredItems"
            :key="item.id"
            :class="[
            baseFieldClass?.dropdown?.item,
            customFieldClass?.dropdown?.item,
            uniqueFieldClass?.dropdown?.item,
            {
              [baseFieldClass?.dropdown?.itemSelected]: item.id === modelValue.id,
              [customFieldClass?.dropdown?.itemSelected]: item.id === modelValue.id,
              [uniqueFieldClass?.dropdown?.itemSelected]: item.id === modelValue.id,
            }
          ]"
            @click="selectOption(item)"
        >
          {{ item.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
/**
 * SelectField.vue
 *
 * A customizable dropdown select component for dynamic forms.
 *
 * @prop {String} id                  - Unique id for the select field (required)
 * @prop {*}      modelValue          - Current value (object or id/primitive) (required)
 * @prop {String} placeholder         - Placeholder when nothing is selected (default: "Select an option")
 * @prop {Array}  tagItems            - Array of options [{ id, name }] (default: [])
 * @prop {Object} baseFieldClass      - Base/global classes for the field and subparts (default: {})
 * @prop {Object} customFieldClass    - Schema-level classes (default: {})
 * @prop {Object} uniqueFieldClass    - Field-level classes (default: {})
 * @prop {Boolean} hasError           - Show error class if true (default: false)
 *
 * @emits update:modelValue           - Emits full option object or '' for none
 * @emits blur                        - Emits field id when blurred/changed
 *
 * @example
 * <SelectField
 *   id="country"
 *   :modelValue="selectedCountry"
 *   :placeholder="'Select country'"
 *   :tagItems="countryList"
 *   :baseFieldClass="fieldClasses"
 *   @update:modelValue="val => selectedCountry = val"
 *   @blur="handleBlur"
 * />
 */
import { ref, onMounted, onBeforeUnmount, computed, watch } from "vue";

const props = defineProps({
  id: { type: String, required: true },
  modelValue: { required: true },
  placeholder: { type: String, default: "Select an option" },
  tagItems: { type: Array, default: () => [] },
  baseFieldClass: { type: Object, default: () => ({}) },
  customFieldClass: { type: Object, default: () => ({}) },
  uniqueFieldClass: { type: Object, default: () => ({}) },
  hasError: { type: Boolean, default: false },
});

const emit = defineEmits(["update:modelValue", "blur"]);

// State
const isOpen = ref(false);
const selectedLabel = ref("");
const searchQuery = ref("");
const selectedItem = ref({});
const selectWrapper = ref(null);

/** Initialize selected item/label on mount or prop change */
onMounted(() => {
  initializeState();
});

const initializeState = () => {
  if (typeof props.modelValue === "number" || typeof props.modelValue === "string") {
    const matchingItem = props.tagItems.find((item) => item.id === props.modelValue);
    if (matchingItem) {
      selectedItem.value = matchingItem;
      selectedLabel.value = matchingItem.name;
      emit("update:modelValue", matchingItem);
    }
  } else if (typeof props.modelValue === "object" && props.modelValue.id !== undefined) {
    const matchingItem = props.tagItems.find((item) => item.id === props.modelValue.id);
    if (matchingItem) {
      selectedItem.value = matchingItem;
      selectedLabel.value = matchingItem.name;
      emit("update:modelValue", matchingItem);
    }
  }
};

watch(
    () => props.modelValue,
    () => {
      initializeState();
    },
    { immediate: true }
);

// Dropdown logic
function toggleDropdown() {
  isOpen.value = !isOpen.value;
}

const filteredItems = computed(() => {
  if (!searchQuery.value) return props.tagItems;
  return props.tagItems.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

function selectOption(option) {
  selectedItem.value = option;
  emit("update:modelValue", option);
  selectedLabel.value = option.name;
  isOpen.value = false;
  emit('blur', props.id);
}

function deselectOption() {
  selectedItem.value = '';
  emit("update:modelValue", '');
  selectedLabel.value = null;
  isOpen.value = false;
  emit('blur', props.id);
}

// Outside click closes dropdown
function handleClickOutside(event) {
  if (selectWrapper.value && !selectWrapper.value.contains(event.target)) {
    isOpen.value = false;
  }
}
onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});
onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

<style scoped>
/* Add styles as needed */
</style>
