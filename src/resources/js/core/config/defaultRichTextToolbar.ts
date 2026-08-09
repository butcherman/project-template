import {
    faBold,
    faItalic,
    faUnderline,
    faStrikethrough,
    faHeading,
    faList,
    faListOl,
    faQuoteLeft,
    faCode,
    faMinus,
    faUndo,
    faRedo,
} from "@fortawesome/free-solid-svg-icons";

import type { RichTextToolbarItem } from "@/core/types/richText";

export const defaultRichTextToolbar: RichTextToolbarItem[] = [
    {
        command: "bold",
        label: "Bold",
        icon: faBold,
    },

    {
        command: "italic",
        label: "Italic",
        icon: faItalic,
    },

    // {
    //     command: "underline",
    //     label: "Underline",
    //     icon: faUnderline,
    // },

    // {
    //     command: "strike",
    //     label: "Strikethrough",
    //     icon: faStrikethrough,
    // },

    // {
    //     command: "heading1",
    //     label: "Heading 1",
    //     icon: faHeading,
    // },

    // {
    //     command: "heading2",
    //     label: "Heading 2",
    //     icon: faHeading,
    // },

    // {
    //     command: "heading3",
    //     label: "Heading 3",
    //     icon: faHeading,
    // },

    // {
    //     command: "bulletList",
    //     label: "Bullet List",
    //     icon: faList,
    // },

    // {
    //     command: "orderedList",
    //     label: "Numbered List",
    //     icon: faListOl,
    // },

    // {
    //     command: "blockquote",
    //     label: "Blockquote",
    //     icon: faQuoteLeft,
    // },

    // {
    //     command: "code",
    //     label: "Code",
    //     icon: faCode,
    // },

    // {
    //     command: "horizontalRule",
    //     label: "Horizontal Rule",
    //     icon: faMinus,
    // },

    {
        command: "undo",
        label: "Undo",
        icon: faUndo,
    },

    {
        command: "redo",
        label: "Redo",
        icon: faRedo,
    },
];
