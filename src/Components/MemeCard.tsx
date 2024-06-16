import React, { useState,} from "react";
import { Meme } from "../Types/MemeTypes";
import "../css/download-btn.css";

interface Props {
  meme: Meme;
}

const MemeCard = ({ meme }: Props) => {
  const [isImgLoading, setIsImgLoading] = useState<boolean>(true);

  return (
    <div className="card max-w-96 w-full bg-gray-500/20 backdrop-blur-sm mx-auto rounded-md">
      <div className="py-3 px-2 card-body">
        <h2 className="card-title font-extrabold md:text-2xl text-xl">
          {meme.name}
        </h2>
      </div>
      {isImgLoading && <div className={"min-h-[20rem] skeleton"}></div>}
      <figure>
        <img
          className={`h-full max-h-${meme.height}`}
          src={meme.url}
          alt={meme.name}
          onLoad={() => setIsImgLoading(false)}
          loading="lazy"
        />
      </figure>
      <div className="py-2 px-2 flex justify-end">
        <button className="Btn" title="Download">
          <svg
            className="svgIcon"
            viewBox="0 0 384 512"
            height="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path>
          </svg>
          <span className="icon2"></span>
        </button>
      </div>
    </div>
  );
};

export default MemeCard;
