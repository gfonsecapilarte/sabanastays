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
        //Header
        self::insertHeaderModule();
        //Home
        self::insertHomeModule();
        //Home About
        self::insertHomeAboutModule();
        //About
        self::insertAboutModule();
        //contact
        self::insertContactModule();
        //contact
        self::insertTestimonialModule();
    }

    private static function insertHeaderModule()
    {
        DB::table('header_module')->insert(array(
            'id_media_logo' => null,
            'id_media_background' => null
        ));
    }

    private static function insertHomeModule()
    {
        $id = DB::table('home_module')->insertGetId(array());
        //langs
        DB::table('home_module_lang')->insert(array(
            array('id_home_module' => $id, 'id_lang' => 1, 'title' => 'Inicio', 'description' => 'Descripción de la página'),
            array('id_home_module' => $id, 'id_lang' => 2, 'title' => 'Home', 'description' => 'Page description'),
        ));
    }

    private static function insertHomeAboutModule()
    {
        $id = DB::table('home_about_module')->insertGetId(array());
        //langs
        $description = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.';
        DB::table('home_about_module_lang')->insert(array(
            array('id_home_about_module' => $id, 'id_lang' => 1, 'title' => 'Nosotros', 'description' => $description, 'video_url' => 'https://www.youtube.com/watch?v=M1GIEZHSJco'),
            array('id_home_about_module' => $id, 'id_lang' => 2, 'title' => 'About Us', 'description' => $description, 'video_url' => 'https://www.youtube.com/watch?v=M1GIEZHSJco'),
        ));
    }

    private static function insertAboutModule()
    {
        $id = DB::table('about_module')->insertGetId(array());
        //langs
        $description = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.';
        DB::table('about_module_lang')->insert(array(
            array('id_about_module' => $id, 'id_lang' => 1, 'title' => 'Nosotros', 'description' => $description, 'id_media' => null),
            array('id_about_module' => $id, 'id_lang' => 2, 'title' => 'About Us', 'description' => $description, 'id_media' => null),
        ));
    }

    private static function insertContactModule()
    {
        $id = DB::table('contact_module')->insertGetId(array('lat' => '9.9344347', 'lng' => '-84.1055177'));
        //langs
        $description = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.';
        DB::table('contact_module_lang')->insert(array(
            array(
                'id_contact_module' => $id,
                'id_lang' => 1,
                'title' => 'Nuestras Oficinas',
                'description' => $description,
                'address' => 'Level 13, 2 Elizabeth St, San Jose, Costa Rica',
                'phone' => '+1 (800) 555-5555',
                'email' => 'reservations@sabanastays.com'
            ),
            array(
                'id_contact_module' => $id,
                'id_lang' => 2,
                'title' => 'Our Offices',
                'description' => $description,
                'address' => 'Level 13, 2 Elizabeth St, San Jose, Costa Rica',
                'phone' => '+1 (800) 555-5555',
                'email' => 'reservations@sabanastays.com'
            ),
        ));
    }

    private static function insertTestimonialModule()
    {
        for ($i = 0; $i < 3; $i++) {
            $id = DB::table('testimonial_module')->insertGetId(array(
                'name' => 'John DOE',
                'company' => 'My Company',
                'id_media' => null
            ));
            //langs
            $description = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.';
            DB::table('testimonial_module_lang')->insert(array(
                array('id_testimonial_module' => $id, 'id_lang' => 1, 'text' => $description),
                array('id_testimonial_module' => $id, 'id_lang' => 2, 'text' => $description),
            ));
        }
    }
}
