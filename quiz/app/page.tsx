'use client'
import Button from "@/components/Buttons/page";
import DropdownOptions from "@/components/DropDownsOptions";
// import useQuiz from "./store"
import Image from "next/image";


export default function Home() {
  function addNumberOfQuestion(value: string): void {
    throw new Error("Function not implemented.");
  }

  // const quizConfig = useQuiz((state: { config: any; })=>state.config) 
  // console.log(state);
  
  return (
    <section className="flex flex-col justify-center items-center my-10">
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white-900 md:text-5xl lg:text-6xl dark:text-white text-center">
        QUIZ
      </h1>
      <section className="p-10 my-10 rounded-lg shadow-xl w-[65%]">

        <div><label htmlFor="first_name" className="block text-lg font-medium text-white-700">
          Number of Questions
        </label>
          <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white "></label>
          <input  onChange={(e)=>addNumberOfQuestion(e.target.value)} type="number" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />

        </div>
        <div className="felx first-letter:flex-col justify-centre">
          <DropdownOptions />
          <Button />
        </div>

      </section>
    </section>
  );
}

