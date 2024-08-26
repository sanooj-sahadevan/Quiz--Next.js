"use client";
// import { useQuizConfig } from "@/store";
import React from "react";
import { useQuizConfig } from "@/store";

export default function Button() {
  const changeStatus = useQuizConfig((state: any) => state.changeStatus);
  // const handleStart = () => {
  //   changeStatus("start")
  // }
  return (
    <>
      <button
        onClick={() => changeStatus('start')}
        // onClick={handleStart}
        type="button"
        className="m-auto text-lg font-medium text-white focus:outline-none bg-black rounded-lg border border-white hover:bg-gray-800 hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 py-4 px-10 w-1/2"      >
        Start Quiz Now
      </button>
    </>
  );
}
