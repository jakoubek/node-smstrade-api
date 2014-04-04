# smstrade-api

Node.js module to access the **smstrade** ([smstrade.de](http://www.smstrade.de/), [smstrade.eu](http://www.smstrade.eu/)) API.

## Getting Started

Install the module with: `npm install smstrade-api`

```javascript
var smstrade = require('smstrade-api');

var sms = smstrade({
  api_key: 'YourApiKey',
  route: 'basic', // or 'gold' or 'direct'
  debug: 0 // 0 sends message, 1 just checks the API without sending
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

## TODO

- return a result object instead of just the (smstrade) response code
- handle errors
- support optional parameters (message id, costs, number of SMS, delivery status)
- concatenate messages
- account status, get credits
- home location register

## License

Licensed under the MIT license.

Copyright (c) 2014 Oliver Jakoubek

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
