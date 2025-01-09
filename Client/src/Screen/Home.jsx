import React from "react";

const Home = () => {
  return (
    <>
      <h1 className="text-3xl text-center mt-7">Blogs</h1>
      <div className="flex justify-center flex-wrap px-4 mt-7">
        <div className="card bg-base-100 w-full max-w-lg shadow-xl">
          <div className="card-body">
            <div className="avatar">
              <div className="w-11 rounded-full">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <h2 className="card-title">Card title!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Read More</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
