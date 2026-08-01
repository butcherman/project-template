<script setup lang="ts">
import AddBadge from "@/core/components/badges/AddBadge.vue";
import AppLayout from "@/layouts/AppLayout.vue";
import BaseBadge from "@/core/components/badges/BaseBadge.vue";
import BooleanBadge from "@/core/components/badges/BooleanBadge.vue";
import Card from "@/core/components/Card.vue";
import DataTable from "@/core/features/dataTable/DataTable.vue";
import DeleteBadge from "@/core/components/badges/DeleteBadge.vue";
import EditBadge from "@/core/components/badges/EditBadge.vue";
import { useReferenceHelper } from "@/features/composables/referenceHelper";

const { getPropColumns, getSlotColumns } = useReferenceHelper();

const referenceProperties = [
    {
        property: "circle",
        type: "boolean",
        default: "false",
        required: false,
        description: "Makes the badge borders as round as possible.",
    },
    {
        property: "href",
        type: "string",
        default: "null",
        required: false,
        description:
            " When set the component will act as an Inertia  hyperlink.",
    },
    {
        property: "icon",
        type: "string",
        default: "null",
        required: false,
        description: "Places a FontAwesome icon in front of the text.",
    },
    {
        property: "pointer",
        type: "boolean",
        default: "false",
        required: false,
        description: "Changes the cursor over the badge to a pointer.",
    },
    {
        property: "text",
        type: "string",
        default: "null",
        required: false,
        description: "Text to be placed in the button.",
    },
    {
        property: "size",
        type: "ComponentSize",
        default: "md",
        required: false,
        description: "Size of the component.",
    },
    {
        property: "variant",
        type: "VariantType",
        default: "primary",
        required: false,
        description: "Background and text colors for the comoponent.",
    },
];

const slotProperties = [
    {
        name: "default",
        params: "none",
        description: "Default slot for content inside badge",
    },
];
</script>

<script lang="ts">
export default { layout: AppLayout };
</script>
<template>
    <div class="flex flex-col gap-2">
        <Card title="Description">
            <p class="text-center">
                Small badge to display inline with existing text.
            </p>
        </Card>
        <div class="flex justify-center gap-2">
            <Card title="Badge Components">
                <div class="flex flex-col gap-2">
                    <div><BaseBadge text="Base" /> - Base Badge</div>
                    <div><AddBadge /> - Add Badge</div>
                    <div>
                        <BooleanBadge :value="true" /> - Boolean Badge True
                    </div>
                    <div>
                        <BooleanBadge :value="false" /> - Boolean Badge False
                    </div>
                    <div><DeleteBadge /> - Delete Badge</div>
                    <div><EditBadge /> - Edit Badge</div>
                </div>
            </Card>
            <Card title="Badge Variants">
                <div class="flex flex-wrap gap-2">
                    <BaseBadge class="flex-1" text="Danger" variant="danger" />
                    <BaseBadge class="flex-1" text="Dark" variant="dark" />
                    <BaseBadge class="flex-1" text="Error" variant="error" />
                    <BaseBadge class="flex-1" text="Help" variant="help" />
                    <BaseBadge class="flex-1" text="Info" variant="info" />
                    <BaseBadge class="flex-1" text="Light" variant="light" />
                    <BaseBadge
                        class="flex-1"
                        text="Primary"
                        variant="primary"
                    />
                    <BaseBadge
                        class="flex-1"
                        text="Secondary"
                        variant="secondary"
                    />
                    <BaseBadge
                        class="flex-1"
                        text="Success"
                        variant="success"
                    />
                    <BaseBadge
                        class="flex-1"
                        text="Warning"
                        variant="warning"
                    />
                    <BaseBadge class="flex-1" text="None" variant="none" />
                </div>
            </Card>
            <Card title="Badge Sizes">
                <div class="flex flex-col gap-1">
                    <div>
                        <BaseBadge text="Large" size="lg" />
                    </div>
                    <div>
                        <BaseBadge text="Medium" size="md" />
                    </div>
                    <div>
                        <BaseBadge text="Small" size="sm" />
                    </div>
                    <div>
                        <BaseBadge text="Large Circle" size="lg" circle />
                    </div>
                    <div>
                        <BaseBadge text="Medium Circle" size="md" circle />
                    </div>
                    <div>
                        <BaseBadge text="Small Circle" size="sm" circle />
                    </div>
                </div>
            </Card>
        </div>
        <div class="flex flex-col gap-2">
            <Card title="ComponentExample">
                <div class="flex justify-center mb-2">
                    <BaseBadge text="Badge Text" variant="primary" />
                </div>
                <div class="p-3 bg-slate-300 rounded-lg overflow-auto">
                    &lt;script setup&gt; <br />
                    &emsp;import BaseBadge from
                    "@/core/components/badges/BaseBadge.vue" <br />
                    &lt;/script&gt;<br />
                    <br />
                    &lt;template&gt;<br />
                    &emsp;&lt;BaseBadge text="Badge Text" variant="primary"
                    /&gt;<br />
                    &lt;/template&gt;<br />
                </div>
            </Card>
            <Card title="Component Reference">
                <h4>Props</h4>
                <DataTable
                    :columns="getPropColumns()"
                    :data="referenceProperties"
                />
                <h4>Slots</h4>
                <DataTable :columns="getSlotColumns()" :data="slotProperties" />
            </Card>
        </div>
    </div>
</template>
