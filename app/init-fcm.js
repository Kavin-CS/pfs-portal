import firebase from 'firebase/app';
import 'firebase/messaging';
import { KEY_FIRE_REG_TOKEN } from './utils/constants';
import {
  getParentDetails,
  getUserDetails,
} from './utils/helpers/storageHelper';
import { subscribeMessage } from './utils/MessageHelper';
const initializedFirebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyBEpC1m0Q4tw1TgVFbKQrX2xv9AdDZI-w8',
  authDomain: 'ken42-1612766111380.firebaseapp.com',
  projectId: 'ken42-1612766111380',
  storageBucket: 'ken42-1612766111380.appspot.com',
  messagingSenderId: '819877897170',
  appId: '1:819877897170:web:74edb916d365fec08e5e0b',
  measurementId: 'G-EWVJZGMD1J',
});

let messaging;

let config;
// const returnConfig = config => {
//   console.log(config);
//   return config;
// };
export const getCon = con => {
  config = con;
};

if (firebase.messaging.isSupported()) {
  messaging = initializedFirebaseApp.messaging();

  messaging
    .getToken({
      vapidKey:
        'BOGS-E_HKHm0ksywP1T1pqgu6VWmvnsH4spXoqvcBSkk4JkCCywbaOih2ZxN0gXpKVJsqaSwVmIUTnRo5BjibMA',
    })
    .then(currentToken => {
      if (currentToken) {
        localStorage.setItem(KEY_FIRE_REG_TOKEN, currentToken);
        console.log(currentToken);
        subscribeMessage(
          config,
          getUserDetails(),
          getParentDetails(),
          currentToken
        );
      } else {
        console.log(
          'No registration token available. Request permission to generate one.'
        );
      }
    })
    .catch(err => {
      console.log('An error occurred while retrieving token. ', err);
    });
}
export { messaging };
