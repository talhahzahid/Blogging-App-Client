import React from "react";
import { useEffect, useState } from "react";
const Userblog = () => {
  const [blogs, setBlogs] = useState("");
  useEffect(() => {
    const fetchAllBlog = async () => {
      const verifyToken = localStorage.getItem("accessToken");
      const response = await fetch("http://localhost:9000/api/v1/all", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${verifyToken}`,
          "content-Type": "application/json",
        },
      });
      console.log(response.json());
      const data = await response.json();
      setBlogs(data);
    };
    fetchAllBlog();
  }, []);
  return (
    <>
      {blogs.length === 0 ? (
        <p className="text-center mt-8 text-xl">No blogs available</p> // Show a message if no blogs are found
      ) : (
        blogs.map((item) => (
          <div key={item._id}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>{" "}
            {/* Display blog description if available */}
          </div>
        ))
      )}
    </>
  );
};

export default Userblog;
