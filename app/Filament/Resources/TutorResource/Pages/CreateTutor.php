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
        $user = User::create([
            'name' => $data['user']['name'],
            'email' => $data['user']['email'],
            // 'password' => bcrypt($data['user']['password']),
            'password' => bcrypt('password'), // Placeholder password
            'role' => 'tutor', // Placeholder role for tutors
        ]);
    
        // Assign the user ID to the tutor's user_id field
        $data['user_id'] = $user->id;
    
        // Remove the nested 'user' key from $data to prevent errors
        unset($data['user']);
    
        return $data;
    }

}
