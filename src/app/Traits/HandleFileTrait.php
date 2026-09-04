<?php

namespace App\Traits;

use finfo;

trait HandleFileTrait
{
    /*
    |---------------------------------------------------------------------------
    | Sanitize the filename to remove any spaces or illegal characters.
    |---------------------------------------------------------------------------
    */
    public function cleanFilename(string $name): string
    {
        $newName = str_replace(' ', '_', preg_replace("([^\w\s\d\-_~,;\[\]\(\).])", '', $name));

        return $newName;
    }

    /*
    |---------------------------------------------------------------------------
    | Get the actual MIME type of the file
    |---------------------------------------------------------------------------
    */
    public function getMimeType(string $filePath): string
    {
        return (new finfo(FILEINFO_MIME_TYPE))->file($filePath);
    }
}
