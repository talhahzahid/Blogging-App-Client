import React from "react";

const Dashboard = () => {
  return (
    <>
      <div className="flex justify-center items-center px-4">
        <form action="" className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-[20rem] max-w-lg"
          />
          <textarea
            placeholder="Bio"
            rows={4}
            cols={20}
            className="textarea textarea-bordered w-[20rem] max-w-lg" // Corrected class name
          ></textarea>
        </form>
      </div>
    </>
  );
};

export default Dashboard;
