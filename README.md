# smstrade-api

Node.js module to access the **smstrade** ([smstrade.de](http://www.smstrade.de/), [smstrade.eu](http://www.smstrade.eu/)) API.

## Getting Started

Install the module with: `npm install smstrade-api`

```javascript
var smstrade = require('smstrade-api');

var sms = smstrade({
  api_key: 'YourApiKey',
  route: 'basic', // or 'gold' or 'direct'
  debug: 0 // 0 sends message, 1 just checks to API without sending
});

sms.sendTextMessage({
  to: '0015551234567',
  message: 'Hello John'
});
```

## smstrade(options)

`options` is a Javascript object with the following attributes:

- `api_key`: mandatory - your **smstrade** API key
- `route`: the route (and tariff) for sending the message; default: `basic`
- `debug`: debug mode; wether or not to just test the API call; default: `0` (no debug mode)

## API-Methods

## sendTextMessage(message)

- `to`: recipient's phone number
- `message`: your SMS message
