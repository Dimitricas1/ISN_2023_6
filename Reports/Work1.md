<h1 align="center">Отчёт по работе №1</h1>
<h2 align="center">Вариант №6</h2>

<p align="justify">&nbsp;&nbsp;&nbsp;
<b>Цель:</b> исследование технологий создания Progressive Web Application PWA приложения на стеке технологий NodeJS.
</p>
<p align="justify">&nbsp;&nbsp;&nbsp;
В ходе выполнения работы использовался следующий набор инструментов:
</p>

- Microsoft Visual Studio Code
- Node.js
- Веб-браузер Mozilla Firefox Developer Edition
- git

<p align="justify">&nbsp;&nbsp;&nbsp;
Вместе с Node.js автоматически устанавливается менеджер пакетов npm. С его помощью, путем выполнения команды <code>npm install</code> были загружены следующие библиотеки и фреймворки:
</p>

- colors
- Vue
- workbox-cli
- firebase-tools
- serve
- vuetify

<p align="justify">&nbsp;&nbsp;&nbsp;
Затем при помощи команды <code>vue create isn-app</code> был инициализирован новый проект с использованием фреймворка Vue. Манифест приложения был сгенерирован автоматически с использованием специального <a href="https://progressier.com/pwa-manifest-generator">сервиса Progressier</a>. Затем с помощью инструмента <code>workbox</code> был сгенерирован сервис-воркер - сценарий, выполняющийся в фоне, и служащий для таких функций, как push-уведомления.
</p>
<p align="justify">&nbsp;&nbsp;&nbsp;
Результаты выполнения данных действий представлены на следуюших рисунках:
</p>

![Рисунок 1. Простейшее приложение Vue](/Reports/images/application.JPG)
<p align="center">Рисунок 1. Простейшее приложение Vue</p>

![Рисунок 2. Зарегистрированный Service Worker](/Reports/images/sworker.JPG)
<p align="center">Рисунок 2. Зарегистрированный Service Worker</p>

![Рисунок 3. Зарегистрированный манифест](/Reports/images/manifest.JPG)
<p align="center">Рисунок 3. Зарегистрированный манифест</p>

---
<p align="justify">&nbsp;&nbsp;&nbsp;
<b>Вывод:</b> в ходе выполнения работы была исследована технология создания Progressive Web Application PWA приложения на стеке технологий NodeJS.
</p>