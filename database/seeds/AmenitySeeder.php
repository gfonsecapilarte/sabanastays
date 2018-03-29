<?php

use Illuminate\Database\Seeder;

class AmenitySeeder extends Seeder
{
    /**
     * Run the Amenities seeds.
     * Create: amenities with icon
     *
     * @return void
     */
    public function run()
    {
        $amenities = array(
            array('en' => 'TV', 'es' => 'TV', 'icon' => 'fp-ht-tv'),
            array('en' => 'In-Suite Laundry', 'es' => 'Lavandería en la suite', 'icon' => 'fp-ht-washingmachine'),
            array('en' => 'High Chair (Upon request)', 'es' => 'Silla alta (Previa solicitud)', 'icon' => 'sa-icon-high-chair'),
            array('en' => 'Extra Beds (Upon request)', 'es' => 'Cama extra (Previa solicitud)', 'icon' => 'fa fa-bed'),
            array('en' => 'Bed Linens And Towels', 'es' => 'Ropa de cama y toallas', 'icon' => 'fp-ht-bed29'),
            array('en' => 'Pet Friendly', 'es' => 'Mascota amigable', 'icon' => 'fa fa-paw'),
            array('en' => 'Internet', 'es' => 'Internet', 'icon' => 'fa fa-wifi'),
            array('en' => 'Hardwood Floor', 'es' => 'Piso de madera', 'icon' => 'sa-icon-firstdraft'),
            array('en' => 'City View', 'es' => 'Vista a la ciudad', 'icon' => 'sa-icon-city'),
            array('en' => 'Air Conditioning', 'es' => 'Aire acondicionado', 'icon' => 'sa-icon-air'),
            array('en' => 'Non Smoking', 'es' => 'Prohibido fumar', 'icon' => 'fp-ht-nosmoking'),
            array('en' => 'Housekeeping', 'es' => 'Gestión interna', 'icon' => 'sa-icon-clean'),
            array('en' => 'Extra Linens (Upon request)', 'es' => 'Ropa extra (Previa solicitud)', 'icon' => 'fp-ht-bed29'),
            array('en' => 'Baby Crib (Upon request)', 'es' => 'Cuna para bebé (Previa solicitud)', 'icon' => 'fa fa-bed'),
        );

        foreach ($amenities as $amenity) {
            $id = DB::table('amenity')->insertGetId(
                array('icon' => $amenity['icon'])
            );
            //langs
            DB::table('amenity_lang')->insert(array(
                array('id_amenity' => $id, 'id_lang' => 1, 'name' => $amenity['es']),
                array('id_amenity' => $id, 'id_lang' => 2, 'name' => $amenity['en'])
            ));
        }
    }
}
