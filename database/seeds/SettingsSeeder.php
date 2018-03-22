<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SettingsSeeder extends Seeder
{
    /**
     * Run the setting seeds.
     * Create: languages, currencies, locations
     *
     * @return void
     */
    public function run()
    {
        //languages
        DB::table('lang')->insert(array(
            array('id_lang' => 1, 'name' => 'Español','iso' => 'ES'),
            array('id_lang' => 2, 'name' => 'English','iso' => 'EN')
        ));
        //currencies
        DB::table('currency')->insert(array(
            array('id_currency' => 1, 'name' => 'Dollar','sign' => '$', 'iso_code' => 'USD')
        ));
        //countries
        DB::table('currency')->insert(array(
            array('id_country' => 1, 'name' => 'Costa Rica')
        ));
        //states
        DB::table('state')->insert(array(
            array('id_state' => 1, 'name' => 'San José', 'id_country' => 1)
        ));
        //cities
        DB::table('city')->insert(array(
            array('id_city' => 1, 'name' => 'San José', 'id_state' => 1)
        ));
    }
}
