<script setup lang="ts" generic="TFormData extends FormDataType<TFormData>">
import BaseVueForm from "./BaseVueForm.vue";
import { computed, readonly, ref } from "vue";
import { GenericObject, useForm, Path, PathValue } from "vee-validate";
import { router } from "@inertiajs/vue3";
import type { FormDataType, Errors } from "@inertiajs/core";

type FormDataErrors = Errors;
type InitialValues<T extends GenericObject> = NonNullable<
    Parameters<typeof useForm<T>>[0]
>["initialValues"];

const emit = defineEmits<{
    submitting: [TFormData];
    success: [];
}>();

const props = defineProps<{
    initialValues: InitialValues<TFormData>;
    name: string;
    submitMethod: "post" | "put" | "delete";
    submitRoute: string;
    validationSchema: object;

    // Optional
    doNotReset?: boolean;
    fullPageOverlay?: boolean;
    hideOverlay?: boolean;
    only?: string[];
    submitIcon?: string;
    submitText?: string;
}>();

const isSubmitting = ref<boolean>(false);
const isDirty = computed<boolean>(() => meta.value.dirty);
const uncaughtErrors = ref<string[]>([]);

const handleErrors = (formErrors: FormDataErrors) => {
    for (const [field, message] of Object.entries(formErrors)) {
        if (typeof message === "string") {
            setFieldError(field as Path<TFormData>, message);
        } else {
            uncaughtErrors.value.push(String(message));
        }
    }
};

/*
|-------------------------------------------------------------------------------
| Vee Validate Setup
|-------------------------------------------------------------------------------
*/
const { resetForm, setFieldError, setFieldValue, handleSubmit, meta, values } =
    useForm<TFormData>({
        validationSchema: props.validationSchema,
        initialValues: props.initialValues,
        name: props.name,
    });

/**
 * Return a specific field value
 */
const getFieldValue = <K extends keyof TFormData>(field: K): TFormData[K] =>
    values[field];

/**
 * Assign a specific field value
 */
const setValue = (
    field: Path<TFormData>,
    value: PathValue<TFormData, Path<TFormData>>,
) => {
    setFieldValue(field, value);
};

/*
|-------------------------------------------------------------------------------
| Handle the Submission of the Form
|-------------------------------------------------------------------------------
*/
const onSubmit = handleSubmit((form): void => {
    uncaughtErrors.value = [];
    isSubmitting.value = true;
    emit("submitting", form);

    router[props.submitMethod](props.submitRoute, form, {
        preserveScroll: true,
        only: props.only,
        onSuccess,
        onError: (errors) => handleErrors(errors),
        onFinish: () => {
            isSubmitting.value = false;
        },
    });
});

/*
|-------------------------------------------------------------------------------
| Handle successful completion of the form
|-------------------------------------------------------------------------------
*/
const onSuccess = () => {
    if (!props.doNotReset) {
        resetForm();
    }
    emit("success");
};

/*
|-------------------------------------------------------------------------------
| Expose the necessary methods
|-------------------------------------------------------------------------------
*/
defineExpose({
    getFieldValue,
    setFieldError,
    setValue,
    resetForm,
    isDirty,
    isSubmitting,
    values: readonly(values),
});
</script>

<template>
    <BaseVueForm v-bind="props" @submit="onSubmit">
        <template v-for="(_, slot) of $slots" #[slot]="scope">
            <slot :name="slot" v-bind="scope" />
        </template>
    </BaseVueForm>
</template>
