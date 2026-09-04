<?php

namespace App\Listeners\Upload;

use ArthurPatriot\Tus\Events\FileUploadFinished;
use Illuminate\Support\Facades\Log;

class HandleTusUploadFinished
{
    /**
     * Create the event listener.
     */
    public function __construct() {}

    /**
     * Handle the event.
     */
    public function handle(FileUploadFinished $event): void
    {
        Log::debug('File Upload Completed', [
            'event' => $event,
        ]);

        // Handle the file based on the "file purpose"
        $tusFile = $event->tusFile;

        //
    }
}
