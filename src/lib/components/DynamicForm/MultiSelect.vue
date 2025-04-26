<template>
  <div
      ref="multiselectRef"
      class="relative z-20 w-full"
  >
    <div @click="dropDown"
         :class="[
             multiSelectClass?.field,
             customMultiSelectClass?.field,
             uniqueStyle?.field,
             multiSelectClass?.labelAndIcon?.wrapper,
             customMultiSelectClass?.labelAndIcon?.wrapper,
             uniqueStyle?.labelAndIcon?.wrapper,
             {'textField__default__error':hasError}
             ]"
         tabindex="0"
    >

      <div
          v-if="selectedItems.length===0"
          :class="[
              multiSelectClass?.labelAndIcon?.label,
              customMultiSelectClass?.labelAndIcon?.label,
              uniqueStyle?.labelAndIcon?.label
              ]"
      >
        {{label}}
      </div>
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
              :class="[
                multiSelectClass?.labelAndIcon?.tag?.view?.container,
                customMultiSelectClass?.labelAndIcon?.tag?.view?.container,
                uniqueStyle?.labelAndIcon?.tag?.view?.container
                ]"
              v-for="(tag,index) in selectedItems"
              :key="index"
          >
            <div
                :class="[
                  multiSelectClass?.labelAndIcon?.tag?.view?.value,
                  customMultiSelectClass?.labelAndIcon?.tag?.view?.value,
                  uniqueStyle?.labelAndIcon?.tag?.view?.value
                  ]"
            >
              {{tag.name}}
            </div>
            <div
                @click="removeSelectedItem(tag)"
                :class="[
                  multiSelectClass?.labelAndIcon?.tag?.view?.remove?.container,
                  customMultiSelectClass?.labelAndIcon?.tag?.view?.remove?.container,
                  uniqueStyle?.labelAndIcon?.tag?.view?.remove?.container
                  ]"
            >
              <div
                  :class="[
                    multiSelectClass?.labelAndIcon?.tag?.view?.remove?.value,
                    customMultiSelectClass?.labelAndIcon?.tag?.view?.remove?.value,
                    uniqueStyle?.labelAndIcon?.tag?.view?.remove?.value
                    ]"
              >
                X
              </div>
            </div>
          </div>

        </div>
      </div>
      <div>
        <svg
            v-show="isDisplay===false"
            :class="[
                multiSelectClass?.labelAndIcon?.icon?.icon,
                customMultiSelectClass?.labelAndIcon?.icon?.icon,
                uniqueStyle?.labelAndIcon?.icon?.icon
                ]"
            viewBox="0 0 20 20" fill="none"
            xmlns="http://www.w3.org/2000/svg">
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
        <svg
            v-show="isDisplay===true"
            :class="[
                multiSelectClass?.labelAndIcon?.icon?.icon,
                customMultiSelectClass?.labelAndIcon?.icon?.icon,
                uniqueStyle?.labelAndIcon?.icon?.icon
                ]"
            viewBox="0 0 16 16" fill="none"
            xmlns="http://www.w3.org/2000/svg"
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
      </div>
    </div>
    <transition name="slide" mode="out-in">
      <div
          v-if="isDisplay"
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
            @click="selectItem(item)"
            :class="[
              multiSelectClass?.labelAndIcon?.dropdown?.container?.container,
              customMultiSelectClass?.labelAndIcon?.dropdown?.container?.container,
              uniqueStyle?.labelAndIcon?.dropdown?.container?.container
              ]"
            v-for="(item,index) in filteredItems"
            :key="index"
        >
          <div
              class="multiselect__outside__click__action"
              v-if="isSelected[item.id]===true"
          >
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
          </div>
          <div
              class="multiselect__outside__click__action"
              v-else
              :class="[
                multiSelectClass?.labelAndIcon?.dropdown?.container?.box,
                customMultiSelectClass?.labelAndIcon?.dropdown?.container?.box,
                uniqueStyle?.labelAndIcon?.dropdown?.container?.box
                ]"
          >

          </div>

          <div
              :class="[
                multiSelectClass?.labelAndIcon?.dropdown?.container?.item,
                customMultiSelectClass?.labelAndIcon?.dropdown?.container?.item,
                uniqueStyle?.labelAndIcon?.dropdown?.container?.item
                ]">
            {{item.name}}
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script setup>
import {computed, onMounted, ref, watch} from 'vue';
import useDetectOutsideClick from "@/composable/useDetectOutsideClick.js";
import isEqual from "lodash/isEqual";

const props=defineProps({
  id: { type: String, required: true },
  modelValue:{
    type:Array,
    default:[],
  },
  items:{
    type:Array,
    required:true,
    default:[],
  },
  label:{
    type:String,
    required:true,
    default:null,
  },

  multiSelectClass:{
    type:Object,
    default:{},
  },
  customMultiSelectClass:{
    type:Object,
    default:{},
  },
  uniqueStyle:{
    type:Object,
    default:{},
  },

  hasError:{
    type:Boolean,
    default:false,
  },
});
const  emit  = defineEmits(['blur',"update:modelValue"]);

const isDisplay = ref(false);

const selectedItems = ref([]);
const isShow = ref(false);
const multiselectRef=ref();
const isSelected=ref({});

const searchQuery = ref("");

onMounted(() => {
  initializeState();
});

const initializeState = () => {
  // Reset selection state
  props.items.forEach((item) => {
    isSelected.value[item.id] = false;
  });

  // Check if modelValue is an array
  if (Array.isArray(props.modelValue)) {
    props.modelValue.forEach((value) => {
      const matchingItem = findMatchingItem(value);
      if (matchingItem) {
        selectedItems.value.push(matchingItem);
        isSelected.value[matchingItem.id] = true;
      }
    });
  }
  emit("update:modelValue", selectedItems.value);
};

// Helper function to find matching item based on value type
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
      const isSame = Array.isArray(newValue) &&
          newValue.length === selectedItems.value.length &&
          newValue.every((item, index) => isEqual(item, selectedItems.value[index]));

      if (isSame) {
        return; // No changes, skip updating the state
      }
      // Reset selected items
      selectedItems.value = [];
      Object.keys(isSelected.value).forEach((key) => {
        isSelected.value[key] = false;
      });

      // If the newValue is an array, update the state
      if (Array.isArray(newValue)) {
        newValue.forEach((value) => {
          const matchingItem = findMatchingItem(value);
          if (matchingItem) {
            selectedItems.value.push(matchingItem);
            isSelected.value[matchingItem.id] = true;
          }
        });
      }
      emit("update:modelValue", selectedItems.value);

    },
    { immediate: true } // Ensure the watcher runs on initialization
);



const filteredItems = computed(() => {
  if (!searchQuery.value) return props.items;
  return props.items.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});




useDetectOutsideClick([multiselectRef],['multiselect__outside__click__action'],()=>{
  //console.log('tum be tum');
  isDisplay.value = false;
})
const dropDown = () => {
  isDisplay.value = !isDisplay.value;
};



function selectItem (item)  {

  isSelected.value[item.id] = !isSelected.value[item.id];

  if (isSelected.value[item.id]) {
    selectedItems.value.push(item);
  } else {
    selectedItems.value = selectedItems.value.filter((tag) => tag.id !== item.id);
  }

  if (selectedItems.value.length === 0) {
    isShow.value = false;
  } else {
    isShow.value = !isShow.value;
  }

  emit('blur',props.id);
  emit("update:modelValue", selectedItems.value);
  console.log('checking selected items',selectedItems.value);

}

function removeSelectedItem(item){
  isDisplay.value = false;
  isSelected.value[item.id] = !isSelected.value[item.id];
  selectedItems.value = selectedItems.value.filter((tag) => tag.id !== item.id);
  emit('blur',props.id);
  emit("update:modelValue", selectedItems.value);
}
</script>
<style scoped lang="scss">
@import '@/assets/textField/textFieldCustomization.scss';


</style>



<style scoped>
#multiselect {
  /* Your existing styles */
  /* ... */
  scrollbar-width: thin; /* Set the width of the scrollbar */
  scrollbar-color: #2F80ED #E2E8F0; /* Set the color of the scrollbar */
}

#multiselect::-webkit-scrollbar {
  width: 3px; /* Set the width of the scrollbar */
}

#multiselect::-webkit-scrollbar-thumb {
  background-color: #2F80ED; /* Set the color of the scrollbar thumb */
}

#multiselect::-webkit-scrollbar-track {
  background-color: #E2E8F0; /* Set the color of the scrollbar track */
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

<style lang="scss">

</style>