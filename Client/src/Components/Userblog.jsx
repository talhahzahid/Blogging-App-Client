import React, { useEffect, useState } from "react";

const Userblog = () => {
  const [blogs, setBlogs] = useState([]); // Initialize blogs as an empty array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllBlog = async () => {
      const verifyToken = localStorage.getItem("accessToken");

      if (!verifyToken) {
        setError("No access token found.");
        setLoading(false);
        return;
      }

      try {
        const response = await fetch("http://localhost:9000/api/v1/all", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${verifyToken}`,
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch blogs. Please try again later.");
        }

        const data = await response.json();

        // Log the entire response to inspect its structure
        console.log("API response data:", data);

        // Adjust data handling depending on the response structure
        if (data && Array.isArray(data.all)) {
          // If the response contains `data.all` and it's an array
          setBlogs(data.all);
        } else if (Array.isArray(data)) {
          // If the response is directly an array
          setBlogs(data);
        } else {
          setBlogs([]); // Set empty array if response is not in expected format
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAllBlog();
  }, []);

  // Handle loading state
  if (loading) {
    return <p className="text-center mt-8 text-xl">Loading...</p>;
  }

  // Handle error state
  if (error) {
    return <p className="text-center mt-8 text-xl text-red-500">{error}</p>;
  }

  return (
    <div>
    {blogs.length === 0 ? (
      <p className="text-center mt-8 text-xl">No blogs available</p>
    ) : (
      <div className="flex flex-wrap justify-around gap-10 mt-3 ">
        {blogs.map((item) => (
          <div key={item._id} className="card bg-[#e2e8f0] w-full shadow-xl">
            <div className="card-body">
              <h2 className="card-title">{item.title}</h2>
              <p>{item.description}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    )}
  </div>
  
  );
};

export default Userblog;
