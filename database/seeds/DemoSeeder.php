<?php

use Illuminate\Database\Seeder;

class DemoSeeder extends Seeder
{
    /**
     * Run the demo seeds.
     * Call another seeders
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            SettingsSeeder::class,
            DataSeeder::class,
            ModulesSeeder::class
        ]);
    }
}
