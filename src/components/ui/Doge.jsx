import Image from "next/image";
import doge from "@/assets/doge.png";
import redCircle from "@/assets/redCircle.png";

export default function Doge() {
  return (
    <div className="absolute bottom-1/3 right-44 animate-spin duration-2000">
      <div className="relative">
        <Image src={redCircle} alt="circle" priority />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Image src={doge} alt="doge" priority />
        </div>
      </div>
    </div>
  );
}
