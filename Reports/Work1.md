<style>
    p {
        text-indent: 20px;
        text-align: justify;
    }
    h1, h2 {
        text-align: center;
    }
</style>
<h1>Отчёт по работе №1</h1>
<h2>Вариант №6</h2>

<p>
<b>Цель:</b> исследование технологий создания Progressive Web Application PWA приложения на стеке технологий NodeJS.
</p>
<p>
В ходе выполнения работы использовался следующий набор инструментов:
</p>

- Microsoft Visual Studio Code
- Node.js
- Веб-браузер Mozilla Firefox Developer Edition
- git

<p>
Вместе с Node.js автоматически устанавливается менеджер пакетов npm. С его помощью, путем выполнения команды <code>npm install</code> были загружены следующие библиотеки и фреймворки:
</p>

- colors
- Vue
- workbox-cli
- firebase-tools
- serve
- vuetify

<p>
Затем при помощи команды <code>vue create isn-app</code> был инициализирован новый проект с использованием фреймворка Vue. Манифест приложения был сгенерирован автоматически с использованием специального <a href="https://progressier.com/pwa-manifest-generator">сервиса Progressier</a>. Затем с помощью инструмента <code>workbox</code> был сгенерирован сервис-воркер - сценарий, выполняющийся в фоне, и служащий для таких функций, как push-уведомления.
</p>
<p>
Результаты выполнения данных действий представлены на следуюших рисунках:
</p>