import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const [loading, setLoading] = useState(false);

  const handleSignUp = async (event) => {
    event.preventDefault();
    console.log(username.current.value);
    console.log(email.current.value);
    console.log(password.current.value);
    const respone = await fetch("http://localhost:9000/user/signup", {});
    username.current.value = "";
    email.current.value = "";
    password.current.value = "";
  };

  return (
    <>
      <div className="flex justify-center items-center h-[100vh]">
        <form
          onSubmit={handleSignUp}
          action=""
          className="flex justify-center items-center gap-3 flex-col bg-[#52525b] shadow-lg rounded-lg p-10"
        >
          <h1 className="text-xl text-white font-semibold">Sign Up</h1>
          <input
            type="text"
            name="username"
            ref={username}
            placeholder="Enter your username"
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="email"
            ref={email}
            name="email"
            placeholder="Enter your email"
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="password"
            ref={password}
            placeholder="Enter your password"
            className="input input-bordered w-full max-w-xs"
          />

          <button type="submit" className="btn btn-primary">
            {loading ? (
              <span className="loading loading-spinner loading-lg"></span>
            ) : (
              "Sign Up"
            )}
          </button>
          <Link to="/signin">
            <span className="underline text-blue-500	">
              already have an account
            </span>
          </Link>
        </form>
      </div>
    </>
  );
};

export default Signup;
