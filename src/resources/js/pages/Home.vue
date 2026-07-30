<script setup lang="ts">
import AuthLayout from "@/layouts/AuthLayout.vue";
import Card from "@/core/components/Card.vue";

const props = defineProps<{}>();
</script>

<script lang="ts">
export default { layout: AuthLayout };
</script>
<template>
    <div class="flex justify-center items-center h-screen">
        <Card>
            <h1 class="text-center border-b my-2 py-2 border-b-slate-300">
                Butcherman Project Template
            </h1>
        </Card>
    </div>
</template>
