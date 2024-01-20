import { useState } from "react";
import Headlins from "../components/Headlins";
import VerticleCard from "../components/VerticleCard";
import { technology } from "../constants";
import { useEffect } from "react";
import { UseFetch } from "../hooks/useFetch";
import useNewsData from "../hooks/useNewsData";

export default function Technology() {
  const newsData = useNewsData("technology", 0, 3);
  return (
    <section className="max-container border-b-2 pb-5">
      <div>
        <Headlins Headline={"Technology"} ViewMore={"More in Technology"} />
        <div className="grid max-sm:grid-cols-1 max-md:grid-cols-2 md:grid-cols-3 gap-4">
          {technology.map((news) => (
            <VerticleCard {...news} key={news.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
