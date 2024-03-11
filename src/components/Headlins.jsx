import { ArrowRight } from "phosphor-react";
import { Link } from "react-router-dom";

export default function Headlins({ Headline, ViewMore, topic }) {
  const topics = {
    topicTitle: topic,
  };
  return (
    <div className="flex justify-between items-center mb-6">
      <h2 className="font-bold text-2xl">{Headline}</h2>
      <h2 className="font-semibold text-xl text-purple-600">
        <Link
          to={{ pathname: "/morenews", state: { topics } }}
          className="flex gap-4 items-center"
        >
          {ViewMore}
          <ArrowRight size={24} />
        </Link>
      </h2>
    </div>
  );
}
