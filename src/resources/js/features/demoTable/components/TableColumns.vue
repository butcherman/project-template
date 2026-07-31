<template>
    <div class="flex flex-col gap-2">
        <p>
            Build table columns by using the built in Column Builder functions.
            Available column types:
        </p>
        <ul class="list-disc list-inside">
            <li>Text Column</li>
            <li>Boolean Column</li>
        </ul>
        <p>Each Column Builder takes two properties with an optional third.</p>
        <p>
            <code class="block w-full">
                textColumn(dataField, columnLabel, {options})
            </code>
        </p>
    </div>
</template>
