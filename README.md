## Intro
### This is an app mocking Starbucks login features using react-native as front-end and firebase as back-end to store user credentials.

##### 1. When opening up the app, a blank background page shows a button with `Join now`, it will navigate the users to a `Sign in` page. The bottom navigation bar is all linked to the `Join us` page for simplicity.
<img src="https://github.com/kenny850917/starbuck-mockup/blob/main/screenshot/joinus.png" width="250" />

##### 2. The `sign-in` page checks the user and logs them in, else click on the `signup` link to register an account.
<img src="https://github.com/kenny850917/starbuck-mockup/blob/main/screenshot/signin.png" width="250"/>

##### 3. The` registration page` checks for duplicates email addresses in the database, and only proceed to insert the database when the input email is unique. Every page is enclosed with `scroll-view` tabs but it could only be easily witnessed on the registration page
<img src="https://github.com/kenny850917/starbuck-mockup/blob/main/screenshot/registration.png" width="250"/>

##### 4. Once logged in, it will show a blank page with a `log-out` button.
<img src="https://github.com/kenny850917/starbuck-mockup/blob/main/screenshot/home.png" width="250"/>

##### 5. A forgot password link that sends an email to associated account to reset password. Please check junk mail for the link if not seen in mailbox.
<img src="https://github.com/kenny850917/starbuck-mockup/blob/main/screenshot/forgotpassword.png" width="250"/>
<img src="https://github.com/kenny850917/starbuck-mockup/blob/main/screenshot/resetlink.png"/>

## Download the APK file here
https://github.com/kenny850917/starbuck-mockup/blob/main/apk/starbuck-mockup-app-50f73870127144f5a9574ea08f2d078f-signed.apk

## Getting Started (with Expo)

If you are using Expo Cli, clone the repo and run "expo start" in the root folder of the project:

```
git clone https://github.com/instamobile/react-native-firebase.git
cd react-native-firebase
expo start
```
## Add your own config file

Create a `config.js` under src/firebase/
```
import * as firebase from "firebase";
import "@firebase/auth";
import "@firebase/firestore";

const firebaseConfig = {
  apiKey: "yourcredentials",
  authDomain: "yourcredentials",
  projectId: "yourcredentials",
  databaseURL: "yourcredentials/",
  storageBucket: "yourcredentials",
  messagingSenderId: "yourcredentials",
  appId: "yourcredentials",
  measurementId: "yourcredentials",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };

```

## Getting Started (without Expo)

If you prefer using React Native CLI, you'll need to eject from Expo first:

```
git clone https://github.com/instamobile/react-native-firebase.git
cd react-native-firebase
expo eject
npm install
react-native run-android // react-native run-ios
```


