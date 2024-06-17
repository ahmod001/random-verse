import React, { useEffect, useState } from "react";
import { Quote, QuoteResponse } from "../Types/QuoteTypes";
import axios from "axios";
import Loader from "../Components/Loader";
import QuoteCard from "../Components/QuoteCard";

const MotivationPage = (): React.ReactNode => {
  const [quoteList, setQuoteList] = useState<Quote[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  //   Fetch Quotes
  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const res = await axios.get(
          "https://api.quotable.io/quotes?tags=famous-quotes&limit=100"
        );
        const data: QuoteResponse = res.data;

        setQuoteList(data?.results);
      } catch (error) {
        console.error(error);
      }
      setIsLoading(!true);
    })();
  }, []);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <section className="space-y-7 py-10 px-2 max-w-6xl mx-auto">
          {quoteList.map((quote)=>(
              <QuoteCard key={quote._id} quote={quote}/>
          ))}
        </section>
      )}
    </>
  );
};

export default MotivationPage;
