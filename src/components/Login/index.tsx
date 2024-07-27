import React, { useState } from "react";
import axios from "axios";

interface LoginProps {
  onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [showMsg, setShowMsg] = useState(false);
  const [msg, setMsg] = useState("Womp Womp!");

  /**This function handles the form submission and auth logic**/
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const username = (e.target as HTMLFormElement).username.value;
    const password = (e.target as HTMLFormElement).password.value;

    try {
      const response = await axios.post("http://localhost:6789/verifyUser", {
        params: {
          username,
          password,
        },
      });

      if (response.data.status) {
        localStorage.setItem("username", username);
        onLogin();
      } else {
        setShowMsg(true);
        setMsg("Invalid username or password");
      }
    } catch (error) {
      console.error("Error verifying user:", error);
      setShowMsg(true);
      setMsg("Error verifying user. Please try again.");
    }
  };

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center font-helvetica">
      <h1 className="text-4xl">
        Let&apos;s <span className="font-bold">STAND</span> together
      </h1>
      <form
        className="flex flex-col items-center justify-around w-1/4 mt-16"
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
        <button className="bg-black text-white p-2 m-2 w-full" type="submit">
          Login
        </button>
        <p className="text-gray-500" onClick={() => setShowMsg(!showMsg)}>
          Forget Password?
        </p>
        {showMsg && <p className="text-red-500 text-sm">{msg}</p>}
      </form>
    </main>
  );
};

export default Login;
