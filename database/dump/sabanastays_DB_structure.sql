# ************************************************************
# Sequel Pro SQL dump
# Versi�n 4096
#
# http://www.sequelpro.com/
# http://code.google.com/p/sequel-pro/
#
# Host: 127.0.0.1 (MySQL 5.7.21-0ubuntu0.16.04.1)
# Base de datos: sabanastays_DB_022018
# Tiempo de Generaci�n: 2018-03-01 16:39:21 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Volcado de tabla language
# ------------------------------------------------------------

DROP TABLE IF EXISTS `lang`;

CREATE TABLE `lang` (
  `id_lang` int(11) NOT NULL AUTO_INCREMENT,
  `iso` varchar(4) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id_lang`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Volcado de tabla currency
# ------------------------------------------------------------

DROP TABLE IF EXISTS `currency`;

CREATE TABLE `currency` (
  `id_currency` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `sign` varchar(1) DEFAULT NULL,
  `iso_code` varchar(4) DEFAULT NULL,
  PRIMARY KEY (`id_currency`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Volcado de tabla about_module
# ------------------------------------------------------------

DROP TABLE IF EXISTS `about_module`;

CREATE TABLE `about_module` (
  `id_about_module` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id_about_module`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

DROP TABLE IF EXISTS `about_module_lang`;

CREATE TABLE `about_module_lang` (
  `id_about_module` int(11) unsigned NOT NULL,
  `id_lang` int(11) unsigned NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `id_media` int(11) NULL,
  PRIMARY KEY (`id_about_module`, `id_lang`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


# Volcado de tabla amenities
# ------------------------------------------------------------

DROP TABLE IF EXISTS `amenity`;

CREATE TABLE `amenity` (
  `id_amenity` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `icon` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_amenity`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

DROP TABLE IF EXISTS `amenity_lang`;

CREATE TABLE `amenity_lang` (
  `id_amenity` int(11) unsigned NOT NULL,
  `id_lang` int(11) unsigned NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_amenity`, `id_lang`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


# Volcado de tabla apartmentType
# ------------------------------------------------------------

DROP TABLE IF EXISTS `apartment_type`;

CREATE TABLE `apartment_type` (
  `id_apartment_type` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id_apartment_type`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

DROP TABLE IF EXISTS `apartment_type_lang`;

CREATE TABLE `apartment_type_lang` (
  `id_apartment_type` int(11) unsigned NOT NULL,
  `id_lang` int(11) unsigned NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_apartment_type`, `id_lang`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Volcado de tabla countries
# ------------------------------------------------------------

DROP TABLE IF EXISTS `country`;

CREATE TABLE `country` (
  `id_country` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id_country`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


# Volcado de tabla states
# ------------------------------------------------------------

DROP TABLE IF EXISTS `state`;

CREATE TABLE `state` (
  `id_state` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `id_country` int(11) unsigned NOT NULL,
  PRIMARY KEY (`id_state`),
  KEY `fk_state_country1_idx` (`id_country`),
  CONSTRAINT `country` FOREIGN KEY (`id_country`) REFERENCES `country` (`id_country`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Volcado de tabla cities
# ------------------------------------------------------------

DROP TABLE IF EXISTS `city`;

CREATE TABLE `city` (
  `id_city` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `id_state` int(11) unsigned NOT NULL,
  PRIMARY KEY (`id_city`),
  KEY `fk_city_state1_idx` (`id_state`),
  CONSTRAINT `fk_city_state1_idx` FOREIGN KEY (`id_state`) REFERENCES `state` (`id_state`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


# Volcado de tabla buildings
# ------------------------------------------------------------

DROP TABLE IF EXISTS `building`;

CREATE TABLE `building` (
  `id_building` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `address` varchar(100) DEFAULT NULL,
  `postal_code` varchar(20) DEFAULT NULL,
  `lat` varchar(255) DEFAULT NULL,
  `lng` varchar(255) DEFAULT NULL,
  `id_city` int(11) unsigned NOT NULL,
  PRIMARY KEY (`id_building`),
  KEY `fk_building_cities1_idx` (`id_city`),
  CONSTRAINT `fk_building_cities1` FOREIGN KEY (`id_city`) REFERENCES `city` (`id_city`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

DROP TABLE IF EXISTS `building_lang`;

CREATE TABLE `building_lang` (
  `id_building` int(11) unsigned NOT NULL,
  `id_lang` int(11) unsigned NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `description` text DEFAULT NULL,
  PRIMARY KEY (`id_building`, `id_lang`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


# Volcado de tabla apartments
# ------------------------------------------------------------

DROP TABLE IF EXISTS `apartment`;

CREATE TABLE `apartment` (
  `id_apartment` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `id_building` int(11) unsigned NOT NULL,
  `id_apartment_type` int(11) NOT NULL,
  `id_currency` int(11) NOT NULL,
  `floor` int(11) NOT NULL,
  `number` varchar(45) NOT NULL,
  `price` float NOT NULL,
  PRIMARY KEY (`id_apartment`),
  KEY `fk_apartments_buildings1_idx` (`id_building`),
  KEY `fk_apartments_apartmentType1_idx` (`id_apartment_type`),
  CONSTRAINT `fk_apartments_apartmentType1` FOREIGN KEY (`id_apartment_type`) REFERENCES `apartment_type` (`id_apartment_type`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_apartments_buildings1` FOREIGN KEY (`id_building`) REFERENCES `building` (`id_building`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

DROP TABLE IF EXISTS `apartment_lang`;

CREATE TABLE `apartment_lang` (
  `id_apartment` int(11) unsigned NOT NULL,
  `id_lang` int(11) unsigned NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `short_description` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  PRIMARY KEY (`id_apartment`, `id_lang`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Volcado de tabla apartmentAmenities
# ------------------------------------------------------------

DROP TABLE IF EXISTS `apartment_amenity`;

CREATE TABLE `apartment_amenity` (
  `id_apartment_amenity` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `id_apartment` int(11) unsigned NOT NULL,
  `id_amenity` int(11) unsigned NOT NULL,
  PRIMARY KEY (`id_apartment_amenity`),
  KEY `fk_apartmentAmenities_apartments1_idx` (`id_apartment`),
  KEY `fk_apartmentAmenities_amenities1_idx` (`id_amenity`),
  CONSTRAINT `fk_apartmentAmenities_amenities1` FOREIGN KEY (`id_amenity`) REFERENCES `amenity` (`id_amenity`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_apartmentAmenities_apartments1` FOREIGN KEY (`id_apartment`) REFERENCES `apartment` (`id_apartment`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Volcado de tabla users
# ------------------------------------------------------------

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id_user` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `email` varchar(100) DEFAULT NULL,
  `password` varchar(60) DEFAULT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `firstname` varchar(50) DEFAULT NULL,
  `lastname` varchar(50) DEFAULT NULL,
  `phone` varchar(45) DEFAULT NULL,
  `gender` enum('MALE','FEMALE') DEFAULT NULL,
  `birthdate` date DEFAULT NULL,
  `since` timestamp DEFAULT CURRENT_TIMESTAMP,
  `remember_token` varchar(100) DEFAULT NULL,
  `remember_token_time` timestamp NULL DEFAULT NULL,
  `social_id` varchar(100) DEFAULT NULL,
  `last_login` timestamp NULL DEFAULT NULL,
  `active` enum('YES','NO') DEFAULT NULL,
  `role` enum('USER','ADMIN') DEFAULT NULL,
  `api_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp not null default current_timestamp,
  `updated_at` timestamp not null,
  PRIMARY KEY (`id_user`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Volcado de tabla address
# ------------------------------------------------------------

DROP TABLE IF EXISTS `address`;

CREATE TABLE `address` (
  `id_address` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `postcode` varchar(45) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `second_address` varchar(255) DEFAULT NULL,
  `id_country` int(11) NOT NULL,
  `id_state` int(11) NOT NULL,
  `id_city` int(11) NOT NULL,
  PRIMARY KEY (`id_address`),
  KEY `fk_address_country1_idx` (`id_country`),
  KEY `fk_address_state1_idx` (`id_state`),
  KEY `fk_address_city1_idx` (`id_city`),
  CONSTRAINT `fk_address_country1_idx` FOREIGN KEY (`id_country`) REFERENCES `country` (`id_country`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_address_state1_idx` FOREIGN KEY (`id_state`) REFERENCES `state` (`id_state`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_address_city1_idx` FOREIGN KEY (`id_city`) REFERENCES `city` (`id_city`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

DROP TABLE IF EXISTS `user_address`;

CREATE TABLE `user_address` (
  `id_user` int(11) unsigned NOT NULL,
  `id_address` int(11) unsigned NOT NULL,
  PRIMARY KEY (`id_user`, `id_address`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Volcado de tabla bookings
# ------------------------------------------------------------

DROP TABLE IF EXISTS `booking`;

CREATE TABLE `booking` (
  `id_booking` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `id_user` int(11) unsigned NOT NULL,
  `reference` varchar(45) NOT NULL,
  `booking_date` timestamp DEFAULT CURRENT_TIMESTAMP,
  `booking_date_start` date DEFAULT NULL,
  `booking_date_end` date DEFAULT NULL,
  `total_payment` varchar(45) DEFAULT NULL,
  `special_requests` varchar(255) DEFAULT NULL,
  `id_apartment` int(11) unsigned NOT NULL,
  `id_address` int(11) unsigned NULL,
  `id_rate` int(11) DEFAULT NULL,
  `variant` double DEFAULT NULL,
  `variant_value` float DEFAULT NULL,
  `nights` int(11) NOT NULL,
  `value` float NOT NULL,
  `attempt` int(11) NOT NULL,
  `status` enum('RESERVED','PAID','CANCELLED','UNAVAILABLE', 'INCOMPLETED') DEFAULT NULL,
  `created_at` timestamp DEFAULT NULL,
  `updated_at` timestamp DEFAULT NULL,
  PRIMARY KEY (`id_booking`),
  KEY `fk_bookings_users1_idx` (`id_user`),
  KEY `fk_bookings_apartments1_idx` (`id_apartment`),
  CONSTRAINT `fk_bookings_apartments1` FOREIGN KEY (`id_apartment`) REFERENCES `apartment` (`id_apartment`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_bookings_users1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id_user`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Volcado de tabla contactModule
# ------------------------------------------------------------

DROP TABLE IF EXISTS `contact_module`;

CREATE TABLE `contact_module` (
  `id_contact_module` int(11) NOT NULL AUTO_INCREMENT,
  `lat` varchar(255) DEFAULT NULL,
  `lng` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_contact_module`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

DROP TABLE IF EXISTS `contact_module_lang`;

CREATE TABLE `contact_module_lang` (
  `id_contact_module` int(11) unsigned NOT NULL,
  `id_lang` int(11) unsigned NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_contact_module`, `id_lang`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Volcado de tabla features
# ------------------------------------------------------------

DROP TABLE IF EXISTS `feature`;

CREATE TABLE `feature` (
  `id_feature` int(11) unsigned NOT NULL,
  `guests` int(11) DEFAULT NULL,
  `bedrooms` int(11) DEFAULT NULL,
  `queen_beds` int(11) DEFAULT NULL,
  `baths` int(11) DEFAULT NULL,
  `king_beds` int(11) DEFAULT NULL,
  `full_beds` int(11) DEFAULT NULL,
  `twin_beds` int(11) DEFAULT NULL,
  `id_apartment` int(11) unsigned NOT NULL,
  PRIMARY KEY (`id_feature`),
  KEY `fk_features_apartments1_idx` (`id_apartment`),
  CONSTRAINT `fk_features_apartments1` FOREIGN KEY (`id_apartment`) REFERENCES `apartment` (`id_apartment`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Volcado de tabla homeModule
# ------------------------------------------------------------

DROP TABLE IF EXISTS `home_module`;

CREATE TABLE `home_module` (
  `id_home_module` int(11) NOT NULL AUTO_INCREMENT,
  `id_media` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_home_module`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

DROP TABLE IF EXISTS `home_module_lang`;

CREATE TABLE `home_module_lang` (
  `id_home_module` int(11) unsigned NOT NULL,
  `id_lang` int(11) unsigned NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  PRIMARY KEY (`id_home_module`, `id_lang`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Volcado de tabla headerModule
# ------------------------------------------------------------

DROP TABLE IF EXISTS `header_module`;

CREATE TABLE `header_module` (
  `id_header_module` int(11) NOT NULL AUTO_INCREMENT,
  `id_media_logo` int(11) DEFAULT NULL,
  `id_media_background` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_header_module`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Volcado de tabla homeAboutModule
# ------------------------------------------------------------

DROP TABLE IF EXISTS `home_about_module`;

CREATE TABLE `home_about_module` (
  `id_home_about_module` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id_home_about_module`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

DROP TABLE IF EXISTS `home_about_module_lang`;

CREATE TABLE `home_about_module_lang` (
  `id_home_about_module` int(11) unsigned NOT NULL,
  `id_lang` int(11) unsigned NOT NULL,
  `title` varchar(45) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `video_url` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id_home_about_module`, `id_lang`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


# Volcado de tabla testimonialModule
# ------------------------------------------------------------

DROP TABLE IF EXISTS `testimonial_module`;

CREATE TABLE `testimonial_module` (
  `id_testimonial_module` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `company` varchar(255) DEFAULT NULL,
  `id_media` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_testimonial_module`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

DROP TABLE IF EXISTS `testimonial_module_lang`;

CREATE TABLE `testimonial_module_lang` (
  `id_testimonial_module` int(11) unsigned NOT NULL,
  `id_lang` int(11) unsigned NOT NULL,
  `text` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_testimonial_module`, `id_lang`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Volcado de tabla footerModule
# ------------------------------------------------------------

DROP TABLE IF EXISTS `footer_module`;

CREATE TABLE `footer_module` (
  `id_footer_module` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id_footer_module`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

DROP TABLE IF EXISTS `footer_module_lang`;

CREATE TABLE `footer_module_lang` (
  `id_footer_module` int(11) unsigned NOT NULL,
  `id_lang` int(11) unsigned NOT NULL,
  `title` varchar(45) DEFAULT NULL,
  `short_description` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  PRIMARY KEY (`id_footer_module`, `id_lang`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


# Volcado de tabla media
# ------------------------------------------------------------

DROP TABLE IF EXISTS `media`;

CREATE TABLE `media` (
  `id_media` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `path` varchar(255) NOT NULL,
  `media_type` enum('AUDIO','IMAGE','VIDEO') NOT NULL,
  `id_type` int(11) NOT NULL,
  `type` varchar(45) NOT NULL,
  PRIMARY KEY (`id_media`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

DROP TABLE IF EXISTS `media_lang`;

CREATE TABLE `media_lang` (
  `id_media` int(11) unsigned NOT NULL,
  `id_lang` int(11) unsigned NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_media`, `id_lang`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


# Volcado de tabla newsletter
# ------------------------------------------------------------

DROP TABLE IF EXISTS `newsletter`;

CREATE TABLE `newsletter` (
  `id_newsletter` int(11) NOT NULL,
  `email` varchar(45) DEFAULT NULL,
  `active` tinyint(1) default 1,
  PRIMARY KEY (`id_newsletter`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Volcado de tabla payments
# ------------------------------------------------------------

DROP TABLE IF EXISTS `payment`;

CREATE TABLE `payment` (
  `id_payment` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `id_booking` int(11) unsigned NOT NULL,
  `id_user` int(11) unsigned NOT NULL,
  `amount` varchar(45) DEFAULT NULL,
  `id_currency` int(11) DEFAULT NULL,
  `id_address` int(11) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `status` varchar(45) DEFAULT NULL,
  `transaction_id` varchar(255) DEFAULT NULL,
  `payment_date` timestamp DEFAULT CURRENT_TIMESTAMP,
  `payment_type` enum('ONETIME','RECURRENT') DEFAULT NULL,
  `payment_method` enum('CREDIT CARD','CHECK','WIRE TRANSFER','CASH') DEFAULT NULL,
  `created_at` timestamp not null default CURRENT_TIMESTAMP,
  `updated_at` timestamp default null,
  PRIMARY KEY (`id_payment`),
  KEY `fk_payments_users1_idx` (`id_user`),
  CONSTRAINT `fk_payments_users1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id_user`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Volcado de tabla rates
# ------------------------------------------------------------

DROP TABLE IF EXISTS `rate`;

CREATE TABLE `rate` (
  `id_rate` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `variant` double DEFAULT NULL,
  `id_apartment` int(11) unsigned NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `default` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`id_rate`),
  KEY `fk_rates_apartments1_idx` (`id_apartment`),
  CONSTRAINT `fk_rates_apartments1` FOREIGN KEY (`id_apartment`) REFERENCES `apartment` (`id_apartment`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
