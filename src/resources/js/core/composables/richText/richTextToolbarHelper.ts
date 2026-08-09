import {
    RichTextToolbarItem,
    RichTextToolbarItemId,
} from "@/core/types/richText";
import { richTextToolbarItems } from "./richTextToolbarItems";

export const useRichTextToolbarHelper = () => {
    const resolveRichTextToolbar = (
        preset: readonly RichTextToolbarItemId[],
    ): RichTextToolbarItem[] => {
        return preset.map((itemId) => richTextToolbarItems[itemId]);
    };

    return {
        resolveRichTextToolbar,
    };
};
