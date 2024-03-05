import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyABtpP8nbGMnUZPD0qkRzYZsH-Q6Iceua4",
  authDomain: "travelmemolist.firebaseapp.com",
  projectId: "travelmemolist",
  storageBucket: "travelmemolist.appspot.com",
  messagingSenderId: "905666688125",
  appId: "1:905666688125:web:f860c2def2f21100f6ad14",
  measurementId: "G-TWH31WMCEM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const imageDb = getStorage(app);
