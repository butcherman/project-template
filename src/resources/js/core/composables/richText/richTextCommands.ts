import type {
    RichTextCommand,
    RichTextCommandDefinition,
} from "@/core/types/richText";

export const richTextCommands = {
    bold: {
        execute: (editor) => editor.chain().focus().toggleBold().run(),
        isActive: (editor) => editor.isActive("bold"),
    },

    italic: {
        execute: (editor) => editor.chain().focus().toggleItalic().run(),
        isActive: (editor) => editor.isActive("italic"),
    },

    undo: {
        execute: (editor) => editor.chain().focus().undo().run(),
        canExecute: (editor) => editor.can().chain().focus().undo().run(),
    },

    redo: {
        execute: (editor) => editor.chain().focus().redo().run(),
        canExecute: (editor) => editor.can().chain().focus().redo().run(),
    },
} satisfies Record<RichTextCommand, RichTextCommandDefinition>;
