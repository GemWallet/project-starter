# GemWallet HTML Starter Project

This project is a simple example of how to use the [GemWallet API](https://gemwallet.app/docs/api/using-gemwallet-in-browser) to make XRP and USD payments, and add a trustline.

## Getting started
1. Clone the repository:
```bash
git clone https://github.com/GemWallet/project-starter.git
```
2. Serve the index.html in your browser.

To serve the index.html in your browser, you can do the following steps:

0. Make sure that you are in this directory
1. `npm install`
2. `npm start`


## Usage
The page contains three buttons that trigger the following actions:
1. Pay XRP: Sends 20 XRP to the specified destination address.
2. Pay USD: Sends 20 USD to the specified issuer address.
3. Add trustline: Adds a trustline for USD with the specified issuer.

The result of each action is displayed in the corresponding section of the page, showing the transaction ID.

## Technical details
This project uses version 2.1.0 of the GemWallet API. The API is included in the <head> section of the HTML file using a script tag:

```html
<script src="https://unpkg.com/@gemwallet/api@2.1.0/umd/gemwallet-api.js"></script>
```

The JavaScript code that interacts with the API is included at the end of the HTML file, inside a `<script>` tag.

Each button has an onclick attribute that triggers a function that makes use of the GemWallet API.

The functions first check if the GemWallet API is connected, and if it is, proceed with the payment or trustline transaction.

The result of the transaction is displayed in the corresponding section of the page by modifying the content of a `<strong>` tag with an `id` attribute.

## Contributing
Contributions are welcome! If you have any suggestions or improvements, please feel free to submit a pull request.

## License
This project is licensed under the Apache License.