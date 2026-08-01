<script setup lang="ts">
import AppLayout from "@/layouts/AppLayout.vue";
import Card from "@/core/components/Card.vue";
import DataTable from "@/core/features/dataTable/DataTable.vue";
import ResourceList from "@/core/features/dataTable/ResourceList.vue";
import { useReferenceHelper } from "@/features/composables/referenceHelper";
import { useSampleData } from "@/features/composables/sampleData";

const { getPropColumns, getSlotColumns } = useReferenceHelper();
const { sampleList } = useSampleData();

const referenceProperties = [];

const slotProperties = [];

const demoSample = sampleList(2);
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
            </Card>
            <Card title="Basic Component Example">
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
                    &emsp;&lt;ResourceList :list="sampleList" label-field="name"
                    center hover-row /&gt;<br />
                    &lt;/template&gt;<br />
                </div>
            </Card>
        </div>
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
