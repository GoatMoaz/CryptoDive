import light from "@/assets/Ellipse 7.png";
import Image from "next/image";

export default function Contact() {
  return (
    <section className="bg-white/5 relative flex md:flex-row flex-col items-center md:items-start justify-center gap-20 px-4 py-16 w-full text-white" id="support">
      <div className="md:w-1/2 w-full text-center md:text-left">
        <h1 className="text-3xl md:text-5xl">Get It On The Crypto Action</h1>
        <p className="text-white/75 text-sm sm:text-base w-full md:max-w-lg mt-4">
          Provide easy access to customer support through chatbots or live chat
          features.
        </p>
      </div>
      <div className="flex flex-col w-full md:w-2/5">
        <label htmlFor="email" className="mb-2">
          Email Address
        </label>
        <input
          className="bg-white/10 px-4 py-3 outline-none w-full text-white/75 rounded-lg"
          name="email"
          placeholder="Enter email Address"
          type="text"
          id="email"
        />
        <label htmlFor="topic" className="mb-2 mt-8">
          Your Topic
        </label>
        <input
          className="bg-white/10 px-4 py-3 outline-none w-full text-white/75 rounded-lg"
          name="topic"
          placeholder="Enter Your Topic"
          type="text"
          id="topic"
        />
        <button className="bg-[#00FFA0] bg-opacity-10 py-4 mt-8 font-semibold text-xl text-[#00FFA0] rounded-full border-2 border-[#00FFA0] hover:bg-[#00FFA0] hover:text-black transition-colors duration-300">
          Send Message
        </button>
      </div>
      <div className="absolute right-0 rotate-180 -top-64 -z-10">
        <Image
          src={light}
          alt="right light"
          className="h-[600px] w-auto"
          priority
        />
      </div>
      <div className="absolute top-0 left-0 -z-10">
        <Image
          src={light}
          alt="left light"
          className="h-full w-auto"
          priority
        />
      </div>
    </section>
  );
}
