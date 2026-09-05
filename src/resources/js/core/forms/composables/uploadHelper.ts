import { readonly, ref } from "vue";

export const useUploadHelper = (props: InputFileProps, emit: any) => {
    /*
    |---------------------------------------------------------------------------
    | File Queue
    |---------------------------------------------------------------------------
    */
    const fileQueue = ref<InputQueuedFile[]>([]);
    const rejectedFiles = ref<InputRejectedFile[]>([]);

    /**
     * Cycle through list of files and add to queue
     */
    const processFileList = (fileList: FileList | File[]): void => {
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
    const addFileToQueue = (file: File): void => {
        let errMessage = validateFile(file);

        if (errMessage) {
            rejectFile(file, errMessage);
            return;
        }

        fileQueue.value.push({
            file,
            status: "pending",
            progress: 0,
        });
    };

    /**
     * Add file to the rejected queue
     */
    const rejectFile = (file: File, error: string): void => {
        rejectedFiles.value.push({
            file,
            error,
        });
    };

    /**
     * Validate a file
     */
    const validateFile = (file: File): string | null => {
        // Verify file does not trigger too many files error
        if (fileQueue.value.length >= (props.maxFiles ?? 1)) {
            return `Too many files.  ${props.maxFiles ?? 1} allowed.`;
        }

        // Verify the file type is allowed
        if (props.acceptedFiles) {
            let mime = file.type;
            if (!props.acceptedFiles.includes(mime)) {
                return "This file type is not allowed.";
            }
        }

        // Verify that the file is not too big
        if (file.size > 10_000_000_000) {
            return "File is too large to upload";
        }

        return null;
    };

    /*
    |---------------------------------------------------------------------------
    | Drag Events
    |---------------------------------------------------------------------------
    */
    const dragging = ref<boolean>(false);

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

    /**
     * Remove a file from the queue
     */
    const onRemoveFile = (file: File): void => {
        // Search primary queue
        let fileIndex = fileQueue.value.findIndex((f) => f.file === file);
        if (fileIndex >= 0) {
            fileQueue.value.splice(fileIndex, 1);
            shuffleQueue();
            return;
        }

        // Search rejected queue
        let rejectedIndex = rejectedFiles.value.findIndex(
            (f) => f.file === file,
        );
        if (rejectedIndex >= 0) {
            rejectedFiles.value.splice(rejectedIndex, 1);
            shuffleQueue();
            return;
        }
    };

    /**
     * See if any of the rejected files can be brought into the main queue
     */
    const shuffleQueue = (): void => {
        if (!rejectedFiles.value.length) {
            return;
        }

        let fileList = rejectedFiles.value.map((f) => f.file);
        rejectedFiles.value = [];
        processFileList(fileList);
    };

    return {
        dragging: readonly(dragging),
        fileQueue,
        rejectedFiles,

        onDragEnter,
        onDragLeave,
        onRemoveFile,
        processFileList,
    };
};
