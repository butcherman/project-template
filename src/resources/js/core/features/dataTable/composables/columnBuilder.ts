import { booleanColumn } from "../columns/booleanColumn";
import { dateColumn } from "../columns/dateColumn";
import { textColumn } from "../columns/textColumn";
import type { DeepKeys, RowData } from "@tanstack/table-core";

export function useColumnBuilder<TRow extends RowData>() {
    return {
        text: <TField extends DeepKeys<TRow>>(
            field: TField,
            label: string,
            options = {},
        ) => textColumn<TRow, TField>(field, label, options),

        boolean: <TField extends DeepKeys<TRow>>(
            field: TField,
            label: string,
            options = {},
        ) => booleanColumn<TRow>(field, label, options),

        date: <TField extends DeepKeys<TRow>>(
            field: TField,
            label: string,
            options = {},
        ) => dateColumn<TRow, TField>(field, label, options),
    };
}
