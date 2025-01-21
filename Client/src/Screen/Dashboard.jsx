import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
const Dashboard = () => {
  const title = useRef();
  const description = useRef();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const titleValue = title.current.value;
    const descriptionValue = description.current.value;
    if (!titleValue || !descriptionValue) {
      console.log("Please provide both title and description.");
      return;
    }
    const verifyToken = localStorage.getItem("accessToken");
    if (!verifyToken)
      return console.log("Login first to post blog", alert("login first"));
    setLoading(true);
    try {
      const response = await fetch("http://localhost:9000/api/v1/addblog", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${verifyToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: titleValue,
          description: descriptionValue,
        }),
        credentials: "include",
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Blog added successfully", data);
      } else {
        console.log("Error adding blog");
      }
    } catch (error) {
      console.error("Network error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-center items-center px-4 mt-7">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 w-full max-w-xl"
        >
          <h1 className="text-2xl font-semibold text-center text-gray-800">
            Dashboard
          </h1>

          <input
            type="text"
            placeholder="Enter title here"
            ref={title}
            className="input input-bordered w-full max-w-lg"
          />
          <textarea
            placeholder="Type your bio or description here"
            rows={4}
            ref={description}
            className="textarea textarea-bordered w-full max-w-lg"
          ></textarea>
          <button type="submit" className="btn btn-primary w-full max-w-lg">
            {loading ? (
              <span className="loading loading-spinner loading-lg"></span>
            ) : (
              "Publish"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Dashboard;
