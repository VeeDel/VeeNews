import { MessengerLogo } from "phosphor-react";

export default function Subscribe() {
  return (
    <div className="px-2 border border-slate-200 sm:w-1/4 bg-slate-50 ">
      <MessengerLogo
        width={40}
        height={40}
        color="white"
        className="bg-purple-500 p-1"
      />
      <h1 className="pt-7 text-xl font-semibold font-palanquin">
        Subscribe to Our Newsletter
      </h1>
      <p className="info-text pt-3">
        We will inform You when there is any news for You
      </p>
      <input
        type="text"
        className="border w-full p-2"
        placeholder="Enter Email"
      />
      <button className="text-lg font-semibold px-4 py-2 bg-purple-400 text-white my-4 rounded-full">
        Subscribe
      </button>
    </div>
  );
}
