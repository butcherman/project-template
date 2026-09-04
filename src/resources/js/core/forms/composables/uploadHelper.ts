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

        if (props.autoUpload) {
            console.log("process queue");
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
    const handleDragEnter = (): void => {
        dragging.value = true;
    };

    /**
     * Drag has left the dropzone
     */
    const handleDragLeave = (): void => {
        dragging.value = false;
    };

    /**
     * File dropped into dropzone
     */
    const handleDrop = (event: DragEvent): void => {
        dragging.value = false;

        const fileList = event.dataTransfer?.files;

        if (!fileList) {
            return;
        }

        processFileList(fileList);
    };

    /*
    |---------------------------------------------------------------------------
    | Manual File Selection
    |---------------------------------------------------------------------------
    */
    const handleFileSelected = (event: Event) => {
        const input = event.target as HTMLInputElement;
        const fileList = input.files;

        if (!fileList) {
            return;
        }

        processFileList(fileList);
    };

    return {
        dragging: readonly(dragging),
        fileQueue: readonly(fileQueue),

        handleDragEnter,
        handleDragLeave,
        handleDrop,
        handleFileSelected,
    };
};
