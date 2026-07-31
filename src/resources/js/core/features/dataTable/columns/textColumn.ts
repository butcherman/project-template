import type { DeepKeys, RowData } from "@tanstack/table-core";
import { DataTableColumn } from "../types/types";

export function textColumn<TRow extends RowData, TValue = string>(
    field: DeepKeys<TRow>,
    label: string,
    options: Partial<DataTableColumn<TRow, TValue>> = {},
): DataTableColumn<TRow, TValue> {
    return {
        field,
        label,
        filterable: true,
        filterPlaceholder: `Filter ${label}`,
        filterSelect: false,
        sort: true,
        align: "start",
        ...options,
    };
}
