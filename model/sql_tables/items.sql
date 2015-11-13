-- phpMyAdmin SQL Dump
-- version 4.1.13
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Nov 13, 2015 at 11:39 AM
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
-- Table structure for table `items`
--

CREATE TABLE IF NOT EXISTS `items` (
  `item_number` varchar(255) NOT NULL,
  `barcode_number` int(11) NOT NULL DEFAULT '0',
  `item_name` varchar(50) NOT NULL,
  `manufacturer` varchar(20) NOT NULL,
  `price` int(11) NOT NULL DEFAULT '0',
  `date_bought` date NOT NULL,
  `last_repair_date` date NOT NULL,
  `conditions` varchar(100) NOT NULL,
  `location` varchar(50) NOT NULL,
  `department` varchar(50) NOT NULL,
  `userid` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `items`
--

INSERT INTO `items` (`item_number`, `barcode_number`, `item_name`, `manufacturer`, `price`, `date_bought`, `last_repair_date`, `conditions`, `location`, `department`, `userid`) VALUES
('3500', 2147483647, 'web Server', 'Samsung', 15000, '2014-04-20', '2014-03-14', 'Excellent', 'LAB 304', 'Electrical Engineering', 0),
('4365', 2363, 'tool kits', 'Sonny', 1234, '1970-01-01', '1970-01-01', '', 'LH221', 'Computer Science', 0),
('456', 3724640, '34545', 'HP', 547, '1970-01-01', '1970-01-01', 'bad', 'library', 'computer science', 0),
('56432', 4089, 'internet cables', 'Sonny', 200, '1970-01-01', '1970-01-01', 'Good', 'Lab', 'Management Info Systems', 0),
('5698756', 45694, 'Clasic laptop 2', 'Lenovo', 4500, '2015-10-02', '2014-02-02', 'fair', 'lab', 'Computer Engineering', 0),
('600', 3489757, 'DELALI-', 'Samsung', 5000, '2012-04-12', '2014-08-10', 'poor', 'LAB221', 'Electrical Engineering', 0),
('111', 222, 'Test', 'Samsung', 333, '0000-00-00', '0000-00-00', 'Testing', 'Accra', 'CS', 0);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
