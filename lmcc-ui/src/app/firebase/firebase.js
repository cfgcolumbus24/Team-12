"use client";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { useState, useEffect } from "react";
import firebaseConfig from "./firebaseConfig";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export const createUser = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("User created successfully:", user);
      return user;
    })
    .catch((error) => {
      console.error("Error creating user:", error.message);
      throw error;
    });
};

export const addUserToDatabase = async (
  userId,
  name,
  email,
  role,
  profileImg
) => {
  try {
    await setDoc(doc(db, "users", userId), {
      name,
      email,
      role,
      profileImg,
    });
    console.log("User added to database successfully");
  } catch (error) {
    console.error("Error adding user to database:", error.message);
    throw error;
  }
};

export const loginUser = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("User logged in successfully:", user);
      return user;
    })
    .catch((error) => {
      console.error("Error logging in user:", error.message);
      throw error;
    });
};

export const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    await addUserToDatabase(
      user.uid,
      user.displayName,
      user.email,
      "user",
      user.photoURL
    );
    console.log("User signed in with Google and added to database:", user);
    return user;
  } catch (error) {
    console.error("Error signing in with Google:", error.message);
    throw error;
  }
};

export const useCurrentUser = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return { currentUser, loading };
};
