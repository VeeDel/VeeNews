import { Calendar, User } from "phosphor-react";
export default function VerticleCard({
  label,
  description,
  author,
  date,
  image,
}) {
  return (
    <div className="flex flex-col gap-3">
      <div>
        <img src={image} alt="" />
      </div>
      <div className="flex flex-col justify-center gap-2">
        <h1 className="text-xl font-bold px-2">{label}</h1>
        <div className="flex gap-2 text-gray-600 text-sm">
          <p className="flex gap-1 justify-center items-center font-semibold uppercase">
            <User />
            <a href="/">{author}</a>
          </p>
          <p className="flex justify-center items-center gap-1">
            <Calendar />
            {date}
          </p>
        </div>
        <p className="text-lg text-gray-700">{description.slice(0, 100)}...</p>
      </div>
    </div>
  );
}
