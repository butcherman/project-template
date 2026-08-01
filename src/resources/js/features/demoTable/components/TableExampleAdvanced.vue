<script setup lang="ts">
import DataTable from "@/core/features/dataResources/DataTable.vue";
import prettyBytes from "pretty-bytes";
import { useColumnBuilder } from "@/core/features/dataResources/composables/columnBuilder";
import { useSampleData } from "@/features/composables/sampleData";

interface testingData {
    text: string;
    icon: string;
    bool: boolean;
    size: number | bigint;
    date: string | Date;
    phone: number | string;
}

const colHelper = useColumnBuilder<testingData>();
const { sampleTableData } = useSampleData();

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
</script>

<template>
    <div>
        <DataTable :columns="dataColumns" :data="sampleTableData(50)" />
        <div class="p-3 bg-slate-300 rounded-lg overflow-auto">
            &lt;script setup&gt; <br />
            &emsp;import DataTable from
            "@/core/features/dataTable/DataTable.vue";
            <br />
            &lt;/script&gt;<br />
            <br />
            &lt;template&gt;<br />
            &emsp;&lt;DataTable :columns="dataColumns" :data="testData" /&gt;<br />
            &lt;/template&gt;<br />
        </div>
    </div>
</template>
