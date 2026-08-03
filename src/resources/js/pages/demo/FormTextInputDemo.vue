<script setup lang="ts">
import AppLayout from "@/layouts/AppLayout.vue";
import BaseTextInput from "@/core/forms/components/baseInputs/BaseTextInput.vue";
import Card from "@/core/components/Card.vue";
import Collapse from "@/core/components/Collapse.vue";
import DataTable from "@/core/features/dataResources/DataTable.vue";
import ExpandBadge from "@/core/components/badges/ExpandBadge.vue";
import { reactive } from "vue";
import { useReferenceHelper } from "@/features/composables/referenceHelper";

const { getPropColumns, getSlotColumns } = useReferenceHelper();

const referenceProperties = [
    {
        property: "name",
        type: "string",
        default: "",
        required: true,
        description: "Name of input",
    },
    {
        property: "value",
        type: "unknown",
        default: "",
        required: true,
        description: "Value bound to input using v-bind",
    },
    {
        property: "label",
        type: "string",
        default: "",
        required: false,
        description: "Label for the input",
    },
    {
        property: "errorMessage",
        type: "string",
        default: "",
        required: false,
        description: "Error message when input is invalid",
    },
    {
        property: "helpMessage",
        type: "string",
        default: "",
        required: false,
        description: "Help message to show under input",
    },
    {
        property: "variant",
        type: "filled | outlined | standard",
        default: "outlined",
        required: false,
        description: "Style of the input",
    },
    {
        property: "placeholder",
        type: "string",
        default: "",
        required: false,
        description: "Placeholder Text",
    },
    {
        property: "helpVisible",
        type: "boolean",
        default: "false",
        required: false,
        description:
            "When true, help will always be visible, not just when has focus.",
    },
    {
        property: "autocomplete",
        type: "string",
        default: "",
        required: false,
        description: "Autocomplete attribute for the input",
    },
];

const slotProperties = [
    {
        name: "prepend-input",
        params: "",
        description: "Prepends the input with bordered data",
    },
    {
        name: "append-input",
        params: "",
        description: "Appends the input with bordered data",
    },
];

const emitProperties = [
    {
        name: "focus",
        params: "",
        description: "Triggered when input gains focus",
    },
    {
        name: "blur",
        params: "",
        description: "Triggered when an input looses focus",
    },
];

const formValues = reactive({
    basicText: "",
    slotsText: "",
});

const showExamples = reactive({
    basic: false,
    slots: false,
});
</script>

<script lang="ts">
export default { layout: AppLayout };
</script>
<template>
    <div class="flex flex-col gap-2">
        <Card title="Description">
            <p class="text-center">Basic Text Input</p>
        </Card>
        <Card title="Basic Example">
            <template #append-title>
                <ExpandBadge
                    :expanded="showExamples.basic"
                    @click="showExamples.basic = !showExamples.basic"
                />
            </template>
            <Collapse :show="showExamples.basic">
                <div class="mb-2 flex gap-2">
                    <BaseTextInput
                        v-model:value="formValues.basicText"
                        name="text_input"
                        label="Text Input"
                        placeholder="Test Input"
                        error-message="This is an error message"
                        help-message="This is a help message"
                        variant="outlined"
                    />
                    <BaseTextInput
                        v-model:value="formValues.basicText"
                        name="text_input"
                        label="Text Input"
                        placeholder="Test Input"
                        error-message="This is an error message"
                        help-message="This is a help message"
                        variant="filled"
                    />
                    <BaseTextInput
                        v-model:value="formValues.basicText"
                        name="text_input"
                        label="Text Input"
                        placeholder="Test Input"
                        error-message="This is an error message"
                        help-message="This is a help message"
                        variant="standard"
                    />
                </div>
                <div class="p-3 bg-slate-300 rounded-lg overflow-auto">
                    &lt;script setup&gt; <br />
                    &emsp;import BaseTextInput from
                    "@/core/forms/components/baseInputs/BaseTextInput.vue";
                    <br />
                    &lt;/script&gt;<br />
                    <br />
                    &lt;template&gt;<br />
                    &emsp;&lt;BaseTextInput<br />
                    &emsp;&emsp;v-model:value="textValue"<br />
                    &emsp;&emsp;name="text_input"<br />
                    &emsp;&emsp;label="Text Input"<br />
                    &emsp;&emsp;placeholder="Test Input"<br />
                    &emsp;&emsp;error-message="This is an error message"<br />
                    &emsp;&emsp;help-message="This is a help message"<br />
                    &emsp;&emsp;variant="outlined"<br />
                    &emsp;/BaseTextInput&gt;<br />
                    &lt;/template&gt;<br />
                </div>
            </Collapse>
        </Card>
        <Card title="Slots Example">
            <template #append-title>
                <ExpandBadge
                    :expanded="showExamples.slots"
                    @click="showExamples.slots = !showExamples.slots"
                />
            </template>
            <Collapse :show="showExamples.slots">
                <div class="mb-2">
                    <BaseTextInput
                        v-model:value="formValues.slotsText"
                        name="text_input"
                        label="Text Input"
                        placeholder="Test Input"
                    >
                        <template #prepend-input>https://</template>
                        <template #append-input>
                            <fa-icon icon="book-open-reader" />
                        </template>
                    </BaseTextInput>
                </div>
                <div class="p-3 bg-slate-300 rounded-lg overflow-auto">
                    &lt;script setup&gt; <br />
                    &emsp;import BaseTextInput from
                    "@/core/forms/components/baseInputs/BaseTextInput.vue";
                    <br />
                    &lt;/script&gt;<br />
                    <br />
                    &lt;template&gt;<br />
                    &emsp;&lt;BaseTextInput<br />
                    &emsp;&emsp;v-model:value="textValue"<br />
                    &emsp;&emsp;name="text_input"<br />
                    &emsp;&emsp;label="Text Input"<br />
                    &emsp;&emsp;placeholder="Test Input"<br />
                    &emsp;&emsp;error-message="This is an error message"<br />
                    &emsp;&emsp;help-message="This is a help message"<br />
                    &emsp;&gt; <br />
                    &emsp;&emsp;&lt;template
                    #prepend-input&gt;https://&lt;template&gt;<br />
                    &emsp;&emsp;&lt;template #append-input&gt;<br />
                    &emsp;&emsp;&emsp;&lt;fa-icon icon="book-open-reader"
                    /&gt;<br />
                    &emsp;&emsp;&lt;/template&gt;<br />
                    &emsp;&lt;/BaseTextInput&gt;<br />
                    &lt;/template&gt;<br />
                </div>
            </Collapse>
        </Card>
        <Card title="Component Reference">
            <h4>Props</h4>
            <DataTable
                :columns="getPropColumns()"
                :data="referenceProperties"
            />
            <h4>Slots</h4>
            <DataTable :columns="getSlotColumns()" :data="slotProperties" />
            <h4>Emits</h4>
            <DataTable :columns="getSlotColumns()" :data="emitProperties" />
        </Card>
    </div>
</template>
