import React from "react";

const AdminDashboardPage = () => {
  return (
    <>
      <div className="h-screen text-gray-700 bg-black
]">
        <div className="pt-8 px-24 flex justify-between">
          <div className="text-white text-5xl font-bold">APP</div>
          <button class="rounded-full px-8 bg-[#9BFF00]">Logout</button>
        </div>

        <div className=" h-full w-full flex justify-center items-center text-7xl">
          <h1 className="text-white">Dashboard</h1>
        </div>
      </div>
    </>
  );
};

export default AdminDashboardPage;
