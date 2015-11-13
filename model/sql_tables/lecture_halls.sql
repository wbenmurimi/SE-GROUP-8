-- phpMyAdmin SQL Dump
-- version 4.1.13
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Nov 13, 2015 at 11:45 AM
-- Server version: 5.1.73-cll
-- PHP Version: 5.3.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `csashesi_benson-wachira`
--

-- --------------------------------------------------------

--
-- Table structure for table `lecture_halls`
--

CREATE TABLE IF NOT EXISTS `lecture_halls` (
  `hall_number` varchar(100) NOT NULL DEFAULT '0',
  `hall_name` varchar(255) NOT NULL,
  `item_no` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `lecture_halls`
--

INSERT INTO `lecture_halls` (`hall_number`, `hall_name`, `item_no`) VALUES
('100', 'Library', 0),
('200', 'LIB', 0),
('LAB 221', 'My Lab', 0),
('LAB 402', 'EEngineering Lab', 0);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
