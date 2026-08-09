<script setup lang="ts">
import RichTextEditorToolbar from "./RichTextEditorToolbar.vue";
import { EditorContent } from "@tiptap/vue-3";
import { useRichTextEditor } from "@/core/composables/richText/richTextEditor";
import { computed, watch } from "vue";
import { richTextToolbarPresets } from "@/core/composables/richText/richTextToolbarPresets.js";
import { useRichTextToolbarHelper } from "@/core/composables/richText/richTextToolbarHelper.js";
import type { JSONContent } from "@tiptap/core";
import type {
    RichTextToolbarItemId,
    RichTextToolbarPreset,
} from "@/core/types/richText.js";

const emit = defineEmits<{
    "update:modelValue": [JSONContent];
    focus: [];
    blur: [];
}>();

const props = defineProps<{
    modelValue: JSONContent | null;
    disabled?: boolean;
    toolbar?: RichTextToolbarPreset | RichTextToolbarItemId[];
}>();

const { resolveRichTextToolbar } = useRichTextToolbarHelper();

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
 * Build the toolbar
 */
const toolbarItems = computed(() => {
    let itemList;

    if (props.toolbar) {
        if (typeof props.toolbar === "string") {
            itemList = richTextToolbarPresets[props.toolbar];
        } else {
            itemList = props.toolbar;
        }
    } else {
        itemList = richTextToolbarPresets["standard"];
    }

    return resolveRichTextToolbar(itemList);
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
            :items="toolbarItems"
        />
        <EditorContent
            :editor="editor"
            class="grow border border-slate-300 rounded-lg"
        />
    </div>
</template>
