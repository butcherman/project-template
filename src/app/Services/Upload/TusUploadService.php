<?php

namespace App\Services\Upload;

use ArthurPatriot\Tus\Exceptions\FileNotFoundException;
use ArthurPatriot\Tus\Facades\Tus;
use ArthurPatriot\Tus\Helpers\TusFile;
use Illuminate\Validation\ValidationException;

class TusUploadService
{
    /**
     * Retrieve a completed tus upload.
     */
    public function getCompleted(string $id): TusFile
    {
        try {
            $upload = TusFile::find($id);
        } catch (FileNotFoundException) {
            throw ValidationException::withMessages([
                'upload_id' => 'The uploaded file could not be found.',
            ]);
        }

        // Make sure that the file is complete
        $expectedSize = (int) ($upload->metadata['size'] ?? 0);
        $actualSize = Tus::storage()->size($upload->path);

        if ($expectedSize <= 0 || $actualSize !== $expectedSize) {
            throw ValidationException::withMessages([
                'upload_id' => 'The file upload is not complete.',
            ]);
        }

        return $upload;
    }

    /**
     * Delete a tus upload and its metadata.
     */
    public function delete(TusFile $upload): void
    {
        Tus::storage()->delete($upload->path);
        Tus::storage()->delete(Tus::path($upload->id, 'json'));
    }
}
