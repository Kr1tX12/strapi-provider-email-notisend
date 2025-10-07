## Как подключить

В `config/plugins.js` укажите провайдера:

```js
email: {
  config: {
    provider: 'strapi-provider-email-notisend',
    providerOptions: {
      apiKey: process.env.NOTISEND_API_KEY,
    },
    settings: {
      defaultFrom: 'no-reply@yourdomain.com',
      defaultReplyTo: 'support@yourdomain.com',
    },
  },
},
```

Дальше сами
