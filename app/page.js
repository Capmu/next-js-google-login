// page.js
"use client";

import Image from "next/image";
import { GoogleLogin } from "@react-oauth/google";
import styles from "./page.module.css"; // Import the CSS module

export default function Home() {
  const responseMessage = (response) => {
    console.log("Login Success:", response);
    // Handle successful login (e.g., redirect, store token)
  };

  const errorMessage = (error) => {
    console.log("Login Failed:", error);
  };

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>Welcome to Next.js!</h1>
        <div className={styles.loginContainer}>
          <h2 className={styles.loginTitle}>Login with Google</h2>
          <GoogleLogin
            onSuccess={responseMessage}
            onError={errorMessage}
            className={styles.googleButton}
            text="Sign in with Google"
          />
        </div>
      </div>
    </main>
  );
}