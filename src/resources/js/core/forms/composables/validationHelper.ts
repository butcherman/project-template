import { useField } from "vee-validate";
import type { Ref } from "vue";

export const useValidationHelper = (nameRef: Ref<string>) => {
    const {
        errorMessage,
        value,
    }: {
        errorMessage: Ref<string | undefined, string | undefined>;
        value: Ref<string>;
    } = useField(nameRef);

    return {
        errorMessage,
        value,
    };
};
