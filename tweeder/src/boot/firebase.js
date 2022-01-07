import firebase from "firebase/compat/app"
import "firebase/compat/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAEAegHkVta81DimX5-Ao2t3572t_yv0Xk",
  authDomain: "tweeder-5da11.firebaseapp.com",
  projectId: "tweeder-5da11",
  storageBucket: "tweeder-5da11.appspot.com",
  messagingSenderId: "827526984555",
  appId: "1:827526984555:web:497b308bddaba13756122e"
}

firebase.initializeApp(firebaseConfig)

let db = firebase.firestore()

export default db