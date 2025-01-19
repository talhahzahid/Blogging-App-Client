import React, { useEffect, useState } from "react";

const Home = () => {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("http://localhost:9000/api/v1/alluser");
        const data = await response.json();
        console.log(data.data);
        setBlog(data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <>
      {blog.map((item) => {
        return (
          <div key={item._id}>
            <div className="flex justify-center flex-wrap px-4 mt-7">
              <div className="card bg-base-100 w-full max-w-lg shadow-xl">
                <div className="card-body">
                  <div className="avatar">
                    <div className="w-11 rounded-full">
                      <img
                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                        alt="avatar"
                      />
                    </div>
                  </div>
                  <h2 className="card-title">{item.title}</h2>
                  <p>{item.description}</p> {/* Render dynamic content */}
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Read More</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Home;
