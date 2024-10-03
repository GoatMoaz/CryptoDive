import Image from "next/image";

export default function LearnItem({ img, alt, title, url }) {
  return (
    <a
      href={url}
      target="_blank"
      className="flex flex-col gap-4 cursor-pointer items-center p-10 w-full text-xl font-semibold text-[#00FFA0] border border-transparent hover:border-[#00FFA0] hover:-translate-y-2 border-solid bg-[#00FFA0] bg-opacity-10 max-w-[248px] rounded-[55px] transition-transform duration-300"
    >
      <div className="bg-[#004042] p-4 rounded-lg">
        <Image
          src={img}
          alt={alt}
          className="object-contain aspect-square w-[60px]"
          priority
        />
      </div>

      <h2>{title}</h2>
    </a>
  );
}
