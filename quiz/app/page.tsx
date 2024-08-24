import Image from "next/image";
import DropOptions from "./components/ui/dropDown";

export default function Home() {
  return (
    <section className="flex flex-col justify-center items-center my-10">
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white-900 md:text-5xl lg:text-6xl dark:text-white text-center">
        QUIZ
      </h1>
      <section className="p-10 my-10 rounded-lg shadow-xl w-[65%]">

        <div><label htmlFor="first_name" className="block text-lg font-medium text-white-700">
          Number of Questions
        </label>
          <input
            type="number"
            defaultValue={10}
            min={0}
            max={50}
            className="mt-2 p-2 border border-gray-300 rounded-lg bg-gray-50"
            id="first_name"
          /></div>

      </section>
    </section>
  );
}
