# Google Login Integration with React

## Documentation

For a detailed guide, mostly refer to the [LogRocket blog post](https://blog.logrocket.com/guide-adding-google-login-react-app/).

## Steps to Integrate Google Login

1. Initialize the App
2. Install Dependencies
     ```sh
     npm install @react-oauth/google
     ```
3. Create `providers.js` and mark it with `"use client"`
4. Modify `layout.js` to ensure the layout is configured to work across all pages.
5. Update `page.js` to implement the Google login functionality and handle user authentication.
