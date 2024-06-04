## Информация о проекте

Данные проект направлен на освоение и применение основных практик используемых во frontend-приложениях. Проект является учебно-демонстрационным (PET-project).

![PET-project image](/docs/assets/project_new.png)


## Используемые библиотеки

- `react` - создание компонентов
- `storybook` - документирование компонентов
- `eslint` - линтер ts, scss
- `jest` - тестирование
- `babel` - транслятор tsx-кода
- `loki` - тестирование ui-компонентов
- `webpack` - полный продакшен сборщик
- `vite` - компактный и быстрый сборщик 
- `i18next` - переводы
- `virtuoso` - виртуализация рендеринга
- `redux`-toolkit - стейт и данные

---

## Запуск проекта


1) `npm install` - установка необходимых библиотек
2) `npm run start:dev` - запуск json-сервера и проекта в dev-mode (webpack)
    или
    `npm run start:dev:vite` - запуск json-севера + проекта в dev-mode (vite)
3) Complete ;)

----

## Команды

- `npm run start` - Запуск react-приложения в <u>dev-mode</u> (webpack)
- `npm run start:vite` - Запуск react-приложения в <u>dev-mode</u> (vite)
- `npm run start:dev` - Запуск json-server и react-приложения в <u>dev-mode</u> (webpack)
- `npm run start:dev:vite` - Запуск json-server и react-приложения в <u>dev-mode</u> (vite)
- `npm run start:dev:server` - Запуск json-server
- `npm run build:prod` - Сборка react-проекта в <u>prod-mode</u>
- `npm run build:dev` - Сборка react-проекта в <u>dev-mode</u> (без оптимизации)
- `npm run lint:ts` - Проверка ts файлов линтером
- `npm run lint:ts:fix` - Исправление ts файлов линтером
- `npm run lint:scss` - Проверка scss файлов style линтером
- `npm run lint:scss:fix` - Исправление scss файлов style линтером
- `npm run test:unit` - Запуск unit тестов с jest
- `npm run test:ui` - Запуск скриншотных тестов с loki
- `npm run test:ui:ok` - Подтверждение новых скриншотов
- `npm run test:ui:ci` - Запуск скриншотных тестов в CI
- `npm run test:ui:report` - Генерация полного отчета для скриншотных тестов
- `npm run test:ui:json` - Генерация json отчета для скриншотных тестов
- `npm run test:ui:html` - Генерация HTML отчета для скриншотных тестов
- `npm run storybook` - запуск Storybook
- `npm run storybook:build` - Сборка storybook
- `npm run prepare` - прекоммит хуки
- `md npm run remove-features nameFeature on/off` - переключение feautre-флагов

----

## Архитектура проекта

Проект использует архитектуру **feature sliced design** - архитектурная методология для создания интерфейсных приложений. Основная цель этой методологии - сделать проект более понятным и структурированным в условиях постоянно меняющихся бизнес-требований.
![feature sliced design](docs/assets/FSD.png)
Ссылка на документацию FSD - [feature sliced design](https://feature-sliced.design/docs/get-started/tutorial)

----

## Переводы

В проекте используется библиотека **i18next** для работы с переводами.
Файлы с переводами хранятся в public/locales.
Присутствует линтер на i18next. При необходимости добавить поля HTML-тегов в игнор-лист нужно зайти в конфиг **.eslintrc.js**, правило i18next/no-literal-string поле ignoreAttribute.
*Для комфортной работы рекомендуется установить плагин для vscode*

Ссылка на документацию i18next - [react i18next](https://react.i18next.com/)

----

## Сборщики и конфиги

В проекте есть 2 сборщика и соответствующими им конфигами:
1. `Webpack` - ./config/build
2. `vite` - vite.config.ts

Оба сборщика адаптированы под основные фичи приложения.

Вся конфигурация хранится в /config
- `/config/babel` - babel
- `/config/build` - конфигурация webpack
- `/config/jest` - конфигурация тестовой среды
- `/config/storybook` - конфигурация сторибука

В папке **scripts** находятся различные скрипты для рефакторинга, упрощения написания кода, генерации отчетов и тд.

----

## CI pipeline и pre-commit хуки

Конфигурация github actions находится в /.github/workflows.
В ci прогоняются все виды тестов, сборка проекта и сторибука, линтинг.

В прекоммит хуках проверяем проект линтерами, конфиг в /.husky

----

## Работы с feature-flags

При добавлении новой фичи, виджета или сущности можно использоваться feature-flag. Это позволяет внедрять нововведение постепенно, выбирая круг пользователей, которым она доступна.

```TSX
const toggleFeature = toggleFeatures(
    {
        name: 'название флага',
        off: () => <OldComponent/>,
        on: () => <NewComponent/>,
    },
);
```

После окончательного запуска нововведения в прод, можно запустить скрипт remove-feature, который автоматически заменит toggleFeatures на новый компонент

----

## Дополнительно

- ##### [Работа с данными](/docs/data.md) 
- ##### [Тесты](/docs/test.md)
- ##### [Линтинг](/docs/lint.md)
- ##### [Storybook](/docs/storybook.md)

---
## Сущности (entities)

- [Article](/src/entities/Article)
- [Comment](/src/entities/Comment)
- [Counter](/src/entities/Counter)
- [Country](/src/entities/Country)
- [Currency](/src/entities/Currency)
- [Notification](/src/entities/Notification)
- [Profile](/src/entities/Profile)
- [Rating](/src/entities/Rating)
- [User](/src/entities/User)

## Фичи (features)

- [ArticleViewSwitcher](/src/features/Article/ArticleViewSwitcher/)
- [ArticleTypeTabs](/src/features/Article/ArticleTypeTabs/)
- [ArticleSortSelector](/src/features/Article/ArticleSortSelector/)
- [ArticleRecommend](/src/features/Article/ArticleRecommend/)
- [ArticleRating](/src/features/Article/ArticleRating/)
- [ArticleCommentForm](/src/features/Article/ArticleCommentForm/)
- [AuthByUsername](/src/features/AuthByUsername/)
- [AvatarDropdown](/src/features/AvatarDropdown/)
- [NotificationBtn](/src/features/NotificationBtn/)
- [ProfileRating](/src/features/Profile/ProfileRating/)
- [EditableProfile](/src/features/Profile/EditableProfile/)
- [ScrollSave](/src/features/ScrollSave/)
- [ThemeSwitcher](/src/features/Switcher/ThemeSwitcher/)
- [LangSwitcher](/src/features/Switcher/LangSwitcher/)

## Автор

[LicrimoVor](https://github.com/LicrimoVor) - 0_0