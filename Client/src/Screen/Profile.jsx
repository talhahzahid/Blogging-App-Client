import React from "react";

const Profile = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-center text-3xl font-semibold text-gray-800">
        Update Profile
      </h1>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-8">
        <div className="flex-shrink-0">
          <img
            className="rounded-lg shadow-md"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            alt="Profile"
            width={210}
          />
        </div>
        <div className="flex flex-col gap-6 w-full max-w-md">
          <input
            type="text"
            placeholder="Enter Username"
            className="input input-bordered w-full"
          />
          <input
            type="email"
            placeholder="Enter Email"
            className="input input-bordered w-full"
          />
          <input
            type="password"
            placeholder="Enter Password"
            className="input input-bordered w-full"
          />
          <input
            type="file"
            className="file-input file-input-bordered file-input-primary w-full "
          />
          <button className="btn btn-primary">Update</button>
        </div>
        <button className="btn btn-primary">Update</button>
      </div>
    </div>
  );
};

export default Profile;
