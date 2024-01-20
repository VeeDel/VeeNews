import { ArrowRight, MessengerLogo } from "phosphor-react";
import { editorsPick } from "../constants";
import { useState } from "react";
import { useEffect } from "react";
import { UseFetch } from "../hooks/useFetch";
import Headlins from "../components/Headlins";
import Subscribe from "../components/Subscribe";
import useNewsData from "../hooks/useNewsData";

export default function EditorsPick() {
  const newsData = useNewsData("technology", 1, 4);

  return (
    <section className="max-container">
      <div className="flex max-sm:flex-col gap-5">
        <div className="flex-1 border-b-2 pb-10 ">
          <Headlins Headline={"Editors Pick"} ViewMore={"View all"} />
          <div className="flex max-sm:flex-col mt-4 justify-between gap-4 ">
            {newsData.map((pick) => (
              <div
                key={pick.label}
                className="relative items-center flex max-sm:mt-4 flex-col w-auto sm:bg-gray-50 p-2 rounded-md transition-transform hover:shadow-xl hover:scale-110 cursor-pointer"
              >
                <div className="  rounded overflow-hidden shadow-lg">
                  <img
                    className="  w-full md:h-28 lg:h-48 object-cover "
                    src={pick.urlToImage}
                  />
                </div>

                <h1 className="absolute left-3 top-3 bg-slate-50 rounded-sm px-1 uppercase font-semibold text-sm ">
                  {pick.source.name}
                </h1>
                <div className="font-bold mt-2  text-xl hover:text-purple-400 cursor-pointer font-palanquin">
                  <a target="_blank" rel="noopener noreferrer" href={pick.url}>
                    {" "}
                    {pick.title.slice(0, 50)}...
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Subscribe />
      </div>
    </section>
  );
}
