<script setup lang="ts">
import AppLayout from "@/layouts/AppLayout.vue";
import BaseButton from "@/core/components/buttons/BaseButton.vue";
import Card from "@/core/components/Card.vue";
import Collapse from "@/core/components/Collapse.vue";
import ComponentReference from "@/features/components/ComponentReference.vue";
import ExpandBadge from "@/core/components/badges/ExpandBadge.vue";
import MenuList from "@/core/components/MenuList.vue";
import Overlay from "@/core/components/Overlay.vue";
import { ref } from "vue";

const showExample = ref(false);
const showLoader = ref(true);

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
        property: "loading",
        type: "boolean",
        default: "false",
        required: true,
        description: "Determines if the loader is shown or not",
    },
    {
        property: "fullPage",
        type: "boolean",
        default: "fasle",
        required: false,
        description:
            "When true, the loader will take over the page rather than stay in its container",
    },
    {
        property: "loadingText",
        type: "string",
        default: "",
        required: false,
        description: "Text to show under the loader animation",
    },
];

const slotProperties = [
    {
        name: "loader",
        params: "",
        description: "Replace the loader animation with custom content",
    },
    {
        name: "default",
        params: "",
        description: "Content to be shown when loader is false",
    },
];
</script>

<script lang="ts">
export default { layout: AppLayout };
</script>
<template>
    <div class="flex flex-col gap-2">
        <Card title="Description">
            <p class="text-center">Loading overlay that covers content</p>
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
                    <div class="flex flex-col gap-2 items-center">
                        <div>
                            <BaseButton
                                text="Toggle Loader"
                                @click="showLoader = !showLoader"
                            />
                        </div>
                        <div>
                            <Overlay
                                :loading="showLoader"
                                loading-text="Loading..."
                            >
                                <MenuList
                                    :menu-list="exampleMenu"
                                    class="border border-slate-300 rounded-lg"
                                />
                            </Overlay>
                        </div>
                    </div>
                    <div class="mt-3 p-3 bg-slate-300 rounded-lg overflow-auto">
                        &lt;script setup&gt; <br />
                        &emsp;import Overlay from
                        "@/core/components/Overlay.vue"<br />
                        <br />
                        const showLoader = ref(true);<br />
                        &lt;/script&gt;<br />
                        <br />
                        &lt;template&gt;<br />
                        &emsp;&lt;Overlay :loading="showLoader"
                        loading-text="Loading..."&gt;<br />
                        &emsp;&emsp;&lt;MenuList :menu-list="exampleMenu"
                        /&gt;<br />
                        &emsp;&lt;Overlay /&gt;<br />
                        &lt;/template&gt;<br />
                    </div>
                </Collapse>
            </Card>
        </div>
        <ComponentReference
            :reference-properties="referenceProperties"
            :slot-properties="slotProperties"
        />
    </div>
</template>
