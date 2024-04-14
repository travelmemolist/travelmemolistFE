import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyCtccYfTOKq_DpeayiETYaSpSAtPKn03Zg",
  authDomain: "support-explore-destination.firebaseapp.com",
  projectId: "support-explore-destination",
  storageBucket: "support-explore-destination.appspot.com",
  messagingSenderId: "960067080598",
  appId: "1:960067080598:web:650684f6620ebb935d0db7"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const imageDb = getStorage(app);
