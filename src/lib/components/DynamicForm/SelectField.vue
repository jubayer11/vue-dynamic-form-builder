<template>
  <div
      :class="[
          baseFieldClass?.wrapper,
          customFieldClass?.wrapper,
          uniqueFieldClass?.wrapper
      ]"
      ref="selectWrapper">
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
        <svg
            v-if="isOpen"
            :class="[
                baseFieldClass?.labelAndIcon?.icon?.icon,
                customFieldClass?.labelAndIcon?.icon?.icon,
                uniqueFieldClass?.labelAndIcon?.icon?.icon
                ]"
            viewBox="0 0 16 16" fill="none"
            xmlns="http://www.w3.org/2000/svg"
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
            viewBox="0 0 20 20" fill="none"
            xmlns="http://www.w3.org/2000/svg">
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
import {ref, onMounted, onBeforeUnmount, computed, watch} from "vue";

const emit = defineEmits(["update:modelValue", "blur"]);

// Props
const props = defineProps({
  id: { type: String, required: true },
  modelValue: { required: true },
  placeholder: { type: String, default: "Select an option" },
  tagItems: { type: Array, default: () => [] },
  baseFieldClass: { type: Object, default: {} },
  customFieldClass: { type: Object, default: {} },
  uniqueFieldClass: { type: Object, default: {} },
  hasError: { type: Boolean, default: false },
});

// State
const isOpen = ref(false);

const selectedLabel = ref("");
const searchQuery = ref("");
const selectedItem=ref({});

// Refs
const selectWrapper = ref(null);



onMounted(()=>{
  initializeState();
})

const initializeState = () => {
  if (typeof props.modelValue === "number" || typeof props.modelValue === "string") {
    const matchingItem = props.tagItems.find((item) => item.id === props.modelValue);
    //console.log('checking matchingItem',matchingItem);
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
      initializeState(); // Reuse the existing method to update the state
    },
    { immediate: true } // Ensure it runs on initialization
);




// Toggle dropdown visibility
function toggleDropdown() {
  isOpen.value = !isOpen.value;
}

const filteredItems = computed(() => {
  if (!searchQuery.value) return props.tagItems;
  return props.tagItems.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});
// Handle option selection
function selectOption(option) {
  selectedItem.value=option;
  emit("update:modelValue", option);
  selectedLabel.value = option.name;
  isOpen.value = false;
  emit('blur',props.id);
}
function deselectOption() {
  selectedItem.value = '';
  emit("update:modelValue", '');
  selectedLabel.value = null;
  isOpen.value = false;
  emit('blur',props.id);
}
// Close dropdown on outside click
function handleClickOutside(event) {
  if (!selectWrapper.value.contains(event.target)) {
    isOpen.value = false;
  }
}



// Initialize outside click handler
onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

// Cleanup
onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

<style scoped>

</style>
