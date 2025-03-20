-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 15, 2022 at 03:30 PM
-- Server version: 10.4.19-MariaDB
-- PHP Version: 8.0.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `shopping_online_project`
--

-- --------------------------------------------------------

--
-- Table structure for table `cart_item`
--

CREATE TABLE `cart_item` (
  `itemID` int(10) NOT NULL,
  `productID` int(10) NOT NULL,
  `amount` int(11) NOT NULL,
  `price` double NOT NULL,
  `cartID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `categoryID` int(5) NOT NULL,
  `categoryName` varchar(18) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`categoryID`, `categoryName`) VALUES
(1, 'Fruits and Vegetab'),
(2, 'Milk and eggs'),
(3, 'Meat and fish'),
(4, 'Wine and drinks');

-- --------------------------------------------------------

--
-- Table structure for table `client`
--

CREATE TABLE `client` (
  `firstName` varchar(20) NOT NULL,
  `lastName` varchar(20) NOT NULL,
  `username_email` varchar(40) NOT NULL,
  `clientID` int(9) NOT NULL,
  `password` varchar(8) NOT NULL,
  `city` varchar(20) NOT NULL,
  `street` varchar(20) NOT NULL,
  `role` varchar(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `client`
--

INSERT INTO `client` (`firstName`, `lastName`, `username_email`, `clientID`, `password`, `city`, `street`, `role`) VALUES
('bbb', 'bbb', 'b@b.com', 90909090, 'undefine', 'Ashdod', 'bbb', ''),
('shashi', 'shashi', 'abcd@gmail.com', 121212121, 'aaa', 'Haifa', 'shashi', ''),
('bar', 'maz', 'barmaz@gmail.com', 123456789, 'abc1234', '', '', 'admin'),
('or', 'ori', 'a@a.com', 222222222, 'aa22', 'Jerusalem', 'or', ''),
('kil', 'kili', 'k@gmail.com', 765432189, 'kili', 'Petah Tikva', 'lil', ''),
('shashi', 'bla', 'itta@gmail.com', 777777777, 'itta', 'Jerusalem', 'shashi', ''),
('lol', 'lil', 'lol@gmail.com', 888888888, 'lol', 'Haifa', 'lil', ''),
('shashi', 'shashi', 'kiki@gmail.com', 888888889, 'kiki', 'Ashdod', 'shashi', ''),
('itzik', 'zed', 'itzik@gmail.com', 987654321, 'itzik', 'Rishon Lezion', 'horen', '');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `orderID` int(11) NOT NULL,
  `clientId` int(9) NOT NULL,
  `cartID` int(11) NOT NULL,
  `finalPrice` int(11) NOT NULL,
  `shipper_to_city` int(11) NOT NULL,
  `shipper_to_street` int(11) NOT NULL,
  `ShippedDate` date NOT NULL,
  `orderDate` date NOT NULL,
  `Last4digits` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `productId` int(10) NOT NULL,
  `productName` varchar(20) NOT NULL,
  `categoryID` int(5) NOT NULL,
  `price` double NOT NULL,
  `Image_path` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`productId`, `productName`, `categoryID`, `price`, `Image_path`) VALUES
(1, 'Carrot', 1, 6, 'carrot.png'),
(2, 'cucumber', 1, 7, 'cucumber.png'),
(3, 'tomato', 1, 6, 'tomato.png'),
(4, 'banana', 1, 6, 'banana.png'),
(5, 'mango', 1, 10, 'mango.png'),
(6, 'Eggs', 2, 26, 'eggs.png'),
(7, 'milk', 2, 6, 'milk.png'),
(8, 'cheese', 2, 6, 'cheese.png'),
(9, 'fish', 3, 50, 'fish.png'),
(10, 'meet', 3, 90, 'meet.png'),
(11, 'NESTEA', 4, 8, 'nestea.png'),
(12, 'YOLO', 2, 5, 'YOLO.jpg'),
(13, 'avocado', 1, 9.9, 'avocado.png'),
(14, 'Apple', 1, 7.4, 'apple.jpg'),
(15, 'orange', 1, 8.9, 'orange.jpg'),
(16, 'coca cola', 4, 10, 'cc.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `shoppingcart`
--

CREATE TABLE `shoppingcart` (
  `cartID` int(11) NOT NULL,
  `clientID` int(9) NOT NULL,
  `dateCreatedCart` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cart_item`
--
ALTER TABLE `cart_item`
  ADD PRIMARY KEY (`itemID`),
  ADD KEY `productID` (`productID`),
  ADD KEY `cartID` (`cartID`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`categoryID`);

--
-- Indexes for table `client`
--
ALTER TABLE `client`
  ADD PRIMARY KEY (`clientID`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`orderID`),
  ADD KEY `cityId` (`clientId`),
  ADD KEY `cartID` (`cartID`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`productId`),
  ADD KEY `categoryID` (`categoryID`),
  ADD KEY `categoryID_2` (`categoryID`);

--
-- Indexes for table `shoppingcart`
--
ALTER TABLE `shoppingcart`
  ADD PRIMARY KEY (`cartID`),
  ADD KEY `clientID` (`clientID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `categoryID` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `productId` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `cart_item`
--
ALTER TABLE `cart_item`
  ADD CONSTRAINT `cart_item_ibfk_1` FOREIGN KEY (`cartID`) REFERENCES `shoppingcart` (`cartID`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `cart_item_ibfk_2` FOREIGN KEY (`productID`) REFERENCES `products` (`productId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`cartID`) REFERENCES `shoppingcart` (`cartID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`categoryID`) REFERENCES `categories` (`categoryID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `shoppingcart`
--
ALTER TABLE `shoppingcart`
  ADD CONSTRAINT `shoppingcart_ibfk_1` FOREIGN KEY (`clientID`) REFERENCES `client` (`clientID`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
