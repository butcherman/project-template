import * as tus from "tus-js-client";
import { onBeforeUnmount, readonly, ref } from "vue";
import type { Ref } from "vue";

export const useTusUpload = () => {
    let upload: tus.Upload[] = [];

    const totalProgress = ref(0);
    const hasError = ref<boolean>(false);

    const startUpload = (
        fileQueue: Ref<InputQueuedFile[]>,
        purpose: string,
    ): void => {
        fileQueue.value.forEach((queuedFile) => {
            queuedFile.status = "uploading";

            let newUpload = new tus.Upload(queuedFile.file, {
                endpoint: "/tus",
                chunkSize: 5_000_000,

                metadata: {
                    name: queuedFile.file.name,
                    type: queuedFile.file.type,
                    purpose,
                },

                onError(uploadError) {
                    queuedFile.error = uploadError.message;
                    queuedFile.status = "error";
                    hasError.value = true;
                },

                onProgress(bytesUploaded, bytesTotal) {
                    queuedFile.progress = Math.round(
                        (bytesUploaded / bytesTotal) * 100,
                    );
                },

                onSuccess() {
                    queuedFile.progress = 100;
                    queuedFile.status = "complete";

                    console.log("success");
                },
            });

            upload.push(newUpload);

            newUpload.start();
        });
    };

    const cancelUpload = (): void => {
        if (upload) {
            upload.forEach((up) => up.abort());
        }

        upload = [];
    };

    const resetStats = (): void => {
        hasError.value = false;
    };

    onBeforeUnmount(() => {
        cancelUpload();
    });

    return {
        totalProgress: readonly(totalProgress),
        hasError: readonly(hasError),
        cancelUpload,
        startUpload,
        resetStats,
    };
};
