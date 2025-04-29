<template>
  <div ref="multiselectRef"
       :class="[
        multiSelectClass?.mainWrapper,
        customMultiSelectClass?.mainWrapper,
        uniqueStyle?.mainWrapper,

      ]"
  >
    <!-- Outer Field Shell (handles border, bg, focus) -->
    <div
        @click="dropDown"
        :class="[
        multiSelectClass?.field,
        customMultiSelectClass?.field,
        uniqueStyle?.field,
        {'textField__default__error': hasError}
      ]"
        tabindex="0"
    >
      <!-- Label+Tags+Icon Row (handles layout only) -->
      <div
          :class="[
          multiSelectClass?.labelAndIcon?.wrapper,
          customMultiSelectClass?.labelAndIcon?.wrapper,
          uniqueStyle?.labelAndIcon?.wrapper
        ]"
      >
        <!-- Placeholder label if nothing is selected -->
        <div
            v-if="selectedItems.length === 0"
            :class="[
            multiSelectClass?.labelAndIcon?.label,
            customMultiSelectClass?.labelAndIcon?.label,
            uniqueStyle?.labelAndIcon?.label
          ]"
        >
          {{ label }}
        </div>
        <!-- Selected tags if present -->
        <div
            v-else
            :class="[
            multiSelectClass?.labelAndIcon?.tag?.view?.view,
            customMultiSelectClass?.labelAndIcon?.tag?.view?.view,
            uniqueStyle?.labelAndIcon?.tag?.view?.view
          ]"
        >
          <div
              id="multiselect"
              :class="[
              multiSelectClass?.labelAndIcon?.tag?.view?.wrapper,
              customMultiSelectClass?.labelAndIcon?.tag?.view?.wrapper,
              uniqueStyle?.labelAndIcon?.tag?.view?.wrapper
            ]"
          >
            <div
                v-for="(tag, index) in selectedItems"
                :key="tag.id"
                :class="[
                multiSelectClass?.labelAndIcon?.tag?.view?.container,
                customMultiSelectClass?.labelAndIcon?.tag?.view?.container,
                uniqueStyle?.labelAndIcon?.tag?.view?.container
              ]"
            >
              <span
                  :class="[
                  multiSelectClass?.labelAndIcon?.tag?.view?.value,
                  customMultiSelectClass?.labelAndIcon?.tag?.view?.value,
                  uniqueStyle?.labelAndIcon?.tag?.view?.value
                ]"
              >
                {{ tag.name }}
              </span>
              <span
                  @click.stop="removeSelectedItem(tag)"
                  :class="[
                  multiSelectClass?.labelAndIcon?.tag?.view?.remove?.container,
                  customMultiSelectClass?.labelAndIcon?.tag?.view?.remove?.container,
                  uniqueStyle?.labelAndIcon?.tag?.view?.remove?.container
                ]"
              >
                <span
                    :class="[
                    multiSelectClass?.labelAndIcon?.tag?.view?.remove?.value,
                    customMultiSelectClass?.labelAndIcon?.tag?.view?.remove?.value,
                    uniqueStyle?.labelAndIcon?.tag?.view?.remove?.value
                  ]"
                >X</span>
              </span>
            </div>
          </div>
        </div>
        <!-- Dropdown Icon -->
        <span @click="isDisplay=!isDisplay" class="textField__default__multiSelect__icon">
          <svg  v-if="!isDisplay"
               :class="[
              multiSelectClass?.labelAndIcon?.icon?.icon,
              customMultiSelectClass?.labelAndIcon?.icon?.icon,
              uniqueStyle?.labelAndIcon?.icon?.icon
            ]"
               viewBox="0 0 20 20" fill="none"
          >
            <path
                :class="[
                multiSelectClass?.labelAndIcon?.icon?.path,
                customMultiSelectClass?.labelAndIcon?.icon?.path,
                uniqueStyle?.labelAndIcon?.icon?.path
              ]"
                d="M16.25 7.5L10 13.75L3.75 7.5"
                stroke="#2E90FA"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
          </svg>
          <svg v-else
               :class="[
              multiSelectClass?.labelAndIcon?.icon?.icon,
              customMultiSelectClass?.labelAndIcon?.icon?.icon,
              uniqueStyle?.labelAndIcon?.icon?.icon
            ]"
               viewBox="0 0 16 16" fill="none"
          >
            <path
                :class="[
                multiSelectClass?.labelAndIcon?.icon?.path,
                customMultiSelectClass?.labelAndIcon?.icon?.path,
                uniqueStyle?.labelAndIcon?.icon?.path
              ]"
                d="M3 10L8 5L13 10"
                stroke="#2E90FA"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
          </svg>
        </span>
      </div>
    </div>

    <!-- Dropdown Menu -->
    <transition name="slide" mode="out-in">
      <div v-if="isDisplay"
           class="multiselect__dropdown-list"
           :class="[
          multiSelectClass?.labelAndIcon?.dropdown?.wrapper,
          customMultiSelectClass?.labelAndIcon?.dropdown?.wrapper,
          uniqueStyle?.labelAndIcon?.dropdown?.wrapper
        ]"
      >
        <input
            :class="[
            multiSelectClass?.labelAndIcon?.dropdown?.input,
            customMultiSelectClass?.labelAndIcon?.dropdown?.input,
            uniqueStyle?.labelAndIcon?.dropdown?.input
          ]"
            v-model="searchQuery"
            type="text"
            name="search"
            placeholder="search item here"
        >
        <div
            v-for="item in filteredItems"
            :key="item.id"
            @click="selectItem(item)"
            :class="[
            multiSelectClass?.labelAndIcon?.dropdown?.container?.container,
            customMultiSelectClass?.labelAndIcon?.dropdown?.container?.container,
            uniqueStyle?.labelAndIcon?.dropdown?.container?.container
          ]"
        >
          <!-- Checkbox/indicator -->
          <span v-if="isSelected[item.id] === true" class="multiselect__selected__check">
           <svg
               :class="[
                  multiSelectClass?.labelAndIcon?.dropdown?.container?.icon?.icon,
                  customMultiSelectClass?.labelAndIcon?.dropdown?.container?.icon?.icon,
                  uniqueStyle?.labelAndIcon?.dropdown?.container?.icon?.icon
                  ]"
               viewBox="0 0 16 16"
               fill="none"
               xmlns="http://www.w3.org/2000/svg"
           >
              <path
                  :class="[
                    multiSelectClass?.labelAndIcon?.dropdown?.container?.icon?.path[0],
                    customMultiSelectClass?.labelAndIcon?.dropdown?.container?.icon?.path[0],
                    uniqueStyle?.labelAndIcon?.dropdown?.container?.icon?.path[0]
                    ]"
                  d="M2 2h12v12H2V2z"
                  fill="blue"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
              />
              <path
                  :class="[
                    multiSelectClass?.labelAndIcon?.dropdown?.container?.icon?.path[1],
                    customMultiSelectClass?.labelAndIcon?.dropdown?.container?.icon?.path[1],
                    uniqueStyle?.labelAndIcon?.dropdown?.container?.icon?.path[1]
                    ]"
                  d="M4 7.94922L6.47487 10.4241L11.4246 5.47435"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
              />
            </svg>
          </span>
          <span v-else
                :class="[
              multiSelectClass?.labelAndIcon?.dropdown?.container?.box,
              customMultiSelectClass?.labelAndIcon?.dropdown?.container?.box,
              uniqueStyle?.labelAndIcon?.dropdown?.container?.box
            ]"
                class="multiselect__selected__check"
          ></span>
          <span
              :class="[
              multiSelectClass?.labelAndIcon?.dropdown?.container?.item,
              customMultiSelectClass?.labelAndIcon?.dropdown?.container?.item,
              uniqueStyle?.labelAndIcon?.dropdown?.container?.item
            ]"
          >{{ item.name }}</span>
        </div>
      </div>
    </transition>
  </div>
</template>


<script setup>
/**
 * MultiSelect.vue
 *
 * A dynamic, schema-driven multi-select for reusable forms.
 * - Full theming: supports global, schema, and field-level class objects
 * - Allows searching, selecting, and removing multiple tags/options
 * - Emits changes as an array of selected option objects
 * - Handles outside click, dropdown animation, error state
 *
 * Props:
 *   id:                       Field id (required)
 *   modelValue:               Array of selected values (v-model, required)
 *   items:                    Option array [{id, name}], required
 *   label:                    Placeholder/label (string, required)
 *   multiSelectClass:         Base class object for deep theming
 *   customMultiSelectClass:   Schema-level class object
 *   uniqueStyle:              Field-level class object
 *   hasError:                 Show error class if true
 *
 * Emits:
 *   update:modelValue: Array of selected option objects
 *   blur:              Field id on change (for validation)
 */

import {computed, onMounted, ref, watch} from 'vue';
import useDetectOutsideClick from "@/composable/useDetectOutsideClick";
import isEqual from "lodash/isEqual";

const props=defineProps({
  id: { type: String, required: true },
  modelValue: { type:Array, default:() => [] },
  items: { type:Array, required:true, default:() => [] },
  label: { type:String, required:true, default:null },
  multiSelectClass: { type:Object, default:() => ({}) },
  customMultiSelectClass: { type:Object, default:() => ({}) },
  uniqueStyle: { type:Object, default:() => ({}) },
  hasError: { type:Boolean, default:false },
});
const emit = defineEmits(['blur',"update:modelValue"]);

const isDisplay = ref(false);
const selectedItems = ref([]);
const multiselectRef=ref();
const isSelected=ref({});
const searchQuery = ref("");

/** Remove duplicates by item.id */
function dedupe(arr) {
  const seen = {};
  return arr.filter(item => {
    if (!item || seen[item.id]) return false;
    seen[item.id] = true;
    return true;
  });
}

/** Keeps isSelected state in sync with selectedItems. */
function syncIsSelected() {
  const sel = selectedItems.value.map(item => item.id);
  // Set true for selected
  sel.forEach(id => { isSelected.value[id] = true; });
  // Set false for not selected
  props.items.forEach(item => {
    if (!sel.includes(item.id)) isSelected.value[item.id] = false;
  });
}

onMounted(() => {
  initializeState();
});

const initializeState = () => {
  props.items.forEach((item) => {
    isSelected.value[item.id] = false;
  });

  if (Array.isArray(props.modelValue)) {
    props.modelValue.forEach((value) => {
      const matchingItem = findMatchingItem(value);
      if (matchingItem && !selectedItems.value.some(t => t.id === matchingItem.id)) {
        selectedItems.value.push(matchingItem);
      }
    });
  }
  selectedItems.value = dedupe(selectedItems.value);
  syncIsSelected();
  emit("update:modelValue", selectedItems.value);
};

const findMatchingItem = (value) => {
  if (typeof value === "number" || typeof value === "string") {
    return props.items.find((item) => item.id === value);
  } else if (typeof value === "object" && value?.id !== undefined) {
    return props.items.find((item) => item.id === value.id);
  }
  return null;
};

watch(
    () => props.modelValue,
    (newValue) => {
      const unique = dedupe(Array.isArray(newValue) ? newValue : []);
      const isSame = unique.length === selectedItems.value.length &&
          unique.every((item, index) => isEqual(item, selectedItems.value[index]));

      if (isSame) return;

      selectedItems.value = [];
      Object.keys(isSelected.value).forEach((key) => {
        isSelected.value[key] = false;
      });

      if (Array.isArray(newValue)) {
        newValue.forEach((value) => {
          const matchingItem = findMatchingItem(value);
          if (matchingItem && !selectedItems.value.some(t => t.id === matchingItem.id)) {
            selectedItems.value.push(matchingItem);
          }
        });
      }
      selectedItems.value = dedupe(selectedItems.value);
      syncIsSelected();
      emit("update:modelValue", selectedItems.value);

    },
    { immediate: true }
);

const filteredItems = computed(() => {
  if (!searchQuery.value) return props.items;
  return props.items.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

// Handles outside click to close the dropdown
useDetectOutsideClick([multiselectRef],['multiselect__outside__click__action','multiselect__selected__check','textField__default__multiSelect__icon'],()=>{
  isDisplay.value = false;
})

const dropDown = () => {
  isDisplay.value = !isDisplay.value;
};

/** Add or remove selection. Keeps everything in sync. */
function selectItem (item)  {
  if (!selectedItems.value.some(tag => tag.id === item.id)) {
    selectedItems.value.push(item);
  } else {
    selectedItems.value = selectedItems.value.filter((tag) => tag.id !== item.id);
  }
  selectedItems.value = dedupe(selectedItems.value);
  syncIsSelected();
  emit('blur',props.id);
  emit("update:modelValue", selectedItems.value);
}

/** Remove from selected. */
function removeSelectedItem(item){
  isDisplay.value = false;
  selectedItems.value = selectedItems.value.filter((tag) => tag.id !== item.id);
  selectedItems.value = dedupe(selectedItems.value);
  syncIsSelected();
  emit('blur',props.id);
  emit("update:modelValue", selectedItems.value);
}
</script>




<style scoped>
.multiselect__dropdown-list {
  max-height: 12em;         /* Controls the dropdown max size */
  overflow-y: auto;         /* Enables scroll when overflowing */
  /* Optional: */
  scrollbar-width: thin;
  scrollbar-color: #2F80ED #E2E8F0;
}

.multiselect__dropdown-list::-webkit-scrollbar {
  width: 3px;
}

.multiselect__dropdown-list::-webkit-scrollbar-thumb {
  background-color: #2F80ED;
}

.multiselect__dropdown-list::-webkit-scrollbar-track {
  background-color: #E2E8F0;
}


.slide-enter {
  opacity: 0;
}

.slide-enter-active {
  animation: slide-in 0.1s ease-out forwards;
  transition: opacity 0.1s;
}

.slide-leave-active {
  animation: slide-out 0.1s ease-out forwards;
  transition: opacity 0.1s;
  opacity: 0;
}

@keyframes slide-in {
  from {
    transform: translateY(10px);
  }
  to {
    transform: translateY(0);
  }

}

@keyframes slide-out {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(10px);
  }

}
</style>

