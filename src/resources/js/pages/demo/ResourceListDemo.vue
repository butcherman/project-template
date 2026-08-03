<script setup lang="ts">
import AppLayout from "@/layouts/AppLayout.vue";
import Card from "@/core/components/Card.vue";
import Collapse from "@/core/components/Collapse.vue";
import ComponentReference from "@/features/components/ComponentReference.vue";
import ExpandBadge from "@/core/components/badges/ExpandBadge.vue";
import ResourceList from "@/core/features/dataResources/ResourceList.vue";
import { useSampleData } from "@/features/composables/sampleData";
import { ref } from "vue";

const { sampleList } = useSampleData();

const referenceProperties = [
    {
        property: "list",
        type: "TRow",
        default: "",
        required: true,
        description: "Data for the list",
    },
    {
        property: "allowRowClick",
        type: "boolean",
        default: "false",
        required: false,
        description:
            "Determines if row cursor is pointer, and if row click event is emitted",
    },
    {
        property: "center",
        type: "boolean",
        default: "false",
        required: false,
        description: "Centers text in the list",
    },
    {
        property: "gridLines",
        type: "boolean",
        default: "false",
        required: false,
        description: "Places border between each list item",
    },
    {
        property: "hoverRow",
        type: "boolean",
        default: "false",
        required: false,
        description: "Changes background styling of row when hovered over",
    },
    {
        property: "labelField",
        type: "keyof TRow (string)",
        default: "false",
        required: false,
        description:
            "When list is an object, determines which property should be displayed as the text",
    },
    {
        property: "striped",
        type: "boolean",
        default: "false",
        required: false,
        description: "Alternates background class on rows",
    },
    {
        property: "noBorder",
        type: "boolean",
        default: "false",
        required: false,
        description: "Removes the border around the list",
    },
    {
        property: "noResultsText",
        type: "string",
        default: "false",
        required: false,
        description: "Text to show when no data is present",
    },
    {
        property: "paginate",
        type: "boolean",
        default: "false",
        required: false,
        description: "Chunks the list into pages",
    },
    {
        property: "rowClassFn",
        type: "(row: TRow) => string | false",
        default: "undefined",
        required: false,
        description: "Function to run on each row to set its background color",
    },
    {
        property: "rowLinkFn",
        type: "(event: MouseEvent, row: TRow) => void",
        default: "undefined",
        required: false,
        description: "Function to run on each row to set its href destination",
    },
];

const slotProperties = [
    {
        name: "emptyText",
        params: "",
        description: "Shown when no data is present",
    },
    {
        name: "list-item",
        params: "row: IndexedData<TRow>",
        description: "Replace the default list item with custom content",
    },
    {
        name: "actions",
        params: "row: IndexedData<TRow>",
        description: "Shown to the far right of the list row",
    },
];

const emitProperties = [
    {
        name: "rowClicked",
        params: "TRow",
        description:
            "Only emitted when allowRowClick or rowLinkFn props are present",
    },
];

const demoSample = sampleList(2);
const showData = ref(false);
const showBasic = ref(false);
const showAdvanced = ref(false);
</script>

<script lang="ts">
export default { layout: AppLayout };
</script>
<template>
    <div class="flex flex-col gap-2">
        <Card title="Description">
            <p class="text-center">
                Detailed list of data with options for handling that data.
                Similar to a Data Table, just in a list format and only shows a
                single label. Great for showing a list of navigation options
                based on results of a database search.
            </p>
        </Card>
        <div class="flex flex-col gap-2">
            <Card title="Sample Data" class="flex-1">
                <template #append-title>
                    <ExpandBadge
                        :expanded="showData"
                        @click="showData = !showData"
                    />
                </template>
                <Collapse :show="showData">
                    <div class="p-3 bg-slate-300 rounded-lg overflow-auto">
                        const sampleList = [ <br />
                        <template v-for="item in demoSample">
                            &emsp;{ <br />
                            &emsp;&emsp;name: "{{ item.name }}", <br />
                            &emsp;&emsp;username: "{{ item.username }}", <br />
                            &emsp;&emsp;email: "{{ item.email }}", <br />
                            &emsp;}, <br />
                        </template>
                    </div>
                </Collapse>
            </Card>
            <Card title="Basic Component Example">
                <template #append-title>
                    <ExpandBadge
                        :expanded="showBasic"
                        @click="showBasic = !showBasic"
                    />
                </template>
                <Collapse :show="showBasic">
                    <div class="flex justify-center mb-2">
                        <ResourceList
                            :list="demoSample"
                            label-field="name"
                            center
                            hover-row
                        />
                    </div>
                    <div class="p-3 bg-slate-300 rounded-lg overflow-auto">
                        &lt;script setup&gt; <br />
                        &emsp;import ResourceList from
                        "@/core/features/dataTable/ResourceList.vue" <br />
                        &lt;/script&gt;<br />
                        <br />
                        &lt;template&gt;<br />
                        &emsp;&lt;ResourceList :list="sampleList"
                        label-field="name" center hover-row /&gt;<br />
                        &lt;/template&gt;<br />
                    </div>
                </Collapse>
            </Card>
            <Card title="Advanced Component Example">
                <template #append-title>
                    <ExpandBadge
                        :expanded="showAdvanced"
                        @click="showAdvanced = !showAdvanced"
                    />
                </template>
                <Collapse :show="showAdvanced">
                    <div class="flex justify-center mb-2">
                        <ResourceList
                            :list="sampleList(50)"
                            label-field="name"
                            center
                            hover-row
                            paginate
                            grid-lines
                            striped
                        />
                    </div>
                    <div class="p-3 bg-slate-300 rounded-lg overflow-auto">
                        &lt;script setup&gt; <br />
                        &emsp;import ResourceList from
                        "@/core/features/dataTable/ResourceList.vue" <br />
                        &lt;/script&gt;<br />
                        <br />
                        &lt;template&gt;<br />
                        &emsp;&lt;ResourceList<br />
                        &emsp;&emsp;&emsp;:list="sampleList" <br />
                        &emsp;&emsp;&emsp;label-field="name" <br />
                        &emsp;&emsp;&emsp;center <br />
                        &emsp;&emsp;&emsp;hover-row <br />
                        &emsp;&emsp;&emsp;paginate <br />
                        &emsp;&emsp;&emsp;grid-lines <br />
                        &emsp;&emsp;&emsp;striped <br />
                        &emsp;&emsp;/&gt;<br />
                        &lt;/template&gt;<br />
                    </div>
                </Collapse>
            </Card>
        </div>
        <ComponentReference
            :reference-properties="referenceProperties"
            :slot-properties="slotProperties"
            :emit-properties="emitProperties"
        />
    </div>
</template>
