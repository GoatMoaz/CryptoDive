import Image from "next/image";
import yellowCircle from "@/assets/yellowCircle.png";
import coins from "@/assets/bitcoin.png";

export default function Bitcoin() {
  return (
    <div className="absolute top-1/4 left-44 animate-spin duration-2000 ">
      <div className="relative">
        <Image src={yellowCircle} alt="circle" priority />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Image src={coins} alt="bitcoin" priority />
        </div>
      </div>
    </div>
  );
}
