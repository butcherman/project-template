<script setup lang="ts">
import DataTable from "@/core/features/dataTable/DataTable.vue";
import { textColumn } from "@/core/features/dataTable/columns/textColumn";
import { booleanColumn } from "@/core/features/dataTable/columns/booleanColumn";

interface testingData {
    text: string;
    bool: boolean;
}

const dataColumns = [
    textColumn<testingData>("text", "Text Column", {
        icon: "user",
    }),
    booleanColumn<testingData>("bool", "Boolean"),
];

const testData = [
    {
        text_data: "test 1",
        bool_data: false,
    },
];
</script>

<template>
    <div>
        <DataTable :columns="dataColumns" :data="testData" />
    </div>
</template>
