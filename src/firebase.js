import firebase from 'firebase'
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDpW_Ry3IdXCs4_5OUw4yOuh1Ar995QjMM",
    authDomain: "fir-rtc-2fb16.firebaseapp.com",
    databaseURL: "https://fir-rtc-2fb16.firebaseio.com",
    projectId: "fir-rtc-2fb16",
    storageBucket: "fir-rtc-2fb16.appspot.com",
    messagingSenderId: "233503926980",
    appId: "1:233503926980:web:bb546a4b4a17626c46b791"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;