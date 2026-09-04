import { readonly, ref } from "vue";

export const useUploadHelper = (props: InputFileProps, emit: any) => {
    /*
    |---------------------------------------------------------------------------
    | File Queue
    |---------------------------------------------------------------------------
    */
    const fileQueue = ref<InputQueuedFile[]>([]);

    /**
     * Cycle through list of files and add to queue
     */
    const processFileList = (fileList: FileList) => {
        for (let i = 0; i < fileList.length; i++) {
            let file = fileList[i];
            if (file) {
                addFileToQueue(file);
            }
        }
    };

    /**
     * Add file to the file queue
     */
    const addFileToQueue = (file: File) => {
        fileQueue.value.push({
            file,
            status: "pending",
            progress: 0,
        });
    };

    /*
    |---------------------------------------------------------------------------
    | Drag Events
    |---------------------------------------------------------------------------
    */
    const dragging = ref(false);

    /**
     * Drag has entered the dropzone
     */
    const onDragEnter = (): void => {
        dragging.value = true;
    };

    /**
     * Drag has left the dropzone
     */
    const onDragLeave = (): void => {
        dragging.value = false;
    };

    /*
    |---------------------------------------------------------------------------
    | Manual File Selection
    |---------------------------------------------------------------------------
    */

    const onRemoveFile = (file: File): void => {
        let fileIndex = fileQueue.value.findIndex((f) => f.file === file);

        if (fileIndex >= 0) {
            fileQueue.value.splice(fileIndex, 1);
        }
    };

    return {
        dragging: readonly(dragging),
        fileQueue: fileQueue,

        onDragEnter,
        onDragLeave,
        onRemoveFile,
        processFileList,
    };
};
