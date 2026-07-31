<script setup lang="ts">
import DataTable from "@/core/features/dataTable/DataTable.vue";
import prettyBytes from "pretty-bytes";
import { useColumnBuilder } from "@/core/features/dataTable/composables/columnBuilder";

interface testingData {
    text: string;
    icon: string;
    bool: boolean;
    size: number;
    date: string;
    phone: number | string;
}

const colHelper = useColumnBuilder<testingData>();

const dataColumns = [
    colHelper.text("text", "Text Col"),
    colHelper.icon("icon", "FA Icon"),
    colHelper.boolean("bool", "Bool"),
    colHelper.text("size", "Formatted", {
        formatter: (value: number) => prettyBytes(value),
    }),
    colHelper.date("date", "Date"),
    colHelper.phoneNumber("phone", "Phone Number"),
];

const testData = [
    {
        text: "test 1",
        bool: false,
        size: 1024,
        date: "Jan 12, 2024",
        phone: 8085458856,
        icon: "star",
    },
    {
        text: "test 2",
        bool: true,
        size: 2048,
        date: "12-30-29",
        phone: "(877)555-1212,",
        icon: "poo",
    },
];
</script>

<template>
    <div>
        <DataTable :columns="dataColumns" :data="testData" />
    </div>
</template>
