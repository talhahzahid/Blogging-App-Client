import React, { useEffect } from "react";

const userAllBlogs = () => {
  useEffect(() => {
    const response = fetch("http://localhost:9000/api/v1/all", {
      method: "GET",
      Authorization: `Bearer ${verifyToken}`,
      "Content-Type": "application/json",
    });
    console.log("all", response);
  }, []);
  return (
    <>
      <h1>hello</h1>
    </>
  );
};

export default userAllBlogs;
