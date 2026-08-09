<script setup lang="ts">
import RichTextEditorToolbar from "./RichTextEditorToolbar.vue";
import { defaultRichTextToolbar } from "@/core/config/defaultRichTextToolbar";
import { EditorContent } from "@tiptap/vue-3";
import { useRichTextEditor } from "@/core/composables/richText/richTextEditor";
import { watch } from "vue";
import type { JSONContent } from "@tiptap/core";

const emit = defineEmits<{
    "update:modelValue": [JSONContent];
    focus: [];
    blur: [];
}>();

const props = defineProps<{
    modelValue: JSONContent | null;
    disabled?: boolean;
}>();

const { editor } = useRichTextEditor({
    content: props.modelValue,
    editable: !props.disabled,

    onUpdate: (content) => {
        emit("update:modelValue", content);
    },

    onFocus: () => {
        emit("focus");
    },

    onBlur: () => {
        emit("blur");
    },
});

/**
 * Synchronize external v-model changes
 * with the Tiptap document.
 */
watch(
    () => props.modelValue,
    (value) => {
        if (!editor.value || !value) {
            return;
        }

        if (JSON.stringify(editor.value.getJSON()) !== JSON.stringify(value)) {
            editor.value.commands.setContent(value);
        }
    },
);

/**
 * Synchronize disabled state.
 */
watch(
    () => props.disabled,
    (disabled) => {
        editor.value?.setEditable(!disabled);
    },
);
</script>

<template>
    <div class="flex flex-col gap-2 min-h-72">
        <RichTextEditorToolbar
            v-if="editor"
            :editor="editor"
            :items="defaultRichTextToolbar"
        />
        <EditorContent
            :editor="editor"
            class="grow border border-slate-300 rounded-lg"
        />
    </div>
</template>
