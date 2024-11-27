<?php

namespace App\Filament\Resources\ReserveResource\Pages;

use App\Filament\Resources\ReserveResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListReserves extends ListRecords
{
    protected static string $resource = ReserveResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
