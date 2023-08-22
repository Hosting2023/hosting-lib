# @hosting2023/redux-lib

Redux and API utility for our projects.

## 🚀 Installation

```bash
npm install @hosting2023/redux-lib@latest --registry=https://npm.pkg.github.com/hosting2023
```

## Для начала рекомендуется вызвать configureAPI и установить своё значение в поле baseURL

```javascript
import { configureAPI } from "@hosting2023/redux-lib";
configureAPI({
  baseURL: "https://myapi.com/",
});
```

## Экшены

### Доступные экшены из auth.actions.ts:

#### fetchSignIn:

Описание: Отправляет данные для входа на сервер.

Возвращает: ID пользователя после успешного входа.

Примечание: После этой функции, нужно выполнить fetchCheckAuth для проверки куки.

#### fetchSignUp:

Описание: Отправляет данные для регистрации на сервер.

Возвращает: ID зарегистрированного пользователя.

Примечание: После этой функции, нужно выполнить fetchCheckAuth для проверки куки.

#### fetchCheckAuth:

Описание: Проверяет статус аутентификации пользователя.

Возвращает: Статус аутентификации. Если статус 'authenticated', то устанавливает isAuth=true.

#### logout:

Описание: Выход из системы и обновление статуса аутентификации.

Примечание: Изменяет isAuth на false.

#### fetchSignInWithGoogle:

Описание: Отправляет данные для входа через Google на сервер.

Возвращает: ID пользователя после успешного входа через Google.

Примечание: После этой функции, нужно выполнить fetchCheckAuth для проверки куки.

#### fetchSignInWithFacebook:

Описание: Отправляет данные для входа через Facebook на сервер.

Возвращает: ID пользователя после успешного входа через Facebook.

Примечание: После этой функции, нужно выполнить fetchCheckAuth для проверки куки.

### Доступные экшены из verify.actions.ts:

#### fetchEmailVerification:

Описание: Отправляет запрос на сервер для верификации email.

Возвращает: Статус верификации.

#### fetchPhoneVerification:

Описание: Отправляет запрос на сервер для верификации телефонного номера.

Возвращает: Статус верификации.

#### fetchEmailVerifyCode:

Описание: Отправляет код верификации email на сервер.

Возвращает: Статус подтверждения кода верификации.

#### fetchPhoneVerifyCode:

Описание: Отправляет код верификации телефонного номера на сервер.

Возвращает: Статус подтверждения кода верификации.

### Доступные экшены из worker.actions.ts:

### fetchGetWorkerInfo:

Описание: Получает информацию о работнике с сервера.

Возвращает: Данные о работнике.

### fetchCreateOrder:

Описание: Отправляет данные для создания заказа на сервер.

Возвращает: Статус создания заказа.

## Селекторы

### Auth Selectors

#### AuthSelector:

Возвращает булево значение, указывающее, авторизован ли пользователь или нет.

#### AuthErrorSelector:

Возвращает последнюю ошибку, связанную с авторизацией.

#### AuthPendingSelector:

Возвращает состояние операции(pending === true, если операция ещё не закончена).

### Verify Selectors

#### EmailVerifyCodeSelector:

Возвращает код верификации.

#### EmailVerifyCodeErrorSelector:

Возвращает последнюю ошибку, связанную с процессом верификации.

#### EmailVerifyCodePendingSelector:

Отслеживание состояния операции.

#### GetVerifyCodeSelector

Проверяет код верификации и возвращает ответ (true или false)

#### GetVerifyCodeErrorSelector

Возвращает последнюю ошибку, связанную с процессом верификации.

#### GetVerifyCodePendingSelector

Отслеживание состояния операции.

### Worker Selectors

#### GetWorkerInfo:

Возвращает информацию о работнике.

#### GetWorkerErrorInfo:

Возвращает последнюю ошибку, связанную с получением информации о работнике.

#### GetWorkerPendingInfo:

Возвращает статус текущего запроса к API для работы с информацией о работнике.

#### CreateOrder:

Создаёт новый заказ, возвращает статус (`created` или `rejected`)

#### CreateOrderErrors:

Возвращает последнюю ошибку, связанную с созданием заказа.

#### CreateOrderPending:

Возвращает статус текущего запроса к API для работы с заказом.

## Clear errors

### clearAuthErrors

### clearVerifyErrors

### clearWorkerErrors

#### Служат для очистки стейта от ошибок

# USAGE

1. В основном файле, куда вы добавляете глобальную логику (обычно \_app.tsx для NextJS ) импортируйте Provider и store

```javascript
import { Provider, store } from "@hosting2023/redux-lib";

<Provider store={store}>
  <Component {...pageProps} />
</Provider>;
```

2. После подключения store, в комопнентах, где необходимо работать с хранилищем, вы можете использовать хуки

```javascript
const dispatch = useAppDispatch();
const isAuth = useAppSelector(AuthSelector);

useEffect(() => {
  dispatch(fetchCheckAuth());
}, []);
```

Список доступных селекторов и экшенов опубликован выше.
