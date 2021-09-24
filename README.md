[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)

# grandcore.org/docs

Универсальный генератор документации. Приложение придерживается модульной философии, функционал расширяется плагинами. Настройка производится через конфигурационный файл ([см. пример](https://github.com/grandcore/grandcore-docs/blob/main/example/doc-gen.conf.js)). Пользователь создаёт правила, указывая входную папку, маску для исходных файлов, настройки генератора и папку для записи готовых файлов. В конфигурации можно указать скрипты, которые будут исполнены после завершения работы основного сценария, например, для генерации сайта, используя инструменты типа Gatsby или 11ty.

В данный момент ведётся разработка (приложение ещё не функционирует). Если вы желаете принять участие в разработке, приглашаем в наш рабочий чат - https://t.me/joinchat/CdXoy9PeAjI2NTJh

## Установка

**Основная библиотека**

`npm i @grandcore.org/doc`

**Плагин для генерации JSDoc**

`@grandcore.org/doc__gen-js-jsdoc`

**Плагин для финализации в виде HTML файлов**

`@grandcore.org/doc__fin-html`
