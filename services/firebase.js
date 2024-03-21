import { initializeApp, getApps } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_API_KEY,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
};


// Ini memeriksa apakah ada aplikasi Firebase yang sudah diinisialisasi. Jika tidak ada, 
// maka inisialisasi Firebase akan dilakukan dengan menggunakan konfigurasi yang telah ditentukan 
// sebelumnya dalam firebaseConfig.

if (!getApps().length) {
  initializeApp(firebaseConfig);
}

export const FirebaseAuth = getAuth();

export const Authentication = () => {
  return FirebaseAuth
}

export const SignUp = async (email, password) => {
  await createUserWithEmailAndPassword(FirebaseAuth, email, password);
};

export const SignIn = async (email, password) => {
  await signInWithEmailAndPassword(FirebaseAuth , email, password);
};

export const SignOut = async () => {
  await signOut(FirebaseAuth);
};

// error message sign in 
export const GetSignInErrorMessage = (code) => {
  switch (code) {
    case 'auth/invalid-credential':
      return 'email atau password kamu salah , coba lagi'  
    default:
      'Terjadi kesaslahan saaat proces login';
  }
}

// error message sign up
export const GetSignUpErrorMessage = (code) => {
  switch (code) {
    case 'auth/email-already-in-use':
      return 'Email telah terdaftar'  
    default:
      'Terjadi kesalahan saat proses daftar';
  }
}