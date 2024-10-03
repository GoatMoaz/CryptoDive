import Hero from "@/components/Home/Hero";
import Learn from "@/components/Home/Learn";
import Market from "@/components/Home/Market";
import Faqs from "@/components/Home/Faqs";
import Nav from "@/components/Home/Nav";
import Contact from "@/components/Home/Contact";
import Footer from "@/components/Home/Footer";

export default function Index() {
  return (
    <>
      <Nav />
      <Hero />
      <Market />
      <Learn />
      <Faqs />
      <Contact />
      <Footer />
    </>
  );
}
