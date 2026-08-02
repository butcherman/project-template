<script setup lang="ts">
import AppLayout from "@/layouts/AppLayout.vue";
import BaseButton from "@/core/components/buttons/BaseButton.vue";
import Card from "@/core/components/Card.vue";
import Collapse from "@/core/components/Collapse.vue";
import ExpandBadge from "@/core/components/badges/ExpandBadge.vue";
import okModal from "@/core/features/okModal";
import verifyModal from "@/core/features/verifyModal";
import { ref } from "vue";

const showOkModal = ref(false);
const showVerify = ref(false);
const verifyRes = ref();
</script>

<script lang="ts">
export default { layout: AppLayout };
</script>
<template>
    <div class="flex flex-col gap-2">
        <Card title="Description">
            <p class="text-center">
                Callable functions for alerting or verifing operations.
            </p>
        </Card>
        <div class="flex flex-col gap-2">
            <Card title="Verify Modal Example">
                <template #append-title>
                    <ExpandBadge
                        :expanded="showVerify"
                        @click="showVerify = !showVerify"
                    />
                </template>
                <Collapse :show="showVerify">
                    <div class="flex flex-col gap-2 items-center">
                        <BaseButton
                            text="Click for Verify Modal"
                            @click="
                                verifyModal(
                                    'Verify Message',
                                    'Verify Title',
                                ).then(
                                    (res) => (verifyRes = res ? 'Yes' : 'No'),
                                )
                            "
                        />
                        <div v-if="verifyRes">You clicked {{ verifyRes }}</div>
                    </div>
                    <div class="mt-3 p-3 bg-slate-300 rounded-lg overflow-auto">
                        &lt;script setup&gt; <br />
                        &emsp;import verifyModal from
                        "@/core/features/verifyModal";<br />
                        <br />
                        &emsp;const verifyThis = () => {<br />
                        &emsp;&emsp;verifyModal('Verify Message', 'Verify
                        Title').then(res => {<br />
                        &emsp;&emsp;&emsp;if(res) {<br />
                        &emsp;&emsp;&emsp;&emsp;alert('Yes Clicked');<br />
                        &emsp;&emsp;&emsp;} else {<br />
                        &emsp;&emsp;&emsp;&emsp;alert('No Clicked');<br />
                        &emsp;&emsp;&emsp;}<br />
                        &emsp;&emsp;})<br />
                        &emsp;}<br />
                        &lt;/script&gt;<br />
                        <br />
                        &lt;template&gt;<br />
                        &emsp;&lt;Button<br />
                        &emsp;&emsp;title="Click for Verify Modal"<br />
                        &emsp;&emsp;@click="verifyThis"<br />
                        &emsp;&gt;<br />
                        &lt;/template&gt;<br />
                    </div>
                </Collapse>
            </Card>

            <Card title="Verify Modal Example">
                <template #append-title>
                    <ExpandBadge
                        :expanded="showOkModal"
                        @click="showOkModal = !showOkModal"
                    />
                </template>
                <Collapse :show="showOkModal">
                    <div class="flex flex-col gap-2 items-center">
                        <BaseButton
                            text="Click for OK Modal"
                            @click="okModal('OK Message')"
                        />
                    </div>
                    <div class="mt-3 p-3 bg-slate-300 rounded-lg overflow-auto">
                        &lt;script setup&gt; <br />
                        &emsp;import okModal from "@/core/features/okModal";<br />
                        <br />
                        &emsp;const showOk = () => {<br />
                        &emsp;&emsp;okModal('Ok Message', 'Verify Title')<br />
                        &emsp;}<br />
                        &lt;/script&gt;<br />
                        <br />
                        &lt;template&gt;<br />
                        &emsp;&lt;Button<br />
                        &emsp;&emsp;title="Click for OK Modal"<br />
                        &emsp;&emsp;@click="showOk"<br />
                        &emsp;&gt;<br />
                        &lt;/template&gt;<br />
                    </div>
                </Collapse>
            </Card>
        </div>
    </div>
</template>
