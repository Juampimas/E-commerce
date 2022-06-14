
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDEcxyX5iOl9hElTpcd7lohX9fwGkzgRH4",
  authDomain: "ecommerce-mas.firebaseapp.com",
  projectId: "ecommerce-mas",
  storageBucket: "ecommerce-mas.appspot.com",
  messagingSenderId: "159732934547",
  appId: "1:159732934547:web:fce1c64b4191b1280d6a66",
  gs:"ecommerce-mas.appspot.com/img"
};


const app = initializeApp(firebaseConfig);

export default function getFirestoreApp() {
    return app
}