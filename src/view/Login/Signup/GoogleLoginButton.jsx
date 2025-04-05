import { useEffect } from 'react';

const GoogleLoginButton = () => {
  useEffect(() => {
    /* global google */
    window.google.accounts.id.initialize({
      client_id: 'YOUR_CLIENT_ID_HERE',  // Replace with your actual client ID
      callback: handleCredentialResponse
    });

    window.google.accounts.id.renderButton(
      document.getElementById("googleSignInDiv"),
      {
        theme: "outline",
        size: "large",
        text: "continue_with"
      }
    );
  }, []);

  const handleCredentialResponse = (response) => {
    // decode JWT if needed
    console.log("Google credential response:", response);
    // You can now send response.credential to your backend for verification
  };

  return <div id="googleSignInDiv"></div>;
};

export default GoogleLoginButton;
