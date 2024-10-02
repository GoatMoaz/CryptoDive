import { useEffect, useState } from "react";
import Hero from "@/components/Home/Hero";
import Market from "@/components/Home/Market";
import Nav from "@/components/Home/Nav";

export default function Index() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setIsDesktop(window.innerWidth > 768);
  }, []);
  return (
    <>
      <Nav />
      <Hero />
      {isDesktop && <Market />}
    </>
  );
}
