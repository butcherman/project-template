<script setup lang="ts">
import AppLayout from "@/layouts/AppLayout.vue";
import Card from "@/core/components/Card.vue";
import TableColumns from "@/features/demoTable/components/TableColumns.vue";
import ColumnOptions from "@/features/demoTable/components/ColumnOptions.vue";
import TableExample from "@/features/demoTable/components/TableExample.vue";

const props = defineProps<{}>();

const referenceProperties = [
    //
];
</script>

<script lang="ts">
export default { layout: AppLayout };
</script>
<template>
    <div class="flex flex-col gap-2">
        <div class="flex justify-center gap-2">
            <Card title="Data Table Columns">
                <TableColumns />
            </Card>
            <Card title="Column Options">
                <ColumnOptions />
            </Card>
        </div>
        <div class="flex justify-center gap-2">
            <Card title="Sample Columns">
                <!-- <TableColumns /> -->
            </Card>
            <Card title="Sample Data">
                <!-- <ColumnOptions /> -->
            </Card>
        </div>
        <div class="flex flex-col gap-2">
            <Card title="ComponentExample">
                <TableExample />
            </Card>
            <Card title="Component Reference">reference</Card>
        </div>
    </div>
</template>
