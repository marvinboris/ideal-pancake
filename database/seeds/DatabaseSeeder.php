<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(LanguageSeeder::class);
        $this->call(RoleSeeder::class);
        $this->call(ProductSeeder::class);
        $this->call(MemberSeeder::class);
        $this->call(FeatureSeeder::class);
        $this->call(AdminSeeder::class);
        $this->call(UserSeeder::class);
    }
}
