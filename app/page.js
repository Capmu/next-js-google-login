"use client"; // Ensure this is a Client Component

import Image from "next/image";
import styles from "./page.module.css";

import { GoogleLogin } from "@react-oauth/google";

export default function Home() {
  const responseMessage = (response) => {
    console.log("Login Success:", response);
  };

  const errorMessage = (error) => {
    console.log("Login Failed:", error);
  };

  return (
    <div>
      <h2>React Google Login</h2>
      <br />
      <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
    </div>
  );
}
