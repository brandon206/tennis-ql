<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Post;
use App\Models\Topic;
use App\Models\User;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        User::factory(20)->create();

        Topic::create(['name' => 'Featured Sites', 'slug' => 'featured']);
        Topic::create(['name' => 'Useful Links', 'slug' => 'links']);
        Topic::create(['name' => 'Guides & Tutorials', 'slug' => 'tutorials']);

        Post::factory(20)->create();
    }
}
