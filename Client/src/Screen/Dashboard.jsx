import React, { useRef, useState } from "react";

const Dashboard = () => {
  const title = useRef();
  const description = useRef();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = title.current.value;
    const description = description.current.value;
    const respone = fetch("http://localhost:9000/api/v1/addblog", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        description,
      }),
    });
    if (respone.ok) {
      const data = await respone.json();
      console.log("Blog added successfully");
    } else {
      console.log("error adding blog");
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
              "Post"
            )}
          </button>
        </form>
      </div>
      <div className="flex justify-center flex-wrap px-4 mt-7 gap-6">
        <div className="card bg-base-100 shadow-xl w-full max-w-md">
          <div className="card-body">
            <div className="avatar">
              <div className="w-16 rounded-full">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  alt="User Avatar"
                />
              </div>
            </div>
            <h2 className="card-title text-xl font-semibold">Card Title</h2>
            <p className="text-gray-600">
              If a dog chews shoes, whose shoes does he choose?
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-secondary">Read More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
