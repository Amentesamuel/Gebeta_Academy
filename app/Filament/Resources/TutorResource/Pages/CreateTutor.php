<?php

namespace App\Filament\Resources\TutorResource\Pages;

use App\Filament\Resources\TutorResource;
use App\Models\User;
use Filament\Actions;
use Filament\Resources\Pages\CreateRecord;

class CreateTutor extends CreateRecord
{
    protected static string $resource = TutorResource::class;
  

    protected function mutateFormDataBeforeCreate(array $data): array
    {
        if (empty($data['user_id'])) {
            $data['user_id'] = User::where('email', 'default@domain.com')->first()->id ?? null; // Assign default user
        }
    
        return $data;
    }

}
