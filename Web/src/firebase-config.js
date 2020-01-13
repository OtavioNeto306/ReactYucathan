const Rebase = require('re-base')
const firebase = require('firebase')

const FirebaseConfig = {
    apiKey: "AIzaSyBFJE2EHb26SFbdSFD9JUKEv1qqncrU4o0",
    authDomain: "xumus-portfolio.firebaseapp.com",
    databaseURL: "https://xumus-portfolio.firebaseio.com",
    projectId: "xumus-portfolio",
    storageBucket: "xumus-portfolio.appspot.com",
    messagingSenderId: "219876894138",
    appId: "1:219876894138:web:758d2ec6d1325f8d10a983",
    measurementId: "G-GWPENM6WGG"
  }
  

  const app =  firebase.initializeApp(FirebaseConfig)
  const config = Rebase.createClass(app.database()) 


  export default config