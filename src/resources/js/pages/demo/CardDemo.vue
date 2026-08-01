<script setup lang="ts">
import AddButton from "@/core/components/buttons/AddButton.vue";
import AppLayout from "@/layouts/AppLayout.vue";
import Card from "@/core/components/Card.vue";
import Collapse from "@/core/components/Collapse.vue";
import DataTable from "@/core/features/dataResources/DataTable.vue";
import ExpandBadge from "@/core/components/badges/ExpandBadge.vue";
import { ref } from "vue";
import { useReferenceHelper } from "@/features/composables/referenceHelper";

const { getPropColumns, getSlotColumns } = useReferenceHelper();

const showExample = ref(false);

const referenceProperties = [
    {
        property: "title",
        type: "string",
        default: "",
        required: false,
        description:
            "Places a bordered header at the top of the card with the given text.",
    },
    {
        property: "size",
        type: "ComponentSize",
        default: "md",
        required: false,
        description: "Width of the component.",
    },
];
const slotProperties = [
    {
        name: "title",
        params: "",
        description: "Replace the default header with custom content",
    },
    {
        name: "append-title",
        params: "",
        description: "Add custom data to the right side of the title section",
    },
    {
        name: "default",
        params: "",
        description: "Card Content",
    },
    {
        name: "footer",
        params: "",
        description:
            "Place a bordered footer at the bottom of the card with custom content",
    },
];
</script>

<script lang="ts">
export default { layout: AppLayout };
</script>
<template>
    <div class="flex flex-col gap-2">
        <Card title="Description">
            <p class="text-center">
                Standard box with white background for grouping sections.
            </p>
        </Card>
        <Card title="Component Example">
            <template #append-title>
                <ExpandBadge
                    :expanded="showExample"
                    @click="showExample = !showExample"
                />
            </template>
            <Collapse :show="showExample">
                <div class="flex justify-center">
                    <Card title="I am a card" size="md">
                        <template #append-title>
                            <AddButton size="sm" text="Add Something" pill />
                        </template>
                        lorem ipsum dolor sit amet consectetur adipiscing elit
                        omnis et et accusamus pariatur vero qui aliquip dolor
                        velit et distinctio cumque libero facere ea quas
                        mollitia non deserunt sint blanditiis est quidem dolores
                        optio nostrud tempor officia elit atque aliqua corrupti
                        maxime do ducimus dolore commodo cumque et laborum est
                        <template #footer>
                            <p class="text-center">Custom Footer Content</p>
                        </template>
                    </Card>
                </div>
                <div class="mt-3 p-3 bg-slate-300 rounded-lg overflow-auto">
                    &lt;script setup&gt; <br />
                    &emsp;import Card from "@/core/components/Card.vue" <br />
                    &lt;/script&gt;<br />
                    <br />
                    &lt;template&gt;<br />
                    &emsp;&lt;Card title="I am a card"&gt;<br />
                    &emsp;&emsp;&lt;template #append-title&gt; <br />
                    &emsp;&emsp;&emsp;&lt;AddButton size="sm" text="Add
                    Something" pill /&gt;
                    <br />
                    &emsp;&emsp;&lt;/template&gt;<br />
                    &emsp;&emsp;&lt;div&gt;
                    <div class="ms-12">
                        lorem ipsum dolor sit amet consectetur adipiscing elit
                        omnis et et accusamus pariatur vero qui aliquip dolor
                        velit et distinctio cumque libero facere ea quas
                        mollitia non deserunt sint blanditiis est quidem dolores
                        optio nostrud tempor officia elit atque aliqua corrupti
                        maxime do ducimus dolore commodo cumque et
                    </div>
                    &emsp;&emsp;&lt;/div&gt; <br />
                    &emsp;&emsp;&lt;template #footer&gt;<br />
                    &emsp;&emsp;&emsp;&lt;p class="text-center"&gt;Custom Footer
                    Content&lt;/p&gt;<br />
                    &emsp;&emsp;&lt;/template&gt;<br />
                    &emsp;&lt;/Card&gt;<br />
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
        </Card>
    </div>
</template>
