"use client"; // Required for client-side components

import { CONFIG_CLIENT_ID } from "@/app.config";
import { GoogleOAuthProvider } from "@react-oauth/google";

export function Providers({ children }) {
  return (
    <GoogleOAuthProvider clientId={CONFIG_CLIENT_ID}>
      {children}
    </GoogleOAuthProvider>
  );
}
