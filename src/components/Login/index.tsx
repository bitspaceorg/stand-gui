import React from "react";
import { useState } from "react";

interface LoginProps {
  onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [showMsg, setShowMsg] = useState(false);
  const msg = "Womp Womp!";

  /**This function handles a click**/
  const handleClick = () => {
    setShowMsg(!showMsg);
  };
  /**This function handles the form submition and auth logic**/
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const username = (e.target as HTMLFormElement).username.value;
    const password = (e.target as HTMLFormElement).password.value;
    localStorage.setItem("username", username);
    if (password === "admin") {
      onLogin();
    } else {
      setShowMsg(!showMsg);
    }
  };

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center font-helvetica">
      <h1 className="text-4xl font-bold">Welcome!</h1>
      <p className="text-xl">
        Let&apos;s <span className="text-blue-500">STAND</span> together
      </p>
      <form
        className="flex flex-col items-center justify-around w-1/4"
        onSubmit={handleSubmit}
      >
        <input
          className="border-2 border-gray-300 p-2 m-2 w-full"
          type="text"
          id="username"
          name="username"
          placeholder="Username"
          required
        />
        <input
          className="border-2 border-gray-300 p-2 m-2 w-full"
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          required
        />
        <button className="bg-blue-500 text-white p-2 m-2 w-full" type="submit">
          Login
        </button>
        <p className="text-blue-300" onClick={handleClick}>
          Forget Password?
        </p>
        {showMsg && <p className="text-red-500 text-sm">{msg}</p>}
      </form>
    </main>
  );
};

export default Login;
