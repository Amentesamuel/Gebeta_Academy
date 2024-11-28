<?php

namespace App\Providers;

use App\Http\Middleware\checkRole;
use Illuminate\Support\Facades\Vite;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }
    

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        // app('router')->aliasMiddleware('checkrole', checkRole::class);
        Vite::prefetch(concurrency: 3);

        
    }
}
