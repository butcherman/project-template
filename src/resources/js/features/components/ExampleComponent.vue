<script setup lang="ts">
import { ref } from "vue";

import Card from "@/core/components/Card.vue";
import Collapse from "@/core/components/Collapse.vue";
import ExpandBadge from "@/core/components/badges/ExpandBadge.vue";

const props = defineProps<{
    title?: string;
}>();

const showExample = ref(false);
</script>

<template>
    <Card :title="title ?? 'Component Example'">
        <template #append-title>
            <ExpandBadge
                :expanded="showExample"
                @click="showExample = !showExample"
            />
        </template>
        <Collapse :show="showExample">
            <div class="flex justify-center gap-2">
                <slot name="component" />
            </div>
            <div class="mt-3 p-3 bg-slate-300 rounded-lg overflow-auto">
                <slot name="code" />
            </div>
        </Collapse>
    </Card>
</template>
