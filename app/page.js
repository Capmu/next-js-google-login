"use client";

import { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import Image from "next/image"; // ✅ Import Next.js Image component
import styles from "./page.module.css"; // Import the CSS module

export default function Home() {
  const [user, setUser] = useState(null);

  const responseMessage = (response) => {
    console.log("Login Success:", response);
    const decoded = jwtDecode(response.credential);
    setUser({
      name: decoded.name,
      picture: decoded.picture,
      email: decoded.email,
    });
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
        {user && (
          <div className={styles.userDetails}>
            <Image
              src={user.picture}
              alt={user.name}
              width={100}
              height={100}
              className={styles.userImage}
            />
            <div className={styles.userInfo}>
              <h3 className={styles.userName}>{user.name}</h3>
              <p className={styles.userEmail}>{user.email}</p>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
