<script setup lang="ts">
import AppLayout from "@/layouts/AppLayout.vue";
import BaseButton from "@/core/components/buttons/BaseButton.vue";
import Card from "@/core/components/Card.vue";
</script>

<script lang="ts">
export default { layout: AppLayout };
</script>
<template>
    <div class="flex flex-col gap-2">
        <Card title="Description">
            <p>
                Directive for displaying a notification pop-up with the hovered
                component.
            </p>
        </Card>
        <Card title="Directive Example">
            <p class="text-center mb-3">
                Hover over the buttons to see the tooltip
            </p>
            <div class="flex justify-center gap-3 mb-3">
                <BaseButton text="Default Tooltip" v-tooltip="'On Top'" />
                <BaseButton text="Top Tooltip" v-tooltip.top="'On Top'" />
                <BaseButton
                    text="Bottom Tooltip"
                    v-tooltip.bottom="'On Bottom'"
                />
                <BaseButton text="Left Tooltip" v-tooltip.left="'On Left'" />
                <BaseButton text="Right Tooltip" v-tooltip.right="'On Right'" />
            </div>
            <div class="p-3 bg-slate-300 rounded-lg overflow-auto">
                &lt;template&gt;<br />
                &emsp;&lt;BaseButton text="Default Tooltip" v-tooltip="'On Top'"
                /&gt;<br />
                &emsp;&lt;BaseButton text="Top Tooltip" v-tooltip.top="'On Top'"
                /&gt;<br />
                &emsp;&lt;BaseButton text="Bottom Tooltip" v-tooltip.bottom="'On
                Bottom'" /&gt;<br />
                &emsp;&lt;BaseButton text="Left Tooltip" v-tooltip.left="'On
                Left'" /&gt;<br />
                &emsp;&lt;BaseButton text="Right Tooltip" v-tooltip.right="'On
                Right'" /&gt;<br />
                &lt;/template&gt;<br />
            </div>
        </Card>
    </div>
</template>
