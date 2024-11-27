<?php

namespace App\Filament\Resources\ReserveResource\Pages;

use App\Filament\Resources\ReserveResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditReserve extends EditRecord
{
    protected static string $resource = ReserveResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
