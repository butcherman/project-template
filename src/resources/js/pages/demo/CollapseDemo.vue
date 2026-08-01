<script setup lang="ts">
import AppLayout from "@/layouts/AppLayout.vue";
import Card from "@/core/components/Card.vue";
import Collapse from "@/core/components/Collapse.vue";
import DataTable from "@/core/features/dataResources/DataTable.vue";
import ExpandBadge from "@/core/components/badges/ExpandBadge.vue";
import { ref } from "vue";
import { useReferenceHelper } from "@/features/composables/referenceHelper";

const { getPropColumns, getSlotColumns } = useReferenceHelper();

const showExample = ref(false);
const exampleCollapse = ref(true);

const referenceProperties = [
    {
        property: "show",
        type: "boolean",
        default: "",
        required: true,
        description:
            "When true, content will be shown, when false content will be hidden",
    },
];
const slotProperties = [
    {
        name: "default",
        params: "",
        description: "Collapsable content",
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
                Collapsable content wrapper with animation for a smooth
                transition.
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
                    <Card title="Example" size="md">
                        <template #append-title>
                            <ExpandBadge
                                :expanded="exampleCollapse"
                                @click="exampleCollapse = !exampleCollapse"
                            />
                        </template>
                        <Collapse :show="exampleCollapse">
                            Use the badge in the header to expand and collapse
                            this component.
                        </Collapse>
                    </Card>
                </div>
                <div class="mt-3 p-3 bg-slate-300 rounded-lg overflow-auto">
                    &lt;script setup&gt; <br />
                    &emsp;import Collapse from
                    "@/core/components/Collapse.vue"<br />
                    <br />
                    &emsp;const exampleCollapse = ref(true);<br />
                    &lt;/script&gt;<br />
                    <br />
                    &lt;template&gt;<br />
                    &emsp;&lt;Card title="Example"&gt;<br />
                    &emsp;&emsp;&lt;template #append-title&gt; <br />
                    &emsp;&emsp;&emsp;&lt;ExpandBadge<br />
                    &emsp;&emsp;&emsp;&emsp;:expanded="exampleCollapse"<br />
                    &emsp;&emsp;&emsp;&emsp;@click="exampleCollapse =
                    !exampleCollapse"<br />
                    &emsp;&emsp;&emsp;/&gt;
                    <br />
                    &emsp;&emsp;&lt;/template&gt;<br />
                    &emsp;&emsp;&lt;Collapse :show="exampleCollapse"&gt;
                    <div class="ms-12">
                        Use the badge in the header to expand and collapse this
                        component.
                    </div>
                    &emsp;&emsp;&lt;/Collapse&gt; <br />
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
