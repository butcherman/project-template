<script setup lang="ts">
import AppLayout from "@/layouts/AppLayout.vue";
import Card from "@/core/components/Card.vue";
import Collapse from "@/core/components/Collapse.vue";
import DataTable from "@/core/features/dataResources/DataTable.vue";
import ExpandBadge from "@/core/components/badges/ExpandBadge.vue";
import Paginate from "@/core/features/pagination/Paginate.vue";
import { ref } from "vue";
import { useReferenceHelper } from "@/features/composables/referenceHelper";

const { getPropColumns, getSlotColumns } = useReferenceHelper();

const showExample = ref(false);

const perPageExample = ref(10);
const currentPageExample = ref(1);
const perPageArray = ref([10, 20, 30]);
const totalRecords = 150;

const referenceProperties = [
    {
        property: "currentPage",
        type: "number",
        default: "",
        required: true,
        description: "Current page of the data set",
    },
    {
        property: "perPage",
        type: "number",
        default: "",
        required: true,
        description: "Number of records per page",
    },
    {
        property: "perPageArray",
        type: "number[]",
        default: "",
        required: true,
        description: "Array of selectable options for results per page",
    },
    {
        property: "totalRecords",
        type: "number",
        default: "",
        required: true,
        description: "Total number of records in data set",
    },
];

const emitReferences = [
    {
        name: "goToPage",
        params: "number",
        description: "Jump to a specific page",
    },
    {
        name: "nextPage",
        params: "number",
        description: "Move to the next page",
    },
    {
        name: "prevPage",
        params: "number",
        description: "Move to the previous page",
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
                Pagination Component to allow simple page navigation between
                data sets
            </p>
        </Card>
        <div class="flex gap-2">
            <Card title="Component Example">
                <template #append-title>
                    <ExpandBadge
                        :expanded="showExample"
                        @click="showExample = !showExample"
                    />
                </template>
                <Collapse :show="showExample">
                    <div
                        class="flex justify-center p-3 border border-slate-300 rounded-lg"
                    >
                        <Paginate
                            v-model:per-page="perPageExample"
                            :current-page="currentPageExample"
                            :per-page-array="perPageArray"
                            :total-records="totalRecords"
                            @next-page="currentPageExample++"
                            @prev-page="currentPageExample--"
                            @go-to-page="currentPageExample = $event"
                        />
                    </div>
                    <div class="mt-3 p-3 bg-slate-300 rounded-lg overflow-auto">
                        &lt;script setup&gt; <br />
                        &emsp;import Paginate from
                        "@/core/features/pagination/Paginate.vue"<br />
                        <br />
                        &emsp;const perPage = ref(10);<br />
                        &emsp;const currentPage = ref(1);<br />
                        &emsp;const perPageArray = ref([10, 20, 30]);<br />
                        &emsp;const totalRecords = 150; <br />
                        &lt;/script&gt;<br />
                        <br />
                        &lt;template&gt;<br />
                        &emsp;&lt;Paginate<br />
                        &emsp;&emsp;v-model:per-page="perPage"<br />
                        &emsp;&emsp;:current-page="currentPage"<br />
                        &emsp;&emsp;:per-page-array="perPageArray"<br />
                        &emsp;&emsp;:total-records="totalRecords"<br />
                        &emsp;&emsp;@next-page="currentPage++"<br />
                        &emsp;&emsp;@prev-page="currentPage--"<br />
                        &emsp;&emsp;@go-to-page="currentPage = $event"<br />
                        &emsp;/&gt;<br />
                        &lt;/template&gt;<br />
                    </div>
                </Collapse>
            </Card>
        </div>
        <Card title="Component Reference">
            <h4>Props</h4>
            <DataTable
                :columns="getPropColumns()"
                :data="referenceProperties"
            />
            <h4>Emits</h4>
            <DataTable :columns="getSlotColumns()" :data="emitReferences" />
        </Card>
    </div>
</template>
