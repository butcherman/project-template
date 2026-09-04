<script setup lang="ts">
import InputWrapper from "../wrappers/InputWrapper.vue";
import { computed, useTemplateRef } from "vue";
import { useUploadHelper } from "../../composables/uploadHelper.js";

const emit = defineEmits<{}>();

const props = defineProps<{
    purpose: string;

    acceptedFiles?: string[];
    autoUpload?: boolean;
    maxFiles?: number;
    uploadMessage?: string;
}>();

const {
    dragging,
    fileQueue,

    handleDragEnter,
    handleDragLeave,
    handleDrop,
    handleFileSelected,
} = useUploadHelper(props, emit);

const fileInput = useTemplateRef("file-input");

const allowMultiple = computed<boolean>(() =>
    props.maxFiles && props.maxFiles > 1 ? true : false,
);

/**
 * Manually open the file upload dialog
 */
const selectFile = () => {
    fileInput.value?.click();
};
</script>

<template>
    <InputWrapper :has-focus="false">
        <div
            class="h-full border-2 border-blue-300 border-dashed rounded-lg py-8 text-center cursor-pointer bg-blue-400/30"
            :class="{
                'border-blue-600 bg-blue-400/80': dragging,
            }"
            @click="selectFile"
            @dragover.prevent
            @dragenter.prevent="handleDragEnter"
            @dragleave.prevent="handleDragLeave"
            @drop.prevent="handleDrop"
        >
            <input
                ref="file-input"
                type="file"
                class="hidden"
                :multiple="allowMultiple"
                @change="handleFileSelected"
            />
            <div class="dropzone-message pointer-events-none h-full">
                <slot name="upload-message">
                    <div class="h-full flex flex-col justify-center">
                        <div>
                            <fa-icon icon="cloud-arrow-up" />
                            {{
                                uploadMessage ??
                                "Drag file here or click to upload"
                            }}
                        </div>
                    </div>
                </slot>
            </div>
        </div>
        {{ fileQueue }}
    </InputWrapper>
</template>
