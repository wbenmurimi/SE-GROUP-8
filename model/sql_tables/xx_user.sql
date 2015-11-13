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
-- Table structure for table `xx_user`
--

CREATE TABLE IF NOT EXISTS `xx_user` (
  `user_id` int(110) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(50) NOT NULL,
  `user_pass` varchar(50) NOT NULL,
  `user_email` varchar(50) NOT NULL,
  `user_phone` varchar(13) NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=9 ;

--
-- Dumping data for table `xx_user`
--

INSERT INTO `xx_user` (`user_id`, `user_name`, `user_pass`, `user_email`, `user_phone`) VALUES
(2, 'ben', 'ben', 'ben@gmail.com', '0542615890'),
(5, 'dan', 'dan', 'dan@gmail.com', '5645674854'),
(6, 'ruth', 'ruth', 'ruth@gmail.com', '345734568346'),
(7, 'franco', 'franco', 'franco@gmail.com', '45629362893'),
(8, 'davie', 'davie', 'davie@gmail.com', '6452382434');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
