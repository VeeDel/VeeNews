export default function NewsOnImage({ title, image, urlToImage, description }) {
  return (
    <div className="relative overflow-hidden h-full w-full">
      <img
        src={image}
        alt=""
        className="h-full  object-cover object-center rounded-t-lg"
      />

      <div className="absolute top-0 w-full h-full bg-black opacity-70"></div>

      <div className="absolute bottom-3 left-3 p-5">
        <h1 className="text-white font-semibold text-2xl leading-normal pb-2 ">
          {title}{" "}
        </h1>
        <p className="text-white max-sm:hidden text-base font-palanquin">
          {description.slice(0, 150)}...
        </p>
      </div>
    </div>
  );
}
