<h1 align="center">Отчёт по работе №1</h1>
<h2 align="center">Вариант №6</h2>

<p align="justify">
<b>Цель:</b> исследование технологий создания Progressive Web Application PWA приложения на стеке технологий NodeJS.
</p>
<p align="justify">
В ходе выполнения работы использовался следующий набор инструментов:
</p>

- Microsoft Visual Studio Code
- Node.js
- Веб-браузер Mozilla Firefox Developer Edition
- git

<p align="justify">
Вместе с Node.js автоматически устанавливается менеджер пакетов npm. С его помощью, путем выполнения команды <code>npm install</code> были загружены следующие библиотеки и фреймворки:
</p>

- colors
- Vue
- workbox-cli
- firebase-tools
- serve
- vuetify

<p align="justify">
Затем при помощи команды <code>vue create isn-app</code> был инициализирован новый проект с использованием фреймворка Vue. Манифест приложения был сгенерирован автоматически с использованием специального <a href="https://progressier.com/pwa-manifest-generator">сервиса Progressier</a>. Затем с помощью инструмента <code>workbox</code> был сгенерирован сервис-воркер - сценарий, выполняющийся в фоне, и служащий для таких функций, как push-уведомления.
</p>
<p align="justify">
Результаты выполнения данных действий представлены на следуюших рисунках:
</p>