import React, { useEffect, useState } from "react";
import { Meme, MemeResponse } from "../Types/MemeTypes";
import axios from "axios";
import MemeCard from "../Components/MemeCard";
import Loader from "../Components/Loader";

const MemesPage = () => {
  const [memeList, setMemeList] = useState<Meme[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  //   Fetch Memes
  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const res = await axios.get("https://api.imgflip.com/get_memes");
        const data: MemeResponse = res.data;

        setMemeList(data?.data?.memes);
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
        <section className="space-y-7 py-10 px-2 max-w-2xl mx-auto">
          {memeList?.map((meme: Meme) => (
            <MemeCard key={meme.id} meme={meme} />
          ))}
        </section>
      )}
    </>
  );
};

export default MemesPage;
