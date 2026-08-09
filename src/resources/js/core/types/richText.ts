import type { JSONContent } from "@tiptap/core";

export type RichTextValue = JSONContent | null;

export interface UseRichTextEditorOptions {
    content?: JSONContent | null;
    editable?: boolean;

    onUpdate?: (content: JSONContent) => void;
    onFocus?: () => void;
    onBlur?: () => void;
}
