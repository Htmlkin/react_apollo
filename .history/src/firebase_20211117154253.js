import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: process.env,
    authDomain: 'test-work-55e3e.firebaseapp.com',
    projectId: 'test-work-55e3e',
    storageBucket: 'test-work-55e3e.appspot.com',
    messagingSenderId: '196440918710',
    appId: '1:196440918710:web:86310b50e515bb7a64b417',
};

const app = initializeApp(firebaseConfig);
