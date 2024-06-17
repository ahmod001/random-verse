import React from "react";
import { Quote } from "../Types/QuoteTypes";

interface Props {
  quote: Quote;
}

const QuoteCard = ({ quote }: Props): React.ReactNode => {
  return (
    <div className="max-w-2xl w-full bg-gray-500/20 backdrop-blur-md mx-auto rounded-md ">
      <blockquote className="p-5 ">
        <p className="md:text-2xl sm:text-xl italic font-medium text-white">
          {quote.content}
        </p>
        <cite className=" text-sm md:text-base font-medium text-white inline-block mt-2">
          - {quote.author}
        </cite>
      </blockquote>

        {/* <div className="py-2 px-2 flex justify-end">
         
        </div> */}
      </div>
  );
};

export default QuoteCard;
