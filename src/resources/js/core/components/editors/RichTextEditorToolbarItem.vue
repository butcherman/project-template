<script setup lang="ts">
import BaseButton from "../buttons/BaseButton.vue";
import { richTextCommands } from "@/core/composables/richText/richTextCommands";
import { computed } from "vue";
import type { Editor } from "@tiptap/vue-3";
import type {
    RichTextToolbarItem,
    RichTextCommandDefinition,
} from "@/core/types/richText";

const props = defineProps<{
    editor: Editor;
    item: RichTextToolbarItem;
}>();

const command: RichTextCommandDefinition = richTextCommands[props.item.command];

const isActive = computed<boolean>(
    () => command.isActive?.(props.editor) ?? false,
);
const canExecute = computed<boolean>(
    () => command.canExecute?.(props.editor) ?? true,
);
</script>

<template>
    <BaseButton
        size="sm"
        variant="none"
        flat
        :icon="item.icon"
        :active="isActive"
        :disabled="!canExecute"
        v-tooltip="item.label"
        @click="command.execute(editor)"
    />
</template>
