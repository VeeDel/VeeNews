import { ArrowRight } from "phosphor-react";

export default function Headlins({ Headline, ViewMore }) {
  return (
    <div className="flex justify-between items-center mb-6">
      <h2 className="font-bold text-2xl">{Headline}</h2>
      <h2 className="font-semibold text-xl text-purple-600">
        <a href="" className="flex gap-4 items-center">
          {ViewMore}
          <ArrowRight size={24} />
        </a>
      </h2>
    </div>
  );
}
