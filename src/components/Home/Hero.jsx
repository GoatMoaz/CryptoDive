import Image from "next/image";
import Light from "@/assets/Ellipse 7.png";
import Bitcoin from "../ui/Bitcoin";
import Ethereum from "../ui/Ethereum";
import Doge from "../ui/Doge";

export default function Hero() {
  return (
    <section className="h-screen relative flex px-2 text-white flex-col items-center justify-center">
      <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold text-center text-[#00FFA0]">
        Welcome to CryptoDive
      </h1>
      <p className="sm:text-2xl font-normal text-center mt-4">
        The best place to learn about crypto currencies
      </p>
      <button className="bg-[#00FFA0] text-black hover:bg-transparent hover:text-white border-[#00FFA0] transition-colors duration-100 border-2 font-medium text-lg px-4 py-2 sm:px-8 sm:py-4 rounded-full mt-8">
        Get Started
      </button>
      <div className="hidden md:block">
        <Bitcoin />
        <Ethereum />
        <Doge />
      </div>

      <div className="absolute bottom-0 left-0 -z-10">
        <Image src={Light} alt="left light" priority />
      </div>

      <div className="absolute -top-1/3 right-0 rotate-180 -z-10">
        <Image src={Light} alt="right light" priority />
      </div>
    </section>
  );
}
