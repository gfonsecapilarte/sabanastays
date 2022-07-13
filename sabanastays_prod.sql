-- MySQL dump 10.13  Distrib 5.7.22, for Linux (x86_64)
--
-- Host: localhost    Database: sabanastays_test
-- ------------------------------------------------------
-- Server version	5.7.22-0ubuntu0.16.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `about_module`
--

DROP TABLE IF EXISTS `about_module`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `about_module` (
  `id_about_module` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id_about_module`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `about_module`
--

LOCK TABLES `about_module` WRITE;
/*!40000 ALTER TABLE `about_module` DISABLE KEYS */;
INSERT INTO `about_module` VALUES (1);
/*!40000 ALTER TABLE `about_module` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `about_module_lang`
--

DROP TABLE IF EXISTS `about_module_lang`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `about_module_lang` (
  `id_about_module` int(11) unsigned NOT NULL,
  `id_lang` int(11) unsigned NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `description` text,
  `id_media` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_about_module`,`id_lang`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `about_module_lang`
--

LOCK TABLES `about_module_lang` WRITE;
/*!40000 ALTER TABLE `about_module_lang` DISABLE KEYS */;
INSERT INTO `about_module_lang` VALUES (1,1,'Nosotros','Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.',28),(1,2,'About Us','Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.',29);
/*!40000 ALTER TABLE `about_module_lang` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `address`
--

DROP TABLE IF EXISTS `address`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `address` (
  `id_address` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `postcode` varchar(45) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `second_address` varchar(255) DEFAULT NULL,
  `id_country` int(11) unsigned NOT NULL,
  `id_state` int(11) unsigned NOT NULL,
  `id_city` int(11) unsigned NOT NULL,
  PRIMARY KEY (`id_address`),
  KEY `fk_address_country1_idx` (`id_country`),
  KEY `fk_address_state1_idx` (`id_state`),
  KEY `fk_address_city1_idx` (`id_city`),
  CONSTRAINT `fk_address_city1_idx` FOREIGN KEY (`id_city`) REFERENCES `city` (`id_city`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_address_country1_idx` FOREIGN KEY (`id_country`) REFERENCES `country` (`id_country`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_address_state1_idx` FOREIGN KEY (`id_state`) REFERENCES `state` (`id_state`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `address`
--

LOCK TABLES `address` WRITE;
/*!40000 ALTER TABLE `address` DISABLE KEYS */;
INSERT INTO `address` VALUES (1,'dede','77878',NULL,1,1,1),(2,'dede','77878',NULL,1,1,1),(3,'dede','77878',NULL,1,1,1),(4,'dede','77878',NULL,1,1,1),(5,'dede','77878',NULL,1,1,1),(6,'dede','77878',NULL,1,1,1),(7,'dede','77878',NULL,1,1,1),(8,'de','7e',NULL,1,1,1),(9,'de','77878',NULL,1,1,1),(10,'dede','77878',NULL,1,1,1),(11,'dede','77878',NULL,1,1,1),(12,'dede','77878',NULL,1,1,1),(13,'de','de',NULL,1,1,1),(14,'dede','77878',NULL,1,1,1),(15,'fr','fr',NULL,1,1,1),(16,'de','de',NULL,1,1,1),(17,'dede','77878',NULL,1,1,1),(18,'de','de',NULL,1,1,1),(19,'de','77878',NULL,1,1,1),(20,'dede','77878',NULL,1,1,1),(21,'dede','77878',NULL,1,1,1),(22,'de','77878',NULL,1,1,1),(23,'dede','77878',NULL,1,1,1),(24,'de','de',NULL,1,1,1),(25,'de','de',NULL,1,1,1),(26,'dede','77878',NULL,1,1,1),(27,'dede','77878',NULL,1,1,1),(28,'dede','77878',NULL,1,1,1),(29,'dede','77878',NULL,1,1,1),(30,'dede','77878',NULL,1,1,1),(31,'dede','77878',NULL,1,1,1),(32,'dede','77878',NULL,1,1,1),(33,'dede','77878',NULL,1,1,1),(34,'dede','77878',NULL,1,1,1),(35,'dede','77878',NULL,1,1,1),(36,'dede','77878',NULL,1,1,1),(37,'dede','77878',NULL,1,1,1),(38,'dede','77878',NULL,1,1,1),(39,'760023','Avenida de Alicante 49',NULL,1,1,1),(40,'03700','Avenida de Alicante 49',NULL,1,1,1),(41,'2222222','111',NULL,1,1,1),(42,'760026','15478',NULL,1,1,1),(43,'03700','Avenida de Alicante 49',NULL,1,1,1);
/*!40000 ALTER TABLE `address` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `amenity`
--

DROP TABLE IF EXISTS `amenity`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `amenity` (
  `id_amenity` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `icon` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_amenity`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `amenity`
--

LOCK TABLES `amenity` WRITE;
/*!40000 ALTER TABLE `amenity` DISABLE KEYS */;
INSERT INTO `amenity` VALUES (1,'fp-ht-tv'),(2,'fp-ht-washingmachine'),(3,'sa-icon-high-chair'),(4,'fa fa-bed'),(5,'fp-ht-bed29'),(6,'fa fa-paw'),(7,'fa fa-wifi'),(8,'sa-icon-firstdraft'),(9,'sa-icon-city'),(10,'sa-icon-air'),(11,'fp-ht-nosmoking'),(12,'sa-icon-clean'),(13,'fp-ht-bed29'),(14,'fa fa-bed');
/*!40000 ALTER TABLE `amenity` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `amenity_lang`
--

DROP TABLE IF EXISTS `amenity_lang`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `amenity_lang` (
  `id_amenity` int(11) unsigned NOT NULL,
  `id_lang` int(11) unsigned NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_amenity`,`id_lang`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `amenity_lang`
--

LOCK TABLES `amenity_lang` WRITE;
/*!40000 ALTER TABLE `amenity_lang` DISABLE KEYS */;
INSERT INTO `amenity_lang` VALUES (1,1,'TV'),(1,2,'TV'),(2,1,'Lavandería en la suite'),(2,2,'In-Suite Laundry'),(3,1,'Silla alta (Previa solicitud)'),(3,2,'High Chair (Upon request)'),(4,1,'Cama extra (Previa solicitud)'),(4,2,'Extra Beds (Upon request)'),(5,1,'Ropa de cama y toallas'),(5,2,'Bed Linens And Towels'),(6,1,'Mascota amigable'),(6,2,'Pet Friendly'),(7,1,'Internet'),(7,2,'Internet'),(8,1,'Piso de madera'),(8,2,'Hardwood Floor'),(9,1,'Vista a la ciudad'),(9,2,'City View'),(10,1,'Aire acondicionado'),(10,2,'Air Conditioning'),(11,1,'Prohibido fumar'),(11,2,'Non Smoking'),(12,1,'Gestión interna'),(12,2,'Housekeeping'),(13,1,'Ropa extra (Previa solicitud)'),(13,2,'Extra Linens (Upon request)'),(14,1,'Cuna para bebé (Previa solicitud)'),(14,2,'Baby Crib (Upon request)');
/*!40000 ALTER TABLE `amenity_lang` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `apartment`
--

DROP TABLE IF EXISTS `apartment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `apartment` (
  `id_apartment` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `id_building` int(11) unsigned NOT NULL,
  `id_apartment_type` int(11) NOT NULL,
  `id_currency` int(11) NOT NULL,
  `floor` int(11) NOT NULL,
  `number` varchar(45) DEFAULT NULL,
  `price` float NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_apartment`),
  KEY `fk_apartments_buildings1_idx` (`id_building`),
  KEY `fk_apartments_apartmentType1_idx` (`id_apartment_type`),
  CONSTRAINT `fk_apartments_apartmentType1` FOREIGN KEY (`id_apartment_type`) REFERENCES `apartment_type` (`id_apartment_type`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_apartments_buildings1` FOREIGN KEY (`id_building`) REFERENCES `building` (`id_building`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `apartment`
--

LOCK TABLES `apartment` WRITE;
/*!40000 ALTER TABLE `apartment` DISABLE KEYS */;
INSERT INTO `apartment` VALUES (6,2,2,1,1,'101',18,'2018-05-01 02:30:12','2018-05-11 16:44:21'),(7,1,1,1,1,'102',20,'2018-05-01 02:38:14','2018-05-01 02:38:14'),(8,1,2,1,21,'2104',80,'2018-05-11 17:03:03','2018-05-11 17:03:03');
/*!40000 ALTER TABLE `apartment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `apartment_amenity`
--

DROP TABLE IF EXISTS `apartment_amenity`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `apartment_amenity` (
  `id_apartment_amenity` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `id_apartment` int(11) unsigned NOT NULL,
  `id_amenity` int(11) unsigned NOT NULL,
  PRIMARY KEY (`id_apartment_amenity`),
  KEY `fk_apartmentAmenities_apartments1_idx` (`id_apartment`),
  KEY `fk_apartmentAmenities_amenities1_idx` (`id_amenity`),
  CONSTRAINT `fk_apartmentAmenities_amenities1` FOREIGN KEY (`id_amenity`) REFERENCES `amenity` (`id_amenity`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_apartmentAmenities_apartments1` FOREIGN KEY (`id_apartment`) REFERENCES `apartment` (`id_apartment`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=90 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `apartment_amenity`
--

LOCK TABLES `apartment_amenity` WRITE;
/*!40000 ALTER TABLE `apartment_amenity` DISABLE KEYS */;
INSERT INTO `apartment_amenity` VALUES (57,6,11),(58,7,1),(59,7,11),(60,6,7),(61,6,8),(62,6,13),(63,6,14),(64,7,2),(65,7,3),(66,7,4),(67,7,5),(68,7,6),(69,7,7),(70,7,8),(71,7,9),(72,7,10),(73,7,12),(74,7,13),(75,7,14),(76,8,1),(77,8,2),(78,8,3),(79,8,4),(80,8,5),(81,8,6),(82,8,7),(83,8,8),(84,8,9),(85,8,10),(86,8,11),(87,8,12),(88,8,13),(89,8,14);
/*!40000 ALTER TABLE `apartment_amenity` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `apartment_lang`
--

DROP TABLE IF EXISTS `apartment_lang`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `apartment_lang` (
  `id_apartment` int(11) unsigned NOT NULL,
  `id_lang` int(11) unsigned NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `short_description` varchar(255) DEFAULT NULL,
  `description` text,
  PRIMARY KEY (`id_apartment`,`id_lang`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `apartment_lang`
--

LOCK TABLES `apartment_lang` WRITE;
/*!40000 ALTER TABLE `apartment_lang` DISABLE KEYS */;
INSERT INTO `apartment_lang` VALUES (6,1,'Apto 1','Apto 1','Apto 1'),(6,2,'Apto 1','Apto 1','Apto 1'),(7,1,'Apto 2','Descripcion Apto 2','Apto 2'),(7,2,'Apto 2','Descriptiom Apto 2','Apto 2'),(8,1,'TR2104','',''),(8,2,'TR2104','','');
/*!40000 ALTER TABLE `apartment_lang` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `apartment_type`
--

DROP TABLE IF EXISTS `apartment_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `apartment_type` (
  `id_apartment_type` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id_apartment_type`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `apartment_type`
--

LOCK TABLES `apartment_type` WRITE;
/*!40000 ALTER TABLE `apartment_type` DISABLE KEYS */;
INSERT INTO `apartment_type` VALUES (1),(2),(3);
/*!40000 ALTER TABLE `apartment_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `apartment_type_lang`
--

DROP TABLE IF EXISTS `apartment_type_lang`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `apartment_type_lang` (
  `id_apartment_type` int(11) unsigned NOT NULL,
  `id_lang` int(11) unsigned NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_apartment_type`,`id_lang`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `apartment_type_lang`
--

LOCK TABLES `apartment_type_lang` WRITE;
/*!40000 ALTER TABLE `apartment_type_lang` DISABLE KEYS */;
INSERT INTO `apartment_type_lang` VALUES (1,1,'Suite'),(1,2,'Suite'),(2,1,'Apartamento'),(2,2,'Apartment'),(3,1,'Casa'),(3,2,'House');
/*!40000 ALTER TABLE `apartment_type_lang` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `booking`
--

DROP TABLE IF EXISTS `booking`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `booking` (
  `id_booking` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `id_user` int(11) unsigned NOT NULL,
  `reference` varchar(45) NOT NULL,
  `booking_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `booking_date_start` date DEFAULT NULL,
  `booking_date_end` date DEFAULT NULL,
  `total_payment` varchar(45) DEFAULT NULL,
  `special_requests` varchar(255) DEFAULT NULL,
  `id_apartment` int(11) unsigned NOT NULL,
  `id_address` int(11) unsigned DEFAULT NULL,
  `id_rate` int(11) DEFAULT NULL,
  `variant` double DEFAULT NULL,
  `variant_value` float DEFAULT NULL,
  `nights` int(11) NOT NULL,
  `value` float NOT NULL,
  `attempt` int(11) NOT NULL,
  `status` enum('RESERVED','PAID','CANCELLED','UNAVAILABLE','INCOMPLETED') DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_booking`),
  KEY `fk_bookings_users1_idx` (`id_user`),
  KEY `fk_bookings_apartments1_idx` (`id_apartment`),
  CONSTRAINT `fk_bookings_apartments1` FOREIGN KEY (`id_apartment`) REFERENCES `apartment` (`id_apartment`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_bookings_users1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id_user`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `booking`
--

LOCK TABLES `booking` WRITE;
/*!40000 ALTER TABLE `booking` DISABLE KEYS */;
INSERT INTO `booking` VALUES (2,20,'5AF0BD385A899','2018-05-07 20:55:20','2018-05-08','2018-05-09','18.18',NULL,6,41,1,1,0.18,1,18,1,'CANCELLED','2018-05-07 20:55:20','2018-05-07 20:55:20'),(3,18,'5AF201C615554','2018-05-08 20:00:06','2018-05-08','2018-05-09','20.2',NULL,7,42,2,1,0.2,1,20,1,'CANCELLED','2018-05-08 20:00:06','2018-05-08 20:00:06'),(4,1,'5AF5B953892E1','2018-05-11 15:40:03','2018-05-11','2018-05-13','40.4',NULL,7,43,2,1,0.4,2,20,1,'CANCELLED','2018-05-11 15:40:03','2018-05-11 15:46:12');
/*!40000 ALTER TABLE `booking` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `building`
--

DROP TABLE IF EXISTS `building`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `building` (
  `id_building` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `address` varchar(100) DEFAULT NULL,
  `postal_code` varchar(20) DEFAULT NULL,
  `id_city` int(11) unsigned DEFAULT NULL,
  `lat` varchar(255) DEFAULT NULL,
  `lng` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_building`),
  KEY `fk_building_cities1_idx` (`id_city`),
  CONSTRAINT `fk_building_cities1` FOREIGN KEY (`id_city`) REFERENCES `city` (`id_city`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `building`
--

LOCK TABLES `building` WRITE;
/*!40000 ALTER TABLE `building` DISABLE KEYS */;
INSERT INTO `building` VALUES (1,'Building Address 123',NULL,1,'9.9212797','-84.0915074'),(2,'Colegio Saint Joseph, San José, Moravia, Costa Rica',NULL,1,'9.954865125946752','-84.05395026270446');
/*!40000 ALTER TABLE `building` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `building_lang`
--

DROP TABLE IF EXISTS `building_lang`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `building_lang` (
  `id_building` int(11) unsigned NOT NULL,
  `id_lang` int(11) unsigned NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `description` text,
  PRIMARY KEY (`id_building`,`id_lang`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `building_lang`
--

LOCK TABLES `building_lang` WRITE;
/*!40000 ALTER TABLE `building_lang` DISABLE KEYS */;
INSERT INTO `building_lang` VALUES (1,1,'Edificio No. 1','Edificio No. 1'),(1,2,'Building No. 1','Building No. 1'),(2,1,'U Nunciatura','U Nunciatura'),(2,2,'U Nunciatura','U Nunciatura');
/*!40000 ALTER TABLE `building_lang` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `city`
--

DROP TABLE IF EXISTS `city`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `city` (
  `id_city` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `id_state` int(11) unsigned NOT NULL,
  PRIMARY KEY (`id_city`),
  KEY `fk_city_state1_idx` (`id_state`),
  CONSTRAINT `fk_city_state1_idx` FOREIGN KEY (`id_state`) REFERENCES `state` (`id_state`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `city`
--

LOCK TABLES `city` WRITE;
/*!40000 ALTER TABLE `city` DISABLE KEYS */;
INSERT INTO `city` VALUES (1,'San José',1);
/*!40000 ALTER TABLE `city` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contact_module`
--

DROP TABLE IF EXISTS `contact_module`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `contact_module` (
  `id_contact_module` int(11) NOT NULL AUTO_INCREMENT,
  `lat` varchar(255) DEFAULT NULL,
  `lng` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_contact_module`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contact_module`
--

LOCK TABLES `contact_module` WRITE;
/*!40000 ALTER TABLE `contact_module` DISABLE KEYS */;
INSERT INTO `contact_module` VALUES (1,'9.93443477','-84.1055177');
/*!40000 ALTER TABLE `contact_module` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contact_module_lang`
--

DROP TABLE IF EXISTS `contact_module_lang`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `contact_module_lang` (
  `id_contact_module` int(11) unsigned NOT NULL,
  `id_lang` int(11) unsigned NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `description` text,
  `address` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_contact_module`,`id_lang`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contact_module_lang`
--

LOCK TABLES `contact_module_lang` WRITE;
/*!40000 ALTER TABLE `contact_module_lang` DISABLE KEYS */;
INSERT INTO `contact_module_lang` VALUES (1,1,'Nuestras Oficinas','Ubicadas Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.','Level 13, 2 Elizabeth St, San Jose, Costa Rica','+1 (800) 555-5555','reservations@sabanastays.com.co'),(1,2,'Our Offices','Located Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.','Level 13, 2 Elizabeth St, San Jose, Costa Rica','+1 (800) 555-5555','reservations@sabanastays.com.cr');
/*!40000 ALTER TABLE `contact_module_lang` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `country`
--

DROP TABLE IF EXISTS `country`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `country` (
  `id_country` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id_country`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `country`
--

LOCK TABLES `country` WRITE;
/*!40000 ALTER TABLE `country` DISABLE KEYS */;
INSERT INTO `country` VALUES (1,'Costa Rica');
/*!40000 ALTER TABLE `country` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `currency`
--

DROP TABLE IF EXISTS `currency`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `currency` (
  `id_currency` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `sign` varchar(1) DEFAULT NULL,
  `iso_code` varchar(4) DEFAULT NULL,
  PRIMARY KEY (`id_currency`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `currency`
--

LOCK TABLES `currency` WRITE;
/*!40000 ALTER TABLE `currency` DISABLE KEYS */;
INSERT INTO `currency` VALUES (1,'Dollar','$','USD');
/*!40000 ALTER TABLE `currency` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `feature`
--

DROP TABLE IF EXISTS `feature`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `feature` (
  `id_feature` int(11) unsigned NOT NULL AUTO_INCREMENT,
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
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `feature`
--

LOCK TABLES `feature` WRITE;
/*!40000 ALTER TABLE `feature` DISABLE KEYS */;
INSERT INTO `feature` VALUES (2,1,1,0,1,0,0,0,6),(3,1,1,1,1,1,1,1,7),(4,2,1,1,1,0,0,0,8);
/*!40000 ALTER TABLE `feature` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `footer_module`
--

DROP TABLE IF EXISTS `footer_module`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `footer_module` (
  `id_footer_module` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id_footer_module`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `footer_module`
--

LOCK TABLES `footer_module` WRITE;
/*!40000 ALTER TABLE `footer_module` DISABLE KEYS */;
/*!40000 ALTER TABLE `footer_module` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `footer_module_lang`
--

DROP TABLE IF EXISTS `footer_module_lang`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `footer_module_lang` (
  `id_footer_module` int(11) unsigned NOT NULL,
  `id_lang` int(11) unsigned NOT NULL,
  `title` varchar(45) DEFAULT NULL,
  `short_description` varchar(255) DEFAULT NULL,
  `description` text,
  PRIMARY KEY (`id_footer_module`,`id_lang`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `footer_module_lang`
--

LOCK TABLES `footer_module_lang` WRITE;
/*!40000 ALTER TABLE `footer_module_lang` DISABLE KEYS */;
/*!40000 ALTER TABLE `footer_module_lang` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `header_module`
--

DROP TABLE IF EXISTS `header_module`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `header_module` (
  `id_header_module` int(11) NOT NULL AUTO_INCREMENT,
  `id_media_logo` int(11) DEFAULT NULL,
  `id_media_background` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_header_module`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `header_module`
--

LOCK TABLES `header_module` WRITE;
/*!40000 ALTER TABLE `header_module` DISABLE KEYS */;
INSERT INTO `header_module` VALUES (1,33,27);
/*!40000 ALTER TABLE `header_module` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `home_about_module`
--

DROP TABLE IF EXISTS `home_about_module`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `home_about_module` (
  `id_home_about_module` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id_home_about_module`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `home_about_module`
--

LOCK TABLES `home_about_module` WRITE;
/*!40000 ALTER TABLE `home_about_module` DISABLE KEYS */;
INSERT INTO `home_about_module` VALUES (1);
/*!40000 ALTER TABLE `home_about_module` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `home_about_module_lang`
--

DROP TABLE IF EXISTS `home_about_module_lang`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `home_about_module_lang` (
  `id_home_about_module` int(11) unsigned NOT NULL,
  `id_lang` int(11) unsigned NOT NULL,
  `title` varchar(45) DEFAULT NULL,
  `description` text,
  `video_url` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id_home_about_module`,`id_lang`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `home_about_module_lang`
--

LOCK TABLES `home_about_module_lang` WRITE;
/*!40000 ALTER TABLE `home_about_module_lang` DISABLE KEYS */;
INSERT INTO `home_about_module_lang` VALUES (1,1,'Nosotros','Hola Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.','https://www.youtube.com/embed/M1GIEZHSJco'),(1,2,'About Us','Hi Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.','https://player.vimeo.com/video/176576698');
/*!40000 ALTER TABLE `home_about_module_lang` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `home_module`
--

DROP TABLE IF EXISTS `home_module`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `home_module` (
  `id_home_module` int(11) NOT NULL AUTO_INCREMENT,
  `id_media` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_home_module`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `home_module`
--

LOCK TABLES `home_module` WRITE;
/*!40000 ALTER TABLE `home_module` DISABLE KEYS */;
INSERT INTO `home_module` VALUES (1,1);
/*!40000 ALTER TABLE `home_module` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `home_module_lang`
--

DROP TABLE IF EXISTS `home_module_lang`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `home_module_lang` (
  `id_home_module` int(11) unsigned NOT NULL,
  `id_lang` int(11) unsigned NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `description` text,
  PRIMARY KEY (`id_home_module`,`id_lang`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `home_module_lang`
--

LOCK TABLES `home_module_lang` WRITE;
/*!40000 ALTER TABLE `home_module_lang` DISABLE KEYS */;
INSERT INTO `home_module_lang` VALUES (1,1,'',''),(1,2,'','');
/*!40000 ALTER TABLE `home_module_lang` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lang`
--

DROP TABLE IF EXISTS `lang`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `lang` (
  `id_lang` int(11) NOT NULL AUTO_INCREMENT,
  `iso` varchar(4) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id_lang`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lang`
--

LOCK TABLES `lang` WRITE;
/*!40000 ALTER TABLE `lang` DISABLE KEYS */;
INSERT INTO `lang` VALUES (1,'ES','Español'),(2,'EN','English');
/*!40000 ALTER TABLE `lang` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `media`
--

DROP TABLE IF EXISTS `media`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `media` (
  `id_media` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `path` varchar(255) NOT NULL,
  `media_type` enum('AUDIO','IMAGE','VIDEO') NOT NULL,
  `id_type` int(11) NOT NULL,
  `type` varchar(45) NOT NULL,
  PRIMARY KEY (`id_media`)
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `media`
--

LOCK TABLES `media` WRITE;
/*!40000 ALTER TABLE `media` DISABLE KEYS */;
INSERT INTO `media` VALUES (14,'/storage/ss5ae7b4547b2dc.jpg','IMAGE',1,'apartment'),(21,'/storage/ss5ae7badcf00c9.jpg','IMAGE',3,'apartment'),(27,'/storage/hl5ae886385204a.png','IMAGE',1,'header_module_background'),(28,'/storage/am5ae887d5bad15.png','IMAGE',1,'about_module'),(29,'/storage/am5ae887d5bec00.png','IMAGE',1,'about_module'),(31,'/storage/ss5ae8943b67b20.jpg','IMAGE',6,'apartment'),(32,'/storage/ss5af1bac9b1a3d.jpg','IMAGE',7,'apartment'),(33,'/storage/hl5af1ffb75115c.png','IMAGE',1,'header_module_logo'),(34,'/storage/h5af1fffd4897a.jpg','IMAGE',1,'home_module'),(37,'/storage/h5af200153af96.jpg','IMAGE',1,'home_module'),(38,'/storage/h5af200153b64c.jpg','IMAGE',1,'home_module'),(39,'/storage/ss5af2010819ee5.jpg','IMAGE',7,'apartment'),(40,'/storage/ss5af2013f0f68e.jpg','IMAGE',7,'apartment'),(41,'/storage/h5af5bec4402e4.jpg','IMAGE',1,'home_module'),(42,'/storage/ss5af5ccc7e4780.jpg','IMAGE',8,'apartment');
/*!40000 ALTER TABLE `media` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `media_lang`
--

DROP TABLE IF EXISTS `media_lang`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `media_lang` (
  `id_media` int(11) unsigned NOT NULL,
  `id_lang` int(11) unsigned NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_media`,`id_lang`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `media_lang`
--

LOCK TABLES `media_lang` WRITE;
/*!40000 ALTER TABLE `media_lang` DISABLE KEYS */;
/*!40000 ALTER TABLE `media_lang` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `newsletter`
--

DROP TABLE IF EXISTS `newsletter`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `newsletter` (
  `id_newsletter` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(45) DEFAULT NULL,
  `active` tinyint(1) DEFAULT '1',
  PRIMARY KEY (`id_newsletter`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `newsletter`
--

LOCK TABLES `newsletter` WRITE;
/*!40000 ALTER TABLE `newsletter` DISABLE KEYS */;
INSERT INTO `newsletter` VALUES (1,'camilo.o19@gmail.com',1),(2,'developer.ecodev@gmail.com',1);
/*!40000 ALTER TABLE `newsletter` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payment`
--

DROP TABLE IF EXISTS `payment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
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
  `payment_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `payment_type` enum('ONETIME','RECURRENT') DEFAULT NULL,
  `payment_method` enum('CREDIT CARD','CHECK','WIRE TRANSFER','CASH') DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_payment`),
  KEY `fk_payments_users1_idx` (`id_user`),
  CONSTRAINT `fk_payments_users1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id_user`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payment`
--

LOCK TABLES `payment` WRITE;
/*!40000 ALTER TABLE `payment` DISABLE KEYS */;
/*!40000 ALTER TABLE `payment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rate`
--

DROP TABLE IF EXISTS `rate`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `rate` (
  `id_rate` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `variant` double DEFAULT NULL,
  `id_apartment` int(11) unsigned NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `default` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`id_rate`),
  KEY `fk_rates_apartments1_idx` (`id_apartment`),
  CONSTRAINT `fk_rates_apartments1` FOREIGN KEY (`id_apartment`) REFERENCES `apartment` (`id_apartment`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rate`
--

LOCK TABLES `rate` WRITE;
/*!40000 ALTER TABLE `rate` DISABLE KEYS */;
INSERT INTO `rate` VALUES (1,1,6,'Default',0),(2,1,7,'Default',0),(3,1,8,'Default',1);
/*!40000 ALTER TABLE `rate` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `state`
--

DROP TABLE IF EXISTS `state`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `state` (
  `id_state` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `id_country` int(11) unsigned NOT NULL,
  PRIMARY KEY (`id_state`),
  KEY `fk_state_country1_idx` (`id_country`),
  CONSTRAINT `country` FOREIGN KEY (`id_country`) REFERENCES `country` (`id_country`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `state`
--

LOCK TABLES `state` WRITE;
/*!40000 ALTER TABLE `state` DISABLE KEYS */;
INSERT INTO `state` VALUES (1,'San José',1);
/*!40000 ALTER TABLE `state` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `testimonial_module`
--

DROP TABLE IF EXISTS `testimonial_module`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `testimonial_module` (
  `id_testimonial_module` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `company` varchar(255) DEFAULT NULL,
  `id_media` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_testimonial_module`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `testimonial_module`
--

LOCK TABLES `testimonial_module` WRITE;
/*!40000 ALTER TABLE `testimonial_module` DISABLE KEYS */;
/*!40000 ALTER TABLE `testimonial_module` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `testimonial_module_lang`
--

DROP TABLE IF EXISTS `testimonial_module_lang`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `testimonial_module_lang` (
  `id_testimonial_module` int(11) unsigned NOT NULL,
  `id_lang` int(11) unsigned NOT NULL,
  `text` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_testimonial_module`,`id_lang`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `testimonial_module_lang`
--

LOCK TABLES `testimonial_module_lang` WRITE;
/*!40000 ALTER TABLE `testimonial_module_lang` DISABLE KEYS */;
/*!40000 ALTER TABLE `testimonial_module_lang` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_address`
--

DROP TABLE IF EXISTS `user_address`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_address` (
  `id_user` int(11) unsigned NOT NULL,
  `id_address` int(11) unsigned NOT NULL,
  PRIMARY KEY (`id_user`,`id_address`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_address`
--

LOCK TABLES `user_address` WRITE;
/*!40000 ALTER TABLE `user_address` DISABLE KEYS */;
INSERT INTO `user_address` VALUES (1,43),(2,1),(2,2),(2,3),(2,4),(2,5),(2,6),(2,7),(2,8),(2,9),(2,10),(2,11),(2,12),(2,13),(2,14),(2,15),(2,16),(2,17),(2,18),(2,19),(2,20),(2,21),(2,22),(2,23),(2,24),(2,25),(2,26),(2,27),(2,28),(2,29),(2,30),(2,31),(2,32),(2,33),(2,34),(2,35),(2,36),(2,37),(2,38),(17,39),(18,40),(18,42),(20,41);
/*!40000 ALTER TABLE `user_address` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id_user` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `email` varchar(100) DEFAULT NULL,
  `password` varchar(60) DEFAULT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `firstname` varchar(50) DEFAULT NULL,
  `lastname` varchar(50) DEFAULT NULL,
  `gender` enum('MALE','FEMALE') DEFAULT NULL,
  `birthdate` date DEFAULT NULL,
  `since` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `remember_token` varchar(100) DEFAULT NULL,
  `remember_token_time` timestamp NULL DEFAULT NULL,
  `social_id` varchar(100) DEFAULT NULL,
  `last_login` timestamp NULL DEFAULT NULL,
  `active` enum('YES','NO') DEFAULT NULL,
  `role` enum('USER','ADMIN') DEFAULT NULL,
  `api_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `phone` varchar(45) DEFAULT NULL,
  `account_type` enum('NORMAL','GOOGLE','FACEBOOK') DEFAULT NULL,
  PRIMARY KEY (`id_user`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'pub@sabanastays.com','$2y$10$LJ5ZPmIS0Ei5c6KnxY27su4mJ28.huE/S1N5Nt6H1u9ST0n2RKW.K',NULL,'John','Doe','MALE','1999-03-06','2018-03-29 16:49:17',NULL,NULL,NULL,NULL,NULL,'USER','','2018-03-29 16:49:17','2018-05-11 15:54:59',NULL,'NORMAL'),(2,'alopez@ecodev.com.co','$2y$10$L4kA6dinGh91axGrdvRQXerCKeduqU/ckI8/dgo1Thn4RdkQiO5dW',NULL,'Andrey','López','MALE','1990-08-22','2018-03-29 21:58:17',NULL,NULL,NULL,NULL,NULL,'USER','6b0388c9e80a6b5a8ac990788685433241a6df4ebadfef0ae731db3e6d8806f8','2018-03-29 21:58:17','2018-04-27 12:27:45',NULL,NULL),(3,'japenagoss@gmail.com','$2y$10$Q82YhMAUStDw1GyW9xgr0ufSg5lqr6no44Y/hl6Kty.nmkRyya27K',NULL,'dede','dedede',NULL,NULL,'2018-04-05 03:18:59',NULL,NULL,NULL,NULL,NULL,'USER',NULL,'2018-04-05 03:18:59','2018-04-05 03:18:59',NULL,NULL),(4,'japenagoss@gmail.com','$2y$10$q6iryFPV2hx0MQhrqbNhhucuqlerojJ3PCIoJQMVZzCaHQniXJLxy',NULL,'dede','dedede',NULL,NULL,'2018-04-05 03:21:43',NULL,NULL,NULL,NULL,NULL,'USER',NULL,'2018-04-05 03:21:43','2018-04-05 03:21:43',NULL,NULL),(5,NULL,'$2y$10$xosgJoAdoHPArolV4Wv9ZuzJvkKOBlMMGWwq4NlLQtR3V.ctqFP46',NULL,'dede','dede',NULL,NULL,'2018-04-05 03:23:49',NULL,NULL,NULL,NULL,NULL,'USER',NULL,'2018-04-05 03:23:49','2018-04-05 03:23:49',NULL,NULL),(6,'oscarivansilva2018@gmail.com','$2y$10$1QCTQz1PguE2KGiuIykcF.xmJbuvrEGr5vaAx4Bx8gicIn/x2ZNzK',NULL,'de','de',NULL,NULL,'2018-04-05 03:28:32',NULL,NULL,NULL,NULL,NULL,'USER',NULL,'2018-04-05 03:28:32','2018-04-05 03:28:32',NULL,NULL),(7,'japenagoss@gmail.com','$2y$10$ziEDGMtESGAAGVww/qqJUei4O1L1UnRJsU0TNXJ6c7WuoEzfwcm9m',NULL,'Camilo','Mostro',NULL,NULL,'2018-04-05 03:51:15',NULL,NULL,NULL,NULL,NULL,'USER',NULL,'2018-04-05 03:51:15','2018-04-05 03:51:15',NULL,NULL),(8,'japenagoss@gmail.com','$2y$10$uRJzXaSyFfY.jG5TFcNOCucnARKailX6ZQRV.pCQ3eWvk/AtmQYou',NULL,'Camilo','MOster',NULL,NULL,'2018-04-05 03:52:44',NULL,NULL,NULL,NULL,NULL,'USER',NULL,'2018-04-05 03:52:44','2018-04-05 03:52:44',NULL,NULL),(9,'alopez@ecodev.com.co','$2y$10$fHMcPbI6CsRAxfVG30W2JOO.kDKKqFZzUs0Gc8C.q.U32xee05RFu',NULL,'Andrey','López',NULL,NULL,'2018-04-05 03:53:32',NULL,NULL,NULL,NULL,NULL,'USER',NULL,'2018-04-05 03:53:32','2018-04-05 03:53:32',NULL,NULL),(10,'joc@netmidas.com','$2y$10$r2wDuR16y/7tcWEn3JRCn.P3RLAJgqUs2y0.CEIUxXyeXtyQ/Zqca',NULL,'d','d','FEMALE','2018-04-10','2018-04-08 17:18:04',NULL,NULL,NULL,NULL,NULL,'USER',NULL,'2018-04-08 17:18:04','2018-04-08 17:18:04',NULL,NULL),(11,'joc@netmidas.com','$2y$10$CkuvhJRYYzIUbrnlm408H.lUKarsLwbmA7lQvK4oeD7Sm9B3XhRJK',NULL,'d','d','FEMALE','2018-04-10','2018-04-08 17:18:12',NULL,NULL,NULL,NULL,NULL,'USER',NULL,'2018-04-08 17:18:12','2018-04-08 17:18:12',NULL,NULL),(12,'joc@netmidas.com','$2y$10$fv1xQ3iAxYdFzAL6UOLRLuUCmvJb3eYD7ZTnyx1A/Qi9ppDHktfDm',NULL,'d','d','FEMALE','2018-04-23','2018-04-08 17:20:40',NULL,NULL,NULL,NULL,NULL,'USER',NULL,'2018-04-08 17:20:40','2018-04-08 17:20:40',NULL,NULL),(13,'joc@netmidas.com','$2y$10$RXLP7M9yr95Ffvvna9NS/u3.VmMSDWzC8L0SOqdllTRoVyOjdf03S',NULL,'d','e','FEMALE','2018-04-02','2018-04-08 17:21:42',NULL,NULL,NULL,NULL,NULL,'USER',NULL,'2018-04-08 17:21:42','2018-04-08 17:21:42',NULL,NULL),(14,'alopezs@ecodev.com.co','$2y$10$jZD21vorarSyowD3Owmt3uTgJkQqKLs6V6ny97MXWjpADk0//vh/e',NULL,'d','d','MALE','2018-04-24','2018-04-12 03:48:44',NULL,NULL,NULL,NULL,NULL,'USER','96fb688203f1c4152ab65250081ad9e1113a2d33e541accbb3138c3d448f2bd4','2018-04-12 03:48:44','2018-04-12 03:48:44',NULL,NULL),(15,'alopesssz@ecodev.com.co','$2y$10$1/c1wY4K/W0JzFqM1YsfrerRR4hqgPrBSuD0qSV722YGiU3qR8Ydm',NULL,'d','d','FEMALE','2018-04-20','2018-04-12 03:51:49',NULL,NULL,NULL,NULL,NULL,'USER','c1e6589e4e4d8c20535b10a445c1a853acdf011e2cfa47d569770ef5a6c33ed0','2018-04-12 03:51:49','2018-04-12 03:51:49',NULL,NULL),(16,'alopedddz@ecodev.com.co','$2y$10$g.wiWKSvbiAtNPxt3uUx8uwqA7.e2OVoyii0KmXXY0C1yqrGSENOu',NULL,'d','d','FEMALE','2018-04-18','2018-04-12 03:54:37',NULL,NULL,NULL,NULL,NULL,'USER','6c5914138a8cc2a18694b10d25f5b3f3cb89974f02780b82cbacc13621877e42','2018-04-12 03:54:37','2018-04-12 03:54:37',NULL,NULL),(17,'developer.ecodev@gmail.com','$2y$10$AVbClT6ovZfFVLQfz1h/j.prWuQAxps/vVCcw8jZYmNlCI1hXBPRO',NULL,'Denia','Music','MALE','1990-01-15','2018-04-18 19:53:58',NULL,NULL,NULL,NULL,NULL,'USER','f0fd445862927dc65192161f8b9f85c20a7259759f69d4ef758a6dc165c1d38e','2018-04-18 19:53:58','2018-04-18 19:53:58',NULL,NULL),(18,'camilo.o19@gmail.com','$2y$10$LJ5ZPmIS0Ei5c6KnxY27su4mJ28.huE/S1N5Nt6H1u9ST0n2RKW.K',NULL,'Edwin Camilo','Orozco','MALE','1990-01-15','2018-04-24 19:06:36',NULL,NULL,NULL,NULL,NULL,'ADMIN','','2018-04-24 19:06:36','2018-05-10 21:57:43',NULL,'NORMAL'),(19,'carlos@charlieapps.com','$2y$10$LJ5ZPmIS0Ei5c6KnxY27su4mJ28.huE/S1N5Nt6H1u9ST0n2RKW.K',NULL,'Carlos','Ovalles','MALE','1981-05-01','2018-04-26 20:24:34',NULL,NULL,NULL,NULL,NULL,'ADMIN','1b183caad3fdb458825ff1981325ca395060a814577e4acec26587041384115a','2018-04-26 20:24:34','2018-05-07 22:10:42',NULL,'NORMAL'),(20,'carlosaovalles@gmail.com','$2y$10$U.7vCFcyhybYSNW1afxUiupSaxxVK6sgtS5JVo68pwmKvi7ZWm.le',NULL,'carlos','ovalles',NULL,NULL,'2018-05-07 20:55:19',NULL,NULL,NULL,NULL,NULL,'USER','2a5950a8f354e88a6c1046da09f025d350c46c3f79e082da27c417ff1520d26a','2018-05-07 20:55:19','2018-05-07 20:55:20',NULL,'NORMAL'),(21,'admin@sabanastays.com','$2y$10$LJ5ZPmIS0Ei5c6KnxY27su4mJ28.huE/S1N5Nt6H1u9ST0n2RKW.K',NULL,'Administrador','Sabana Stays','MALE','1990-01-15','2018-05-10 21:55:35',NULL,NULL,NULL,NULL,NULL,'ADMIN','3b74d2c2aa901f7097c3cfa313751f6c4fbbc62c34c12787dd6ca7cc4ec7d3eb','2018-05-10 21:55:35','2018-05-21 20:16:51','3100000000','NORMAL');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-05-23 18:19:27
