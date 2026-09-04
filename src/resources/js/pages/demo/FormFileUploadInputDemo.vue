<script setup lang="ts">
import AppLayout from "@/layouts/AppLayout.vue";
import BaseFileUploadInput from "@/core/forms/components/baseInputs/BaseFileUploadInput.vue";
import BaseVueForm from "@/core/forms/components/BaseVueForm.vue";
import Card from "@/core/components/Card.vue";
import ComponentReference from "@/features/components/ComponentReference.vue";
import ExampleComponent from "@/features/components/ExampleComponent.vue";
import { ref } from "vue";

const referenceProperties = [];

const emitProperties = [];
</script>

<script lang="ts">
export default { layout: AppLayout };
</script>
<template>
    <div class="flex flex-col gap-2">
        <Card title="Description">
            <h3 class="text-center mb-3">File Upload Input</h3>
            <p class="text-center">
                Drag and Drop input for uploading files to the application.
            </p>
        </Card>
        <ExampleComponent show>
            <template #component>
                <div class="flex justify-center">
                    <div class="w-full md:w-1/2">
                        <!-- <BaseVueForm
                            name="file-upload-form"
                            submit-text="Upload File"
                        > -->
                        <BaseFileUploadInput
                            purpose="test"
                            class="h-50"
                            auto-upload
                        />
                        <!-- </BaseVueForm> -->
                    </div>
                </div>
            </template>
            <template #code> code </template>
        </ExampleComponent>
        <!-- <ComponentReference
            :reference-properties="referenceProperties"
            :emit-properties="emitProperties"
        /> -->
    </div>
</template>
