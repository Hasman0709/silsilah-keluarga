// ===================================
// FIREBASE - BANI YASROJI
// ===================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/13.2.0/firebase-app.js";

import {
    getAuth
} from "https://www.gstatic.com/firebasejs/13.2.0/firebase-auth.js";

import {
    getFirestore
} from "https://www.gstatic.com/firebasejs/13.2.0/firebase-firestore.js";

import {
    getStorage
} from "https://www.gstatic.com/firebasejs/13.2.0/firebase-storage.js";

// Konfigurasi Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBBRzyy8ZQbgEsqFQHy_9sfVXtXh59P_Tc",
    authDomain: "silsilah-keluarga-baru.firebaseapp.com",
    projectId: "silsilah-keluarga-baru",
    storageBucket: "silsilah-keluarga-baru.firebasestorage.app",
    messagingSenderId: "849671093442",
    appId: "1:849671093442:web:e2f2d35517d22fdb858f5b"
};

// Mengaktifkan Firebase
const app = initializeApp(firebaseConfig);

// Mengaktifkan layanan Firebase
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// Ekspor agar bisa digunakan halaman lain
export {
    app,
    auth,
    db,
    storage
};