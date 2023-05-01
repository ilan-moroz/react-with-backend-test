-- MySQL dump 10.13  Distrib 8.0.27, for macos11 (x86_64)
--
-- Host: localhost    Database: meetings
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `meetingTable`
--

DROP TABLE IF EXISTS `meetingTable`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `meetingTable` (
  `meetingKey` int NOT NULL AUTO_INCREMENT,
  `groupKey` int NOT NULL,
  `startTimeDate` varchar(45) NOT NULL,
  `finishTimeDate` varchar(45) NOT NULL,
  `meetingInfo` varchar(190) NOT NULL,
  `meetingRoom` varchar(45) NOT NULL,
  PRIMARY KEY (`meetingKey`),
  KEY `groupKey` (`groupKey`),
  CONSTRAINT `meetingtable_ibfk_1` FOREIGN KEY (`groupKey`) REFERENCES `production` (`groupKey`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `meetingTable`
--

LOCK TABLES `meetingTable` WRITE;
/*!40000 ALTER TABLE `meetingTable` DISABLE KEYS */;
INSERT INTO `meetingTable` VALUES (1,1,'2023-05-01 11:28','2023-05-01 13:28','do so math','math room'),(2,1,'2023-05-01 14:29','2023-05-01 17:29','bla bla bla','bla bla room'),(3,2,'2023-05-01 11:30','2023-05-01 17:30','mobile stuff','mobile room'),(4,2,'2023-05-01 12:30','2023-05-01 12:36','hahaha','haha room'),(5,3,'2023-05-01 13:30','2023-05-01 17:30','style','UI office'),(6,2,'2023-05-01 13:45','2023-05-01 15:45','test test','test room'),(7,3,'2023-05-16 11:49','2023-05-17 11:49','bdika','bdika room'),(9,3,'2023-05-01 12:02','2023-05-02 12:02','yoooo yoooo','yoyo room'),(10,1,'2023-05-01 12:10','2023-05-01 13:09','error test','error room'),(11,2,'2023-05-01 13:57','2023-05-01 14:57','test123','test123'),(12,1,'2023-05-01 13:02','2023-05-01 14:02','test1212','test room'),(13,1,'2023-05-01 14:11','2023-05-01 19:11','1212','1212');
/*!40000 ALTER TABLE `meetingTable` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `production`
--

DROP TABLE IF EXISTS `production`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `production` (
  `groupKey` int NOT NULL AUTO_INCREMENT,
  `groupName` varchar(90) NOT NULL,
  PRIMARY KEY (`groupKey`),
  UNIQUE KEY `groupName` (`groupName`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `production`
--

LOCK TABLES `production` WRITE;
/*!40000 ALTER TABLE `production` DISABLE KEYS */;
INSERT INTO `production` VALUES (2,'Mobile Team '),(1,'React Team '),(3,'UI team ');
/*!40000 ALTER TABLE `production` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-01 13:33:02
