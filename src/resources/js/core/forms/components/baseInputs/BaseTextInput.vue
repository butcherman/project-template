<script setup lang="ts">
import { useId } from "vue";
import InputWrapper from "../wrappers/InputWrapper.vue";
const emit = defineEmits<{}>();

const props = defineProps<{
    // value: unknown;
    name: string;
    label?: string;

    errorMessage?: string;
    helpMessage?: string;
    helpVisible?: boolean;
}>();

const inputId = useId();
</script>

<template>
    <InputWrapper v-bind="props" :has-focus="false">
        <template v-for="(_, slot) of $slots" #[slot]="scope">
            <slot :name="slot" v-bind="scope" />
        </template>
        <input
            class="block peer form-input-base"
            type="text"
            :id="inputId"
            :name="name"
        />
        <label :for="inputId" class="form-label-base">
            {{ label }}
        </label>
    </InputWrapper>
</template>
