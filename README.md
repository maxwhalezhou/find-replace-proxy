# Find & Replace Interception Proxy

**WARNING: This project is for demonstration and educational purposes only. Do not use this to conduct attacks on businesses, as it is illegal.**

This project is an HTTP/HTTPS Response modifier that can be deployed in the cloud. It utilizes [Burp](https://portswigger.net/burpproxy)  in order to achieve this. Burp is run in headless mode with custom project configuarations.

Using this, an individual can select what values in the API responses they would like to modify using text input fields. The server will then start up an interception proxy and modify them as requested without any indication on the user's device. This makes the traffic look legitimate and very convincing to an unknowing suspect.

The use case of this project is to demonstrate that a user's device should **NEVER** be trusted. For example, an individual can modify traffic on the fly while in a store to create a fraudulent price match. 

To combat issues like this, businesses should perform checks on their own trusted network before granting price matches of any kind.


## Installation

Prerequisites:
- [Node.js](https://nodejs.org/en/)
- [Node Package Manager](https://www.npmjs.com/)
- [Burp.jar](https://portswigger.net/burp/releases/download?product=community&version=1.7.36&type=jar)

1. Navigate to the `api` folder:
```bash
npm install
```
2. Repeat the same for the `client` folder.

3. The service should be up and running.

4. Configure your device to use the server's IP as an HTTP proxy. Navigate to `http://burp` and install the self-signed certificate. Regular web traffic can then be modified  without warnings and mobile applications without certificate pinning implemented can be manipulated.

*Note: This application works best when deployed in the cloud. It makes it easily accessible and easy to scale. You can create a Google Cloud Instance and open up the ports 8080, 3000, 80, & 443 within the firewall rule settings. Modify access to your liking.*

## Diagram
![Diagram](/diagram.png?raw=true "Diagram")
## Demo

Below is an example on a stock iPhone Xs performing the attack. In this example, we navigate to the puiblic IP address of our server where it is hosted. We then send the response values we want to change. The proxy is then configured after our request is successful.

We then see the Walmart TV price at an extremely discounted rate ($397 -> $197).

An attacker can demonstrate their search to a sales rep to a competitor for a very convincing price adjustment. 

![Demo](/demo.gif?raw=true "Demo")


*Update: This repo now features a `Proxy Reset` button to allow multiple price matches without a server crash. :)*

## Questions
Reach out to me at maxwell.chi.zhou@gmail.com for any questions. I am happy to help educate others on implementation and how they can expand upon this.
