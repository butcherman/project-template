<script setup lang="ts">
import AppLayout from "@/layouts/AppLayout.vue";
import BaseRangeSliderInput from "@/core/forms/components/baseInputs/BaseRangeSliderInput.vue";
import Card from "@/core/components/Card.vue";
import ExampleComponent from "@/features/components/ExampleComponent.vue";
import { ref } from "vue";

const rangeValue = ref("");
</script>

<script lang="ts">
export default { layout: AppLayout };
</script>
<template>
    <div class="flex flex-col gap-2">
        <Card title="Description">
            <p class="text-center">Slider bar for numeric input.</p>
        </Card>
        <ExampleComponent show>
            <template #component>
                <BaseRangeSliderInput
                    v-model:value="rangeValue"
                    name="range_input"
                    label="Range Input"
                    value-text="You Selected"
                    :min="0"
                    :max="100"
                />
            </template>
            <template #code>
                &lt;script setup&gt; <br />
                &emsp;import BaseRangeSliderInput from
                "@/core/forms/components/baseInputs/BaseRangeSliderInput.vue";
                <br />
                &lt;/script&gt;<br />
                <br />
                &lt;template&gt;<br />
                &emsp;&lt;BaseRangeSliderInput<br />
                &emsp;&emsp;v-model:value="rangeValue"<br />
                &emsp;&emsp;name="range_input"<br />
                &emsp;&emsp;label="Range Input"<br />
                &emsp;&emsp;value-text="You Selected"<br />
                &emsp;&emsp;:min="0"<br />
                &emsp;&emsp;:max="100"<br />
                &emsp;/&gt;<br />
                &lt;/template&gt;<br />
            </template>
        </ExampleComponent>
    </div>
</template>
