# Git. Homework.

1. Создать репозиторий (git init)
2. Создать ветку `master` (git checkout -b master)
3. Создать файл `index.html` (написать хотя бы "Hello world") 
    1. Добавить файл `index.html` в индекс (git add index.html)
    2. Закоммитить файл `index.html` (git commit -m "Added index.html.")
4. Создать файл `style.css` (сброс стилей + своя небольшая стилизация) 
    1. Добавить файл `style.css` в индекс (git add style.css)
    2. Закоммитить файл `style.css` (git commit -m "Added style.css")
5. Создать ветку `version-1` от ветки `master` (git branch version-1)
6. Продолжить разработку в `master` 
7. Переименовать файл `style.css` -> `styles.css` 
    1. Добавить изменение в в индекс (git mv style.css styles.css)
    2. Закоммитить изменения (git commit -m "rename style.css => styles.css")
8. Создать файл `index.js` и подключить его к документу (вызвать `console.log` или `alert`) (git add index.html)
    1. Добавить файл `index.js` в индекс  (git add index.js)
    2. Закоммитить файл `index.js` (git commit -m "added index.js")
9. Изменить какое-нибудь свойство стилей (например цвет) 
    1. Добавить изменение в в индекс (git add styles.css)
    2. Закоммитить измениения в `master` (git commit -m "added new font-size") ([master 1ad69a5])
    3. Перейти на ветку `version-1` (git checkout version-1)
    4. Применить коммит с изменениями стилей в текущую ветку (git cherry-pick 1ad69a5)


В качестве решения должны быть:
- Ссылка на удаленный репозиторий (https://github.com/Nasoker/git/)
- Список команд для каждого пункта
