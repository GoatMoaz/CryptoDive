import Image from "next/image";
import purpleCircle from "@/assets/purpleCircle.png";
import eth from "@/assets/ethereum.png";

export default function Ethereum() {
  return (
    <div className="absolute bottom-1/4 left-56 animate-spin duration-2000">
      <div className="relative">
        <Image src={purpleCircle} alt="circle" priority />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Image src={eth} alt="ethereum" priority />
        </div>
      </div>
    </div>
  );
}
