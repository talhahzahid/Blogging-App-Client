import React, { useRef, useState } from "react";

const Signin = () => {
  const email = useRef();
  const password = useRef;
  const [loading, setLoading] = useState(false);

  return (
    <div className="flex justify-center items-center h-[100vh] text-white  ">
      <form
        action=""
        className="flex justify-center items-center gap-3 flex-col bg-[#18181b] shadow-lg rounded-lg p-10"
      >
        <h1 className="text-xl font-semibold">Sign In</h1>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="password"
          placeholder="Enter your password"
          className="input input-bordered w-full max-w-xs"
        />
        <button className="btn btn-primary">
          {loading ? (
            <span className="loading loading-spinner loading-lg"></span>
          ) : (
            "Sign In"
          )}
        </button>
      </form>
    </div>
  );
};

export default Signin;
