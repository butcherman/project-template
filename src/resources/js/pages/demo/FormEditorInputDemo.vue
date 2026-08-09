<script setup lang="ts">
import AppLayout from "@/layouts/AppLayout.vue";
import Card from "@/core/components/Card.vue";
import ExampleComponent from "@/features/components/ExampleComponent.vue";
import BaseEditorInput from "@/core/forms/components/baseInputs/BaseEditorInput.vue";

const props = defineProps<{}>();
</script>

<script lang="ts">
export default { layout: AppLayout };
</script>
<template>
    <div class="flex flex-col gap-2">
        <Card title="Description">
            <h3 class="text-center mb-3">Editor Input</h3>
            <p class="text-center">
                What you see is what you get (WYSIWYG) inpput for formatting
                text documents
            </p>
        </Card>
        <ExampleComponent show>
            <BaseEditorInput name="editor" label="Document Editor" />
        </ExampleComponent>
    </div>
</template>
