import learn1 from "@/assets/learn1.png";
import learn2 from "@/assets/learn2.png";
import learn3 from "@/assets/learn3.png";
import learn4 from "@/assets/learn4.png";
import light from "@/assets/Ellipse 7.png";
import LearnItem from "./LearnItem";
import Image from "next/image";

export default function Learn() {
  return (
    <section className="bg-[#000625] relative flex flex-col items-center h-full gap-8 px-2 py-16" id="learn">
      <h1 className="text-center text-2xl text-[#00FFA0] bg-[#00FFA0] bg-opacity-5 px-16 sm:px-24 py-6 rounded-full">
        Learn Crypto
      </h1>

      <h1 className="text-white text-4xl w-full md:w-auto md:text-5xl">
        Let's Know How Crypto Works
      </h1>
      <p className="text-white/75 md:text-center w-full md:max-w-xl">
        Cryptocurrency is a form of digital or virtual currency that uses
        cryptography for security.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 container place-items-center">
        <LearnItem
          img={learn1}
          alt="Learn Crypto"
          title="Learn Crypto"
          url="https://learncrypto.com/"
        />
        <LearnItem
          img={learn2}
          alt="Learn Earn"
          title="Learn Earn"
          url="https://www.bankrate.com/investing/how-to-earn-free-crypto/"
        />
        <LearnItem
          img={learn3}
          alt="How to trade"
          title="How to trade"
          url="https://www.avatrade.com/cryptocurrencies/how-to-trade-cryptocurrencies"
        />
        <LearnItem
          img={learn4}
          alt="Build Portfolio"
          title="Build Portfolio"
          url="https://www.cointree.com/learn/crypto-portfolio/"
        />
      </div>
      <div className="absolute left-0 top-0 ">
        <Image
          src={light}
          alt="left light"
          className="h-[500px] w-auto object-cover"
          priority
        />
      </div>
    </section>
  );
}
