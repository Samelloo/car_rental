import { FC } from "react";
import Image from "next/image";

interface QuestionBubbleProps {
  question: string;
}

export const QuestionBubble: FC<QuestionBubbleProps> = ({ question }) => {
  return (
    <div className="flex items-center gap-x-4 mb-6">
      <Image
        src="https://res.cloudinary.com/dhef1sxhg/image/upload/v1717044882/LEBAH_01_weaqdf.gif"
        alt="genq"
        width={100}
        height={100}
        className="size-40 lg:size-40"
      />

      <div className="relative py-2 px-4 border-2 rounded-xl text-sm lg:text-base">
        {question}

        <div className="absolute size-0 border-x-8 -left-3 top-1/2 border-x-transparent border-t-8 transform -translate-y-1/2 rotate-90" />
      </div>
    </div>
  );
};
