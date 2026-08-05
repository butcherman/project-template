<script setup lang="ts">
import AppLayout from "@/layouts/AppLayout.vue";
import Card from "@/core/components/Card.vue";
import ExampleComponent from "@/features/components/ExampleComponent.vue";
import BaseMultiSelectInput from "@/core/forms/components/baseInputs/BaseMultiSelectInput.vue";
import { ref } from "vue";
import { useSampleData } from "@/features/composables/sampleData";

const { sampleList } = useSampleData();

const basicList = ref(["eggs", "milk", "cheese", "bread", "cookies", "salad"]);
const basicInputValue = ref([]);
const advancedInputValue = ref([]);
</script>

<script lang="ts">
export default { layout: AppLayout };
</script>
<template>
    <div class="flex flex-col gap-2">
        <Card title="Description">
            <p class="text-center">
                Allows users to select multiple options from a drop down list.
            </p>
        </Card>
        <ExampleComponent title="Basic MultiSelect">
            <template #component>
                <BaseMultiSelectInput
                    v-model:value="basicInputValue"
                    name="multiselect"
                    label="Multi-Select"
                    :list="basicList"
                />
            </template>
            <template #code>
                &lt;script setup&gt; <br />
                &emsp;import BaseMultiSelectInput from
                "@/core/forms/components/baseInputs/BaseMultiSelectInput.vue";
                <br />
                <br />
                &emsp;const basicInputValue = ["eggs", "milk", "cheese",
                "bread", "cookies", "salad"]<br />
                &lt;/script&gt;<br />
                <br />
                &lt;template&gt;<br />
                &emsp;&lt;BaseMultiSelectInput<br />
                &emsp;&emsp;v-model:value="basicInputValue"<br />
                &emsp;&emsp;name="multiselect"<br />
                &emsp;&emsp;label="Multi-Select"<br />
                &emsp;&emsp;:list="simpleList"<br />
                &emsp;/&gt;<br />
                &lt;/template&gt;<br />
            </template>
        </ExampleComponent>
        <ExampleComponent title="Advanced Dataset MultiSelect">
            <template #component>
                <BaseMultiSelectInput
                    v-model:value="advancedInputValue"
                    name="multiselect"
                    label="Multi-Select"
                    :list="sampleList(5)"
                    text-field="name"
                    value-field="username"
                />
            </template>
            <template #code>
                &lt;script setup&gt; <br />
                &emsp;import BaseMultiSelectInput from
                "@/core/forms/components/baseInputs/BaseMultiSelectInput.vue";
                <br />
                <br />
                &emsp;const advancedInputValue = [<br />
                &emsp;&emsp;{<br />
                &emsp;&emsp;&emsp;name: 'BillyBob',<br />
                &emsp;&emsp;&emsp;username: 'bbob'<br />
                &emsp;&emsp;},<br />
                &emsp;&emsp;{<br />
                &emsp;&emsp;&emsp;name: 'John Doe',<br />
                &emsp;&emsp;&emsp;username: 'jdoe',<br />
                &emsp;&emsp;},<br />
                &emsp;&emsp;{<br />
                &emsp;&emsp;&emsp;name: 'Ricky Bobby',<br />
                &emsp;&emsp;&emsp;username: 'rbobby',<br />
                &emsp;&emsp;} <br />
                &emsp;]<br />
                &lt;/script&gt;<br />
                <br />
                &lt;template&gt;<br />
                &emsp;&lt;BaseMultiSelectInput<br />
                &emsp;&emsp;v-model:value="advancedInputValue"<br />
                &emsp;&emsp;name="multiselect"<br />
                &emsp;&emsp;label="Multi-Select"<br />
                &emsp;&emsp;:list="simpleList"<br />
                &emsp;&emsp;text-field="name"<br />
                &emsp;&emsp;value-field="username"<br />
                &emsp;/&gt;<br />
                &lt;/template&gt;<br />
            </template>
        </ExampleComponent>
    </div>
</template>
