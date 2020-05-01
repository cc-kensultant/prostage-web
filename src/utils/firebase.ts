import * as firebaseApp from 'firebase/app'
import 'firebase/auth'

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: 'prostage-ee971.firebaseapp.com',
  databaseURL: 'https://prostage-ee971.firebaseio.com',
  projectId: 'prostage-ee971',
  storageBucket: 'prostage-ee971.appspot.com',
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
}

export const firebase = firebaseApp.initializeApp(config)
