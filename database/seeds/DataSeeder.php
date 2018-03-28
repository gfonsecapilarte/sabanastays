<?php

use Illuminate\Database\Seeder;

use App\User as UserModel;
use App\Models\Building as BuildingModel;

class DataSeeder extends Seeder
{
    /**
     * Run the demo data seeds.
     * Create: users, building, apartment_type, apartment, amenities, booking
     *
     * @return void
     */
    public function run()
    {
        //user
        $id_user = self::createUser();
        //building
        $id_building = self::createBuilding();
        //amenities
        $amenities = self::createAmenities();
        //apartment type
        $apartment_types = self::createApartmentType();
        //apartments
        $apartments = self::createApartments($id_building, $apartment_types, $amenities);
        //booking
        self::createBooking($id_user, $apartments);
    }

    private static function createBooking($id_user, $apartments)
    {
        $in = 1;
        $out = 5;
        foreach ($apartments as $id_apartment) {
            $checkin = str_pad($in, 2, '0', STR_PAD_LEFT);
            $checkout = str_pad($out, 2, '0', STR_PAD_LEFT);
            DB::table('booking')->insert(array(
                'id_user' => $id_user,
                'booking_date' => date('Y-m-d H:i:s'),
                'booking_date_start' => date('Y-m-').$checkin,
                'booking_date_end' => date('Y-m-').$checkout,
                'total_payment' => 150,
                'id_apartment' => $id_apartment,
                'status' => 'RESERVED'
            ));
            $in = $out+1;
            $out += 5;
        }
    }

    private static function createApartments($id_building, $apartment_types, $amenities)
    {
        $ids = array();
        $apartments = array(
            array('floor' => 1, 'number' => 101, 'price' => 30),
            array('floor' => 4, 'number' => 404, 'price' => 58),
            array('floor' => 9, 'number' => 902, 'price' => 300),
        );

        foreach ($apartments as $i => $apartment) {
            $id = DB::table('apartment')->insertGetId(array(
                'id_building' => $id_building,
                'id_apartment_type' => $apartment_types[$i],
                'id_currency' => 1,
                'floor' => $apartment['floor'],
                'number' => $apartment['number'],
                'price' => $apartment['price']
            ));
            //langs
            DB::table('apartment_lang')->insert(array(
                array('id_apartment' => $id, 'id_lang' => 1, 'name' => 'Apartamento #'.$id, 'short_description' => 'Descripción del apartamento #'.$id, 'description' => 'Descripción larga'),
                array('id_apartment' => $id, 'id_lang' => 2, 'name' => 'Apartament #'.$id, 'short_description' => 'Description del apartament #'.$id, 'description' => 'Long description')
            ));
            //amenities
            foreach ($amenities as $id_amenity) {
                DB::table('apartment_amenity')->insert(array(
                    'id_apartment' => $id, 'id_amenity' => $id_amenity
                ));
            }

            $ids[] = $id;
        }

        return $ids;
    }

    private static function createApartmentType()
    {
        $ids = array();
        $apartment_types = array(
            array('Suite', 'Suite'),
            array('Apartamento', 'Apartment'),
            array('Casa', 'House'),
        );

        foreach ($apartment_types as $apartment_type) {
            $id = DB::table('apartment_type')->insertGetId(
                array('id_apartment_type' => null)
            );
            //langs
            DB::table('apartment_type_lang')->insert(array(
                array('id_apartment_type' => $id, 'id_lang' => 1, 'name' => $apartment_type[0]),
                array('id_apartment_type' => $id, 'id_lang' => 2, 'name' => $apartment_type[1])
            ));
            $ids[] = $id;
        }

        return $ids;
    }

    private static function createAmenities()
    {
        $ids = array();
        $amenities = array(
            array('Terraza', 'Terrace'),
            array('Piscina', 'Pool'),
        );

        foreach ($amenities as $amenity) {
            $id = DB::table('amenity')->insertGetId(
                array('id_amenity' => null)
            );
            //langs
            DB::table('amenity_lang')->insert(array(
                array('id_amenity' => $id, 'id_lang' => 1, 'name' => $amenity[0]),
                array('id_amenity' => $id, 'id_lang' => 2, 'name' => $amenity[1])
            ));
            $ids[] = $id;
        }

        return $ids;
    }

    private static function createBuilding()
    {
        $building = new BuildingModel();
        $building->address = 'Building Address 123';
        $building->id_city = 1;
        $building->save();
        return $building->id_building;
    }

    private static function createUser()
    {
        $user = new UserModel();
        $user->firstname = 'John';
        $user->lastname = 'Doe';
        $user->gender = 'MALE';
        $user->birthdate = '1999-03-06';
        $user->role = 'USER';
        $user->email = 'pub@sabanastays.com';
        $user->password = bcrypt('123456789');
        $user->save();
        return $user->id_user;
    }
}
