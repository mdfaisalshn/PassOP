import React from "react";

const Manager = () => {
  return (
    <>
      <div className="absoulute bg-green-100 h-[100vh] w-full">
        <div className="mycontainer">
          <h1 className="text-4xl text font-bold text-center">
            <span className="text-green-800">&lt; </span>
            <span>Pass</span>
            <span className="text-green-800">OP/&gt;</span>
          </h1>
          <p className="text-green-900 text-lg text-center">Your own password manager</p>
          <div className="flex flex-col p-4 text-black gap-8 items-center">
            <input className="rounded-full border border-green-500 w-full p-4 py-1" type="text" name="" id="" />
            <div className="flex w-full justify-between gap-8">
              <input className="rounded-full border border-green-500 w-full p-4 py-1" type="text" name="" id="" />
              <input className="rounded-full border border-green-500 w-full p-4 py-1" type="text" name="" id="" />
            </div>
            <button className="flex justify-center items-center bg-green-500 rounded-full px-4 py-2 w-fit hover:bg-green-400">
              <lord-icon
                src="https://cdn.lordicon.com/jgnvfzqg.json"
                trigger="hover">
              </lord-icon>
              Add Password
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Manager;
