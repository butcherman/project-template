<script setup lang="ts">
import AppLayout from "@/layouts/AppLayout.vue";
import BaseButton from "@/core/components/buttons/BaseButton.vue";
import Card from "@/core/components/Card.vue";

const props = defineProps<{}>();
</script>

<script lang="ts">
export default { layout: AppLayout };
</script>
<template>
    <div class="flex flex-col gap-2">
        <div class="flex justify-center gap-2">
            <Card title="Button Components">
                <div class="flex flex-col gap-2">
                    <BaseButton text="Base Button" />
                </div>
            </Card>
            <Card title="Button Variants">
                <div class="flex flex-wrap gap-2">
                    <BaseButton class="flex-1" text="Danger" variant="danger" />
                    <BaseButton class="flex-1" text="Dark" variant="dark" />
                    <BaseButton class="flex-1" text="Error" variant="error" />
                    <BaseButton class="flex-1" text="Help" variant="help" />
                    <BaseButton class="flex-1" text="Info" variant="info" />
                    <BaseButton class="flex-1" text="Light" variant="light" />
                    <BaseButton
                        class="flex-1"
                        text="Primary"
                        variant="primary"
                    />
                    <BaseButton
                        class="flex-1"
                        text="Secondary"
                        variant="secondary"
                    />
                    <BaseButton
                        class="flex-1"
                        text="Success"
                        variant="success"
                    />
                    <BaseButton
                        class="flex-1"
                        text="Warning"
                        variant="warning"
                    />
                    <BaseButton class="flex-1" text="None" variant="none" />
                    <BaseButton class="flex-1" text="Flat" flat />
                </div>
            </Card>
            <Card title="Button Sizes">
                <div class="flex flex-col gap-2">
                    <BaseButton text="Large" size="lg" />
                    <BaseButton text="Medium" size="md" />
                    <BaseButton text="Small" size="sm" />
                    <BaseButton text="Large Pill" size="lg" pill />
                    <BaseButton text="Medium Pill" size="md" pill />
                    <BaseButton text="Small Pill" size="sm" pill />
                </div>
            </Card>
        </div>
        <div class="flex flex-col gap-2">
            <Card title="Component Example">
                <div class="flex justify-center mb-2">
                    <BaseButton text="Any Button Text" variant="primary" />
                </div>
                <div class="p-3 bg-slate-300 rounded-lg overflow-scroll">
                    &lt;script setup&gt; <br />
                    import BaseButton from
                    "@/core/components/buttons/BaseButton.vue" <br />
                    &lt;/script setup&gt;<br />
                    &lt;template&gt;<br />
                    &emsp;&lt;BaseButton text="Any Button Text"
                    variant="primary" /&gt;<br />
                    &lt;/template&gt;<br />
                </div>
            </Card>
            <Card title="Component Reference">
                <h6>Optional Props</h6>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <span class="font-semibold">async</span>
                                &lt;boolean&gt;
                            </td>
                            <td>
                                Determines if the url link will be treated as a
                                regular Inertia link, or an ASYNC Inertia link.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span class="font-semibold">flat</span
                                >&lt;boolean&gt;
                            </td>
                            <td>Removes component shadowing.</td>
                        </tr>
                        <tr>
                            <td>
                                <span class="font-semibold">href</span
                                >&lt;string&gt;
                            </td>
                            <td>
                                When set the component will act as an Inertia
                                hyperlink.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span class="font-semibold">icon</span
                                >&lt;string&gt;
                            </td>
                            <td>
                                Places a FontAwesome icon in front of the text.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span class="font-semibold">pill</span
                                >&lt;boolean&gt;
                            </td>
                            <td>
                                Rounds out the edges of the border to the max.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span class="font-semibold">text</span
                                >&lt;string&gt;
                            </td>
                            <td>Text to be placed in the button.</td>
                        </tr>
                        <tr>
                            <td>
                                <span class="font-semibold">size</span>
                                &lt;ComponentSize&gt;
                            </td>
                            <td>Size of the component.</td>
                        </tr>
                        <tr>
                            <td>
                                <span class="font-semibold">variant</span>
                                &lt;VariantType&gt;
                            </td>
                            <td>
                                Background and text colors for the comoponent.
                            </td>
                        </tr>
                    </tbody>
                </table>
            </Card>
        </div>
    </div>
</template>
