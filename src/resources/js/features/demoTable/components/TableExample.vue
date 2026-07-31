<script setup lang="ts">
import DataTable from "@/core/features/dataTable/DataTable.vue";
import PrettyBytes from "pretty-bytes";
import { textColumn } from "@/core/features/dataTable/columns/textColumn";
import { booleanColumn } from "@/core/features/dataTable/columns/booleanColumn";

interface testingData {
    text: string;
    bool: boolean;
    size: number;
}

const dataColumns = [
    textColumn<testingData>("text", "Text Column", {
        icon: "user",
    }),
    booleanColumn<testingData>("bool", "Boolean"),
    textColumn<testingData, number>("size", "Formatted", {
        formatter: (value) => PrettyBytes(value),
    }),
];

const testData = [
    {
        text: "test 1",
        bool: false,
        size: 1024,
    },
];
</script>

<template>
    <div>
        <DataTable :columns="dataColumns" :data="testData" />
    </div>
</template>
