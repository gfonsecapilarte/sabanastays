<?php

use Illuminate\Database\Seeder;

class ModulesSeeder extends Seeder
{
    /**
     * Run the modules seeds.
     * Crete: module home,
     *
     * @return void
     */
    public function run()
    {
        $id = DB::table('home_module')->insertGetId(array(
            'video_url' => 'https://www.youtube.com/watch?v=TFCBMuI2TRk',
            'id_media_logo' => null
        ));
        //langs
        DB::table('home_module_lang')->insert(array(
            array('id_home_module' => $id, 'id_lang' => 1, 'title' => 'Inicio', 'short_description' => 'Descripción de la página', 'description' => 'Descripción larga'),
            array('id_home_module' => $id, 'id_lang' => 2, 'title' => 'Home', 'short_description' => 'Page description', 'description' => 'Long description'),
        ));
    }
}
