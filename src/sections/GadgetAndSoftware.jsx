import Gadget from "./Gadget";
import Software from "./Software";

export default function GadgetAndSoftware() {
  return (
    <section className="max-container">
      <div className="flex max-md:flex-col gap-6 pb-14 border-b-2">
        <Gadget />
        <Software />
      </div>
    </section>
  );
}
