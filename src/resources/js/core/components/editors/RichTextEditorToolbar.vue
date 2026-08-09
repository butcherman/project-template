<script setup lang="ts">
import RichTextEditorToolbarItem from "./RichTextEditorToolbarItem.vue";
import type { Editor } from "@tiptap/vue-3";
import type { RichTextToolbarItem } from "@/core/types/richText";

const props = defineProps<{
    editor: Editor;
    items: RichTextToolbarItem[];
}>();
</script>

<template>
    <div class="flex flex-row gap-1 border border-slate-300 rounded-lg p-1">
        <template v-for="item in items" :key="item.command">
            <RichTextEditorToolbarItem :editor="editor" :item="item" />
        </template>
    </div>
</template>
