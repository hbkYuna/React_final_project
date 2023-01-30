import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"

const firebaseConfig = {
    apiKey: "AIzaSyDf_NT9TBlRxi_p8OXJ5dmgASkTXTjQoZY",
    authDomain: "reactmovierentaldb.firebaseapp.com",
    projectId: "reactmovierentaldb",
    storageBucket: "reactmovierentaldb.appspot.com",
    messagingSenderId: "280868378722",
    appId: "1:280868378722:web:eac94101dfbb264f21993b"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app)