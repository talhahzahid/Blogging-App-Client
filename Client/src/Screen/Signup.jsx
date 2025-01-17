import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  // const imageUrl = useRef();
  const [loading, setLoading] = useState(false);

  const handleSignUp = async (event) => {
    event.preventDefault();
    console.log(username.current.value);
    console.log(email.current.value);
    console.log(password.current.value);
    // const formDate = newFo
    try {
      const formData = new FormData();
      formData.append("fullname", username.current.value);
      formData.append("email", email.current.value);
      formData.append("password", password.current.value);
      // formData.append("imageUrl", password.current.value);
      const response = fetch("http://localhost:9000/user/signup", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (response.ok) {
        console.log("Register successfully", data);
        // Optionally redirect or show a success message
      } else {
        console.log("Error occurred");
      }
    } catch (error) {
      console.log(error);
    }
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
