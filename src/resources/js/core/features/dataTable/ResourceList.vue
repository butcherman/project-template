<script setup lang="ts" generic="TRow">
import { computed, ref } from "vue";
import { useDataHelper } from "@/core/composables/dataHelper";
// import Paginate from "../pagination/Paginate.vue";

const emit = defineEmits<{
    rowClicked: [TRow];
}>();

const props = defineProps<{
    list: TRow[];

    // Optional
    allowRowClick?: boolean;
    center?: boolean;
    compact?: boolean;
    hoverRow?: boolean;
    labelField?: keyof TRow;
    // striped?: boolean;
    noBorder?: boolean;
    noGridLines?: boolean;
    noResultsText?: string;
    // paginate?: boolean;

    rowClassFn?: (row: TRow) => IndexedData<TRow> | false;
    rowLinkFn?: (event: MouseEvent, row: TRow) => void;
}>();

const { indexData } = useDataHelper();

// const currentPage = ref(1);
// const perPage = ref(10);

const emptyText = computed(() => props.noResultsText ?? "No Data");
const dataChunk = computed(() => {
    // if (props.paginate) {
    //     console.log("paginate data");
    //     return;
    // }

    return indexData(props.list);
});

/**
 * Determine the label to be displayed for the row
 */
const getRowLabel = (row: TRow): TRow[keyof TRow] | TRow => {
    return props.labelField ? row[props.labelField] : row;
};

/**
 * Handle a row being clicked
 */
const onRowClick = (row: IndexedData<TRow>) => {
    if (props.allowRowClick) {
        emit("rowClicked", row.data);
    }
};
</script>

<template>
    <div class="w-full">
        <ul
            class="border-slate-300 rounded-lg border-collapse w-full"
            :class="{
                border: !noBorder,
            }"
        >
            <li v-if="!list.length" class="text-muted">
                <slot name="empty-text">
                    <h4 class="text-center">
                        {{ emptyText }}
                    </h4>
                </slot>
            </li>
            <li
                v-for="data in dataChunk"
                :key="data.id"
                class="px-1 border-b-slate-300 border-collapse"
                :class="[
                    {
                        'border-b': !noGridLines && !data.isLast,
                        'p-3': !compact,
                        'text-center': center,
                        'hover:bg-slate-200/50': hoverRow,
                        pointer: rowLinkFn,
                    },
                    rowClassFn?.(data.data),
                ]"
                @click="rowLinkFn?.($event, data.data)"
            >
                <div class="flex">
                    <div class="grow">
                        <slot name="list-item" :row="data">
                            {{ getRowLabel(data.data) }}
                        </slot>
                    </div>
                    <div>
                        <slot name="actions" :row="data" />
                    </div>
                </div>
            </li>
        </ul>
        <!-- <div>
            <Paginate
                v-model:per-page="perPage"
                :current-page="currentPage"
                :per-page-array="[10, 25, 50]"
                :total-records="list.length"
            />
        </div> -->
    </div>
</template>
