-- phpMyAdmin SQL Dump
-- version 4.0.10deb1
-- http://www.phpmyadmin.net
--
-- Хост: localhost
-- Время создания: Апр 13 2015 г., 15:31
-- Версия сервера: 5.5.38-0ubuntu0.14.04.1
-- Версия PHP: 5.5.9-1ubuntu4.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- База данных: `dev-it`
--

-- --------------------------------------------------------

--
-- Структура таблицы `clothes`
--

CREATE TABLE IF NOT EXISTS `clothes` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `color_id` int(11) unsigned NOT NULL,
  `size_id` int(11) unsigned NOT NULL,
  `name` varchar(128) COLLATE utf8_unicode_ci NOT NULL,
  `photo` varchar(128) COLLATE utf8_unicode_ci NOT NULL,
  `price` decimal(5,2) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `color_id` (`color_id`),
  KEY `size_id` (`size_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=17 ;

--
-- Дамп данных таблицы `clothes`
--

INSERT INTO `clothes` (`id`, `color_id`, `size_id`, `name`, `photo`, `price`) VALUES
(1, 3, 2, 'Lace embroidered chiffon top', '16-240x360.jpg', 35.99),
(2, 7, 1, 'Lace embroidered chiffon top', '15-240x360.jpg', 35.99),
(3, 1, 4, 'Chain embroidered blazer', '14-240x360.jpg', 53.99),
(4, 2, 4, 'Cropped hoodie', '13-240x360.jpg', 54.99),
(5, 8, 5, 'High neck lace bodysuit', '12-240x360.jpg', 31.99),
(6, 1, 5, 'Sleek zip pocket blazer', '11-240x360.jpg', 62.99),
(7, 6, 4, 'Sleek zip pocket blazer', '10-240x360.jpg', 62.99),
(8, 8, 1, 'Sleek zip pocket blazer', '9-240x360.jpg', 62.99),
(9, 1, 2, 'Oversized pleather jacket', '8-240x360.jpg', 56.99),
(10, 1, 3, 'Maxi set', '7-240x360.jpg', 42.99),
(11, 4, 1, 'Faux jewel corset', '6-240x360.jpg', 42.99),
(12, 2, 1, 'Crochet boxy crop top', '5-240x360.jpg', 15.99),
(13, 3, 2, 'I woke up like this top', '3-240x360.jpg', 22.99),
(14, 5, 4, 'NY to Paris top', '2-240x360.jpg', 22.99),
(15, 1, 3, 'Mesh & lace top', '1-240x360.jpg', 64.99),
(16, 6, 1, 'Rose gold sequin top', '4-240x360.jpg', 24.99);

-- --------------------------------------------------------

--
-- Структура таблицы `colors`
--

CREATE TABLE IF NOT EXISTS `colors` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(128) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=9 ;

--
-- Дамп данных таблицы `colors`
--

INSERT INTO `colors` (`id`, `name`) VALUES
(1, 'Black'),
(2, 'Gray'),
(3, 'Ivory'),
(4, 'Multi'),
(5, 'Navy blue'),
(6, 'Pink'),
(7, 'Taupe'),
(8, 'White');

-- --------------------------------------------------------

--
-- Структура таблицы `sizes`
--

CREATE TABLE IF NOT EXISTS `sizes` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(128) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=6 ;

--
-- Дамп данных таблицы `sizes`
--

INSERT INTO `sizes` (`id`, `name`) VALUES
(1, 'L'),
(2, 'M'),
(3, 'S'),
(4, 'S/M'),
(5, 'M/L');

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `clothes`
--
ALTER TABLE `clothes`
  ADD CONSTRAINT `clothes_ibfk_2` FOREIGN KEY (`size_id`) REFERENCES `sizes` (`id`),
  ADD CONSTRAINT `clothes_ibfk_1` FOREIGN KEY (`color_id`) REFERENCES `colors` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
