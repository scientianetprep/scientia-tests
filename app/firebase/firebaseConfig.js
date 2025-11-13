// app/firebase/firebaseConfig.js

import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBw6Hq7ou0rB8A_rayk4GCm9-wt5iSvORk",
  authDomain: "scientia-tests.firebaseapp.com",
  projectId: "scientia-tests",
  storageBucket: "scientia-tests.appspot.com", // ✅ fixed here
  messagingSenderId: "242892849650",
  appId: "1:242892849650:web:418ddc68591242dc42ab6b",
};

// ✅ Prevent Firebase from initializing twice
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

// ✅ Explicitly export these
export const auth = getAuth(app);
export default app;