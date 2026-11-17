# devops-practice

[![CI](https://github.com/Azat1964/devops-practice/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/Azat1964/devops-practice/actions/workflows/ci.yml)

Что это: мини-приложение на Node.js в контейнере Docker, перед которым стоит Nginx в роли обратного прокси.

Запуск: `docker compose up -d`

Проверка: `curl localhost:8080/health` должен ответить `ok`.
