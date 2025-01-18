import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

const Signin = () => {
  const email = useRef();
  const password = useRef();
  const [loading, setLoading] = useState(false);

  const handeleSignin = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(email.current.value);
    console.log(password.current.value);
    try {
      const response = await fetch("http://localhost:9000/user/signin", {
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email.current.value,
          password: password.current.value,
        }),
      });
    } catch (error) {
      console.log(error);
      console.log("error occuured");
    }
    email.current.value = "";
    password.current.value = "";
    setLoading(false);
  };

  return (
    <div className="flex justify-center items-center h-[100vh]  ">
      <form
        action=""
        onSubmit={handeleSignin}
        className="flex justify-center items-center gap-3 flex-col bg-[#52525b] shadow-lg rounded-lg p-10"
      >
        <h1 className="text-xl font-semibold">Sign In</h1>
        <input
          type="email"
          name="email"
          ref={email}
          placeholder="Enter your email"
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="password"
          ref={password}
          placeholder="Enter your password"
          className="input input-bordered w-full max-w-xs"
        />
        <button className="btn btn-primary" type="submit">
          {loading ? (
            <span className="loading loading-spinner loading-lg"></span>
          ) : (
            "Sign In"
          )}
        </button>
        <Link to="/signup">
          <span className="underline text-blue-500	">
            Don't have an account : Signup{" "}
          </span>
        </Link>
      </form>
    </div>
  );
};

export default Signin;
