import React from "react";
import VerticleCard from "../components/VerticleCard";
import { software } from "../constants";
import Headlins from "../components/Headlins";
import useNewsData from "../hooks/useNewsData";

const firstNews = software.slice(0, 1);
const restNews = software.slice(1, 3);
export default function Software() {
  const newsData = useNewsData("technology", 3, 6);
  console.log(newsData);
  return (
    <section className="max-container">
      <div>
        <Headlins Headline={"Software"} ViewMore={"View More"} />
        <div className="flex flex-col gap-5">
          <VerticleCard {...firstNews[0]} />
          <div className="flex max-md:flex-col">
            {restNews.map((news) => (
              <div key={news.label}>
                <VerticleCard {...news} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
