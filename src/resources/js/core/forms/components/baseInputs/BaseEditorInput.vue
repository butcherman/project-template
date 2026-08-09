<script setup lang="ts">
import BaseRichTextEditor from "@/core/components/editors/BaseRichTextEditor.vue";
import { ref } from "vue";

const value = ref("<h3>This is a test</h3>");
</script>

<template>
    <div class="editor-wrapper">
        <BaseRichTextEditor v-model:model-value="value" />
    </div>
</template>

<style scoped>
.editor-wrapper {
    height: 600px;
}
</style>
