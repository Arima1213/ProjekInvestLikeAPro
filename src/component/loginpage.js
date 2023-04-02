import React from "react";
import LoginSmall from "./LoginSmall";
import LoginLarge from "./LoginLarge";
import bg from "./../asset/bglogin.webp";

function LoginPage(props) {
  return (
    <div className="login-page">
      {window.innerWidth < 768 ? (
        <LoginSmall image={bg} />
      ) : (
        <LoginLarge image={bg} />
      )}
    </div>
  );
}

export default LoginPage;
