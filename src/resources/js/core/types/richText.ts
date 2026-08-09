import type { JSONContent } from "@tiptap/core";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export type RichTextValue = JSONContent | null;

export interface UseRichTextEditorOptions {
    content?: JSONContent | null;
    editable?: boolean;

    onUpdate?: (content: JSONContent) => void;
    onFocus?: () => void;
    onBlur?: () => void;
}

export type RichTextToolbarItemId =
    | "bold"
    | "italic"
    | "underline"
    | "strike"
    | "heading1"
    | "heading2"
    | "heading3"
    | "bulletList"
    | "orderedList"
    | "blockquote"
    | "code"
    | "horizontalRule"
    | "undo"
    | "redo";

export type RichTextToolbarPreset = "minimal" | "standard";

export interface RichTextToolbarItem {
    command: RichTextToolbarItemId;
    label: string;
    icon: IconDefinition;

    shortcut?: string;
    visible?: boolean;
}

import type { Editor } from "@tiptap/vue-3";

export interface RichTextCommandDefinition {
    execute: (editor: Editor) => boolean;
    isActive?: (editor: Editor) => boolean;
    canExecute?: (editor: Editor) => boolean;
}
