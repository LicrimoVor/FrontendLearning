## Работа с данными

Взаимодействие с данными осуществляется с помощью библиотеки **redux toolkit**.
По возможности переиспользуемые сущности необходимо нормализовать с помощью EntityAdapter


Запросы на сервер отправляются с помощью [RTK query](/src/shared/api/rtkApi.ts) и библиотеки axios. Для работы с axios используется [redux-thunk](https://redux.js.org/usage/writing-logic-thunks) - ассинхронный вызов функции.


Для асинхронного подключения редюсеров (чтобы не тянуть их в общий бандл) используется [DynamicModuleLoader](/src/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx)

Для асинхронной подгрузки библиотеки так использовался провайдер. Пример реализации можно посмотреть [здесь](/src/shared/lib/components/AnimationProvider/AnimationProvider.tsx)

Размер bundle на момент 27.05.2024:
![Bundle](/docs/assets/bundle.png)
![Bundle](/docs/assets/bundle_schema.png)


