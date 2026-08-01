<script setup lang="ts">
import AppLayout from "@/layouts/AppLayout.vue";
import Card from "@/core/components/Card.vue";
import Collapse from "@/core/components/Collapse.vue";
import DataTable from "@/core/features/dataResources/DataTable.vue";
import ExpandBadge from "@/core/components/badges/ExpandBadge.vue";
import MenuList from "@/core/components/MenuList.vue";
import { ref } from "vue";
import { useReferenceHelper } from "@/features/composables/referenceHelper";

const { getPropColumns } = useReferenceHelper();

const showExample = ref(false);

const exampleMenu = [
    {
        label: "Home Page",
        icon: "home",
        route: "#",
    },
    {
        label: "User Account",
        icon: "user",
        route: "#",
    },
    {
        label: "Settings",
        icon: "cog",
        route: "#",
    },
];

const referenceProperties = [
    {
        property: "menuList",
        type: "MenuItem[]",
        default: "",
        required: true,
        description: "List of navigation links.",
    },
];
</script>

<script lang="ts">
export default { layout: AppLayout };
</script>
<template>
    <div class="flex flex-col gap-2">
        <Card title="Description">
            <p class="text-center">List of navigation links.</p>
        </Card>
        <div class="flex gap-2">
            <Card title="Example Data" size="sm">
                <div class="mt-3 p-3 bg-slate-300 rounded-lg overflow-auto">
                    const exampleMenu = [<br />
                    &emsp;{<br />
                    &emsp;&emsp;label: "Home Page",<br />
                    &emsp;&emsp;icon: "home",<br />
                    &emsp;&emsp;route: "#",<br />
                    &emsp;},<br />
                    &emsp;{<br />
                    &emsp;&emsp;label: "User Account",<br />
                    &emsp;&emsp;icon: "user",<br />
                    &emsp;&emsp;route: "#",<br />
                    &emsp;},<br />
                    &emsp;{<br />
                    &emsp;&emsp;label: "Settings",<br />
                    &emsp;&emsp;icon: "cog",<br />
                    &emsp;&emsp;route: "#",<br />
                    &emsp;},<br />
                    ];
                </div>
            </Card>
            <Card title="Component Example">
                <template #append-title>
                    <ExpandBadge
                        :expanded="showExample"
                        @click="showExample = !showExample"
                    />
                </template>
                <Collapse :show="showExample">
                    <div class="flex justify-center">
                        <MenuList
                            :menu-list="exampleMenu"
                            class="border border-slate-300 rounded-lg"
                        />
                    </div>
                    <div class="mt-3 p-3 bg-slate-300 rounded-lg overflow-auto">
                        &lt;script setup&gt; <br />
                        &emsp;import Collapse from
                        "@/core/components/MenuList.vue"<br />
                        &lt;/script&gt;<br />
                        <br />
                        &lt;template&gt;<br />
                        &emsp;&lt;MenuList :menu-list="exampleMenu" /&gt;<br />
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
        </Card>
    </div>
</template>
