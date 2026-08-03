<script setup lang="ts">
import AppLayout from "@/layouts/AppLayout.vue";
import BaseTextInput from "@/core/forms/components/baseInputs/BaseTextInput.vue";
import Card from "@/core/components/Card.vue";
import VueForm from "@/core/forms/components/VueForm.vue";
import { ref } from "vue";

const formValues = ref({
    textInput: undefined,
});
</script>

<script lang="ts">
export default { layout: AppLayout };
</script>
<template>
    <div class="flex flex-col gap-2">
        <Card title="Description">
            <p class="text-center">
                The Form Component is a wrapper and form builder. Individual
                input components are placed inside the wrapper to build the form
                UI. The wrapper handles the form logic including form
                submission. The input components include validation styling.
            </p>
            <p class="text-center">
                Validation is done via the Yup Validation library to define
                validation rules, and Vee-Validate to handle validation logic.
            </p>
        </Card>
        <Card title="Basic Form Example">
            <div>
                <VueForm
                    name="basic-demo-form"
                    submit-method="post"
                    submit-route="/submit-form"
                    :initial-values="{}"
                    :validation-schema="{}"
                >
                    <BaseTextInput
                        v-model:value="formValues.textInput"
                        name="text_input"
                        label="Text Input"
                    />
                </VueForm>
            </div>
        </Card>
    </div>
</template>
