import { computed } from "vue";

export const useSelectHelper = <
    TGroup extends Record<string, unknown>,
    TOption extends string | Record<string, unknown>,
>(
    props: InputSelectProps<TGroup, TOption>,
) => {
    const optionLookup = computed(() => {
        const map = new Map<unknown, string>();

        if (props.groupListField) {
            for (const group of props.list as TGroup[]) {
                for (const option of getGroupItems(group)) {
                    map.set(getValue(option), getOptionText(option));
                }
            }
        } else {
            for (const option of props.list as TOption[]) {
                map.set(getValue(option), getOptionText(option));
            }
        }

        return map;
    });

    /**
     * Get the value of the list item
     */
    const getValue = (opt: TOption) => {
        if (typeof opt === "string") {
            return opt;
        }

        return props.valueField ? opt[props.valueField] : opt;
    };

    /**
     * Get the text to be displayed
     */
    const getOptionText = (item: TOption): string => {
        if (typeof item === "string") {
            return item;
        }

        return props.textField ? String(item[props.textField]) : String(item);
    };

    /**
     * Get the text to be displayed, based on the value
     */
    const getOptionTextFromValue = (value: unknown) => {
        return optionLookup.value.get(value);
    };

    /**
     * Get the label for the Option Group
     */
    const getGroupText = (group: TGroup): string => {
        if (props.groupTextField) {
            return String(group[props.groupTextField]);
        }

        return "text";
    };

    /**
     * Get the list of grouped items for the Option Group
     */
    const getGroupItems = (group: TGroup): readonly TOption[] => {
        if (props.groupListField) {
            return group[props.groupListField] as readonly TOption[];
        }

        return [];
    };

    return {
        getValue,
        getOptionText,
        getOptionTextFromValue,
        getGroupText,
        getGroupItems,
    };
};
