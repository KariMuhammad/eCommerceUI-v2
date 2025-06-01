import Marquee from "react-fast-marquee";
import { sponsers } from "@/constants";

const SponsersSection = () => {
  return (
    <section aria-label="sponsers-section" className="">
      <Marquee
        gradient={true}
        speed={40}
        style={{
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        }}
        className="overflow-hidden"
      >
        <div className="flex">
          {sponsers.map((sponser, index) => (
            <div className="sponser flex-shrink-0">
              <img
                src={sponser.image}
                alt={`sponser-${index}`}
                className="transition-all hover:scale-110"
              />
            </div>
          ))}
        </div>
      </Marquee>
    </section>
  );
};

export default SponsersSection;
