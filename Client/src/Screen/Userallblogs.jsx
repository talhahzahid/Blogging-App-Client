import React, { useEffect, useState } from "react";

const Userallblogs = () => {
  // Initialize blogs as an empty array to handle the map function correctly
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchAllBlog = async () => {
      const verifyToken = localStorage.getItem("accessToken");
      try {
        const response = await fetch("http://localhost:9000/api/v1/all", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${verifyToken}`,
            "Content-Type": "application/json", // Corrected typo here
          },
        });

        // Ensure you await the JSON parsing
        const data = await response.json();
        console.log(data); // Log the response data for debugging

        // Ensure that the data is an array before setting it
        if (Array.isArray(data)) {
          setBlogs(data);
        } else {
          console.error("Data is not an array", data);
          setBlogs([]); // Set an empty array if the data is not an array
        }
      } catch (error) {
        console.error("Error fetching blogs:", error); // Log errors if fetch fails
      }
    };

    fetchAllBlog(); // Call the function when the component mounts
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <>
      {blogs.length === 0 ? (
        <p className="text-center mt-8 text-xl">No blogs available</p> // Show message if no blogs
      ) : (
        blogs.map((item) => (
          <div key={item._id}>
            <h2>{item.title}</h2>
            <p>{item.description}</p> {/* Display blog description */}
          </div>
        ))
      )}
    </>
  );
};

export default Userallblogs;
