<?php

namespace App\Filament\Resources;

use App\Filament\Resources\TutorResource\Pages;
use App\Filament\Resources\TutorResource\RelationManagers;
use App\Models\Tutor;
use App\Models\User;
use Filament\Forms;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\MultiSelect;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class TutorResource extends Resource
{
    protected static ?string $model = Tutor::class;

    protected static ?string $navigationIcon = 'heroicon-o-user';
   

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                //
                TextInput::make('user.name')->required()->label('Name')->default(fn ($record) => $record?->user?->name),
                Select::make('gender')->options([
                    'male' => 'Male',
                    'female' => 'Female',
                ])->label('Gender')->required(),
                TextInput::make('phone')->required()->label('Phone'),
                TextInput::make('user.email')->required()->label('Email'),
                TextInput::make('address')->required()->label('Address'),
                Select::make('education')->options([
                    'Bachelor' => 'Bachelor',
                    'Master' => 'Master',
                    'PhD' => 'PhD',
                ])->required()->label('Education'),
                TextInput::make('subject')->required()->label('Subject'),
                FileUpload::make('image')->required()->directory('Tutors')->disk('public')->label('Image'),
                Select::make('available_days')->options([
                    'Monday' => 'Monday',
                    'Tuesday' => 'Tuesday',
                    'Wednesday' => 'Wednesday',
                    'Thursday' => 'Thursday',
                    'Friday' => 'Friday',
                ])->multiple()->reactive()->label('Available Days'),
                TextInput::make('experience')->required()->label('Experience'),
                TextInput::make('slug')->required()->label('Slug'),
                RichEditor::make('description')->required()->label('Description'),
                Toggle::make('status')->required()->label('Status'),

            ]);
    }
    protected function mutateFormDataBeforeCreate(array $data): array
    {
        if (empty($data['user_id'])) {
            $data['user_id'] = User::where('email', 'default@domain.com')->first()->id ?? null; // Assign default user
        }
    
        return $data;
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                //
                ImageColumn::make('image'),
                TextColumn::make('user.name'),
                
                TextColumn::make('phone'),
                TextColumn::make('user.email'),
                TextColumn::make('address'),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListTutors::route('/'),
            'create' => Pages\CreateTutor::route('/create'),
            'edit' => Pages\EditTutor::route('/{record}/edit'),
        ];
    }
}
