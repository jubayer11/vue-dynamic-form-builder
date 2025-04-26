
import { defineAsyncComponent } from 'vue';
import {iconComponents} from "@/composable/dynamicIconImport/iconComponent.js";

// Local cache for dynamic components
const dynamicComponentRegistry = {};

export function importDynamicIconComponentForTextField(item, index, dynamicIconComponent) {
    if (!item) {
        console.error(`Missing component name or type for index ${index}`);
        return;
    }
    if (!dynamicComponentRegistry[item]) {
        dynamicIconComponent.value[index] = defineAsyncComponent(
            iconComponents[item] || iconComponents.iconPlus
        );
        // Cache the component for future use
        dynamicComponentRegistry[item] = dynamicIconComponent.value[index];
    } else {
        dynamicIconComponent.value[index] = dynamicComponentRegistry[item];
    }
}
