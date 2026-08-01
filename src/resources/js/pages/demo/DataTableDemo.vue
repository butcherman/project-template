<script setup lang="ts">
import AppLayout from "@/layouts/AppLayout.vue";
import Card from "@/core/components/Card.vue";
import Collapse from "@/core/components/Collapse.vue";
import ColumnOptions from "@/features/demoTable/components/ColumnOptions.vue";
import ExpandBadge from "@/core/components/badges/ExpandBadge.vue";
import SampleColumns from "@/features/demoTable/components/SampleColumns.vue";
import SampleData from "@/features/demoTable/components/SampleData.vue";
import TableColumns from "@/features/demoTable/components/TableColumns.vue";
import TableExampleAdvanced from "@/features/demoTable/components/TableExampleAdvanced.vue";
import TableExampleBasic from "@/features/demoTable/components/TableExampleBasic.vue";
import TableReference from "@/features/demoTable/components/TableReference.vue";
import { ref } from "vue";

const columnDesc = ref(false);
const sampleData = ref(false);
const basicExample = ref(false);
const advancedExample = ref(true);
</script>

<script lang="ts">
export default { layout: AppLayout };
</script>
<template>
    <div class="flex flex-col gap-2">
        <Card title="Description">
            <p class="text-center">
                Fully functional and customizable table. Can sort and filter
                data as well as paginate.
            </p>
        </Card>
        <div class="flex justify-center gap-2">
            <Card title="Data Table Columns">
                <template #append-title>
                    <ExpandBadge
                        :expanded="columnDesc"
                        @click="columnDesc = !columnDesc"
                    />
                </template>
                <Collapse :show="columnDesc">
                    <TableColumns />
                </Collapse>
            </Card>
            <Card title="Column Options">
                <template #append-title>
                    <ExpandBadge
                        :expanded="columnDesc"
                        @click="columnDesc = !columnDesc"
                    />
                </template>
                <Collapse :show="columnDesc">
                    <ColumnOptions />
                </Collapse>
            </Card>
        </div>
        <div class="flex justify-center gap-2">
            <Card title="Sample Columns">
                <template #append-title>
                    <ExpandBadge
                        :expanded="sampleData"
                        @click="sampleData = !sampleData"
                    />
                </template>
                <Collapse :show="sampleData">
                    <SampleColumns />
                </Collapse>
            </Card>
            <Card title="Sample Data">
                <template #append-title>
                    <ExpandBadge
                        :expanded="sampleData"
                        @click="sampleData = !sampleData"
                    />
                </template>
                <Collapse :show="sampleData">
                    <SampleData />
                </Collapse>
            </Card>
        </div>
        <div class="flex flex-col gap-2">
            <Card title="Basic Component Example">
                <template #append-title>
                    <ExpandBadge
                        :expanded="basicExample"
                        @click="basicExample = !basicExample"
                    />
                </template>
                <Collapse :show="basicExample">
                    <TableExampleBasic />
                </Collapse>
            </Card>
            <Card title="Advanced Component Example">
                <template #append-title>
                    <ExpandBadge
                        :expanded="advancedExample"
                        @click="advancedExample = !advancedExample"
                    />
                </template>
                <Collapse :show="advancedExample">
                    <TableExampleAdvanced />
                </Collapse>
            </Card>
            <Card title="Component Reference">
                <TableReference />
            </Card>
        </div>
    </div>
</template>
