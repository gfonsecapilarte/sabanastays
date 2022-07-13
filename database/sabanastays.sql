-- MySQL dump 10.13  Distrib 5.7.30, for Linux (x86_64)
--
-- Host: localhost    Database: sabanastays_prod
-- ------------------------------------------------------
-- Server version	5.7.30-0ubuntu0.16.04.1

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
INSERT INTO `about_module_lang` VALUES (1,1,'Nosotros','De Origen 100% costarricense, Sabana Stays conquista los mejores proyectos de la zona con mas plusvalía en San Jose. \n\nCada proyecto que elegimos tiene su propia personalidad, donde la experiencia de nuestros inquilinos es la inspiración para una constante evolución en  nuestro estilo. \n\nNuestras principales propiedades en los Alrededores del Parque la Sabana como destino principal para sus estadías, sin olvidar exclusivas propiedades en otros sectores como: Escazu y Santa Ana.    \n\n\nSomos creadores de estilo de vida corporativo, ofrecemos soluciones de alojamiento ejecutivo en espacios funcionales de alta gama, en la zona de mayor desarrollo urbano, cultural y social, del área central de San José de Costa Rica: La Sabana.\n',78),(1,2,'About Us','We design corporate lifestyle and provide executive accommodation solutions in high-end functional spaces, in the area of the greater urban, cultural and social development of San José, Costa Rica: La Sabana.',80);
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
) ENGINE=InnoDB AUTO_INCREMENT=63 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `address`
--

LOCK TABLES `address` WRITE;
/*!40000 ALTER TABLE `address` DISABLE KEYS */;
INSERT INTO `address` VALUES (1,'10106','AV Pio X',NULL,1,1,1),(2,'10106','AV Pio X',NULL,1,1,1),(3,'10106','AV Pio X',NULL,1,1,1),(4,'10106','Av. Nunciatura',NULL,1,1,1),(5,'10106','Av. Nunciatura',NULL,1,1,1),(6,'10106','Av. Nunciatura',NULL,1,1,1),(7,'10106','Av. Nunciatura',NULL,1,1,1),(8,'10106','Av. Nunciatura',NULL,1,1,1),(9,'10106','Av. Nunciatura',NULL,1,1,1),(10,'10106','Av. Nunciatura',NULL,1,1,1),(11,'10106','Av. Nunciatura',NULL,1,1,1),(12,'10106','Av. Nunciatura',NULL,1,1,1),(13,'10301','Desamparados',NULL,1,1,1),(14,'10301','Desamparados',NULL,1,1,1),(15,'10301','Desamparados',NULL,1,1,1),(16,'10301','Desamparados',NULL,1,1,1),(17,'10301','Desamparados',NULL,1,1,1),(18,'10301','Desamparados',NULL,1,1,1),(19,'10301','Desamparados',NULL,1,1,1),(20,'10301','Desamparados',NULL,1,1,1),(21,'10301','Desamparados',NULL,1,1,1),(22,'10301','Desamparados',NULL,1,1,1),(23,'10301','Desamparados',NULL,1,1,1),(24,'10301','Desamparados',NULL,1,1,1),(25,'10301','Desamparados',NULL,1,1,1),(26,'10301','Desamparados',NULL,1,1,1),(27,'10301','Desamparados',NULL,1,1,1),(28,'10301','Desamparados',NULL,1,1,1),(29,'10301','Desamparados',NULL,1,1,1),(30,'10301','Desamparados',NULL,1,1,1),(31,'10301','Desamparados',NULL,1,1,1),(32,'10301','Desamparados',NULL,1,1,1),(33,'10301','Desamparados',NULL,1,1,1),(34,'10301','Desamparados',NULL,1,1,1),(35,'10301','Desamparados',NULL,1,1,1),(36,'10301','Desamparados',NULL,1,1,1),(37,'10301','Desamparados',NULL,1,1,1),(38,'10301','Desamparados',NULL,1,1,1),(39,'10301','Desamparados',NULL,1,1,1),(40,'10301','Desamparados',NULL,1,1,1),(41,'10301','Desamparados',NULL,1,1,1),(42,'10301','Desamparados',NULL,1,1,1),(43,'10101','San Jose',NULL,1,1,1),(44,'10101','San Jose',NULL,1,1,1),(45,'10101','San Jose',NULL,1,1,1),(46,'10101','San Jose',NULL,1,1,1),(47,'10101','San Jose',NULL,1,1,1),(48,'10101','San Jose',NULL,1,1,1),(49,'10101','San Jose',NULL,1,1,1),(50,'10101','San Jose',NULL,1,1,1),(51,'10101','San Jose',NULL,1,1,1),(52,'000000','Escazú',NULL,1,1,1),(53,'000000','Escazú',NULL,1,1,1),(54,'prueba','prueba',NULL,1,1,1),(55,'10106','Av. Nunciatura',NULL,1,1,1),(56,'10106','Av. Nunciatura',NULL,1,1,1),(57,'10106','Av. Nunciatura',NULL,1,1,1),(58,'10106','Av. Nunciatura',NULL,1,1,1),(59,'10106','Av. Nunciatura',NULL,1,1,1),(60,'30013','PRUEBA',NULL,1,1,1),(61,'22555','bbbmbm',NULL,1,1,1),(62,'10106','Av. Nunciatura',NULL,1,1,1);
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
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `apartment`
--

LOCK TABLES `apartment` WRITE;
/*!40000 ALTER TABLE `apartment` DISABLE KEYS */;
INSERT INTO `apartment` VALUES (21,10,2,1,4,'404',80,'2018-07-06 22:03:33','2018-09-17 21:44:45'),(22,10,2,1,9,'903',80,'2018-07-06 22:30:03','2018-07-06 22:30:03'),(23,10,2,1,10,'1004',80,'2018-07-19 15:39:11','2018-07-19 15:39:11'),(24,12,2,1,11,'1101',100,'2018-07-28 01:02:03','2018-07-28 01:35:51'),(25,10,2,1,21,'2104',80,'2018-07-29 21:02:19','2018-07-29 21:02:19'),(26,10,2,1,14,'1406',85,'2018-07-29 21:11:31','2018-07-29 21:26:44'),(27,10,2,1,9,'905',85,'2018-07-29 21:11:35','2018-07-29 21:27:14'),(28,10,2,1,13,'1304',80,'2018-07-29 21:18:53','2018-07-29 21:18:53'),(29,10,2,1,13,'1306',85,'2018-07-29 21:22:28','2018-07-29 21:22:28'),(30,10,2,1,14,'1405',90,'2018-07-29 21:32:29','2018-07-29 21:32:29'),(31,14,1,1,3,'306',65,'2019-08-26 21:22:08','2019-08-26 21:22:08'),(32,14,1,1,3,'306',65,'2019-08-26 21:23:03','2019-08-26 21:23:03'),(33,14,1,1,3,'306',65,'2019-08-26 21:23:18','2019-08-26 21:23:18'),(34,14,1,1,3,'306',65,'2019-08-26 21:23:45','2019-08-26 21:23:45'),(35,14,1,1,3,'306',65,'2019-08-26 21:23:49','2019-08-26 21:23:49'),(36,14,1,1,3,'306',65,'2019-08-26 21:23:53','2019-08-26 21:23:53'),(37,14,1,1,3,'306',65,'2019-08-26 21:24:24','2019-08-26 21:24:24'),(38,14,1,1,3,'306',65,'2019-08-26 21:24:36','2019-08-26 21:24:36'),(39,14,1,1,3,'306',65,'2019-08-26 21:24:42','2019-08-26 21:24:42'),(40,14,1,1,3,'306',65,'2019-08-26 21:24:57','2019-08-26 21:24:57'),(41,14,1,1,3,'306',65,'2019-08-26 21:24:57','2019-08-26 21:24:57'),(42,14,1,1,3,'306',65,'2019-08-26 21:24:58','2019-08-26 21:24:58');
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
) ENGINE=InnoDB AUTO_INCREMENT=212 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `apartment_amenity`
--

LOCK TABLES `apartment_amenity` WRITE;
/*!40000 ALTER TABLE `apartment_amenity` DISABLE KEYS */;
INSERT INTO `apartment_amenity` VALUES (4,22,1),(5,22,2),(6,22,5),(7,22,7),(8,22,9),(9,22,10),(10,22,11),(11,22,12),(12,22,13),(13,21,1),(14,23,1),(15,23,2),(16,23,5),(17,23,6),(18,23,7),(19,23,9),(20,23,10),(21,23,11),(22,23,12),(23,23,13),(24,23,14),(25,21,2),(26,21,5),(27,21,6),(28,21,7),(29,21,10),(30,21,11),(31,21,12),(32,21,13),(33,25,1),(34,25,2),(35,25,5),(36,25,7),(37,25,8),(38,25,9),(39,25,10),(40,25,11),(41,25,12),(42,26,1),(43,26,2),(44,26,5),(45,26,7),(46,26,8),(47,26,9),(48,26,10),(49,26,11),(50,26,12),(51,27,1),(52,27,2),(53,27,5),(54,27,7),(55,27,8),(56,27,9),(57,27,10),(58,27,11),(59,27,12),(60,28,1),(61,28,2),(62,28,5),(63,28,7),(64,28,8),(65,28,9),(66,28,10),(67,28,11),(68,28,12),(69,28,13),(70,29,1),(71,29,2),(72,29,5),(73,29,7),(74,29,8),(75,29,9),(76,29,10),(77,29,11),(78,29,12),(79,29,13),(80,31,1),(81,31,2),(82,31,5),(83,31,6),(84,31,7),(85,31,8),(86,31,9),(87,31,10),(88,31,11),(89,31,12),(90,31,13),(91,32,1),(92,32,2),(93,32,5),(94,32,6),(95,32,7),(96,32,8),(97,32,9),(98,32,10),(99,32,11),(100,32,12),(101,32,13),(102,33,1),(103,33,2),(104,33,5),(105,33,6),(106,33,7),(107,33,8),(108,33,9),(109,33,10),(110,33,11),(111,33,12),(112,33,13),(113,34,1),(114,34,2),(115,34,5),(116,34,6),(117,34,7),(118,34,8),(119,34,9),(120,34,10),(121,34,11),(122,34,12),(123,34,13),(124,35,1),(125,35,2),(126,35,5),(127,35,6),(128,35,7),(129,35,8),(130,35,9),(131,35,10),(132,35,11),(133,35,12),(134,35,13),(135,36,1),(136,36,2),(137,36,5),(138,36,6),(139,36,7),(140,36,8),(141,36,9),(142,36,10),(143,36,11),(144,36,12),(145,36,13),(146,37,1),(147,37,2),(148,37,5),(149,37,6),(150,37,7),(151,37,8),(152,37,9),(153,37,10),(154,37,11),(155,37,12),(156,37,13),(157,38,1),(158,38,2),(159,38,5),(160,38,6),(161,38,7),(162,38,8),(163,38,9),(164,38,10),(165,38,11),(166,38,12),(167,38,13),(168,39,1),(169,39,2),(170,39,5),(171,39,6),(172,39,7),(173,39,8),(174,39,9),(175,39,10),(176,39,11),(177,39,12),(178,39,13),(179,40,1),(180,40,2),(181,40,5),(182,40,6),(183,40,7),(184,40,8),(185,40,9),(186,40,10),(187,40,11),(188,40,12),(189,40,13),(190,41,1),(191,41,2),(192,41,5),(193,41,6),(194,41,7),(195,41,8),(196,41,9),(197,41,10),(198,41,11),(199,41,12),(200,41,13),(201,42,1),(202,42,2),(203,42,5),(204,42,6),(205,42,7),(206,42,8),(207,42,9),(208,42,10),(209,42,11),(210,42,12),(211,42,13);
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
INSERT INTO `apartment_lang` VALUES (21,1,'TR404','Apartamento Ejecutivo con Vista al Este, totalmente equipado, excelente ubicación a 20 minutos del Aeropuerto Juan Santamaría ','Apartamento ejecutivo, totalmente equipado , ubicado en la mejor zona céntrica de San José, cerca de Hospitales, Centros comerciales, Supermercados y restaurantes'),(21,2,'TR404','Executive apartment with east view','Executive apartment with east view'),(22,1,'TR903','Apartamento Ejecutivo vista al oeste','Apartamento con vista a la cuidad, montaña, cerca de Supermercados, Restaurantes, cerca del Parque La Sabana pulmón de San Jose'),(22,2,'TR903','Executive Apartment west view','Apartment overlooking the city, mountain, near supermarkets, restaurants, near the park La Sabana lung of San Jose'),(23,1,'TR1004','Apartamento Ejecutivo con vista al Este.  ','Apartamento Ejecutivo con vista al Este.   '),(23,2,'TR1004',' Executive Apartment with view to the East.','Executive Apartment with view to the East.'),(24,1,'VN1101','ASSSSSSSSS',''),(24,2,'VN1101','ASSSSSSSS',''),(25,1,'TR2104','La mejor vista al este desde una altura que se observa toda la ciudad, iniciado por el gran parque de la sabana. ','Lo que necesitas y nada mas en espacios muy funcionales. Con todos los detalles diseñados para una experiencia tranquila. '),(25,2,'TR2104','',''),(26,1,'TR1406','Ejecutivo Plus con vista al oeste.\nHabitación mas un estudio donde podrás trabajar tranquilamente. ','Full equipado, con todos los detalles para sentirte como en casa. '),(26,2,'TR1406','',''),(27,1,'TR905','Ejecutivo Plus con vista al oeste.\nHabitación mas un estudio donde podrás trabajar tranquilamente. ','Full equipado, con todos los detalles para sentirse como en casa. '),(27,2,'TR905','',''),(28,1,'TR1304','1 habitación con vista al este. Lo que necesitas y nada mas.  ','Full equipado con todos los detalles para que tu estadía sea como estar en casa. '),(28,2,'TR1304','',''),(29,1,'TR1306','Apartamento de 1 hab mas un estudio. Excelente vistas al este. ','Full equipado, con todos los detalles para sentirte como en casa. '),(29,2,'TR1306','',''),(30,1,'TR1405','Apartamento 1 hab con un baño y medio. Excelente vista al oeste. ','Full equipado, con todos los detalles para sentirse con en casa. '),(30,2,'TR1405','',''),(31,1,'ARB306','Apartamento mono ambiente, un mix entro lo natural y urbano. Practico y funcional, la experiencia te gustara. ',''),(31,2,'ARB306','',''),(32,1,'ARB306','Apartamento mono ambiente, un mix entro lo natural y urbano. Practico y funcional, la experiencia te gustara. ',''),(32,2,'ARB306','',''),(33,1,'ARB306','Apartamento mono ambiente, un mix entro lo natural y urbano. Practico y funcional, la experiencia te gustara. ',''),(33,2,'ARB306','',''),(34,1,'ARB306','Apartamento mono ambiente, un mix entro lo natural y urbano. Practico y funcional, la experiencia te gustara. ',''),(34,2,'ARB306','',''),(35,1,'ARB306','Apartamento mono ambiente, un mix entro lo natural y urbano. Practico y funcional, la experiencia te gustara. ',''),(35,2,'ARB306','',''),(36,1,'ARB306','Apartamento mono ambiente, un mix entro lo natural y urbano. Practico y funcional, la experiencia te gustara. ',''),(36,2,'ARB306','',''),(37,1,'ARB306','Apartamento mono ambiente, un mix entro lo natural y urbano. Practico y funcional, la experiencia te gustara. ',''),(37,2,'ARB306','',''),(38,1,'ARB306','Apartamento mono ambiente, un mix entro lo natural y urbano. Practico y funcional, la experiencia te gustara. ',''),(38,2,'ARB306','',''),(39,1,'ARB306','Apartamento mono ambiente, un mix entro lo natural y urbano. Practico y funcional, la experiencia te gustara. ',''),(39,2,'ARB306','',''),(40,1,'ARB306','Apartamento mono ambiente, un mix entro lo natural y urbano. Practico y funcional, la experiencia te gustara. ',''),(40,2,'ARB306','',''),(41,1,'ARB306','Apartamento mono ambiente, un mix entro lo natural y urbano. Practico y funcional, la experiencia te gustara. ',''),(41,2,'ARB306','',''),(42,1,'ARB306','Apartamento mono ambiente, un mix entro lo natural y urbano. Practico y funcional, la experiencia te gustara. ',''),(42,2,'ARB306','','');
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
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `apartment_type`
--

LOCK TABLES `apartment_type` WRITE;
/*!40000 ALTER TABLE `apartment_type` DISABLE KEYS */;
INSERT INTO `apartment_type` VALUES (1),(2),(3),(4),(5),(6);
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
INSERT INTO `apartment_type_lang` VALUES (1,1,'Apt estudio'),(1,2,'Studio Apartment'),(2,1,'Apt ejecutivo '),(2,2,'Executive Apartment '),(3,1,'Apt 2 hab'),(3,2,'2 Bedroom Apartment'),(4,1,'Apt 3 hab'),(4,2,'3 Bedroom Apartment'),(5,1,'Casas'),(5,2,'Houses'),(6,1,'Oficinas y locales comerciales'),(6,2,'Offices and Commercial');
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
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `booking`
--

LOCK TABLES `booking` WRITE;
/*!40000 ALTER TABLE `booking` DISABLE KEYS */;
INSERT INTO `booking` VALUES (10,39,'5C04978ACD59D','2018-12-03 02:40:10','2018-12-12','2018-12-27','1080',NULL,21,13,15,10,120,15,80,1,'RESERVED','2018-12-03 02:40:10','2018-12-03 02:40:10'),(11,40,'5C7AD8CF44980','2019-03-02 19:26:07','2019-03-07','2019-04-07','1984',NULL,21,43,16,20,496,31,80,1,'RESERVED','2019-03-02 19:26:07','2019-03-02 19:26:07'),(12,41,'5C990F6204BE2','2019-03-25 17:26:58','2019-07-28','2019-08-22','1800',NULL,21,52,15,10,200,25,80,1,'RESERVED','2019-03-25 17:26:58','2019-03-25 17:26:58'),(13,42,'5C99115F28250','2019-03-25 17:35:27','2019-12-20','2019-08-21','-9680',NULL,22,54,NULL,NULL,NULL,-121,80,1,'RESERVED','2019-03-25 17:35:27','2019-03-25 17:35:27'),(14,36,'5D37CDC618A3A','2019-07-24 03:17:26','2019-07-23','2019-07-26','240',NULL,21,55,14,0,0,3,80,1,'RESERVED','2019-07-24 03:17:26','2019-07-24 03:17:26'),(15,36,'5D37CF41063D1','2019-07-24 03:23:45','2019-07-23','2019-07-25','160',NULL,22,57,14,0,0,2,80,1,'PAID','2019-07-24 03:23:45','2019-07-24 03:29:10'),(16,36,'5D37D12183061','2019-07-24 03:31:45','2019-07-30','2019-08-08','648',NULL,23,58,15,10,72,9,80,1,'PAID','2019-07-24 03:31:45','2019-07-24 03:32:06'),(17,21,'5D388CCA5A70B','2019-07-24 16:52:26','2019-08-05','2019-08-06','80',NULL,22,59,14,0,0,1,80,1,'PAID','2019-07-24 16:52:26','2019-07-24 16:57:39'),(18,21,'5D4237324DA3A','2019-08-01 00:49:54','2019-11-01','2019-11-27','1989',NULL,26,60,15,10,221,26,85,1,'RESERVED','2019-08-01 00:49:54','2019-08-01 00:49:54'),(19,21,'5D5EA4E7160BB','2019-08-22 14:21:27','2019-08-23','2019-08-29','510',NULL,26,61,14,0,0,6,85,1,'RESERVED','2019-08-22 14:21:27','2019-08-22 14:21:27'),(20,36,'5D715B7CC1BF3','2019-09-05 19:01:16','2019-09-09','2019-09-11','130',NULL,32,62,14,0,0,2,65,1,'RESERVED','2019-09-05 19:01:16','2019-09-05 19:01:16');
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
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `building`
--

LOCK TABLES `building` WRITE;
/*!40000 ALTER TABLE `building` DISABLE KEYS */;
INSERT INTO `building` VALUES (10,'Torre Rohrmoser, Avenida 7, San José, Costa Rica',NULL,1,'9.939999202782996','-84.10880280000003'),(11,'Del cafe 3-78 Av 3 Rohrmoser, Pavas, San Jose, Costa Rica. ',NULL,NULL,'9.94074492316005','-84.11419203623046'),(12,'Vistas de Nunciatura, San José, Costa Rica',NULL,NULL,'9.939701602782915','-84.11213450000002'),(13,'',NULL,NULL,'9.926304','-84.18338560000001'),(14,'',NULL,NULL,'9.926304','-84.18338560000001');
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
INSERT INTO `building_lang` VALUES (10,1,'Torre Rohrmoser ',''),(10,2,'Torre Rohrmoser ',''),(11,1,'delcafe378','Edificio Boutique con 12 apartamentos contemporáneos, ideal para tranquilas estadías de largo o corto plazo en la mejor ubicación de san jose.  Rooftop. '),(11,2,'delcafe378',''),(12,1,'Vistas de Nunciatura ','En el corazón de Rohrmoser, frente al parque del peru. '),(12,2,'Vistas de Nunciatura ',''),(13,1,'Condado del Parque',''),(13,2,'Condado del Parque ',''),(14,1,'Arborea Flats (ARB)','Condominio de tres niveles, muy fresco rodeado de naturaleza ya que colinda con la reserva natural de Santa Ana. Excelente ubicación.  '),(14,2,'Arborea Flats (ARB)','');
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
INSERT INTO `contact_module` VALUES (1,'9.940009','-84.108824');
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
INSERT INTO `contact_module_lang` VALUES (1,1,'Nuestras Oficinas','','Rohrmoser Sabana norte - San Jose Costa Rica. ','(506-4702.2046)  (506-8811.6227)','reservaciones@sabanastays.com'),(1,2,'Our Offices','','Rohrmoser Sabana norte - San Jose Costa Rica.','(506-4702.2046)  (506-8811.6227)','reservaciones@sabanastays.com');
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
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `feature`
--

LOCK TABLES `feature` WRITE;
/*!40000 ALTER TABLE `feature` DISABLE KEYS */;
INSERT INTO `feature` VALUES (3,2,1,1,1,0,0,0,22),(4,2,1,1,1,0,0,0,21),(5,1,1,1,1,0,0,0,23),(6,0,0,0,0,0,0,0,24),(7,2,1,1,1,0,0,0,25),(8,2,1,1,1,0,0,0,26),(9,2,1,1,1,0,0,0,27),(10,2,1,1,0,0,0,0,28),(11,2,1,1,1,0,0,0,29),(13,0,0,0,0,0,0,0,30),(14,1,1,1,1,0,0,0,31),(15,1,1,1,1,0,0,0,32),(16,1,1,1,1,0,0,0,33),(17,1,1,1,1,0,0,0,34),(18,1,1,1,1,0,0,0,35),(19,1,1,1,1,0,0,0,36),(20,1,1,1,1,0,0,0,37),(21,1,1,1,1,0,0,0,38),(22,1,1,1,1,0,0,0,39),(23,1,1,1,1,0,0,0,40),(24,1,1,1,1,0,0,0,41),(25,1,1,1,1,0,0,0,42);
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
INSERT INTO `home_about_module_lang` VALUES (1,1,'¿Quienes Somos?','Somos creadores de estilo de vida corporativo, ofrecemos soluciones de alojamiento ejecutivo en espacios funcionales de alta gama, en la zona de mayor desarrollo urbano, cultural y social, del área central de San José de Costa Rica: La Sabana.\n\nDe Origen costarricense, Sabana Stays reúne todos los detalles que necesitas para una estadía  de corto o largo plazo.   ','https://www.youtube.com/embed/pjzZWASRfto'),(1,2,'About Us','We design corporate lifestyle and provide executive accommodation solutions in high-end functional spaces, in the area of the greater urban, cultural and social development of San José, Costa Rica: La Sabana.','https://www.youtube.com/embed/pjzZWASRfto');
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
INSERT INTO `home_module_lang` VALUES (1,1,'','ESTILO DE VIDA CORPORATIVO '),(1,2,'','CORPORATE LIFESTYLE DESIGN ');
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
) ENGINE=InnoDB AUTO_INCREMENT=135 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `media`
--

LOCK TABLES `media` WRITE;
/*!40000 ALTER TABLE `media` DISABLE KEYS */;
INSERT INTO `media` VALUES (14,'/storage/ss5ae7b4547b2dc.jpg','IMAGE',1,'apartment'),(21,'/storage/ss5ae7badcf00c9.jpg','IMAGE',3,'apartment'),(27,'/storage/hl5ae886385204a.png','IMAGE',1,'header_module_background'),(32,'/storage/ss5af1bac9b1a3d.jpg','IMAGE',7,'apartment'),(33,'/storage/hl5af1ffb75115c.png','IMAGE',1,'header_module_logo'),(34,'/storage/h5af1fffd4897a.jpg','IMAGE',1,'home_module'),(39,'/storage/ss5af2010819ee5.jpg','IMAGE',7,'apartment'),(40,'/storage/ss5af2013f0f68e.jpg','IMAGE',7,'apartment'),(41,'/storage/h5af5bec4402e4.jpg','IMAGE',1,'home_module'),(42,'/storage/ss5af5ccc7e4780.jpg','IMAGE',8,'apartment'),(49,'/storage/ss5b101e057a866.jpg','IMAGE',6,'apartment'),(50,'/storage/ss5b101fe02c830.jpg','IMAGE',9,'apartment'),(51,'/storage/ss5b102019bf0eb.jpg','IMAGE',9,'apartment'),(60,'/storage/am5b50b7148f7fb.jpeg','IMAGE',1,'about_module'),(61,'/storage/am5b50b71490b3a.jpeg','IMAGE',1,'about_module'),(66,'/storage/ss5b5ba289f00ba.JPG','IMAGE',22,'apartment'),(67,'/storage/ss5b5ba28d26065.JPG','IMAGE',22,'apartment'),(68,'/storage/ss5b5ba2aceb2c1.JPG','IMAGE',21,'apartment'),(71,'/storage/ss5b5e2bc0a4664.JPG','IMAGE',23,'apartment'),(72,'/storage/ss5b5e2bcc68828.JPG','IMAGE',23,'apartment'),(73,'/storage/ss5b5e2d8314e4d.jpg','IMAGE',26,'apartment'),(74,'/storage/ss5b5e2d87dcc29.jpg','IMAGE',27,'apartment'),(75,'/storage/ss5b5e2f3d78f86.JPG','IMAGE',28,'apartment'),(76,'/storage/ss5b5e3014ad7a4.JPG','IMAGE',29,'apartment'),(77,'/storage/ss5b5e301944f2e.JPG','IMAGE',29,'apartment'),(78,'/storage/am5b5e38053f069.jpeg','IMAGE',1,'about_module'),(80,'/storage/am5b65f311872f1.jpeg','IMAGE',1,'about_module'),(85,'/storage/h5b65f6634c8bc.JPG','IMAGE',1,'home_module'),(86,'/storage/ss5d644d803a426.jpg','IMAGE',31,'apartment'),(87,'/storage/ss5d644d803fbeb.jpg','IMAGE',31,'apartment'),(88,'/storage/ss5d644d803ffef.jpg','IMAGE',31,'apartment'),(89,'/storage/ss5d644d8040569.jpg','IMAGE',31,'apartment'),(90,'/storage/ss5d644d80408ce.JPG','IMAGE',31,'apartment'),(91,'/storage/ss5d644db714a80.jpg','IMAGE',32,'apartment'),(92,'/storage/ss5d644db715229.jpg','IMAGE',32,'apartment'),(93,'/storage/ss5d644db71558b.jpg','IMAGE',32,'apartment'),(94,'/storage/ss5d644db7158be.JPG','IMAGE',32,'apartment'),(95,'/storage/ss5d644dc700e03.jpg','IMAGE',33,'apartment'),(96,'/storage/ss5d644dc701789.jpg','IMAGE',33,'apartment'),(97,'/storage/ss5d644dc701c9b.jpg','IMAGE',33,'apartment'),(98,'/storage/ss5d644dc701fab.JPG','IMAGE',33,'apartment'),(99,'/storage/ss5d644de1f3bf7.jpg','IMAGE',34,'apartment'),(100,'/storage/ss5d644de2001a2.jpg','IMAGE',34,'apartment'),(101,'/storage/ss5d644de2005d7.jpg','IMAGE',34,'apartment'),(102,'/storage/ss5d644de200e6e.JPG','IMAGE',34,'apartment'),(103,'/storage/ss5d644de53ef6a.jpg','IMAGE',35,'apartment'),(104,'/storage/ss5d644de53f84d.jpg','IMAGE',35,'apartment'),(105,'/storage/ss5d644de53fbae.jpg','IMAGE',35,'apartment'),(106,'/storage/ss5d644de53ff06.JPG','IMAGE',35,'apartment'),(107,'/storage/ss5d644de997089.jpg','IMAGE',36,'apartment'),(108,'/storage/ss5d644de997804.jpg','IMAGE',36,'apartment'),(109,'/storage/ss5d644de997bac.jpg','IMAGE',36,'apartment'),(110,'/storage/ss5d644de99804f.JPG','IMAGE',36,'apartment'),(111,'/storage/ss5d644e08c6761.jpg','IMAGE',37,'apartment'),(112,'/storage/ss5d644e08c6f4e.jpg','IMAGE',37,'apartment'),(113,'/storage/ss5d644e08c72eb.jpg','IMAGE',37,'apartment'),(114,'/storage/ss5d644e08c7644.JPG','IMAGE',37,'apartment'),(115,'/storage/ss5d644e149952c.jpg','IMAGE',38,'apartment'),(116,'/storage/ss5d644e1499c7a.jpg','IMAGE',38,'apartment'),(117,'/storage/ss5d644e149a28f.jpg','IMAGE',38,'apartment'),(118,'/storage/ss5d644e149a608.JPG','IMAGE',38,'apartment'),(119,'/storage/ss5d644e1a2642f.jpg','IMAGE',39,'apartment'),(120,'/storage/ss5d644e1a26a04.jpg','IMAGE',39,'apartment'),(121,'/storage/ss5d644e1a26f27.jpg','IMAGE',39,'apartment'),(122,'/storage/ss5d644e1a272f8.JPG','IMAGE',39,'apartment'),(123,'/storage/ss5d644e2982db0.jpg','IMAGE',40,'apartment'),(124,'/storage/ss5d644e298332f.jpg','IMAGE',40,'apartment'),(125,'/storage/ss5d644e29838e9.jpg','IMAGE',40,'apartment'),(126,'/storage/ss5d644e2983c92.JPG','IMAGE',40,'apartment'),(127,'/storage/ss5d644e29e1e36.jpg','IMAGE',41,'apartment'),(128,'/storage/ss5d644e29e2561.jpg','IMAGE',41,'apartment'),(129,'/storage/ss5d644e29e29c2.jpg','IMAGE',41,'apartment'),(130,'/storage/ss5d644e29e2cfb.JPG','IMAGE',41,'apartment'),(131,'/storage/ss5d644e2aba7d0.jpg','IMAGE',42,'apartment'),(132,'/storage/ss5d644e2abad0e.jpg','IMAGE',42,'apartment'),(133,'/storage/ss5d644e2abb077.jpg','IMAGE',42,'apartment'),(134,'/storage/ss5d644e2abb598.JPG','IMAGE',42,'apartment');
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
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `newsletter`
--

LOCK TABLES `newsletter` WRITE;
/*!40000 ALTER TABLE `newsletter` DISABLE KEYS */;
INSERT INTO `newsletter` VALUES (1,'camilo.o19@gmail.com',1),(2,'developer.ecodev@gmail.com',1),(3,'ivannia82@gmail.com',1);
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
  `payment_type` enum('PAYPAL','ONETIME','RECURRENT') DEFAULT NULL,
  `payment_method` enum('PAYPAL','CREDIT CARD','CHECK','WIRE TRANSFER','CASH') DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_payment`),
  KEY `fk_payments_users1_idx` (`id_user`),
  CONSTRAINT `fk_payments_users1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id_user`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payment`
--

LOCK TABLES `payment` WRITE;
/*!40000 ALTER TABLE `payment` DISABLE KEYS */;
INSERT INTO `payment` VALUES (1,15,36,'160.00',1,NULL,'Booking apartment #22 since 2019-07-23 to 2019-07-25. Message: approved','approved','PAYID-LU346QQ06X868003T9125102','2019-07-24 00:00:00','PAYPAL',NULL,'2019-07-24 03:29:10','2019-07-24 03:29:10'),(2,16,36,'648.00',1,NULL,'Booking apartment #23 since 2019-07-30 to 2019-08-08. Message: approved','approved','PAYID-LU35CIQ8VF07442509206118','2019-07-24 00:00:00','PAYPAL',NULL,'2019-07-24 03:32:06','2019-07-24 03:32:06'),(3,17,21,'80.00',1,NULL,'Booking apartment #22 since 2019-08-05 to 2019-08-06. Message: approved','approved','PAYID-LU4IZTA2V961114BA341731L','2019-07-24 00:00:00','PAYPAL',NULL,'2019-07-24 16:57:39','2019-07-24 16:57:39');
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
  `name` varchar(45) DEFAULT NULL,
  `from` int(11) NOT NULL,
  `to` varchar(45) NOT NULL,
  `variant` double DEFAULT NULL,
  PRIMARY KEY (`id_rate`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rate`
--

LOCK TABLES `rate` WRITE;
/*!40000 ALTER TABLE `rate` DISABLE KEYS */;
INSERT INTO `rate` VALUES (14,'Basic',1,'6',0),(15,'Platinum',7,'30',10),(16,'Plata',31,'90',20),(17,'Oro',91,'1000000000',30);
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
INSERT INTO `user_address` VALUES (21,59),(21,60),(21,61),(34,1),(36,3),(36,4),(36,5),(36,6),(36,7),(36,8),(36,55),(36,56),(36,57),(36,58),(36,62),(37,9),(37,10),(38,11),(38,12),(39,13),(39,14),(39,15),(39,16),(39,17),(39,18),(39,19),(39,20),(39,21),(39,22),(39,23),(39,24),(39,25),(39,26),(39,27),(39,28),(39,29),(39,30),(39,31),(39,32),(39,33),(39,34),(39,35),(39,36),(39,37),(39,38),(39,39),(39,40),(39,41),(39,42),(40,43),(40,44),(40,45),(40,46),(40,47),(40,48),(40,49),(40,50),(40,51),(41,52),(41,53),(42,54);
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
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (21,'admin@sabanastays.com','$2y$10$LJ5ZPmIS0Ei5c6KnxY27su4mJ28.huE/S1N5Nt6H1u9ST0n2RKW.K',NULL,'Administrador','Sabana Stays','MALE','1990-01-15','2018-05-10 21:55:35',NULL,NULL,NULL,NULL,NULL,'ADMIN','','2018-05-10 21:55:35','2019-11-13 22:33:21','3100000000','NORMAL'),(26,'araya.silvia@gmail.com','$2y$10$LJ5ZPmIS0Ei5c6KnxY27su4mJ28.huE/S1N5Nt6H1u9ST0n2RKW.K',NULL,'Silvia','Araya',NULL,NULL,'2018-06-30 03:49:14',NULL,NULL,NULL,NULL,NULL,'USER','db269b1d7b43b99c050f48c52c291f6358eefce392f09b27b2a48a50abde3aed','2018-06-30 03:49:14','2018-06-30 03:49:14','87116572','NORMAL'),(27,'torre.r@grupoleumi.com','$2y$10$LJ5ZPmIS0Ei5c6KnxY27su4mJ28.huE/S1N5Nt6H1u9ST0n2RKW.K',NULL,'Ivannia','Mora ','FEMALE','1981-10-07','2018-07-05 21:33:43',NULL,NULL,NULL,NULL,NULL,'ADMIN','bfa015a6b44d3fee3df54e1d190619ccab016ce29902dc98a080ed07e651928d','2018-07-05 21:33:43','2018-07-06 21:41:08','506-47022046','NORMAL'),(29,'paymentwall@example.com','$2y$10$EQavsVO28mLpZ42nJjMwDubFUgjWcy7vN5pnk92NVdjrJwZkfkwYW',NULL,'Paymentwall','User','MALE','1990-01-01','2018-07-18 21:01:01',NULL,NULL,NULL,NULL,NULL,'USER','18720300e98d9f68138ac4a552b6963311dc233190843b1da42150ba95f94fb7','2018-07-18 21:01:01','2018-08-07 13:13:57','3869756','NORMAL'),(30,'ventas@grupoleumi.com','$2y$10$jQbU6GA/indm.jEOgdjEbuxghD0aVzRZWdrwrVWWiqST8GHQmXYpa',NULL,'Daniel','Victoria','MALE','1990-01-01','2018-07-19 15:30:42',NULL,NULL,NULL,NULL,NULL,'USER','','2018-07-19 15:30:42','2018-07-19 16:09:46','506 88116227','NORMAL'),(31,'carlos@charlieapps.com','$2y$10$U7D1W.x6TTtLtBghZQiJ1uJsqi7JF4i5amIUAvL/ettD922DtTVhe',NULL,'Carlos','Ovalles',NULL,NULL,'2018-07-19 16:10:36',NULL,NULL,NULL,NULL,NULL,'USER','','2018-07-19 16:10:36','2018-07-19 16:11:31','+13053038639','NORMAL'),(32,'carlosaovalles@gmail.com','$2y$10$LYrCXp83s7C9h0pMJO4.ueKu.Lsgdq7jmB1xvBY3KoAZ9wvgTrclm',NULL,'Carlos Ovalles',NULL,NULL,NULL,'2018-07-19 16:12:46',NULL,NULL,NULL,NULL,NULL,'USER','89c6e49da3426738fef6e753c14946b088840017f7b123819feabadf4d6288b1','2018-07-19 16:12:46','2018-07-19 16:14:04',NULL,'GOOGLE'),(33,'camilo.o19@gmail.com','$2y$10$IBNNy9HucZrFD.vrS5AwXecATk709jVILKiBEbUn9Mp.eJepFW/Dm',NULL,'Camilo Orozco',NULL,NULL,NULL,'2018-07-19 18:58:17',NULL,NULL,NULL,NULL,NULL,'USER','','2018-07-19 18:58:17','2018-07-19 18:59:01',NULL,'GOOGLE'),(34,'pao.giso@gmail.com','$2y$10$HVwA5/ecnwv.yjkH2cV58.tABBXEQlqeyppdhI1xxQetYrgC.hfji',NULL,'Paola','Giraldo',NULL,NULL,'2018-08-21 08:11:40',NULL,NULL,NULL,NULL,NULL,'USER','','2018-08-21 08:11:40','2018-08-21 09:03:01',NULL,'NORMAL'),(36,'corozco@ecodev.com.co','$2y$10$erZzRFB4GhawyaBSHG2Ja.3Za2/FQTi4C2X/Vv52Zc6wZ/xcRl8pG',NULL,'Edwin','Marquez',NULL,NULL,'2018-08-21 09:14:38',NULL,NULL,NULL,NULL,NULL,'USER','1f01d1113c8c253006bded4f8f15b7c84e9700f43745ee05e876795ed32ecfa9','2018-08-21 09:14:38','2019-09-05 19:00:50',NULL,'NORMAL'),(37,'ceo1@ceo1.com','$2y$10$hdaTx3IxG5nIoAeCl/ZFreaAlfTugPzorKrlanzgmsj.mgKK0txaq',NULL,'ceo1','ceo1',NULL,NULL,'2018-10-31 16:53:54',NULL,NULL,NULL,NULL,NULL,'USER','','2018-10-31 16:53:54','2018-11-01 17:59:09',NULL,'NORMAL'),(38,'ceo2@ceo2.com','$2y$10$FE/1w3P..fG98EfXpSg4d.yZ5jFi2rfvR02kpP407AeEPuc46tXNe',NULL,'Camilo','Orozco',NULL,NULL,'2018-11-01 18:01:06',NULL,NULL,NULL,NULL,NULL,'USER','5f5dc3c70badad5c7a7645c6d55828f354d7a31b598f5a67e242143c82ac6a89','2018-11-01 18:01:06','2018-11-01 18:01:06',NULL,'NORMAL'),(39,'serranorandall@gmail.com','$2y$10$0X/VT6Uany7v0RmwZzv1te8Iy.mUC0HAoLmiP2VtjtxseUFSoSi4m',NULL,'Randall','Serrano Torres',NULL,NULL,'2018-12-03 02:40:10',NULL,NULL,NULL,NULL,NULL,'USER','e42486fe8b3c750eb79b91048cbb8999fb394a57d83b9fb6f1948503360a4d0b','2018-12-03 02:40:10','2018-12-03 02:40:10',NULL,'NORMAL'),(40,'norman.chaves@hotmail.com','$2y$10$LmHleAG2ecIgAe7twknfpemVfEALwKcPvMncjsE7sgwvjn3Hk.94a',NULL,'Norman','Chaves',NULL,NULL,'2019-03-02 19:26:06',NULL,NULL,NULL,NULL,NULL,'USER','3f10b2cbd6e911aacb66a46b3050be3389c0cca89053c9d2d396e25aeca41bb4','2019-03-02 19:26:06','2019-03-02 19:26:07',NULL,'NORMAL'),(41,'giorgio@dintdigital.com','$2y$10$RHL6uWx.lA9yRkcav36cfuGhhg099y0DEllWGfy4DpXh1UMHwn8uO',NULL,'Giorgio','Bolzoni',NULL,NULL,'2019-03-25 17:26:57',NULL,NULL,NULL,NULL,NULL,'USER','102e1c7b228eb8bb8e1d379407d718cbf1ab0fcde8f34aec9a8252628953f8b6','2019-03-25 17:26:57','2019-03-25 17:26:57',NULL,'NORMAL'),(42,'jimmy@dintdigital.com','$2y$10$xjIa4JRTgHHmK6uKDvuQPOL0LETawku7fo9XRNvEt4HYXFwGfBTFm',NULL,'Jimmy Guevara 2','22','MALE','2019-03-15','2019-03-25 17:29:27',NULL,NULL,NULL,NULL,NULL,'USER','f534a2cdfab6c4f1c090ed4fc66e10aaa8fc0e84855b32deaec7d0820779ad24','2019-03-25 17:29:27','2019-03-25 17:30:28',NULL,'GOOGLE'),(43,'westcopleasant@gmail.com','$2y$10$u0H.dJfoh96BFhFyVT96XeBKKPiMvOcZFLSNWXL8.XtkXS/sMaGgy',NULL,'Andrea','Pardo',NULL,NULL,'2019-08-12 15:07:14',NULL,NULL,NULL,NULL,NULL,'USER','41887d891892da5fd8f57283418f81d84958875678d7a729c43008319f2007b9','2019-08-12 15:07:14','2019-08-12 15:07:14','83191923','NORMAL'),(44,'artemmawb@mail.ru','$2y$10$2Zt1nf7UM2CIASD9FHs0ZOfE8NV0/FGXBEWI1UDlUQscsJLy29Tc6',NULL,'J3FV0AI3N www.yandex.ru/42','J3FV0AI3N www.yandex.ru/42',NULL,NULL,'2020-06-20 04:05:25',NULL,NULL,NULL,NULL,NULL,'USER','2a22e52cab9ada5ef21d80a2a9fc3600d4a541472a867acc4f31c0518869f652','2020-06-20 04:05:25','2020-06-20 04:05:25','J3FV0AI3N www.yandex.ru/42','NORMAL');
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

-- Dump completed on 2022-07-14  4:02:45
