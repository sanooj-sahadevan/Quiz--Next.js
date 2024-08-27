"use client";

import DropdownOptions from '@/components/DropDownsOptions';
import InputBox from '@/components/inputBOx';
import Button from '@/components/Buttons/page';
import { useQuizConfig } from '@/store';

export default function Home() {
  const quizConfig = useQuizConfig((state: any) => state.config);
  const addNumberOfQuestions = useQuizConfig(
    (state: any) => state.addNumberOfQuestions
  );

  return (
    <section className="flex flex-col justify-center items-center my-10">
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl dark:text-white">
        Quiz
      </h1>
      <section className="p-10 my-10 rounded-lg border-2 border-white shadow-xl w-[65%]">
        <InputBox />
        <DropdownOptions />
        <div className="flex items-center justify-center">
          {quizConfig?.numberOfQuestion > 0 &&
            quizConfig?.level &&
            quizConfig?.category?.id &&
            quizConfig?.type && <Button />}
        </div>
      </section>
    </section>
  );
}
