<script setup lang="ts">
import AppLayout from "@/layouts/AppLayout.vue";
import Card from "@/core/components/Card.vue";
import ColumnOptions from "@/features/demoTable/components/ColumnOptions.vue";
import SampleColumns from "@/features/demoTable/components/SampleColumns.vue";
import SampleData from "@/features/demoTable/components/SampleData.vue";
import TableColumns from "@/features/demoTable/components/TableColumns.vue";
import TableExample from "@/features/demoTable/components/TableExample.vue";
import TableReference from "@/features/demoTable/components/TableReference.vue";
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
                <TableColumns />
            </Card>
            <Card title="Column Options">
                <ColumnOptions />
            </Card>
        </div>
        <div class="flex justify-center gap-2">
            <Card title="Sample Columns">
                <SampleColumns />
            </Card>
            <Card title="Sample Data">
                <SampleData />
            </Card>
        </div>
        <div class="flex flex-col gap-2">
            <Card title="ComponentExample">
                <TableExample />
            </Card>
            <Card title="Component Reference">
                <TableReference />
            </Card>
        </div>
    </div>
</template>
