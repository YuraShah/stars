-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1
-- Время создания: Июл 04 2024 г., 08:39
-- Версия сервера: 10.4.25-MariaDB
-- Версия PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `stars`
--

-- --------------------------------------------------------

--
-- Структура таблицы `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `paym` int(1) NOT NULL DEFAULT 1,
  `surname` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `refresh_token` varchar(3000) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `user`
--

INSERT INTO `user` (`id`, `email`, `username`, `password`, `paym`, `surname`, `name`, `refresh_token`, `created_at`) VALUES
(2, 'alexeymatkov@mail.ru', 'AlexeyMatkov', '$2y$10$wHDQsxST6gO9yBrV7TWCpeOdeuE3EPpl8K0GAyg5aRAyMUEafSq0m', 1, 'Matkov', 'Alexey', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImtpZCI6IlF3ZXJ0eSJ9.eyJpc3MiOiJsb2NhbGhvc3QiLCJpYXQiOjE3MTk4MzA1NDksIm5iZiI6MTcxOTgzMDU1OSwiZXhwIjoxNzIyNDIyNTQ5LCJhdWQiOiJ1c2VyIiwiZGF0YSI6eyJpZCI6MiwiZW1haWwiOiJhbGV4ZXltYXRrb3ZAbWFpbC5ydSIsInVzZXJuYW1lIjoiQWxleGV5TWF0a292In19.luMqWxV3fRDFmRdNmbb7MMOPX5tdn91_x3xzSa3-DUg', '2024-07-01 10:42:29');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
