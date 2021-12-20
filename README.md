# Portrait Frontend

This repository contains the frontend code for [Portrait](https://portrait.gg), a website builder that allows you to build and publish your own website on IPFS in minutes.


## How to use

_System requirements:_ `yarn ^1.22`, `node ^14`

### **1. Download or clone the repository:**
```
git clone https://github.com/giliamverheide/browsers3000-frontend.git
```

### **2. Install all dependencies**
```
yarn
```

**3. Run the backend**

There are two ways to connect to the backend.

At this point in time, you may choose to connect to the live production backend (2), no action required, please move to step 4.

1. **Locally, development**
- [Clone the backend repository from here](https://github.com/ryanshahine/browsers3000-backend).
- Follow the instructions in that repository to install and run the backend locally, it will run on `localhost:3000`

2. **Remote, production**
- No action required, the backend runs at `https://api.portrait.gg/api/v1/`

### **4. Run the frontend (this repository)**

**Are you running the backend from step 3 locally on port 3000?**

Run yarn dev:
```
yarn dev
```  
Open `localhost:4000` in your browser.


**Are you connecting to the live backend?**  
_Note: this is permitted at this point in time._

Open `config.js` inside the `src` directory.  
Change the config variable from:
```js
const config = {
  API_URL: getApiUrl()
}
```
to:
```js
const config = {
  API_URL: 'https://api.portrait.gg/api/v1/'
}
```
Then, run yarn dev:
```
yarn dev
```  
Open `localhost:4000` in your browser.

_To change the port the frontend runs on, edit the `dev` script in `package.json`._
