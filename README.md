# ✈ Mesto (фронтенд и бэкенд)
**«Mesto»** — это веб-сервис, с помощью которого пользователи могут обмениваться фотографиями своих любимых мест (и не только) и оценивать чужие фотографии. Проект был выполнен в рамках серии проектных работ в Яндекс Практикуме по профессии «Веб-разработчик».

![Сервис Mesto](https://user-images.githubusercontent.com/100028583/215279745-d78add0f-0a8d-4ae2-bd5b-470986666b96.png)

## Функционал
* Авторизация и регистрация пользователей
* Редактирование своего профиля (имя, профессия, аватар)
* Создание и удаление своих карточек с картинками
* Оценка карточек с помощью лайков

## Технологии (фронтенд)
* React (18.2.0)
* React-router-dom (5.2.1)
* JavaScript (ES6)
* CSS3
* JSX
* ООП
* Адаптивная верстка
* БЭМ
* Git
* Figma

## Технологии (бэкенд)
* Node.js
* Express.js
* Mongoose
* MongoDB
* Bcrypt
* Celebrate
* Helmet
* ESLint

## Архитектура (бэкенд)
<img alt="app-architecture" src="https://user-images.githubusercontent.com/100028583/215335139-42a77150-697a-4d59-98e4-bbd1da0d3126.png">

## Что можно доработать?
* Добавить светлую тему
* Добавить возможность смены языка на английский
* Вынести профиль в отдельную страницу
* Вынести редактирование профиля, смену темы и т.д. в настройки
* Очистка пользовательского ввода с помощью пакета ```XSS-Clean```
* Удаление запрещенных символов ```$``` и ```.``` из ```req.body```, ```req.query``` и ```req.params``` с помощью пакета ```Express Mongo Sanitize```
* Защита от обхода проверок ввода и DoS-атак с помощью ошибки ```Uncaught TypeError``` в асинхронном коде, приводящей к сбою сервера. Воспользоваться пакетом ```HPP```

## Другие учебные проекты из Яндекс Практикума
1. [Научиться учиться](https://github.com/alexeylavrinenkov/how-to-learn)
2. [Путешествие по России](https://github.com/alexeylavrinenkov/russian-travel)
3. [Mesto (чистый JavaScript)](https://github.com/alexeylavrinenkov/mesto)
4. [Mesto (React)](https://github.com/alexeylavrinenkov/mesto-react)
5. [Mesto (React, авторизация)](https://github.com/alexeylavrinenkov/react-mesto-auth)
6. [Mesto (серверная часть)](https://github.com/alexeylavrinenkov/express-mesto-gha)
7. Mesto (фронтенд и бэкенд) ⬅ текущий репозиторий
