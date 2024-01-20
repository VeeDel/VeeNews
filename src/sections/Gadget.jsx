import React from "react";
import VerticleCard from "../components/VerticleCard";
import { gedgets } from "../constants";
import Headlins from "../components/Headlins";

const firstNews = gedgets.slice(0, 1);
const restNews = gedgets.slice(1, 3);
console.log(firstNews);
export default function Gadget() {
  return (
    <section className="max-container">
      <div>
        <Headlins Headline={"Gedgets"} ViewMore={"View More"} />
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
