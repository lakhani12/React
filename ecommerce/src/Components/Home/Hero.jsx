import { ArrowRight, BadgePercent, Section } from "lucide-react";
import React from "react";

const Hero = () => {
  return (
    <>
      <section className="bg-[#cebdb5] h-134 overflow-hidden flex justify-between items-center px-6 w-full">
        <div className="w-1/2 pl-20">
          {/* Sale  */}
          <div className="inline-block  bg-white/60 backdrop-blur-sm rounded-full px-3 py-1 text-xl">
          <div className=" flex justify-center items-center gap-x-2 ">
            <span className="">
              <BadgePercent fill="#7f5539" className="text-white w-8 h-8" />
            </span>
            <span className="font-semibold">50% OFF</span> Summer Super Sale
          </div></div>

          {/* title  */}
          <h1 className="text-5xl font-medium3 leading-relaxed">Step Into Style : your 
            <br />
            Ultimate Fashion Destination
          </h1>
          {/* description */}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.<br></br>
            Maxime dignissimos consequuntur ea nisi ullam aspernatur, ex
            cupiditate commodi quae consectetur?
          </p>
          {/* button  */}
          <button>Shop Now <ArrowRight/></button>
        </div>

        <img
          src="/image.png"
          alt="hero.image"
          className="object-cover scale-85 -mt-5 rotate-y-180 w-1/2"
        />
      </section>
    </>
  );
};

export default Hero;
