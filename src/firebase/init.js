import firebase from 'firebase'
import firestore from 'firebase/firestore'

var firebaseConfig = {
    apiKey: "",
    authDomain: "realtimechat-vuejs.firebaseapp.com",
    databaseURL: "https://realtimechat-vuejs.firebaseio.com",
    projectId: "realtimechat-vuejs",
    storageBucket: "realtimechat-vuejs.appspot.com",
    messagingSenderId: "1006572006717",
    appId: "1:1006572006717:web:fc27aca740b4dd1e3a2954"
}
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)
firebaseApp.firestore().settings({ timestampsInSnapshots: true })
export default firebaseApp.firestore()
