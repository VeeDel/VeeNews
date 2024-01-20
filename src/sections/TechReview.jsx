import { ArrowRight, Calendar, User } from "phosphor-react";
import { socialMedias, techReview } from "../constants";
import getapp from "../assets/getapp.jpg";
import { useState } from "react";
import { useEffect } from "react";
import { UseFetch } from "../hooks/useFetch";
import Headlins from "../components/Headlins";
import NewsCard from "../components/NewsCard";
import useNewsData from "../hooks/useNewsData";

export default function TechReview() {
  const newsData = useNewsData("politics", 0, 3);
  return (
    <section className="max-container">
      <div className="flex max-md:flex-col lg:flex-1 gap-6 max-sm:items-center justify-center">
        <div>
          <Headlins Headline={"Politics"} ViewMore={"More In Tech Review"} />
          <div className="grid grid-cols-1 gap-6">
            {newsData.slice(1, 4).map((item) => (
              <NewsCard {...item} key={item.label} />
            ))}
          </div>
        </div>
        <div className="w-full   max-md:flex gap-6">
          <img
            src={getapp}
            alt="Get The App"
            className="max-sm:w-24 max-sm:h-full"
          />
          <div className="md:mt-8 border-t-2 flex flex-col gap-6 py-5 px-1">
            {socialMedias.map((item) => (
              <div key={item.title} className=" flex gap-2">
                <img src={item.logo} width={30} height={30} alt={item.title} />
                <div className="w-44">
                  <h1 className="font-semibold text-base ">{item.title}</h1>
                  <p className="info-text ">{item.followers}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
