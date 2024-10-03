export default function Footer() {
  return (
    <footer className="container mx-auto text-white py-8">
      <div className="flex flex-col md:flex-row items-center text-center md:text-left gap-4 justify-evenly pb-10">
        <div className="flex flex-col gap-2">
          <h1 className="font-semibold text-2xl">Quick Link</h1>
          <ul className="text-white/75 text-lg flex flex-col gap-2">
            <li>About Us</li>
            <li>Feature</li>
            <li>Career</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="font-semibold text-2xl">Help</h1>
          <ul className="text-white/75 text-lg flex flex-col gap-2">
            <li>Customer Support</li>
            <li>Terms</li>
            <li>Privacy</li>
            <li>FAQs</li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="font-semibold text-2xl">Other</h1>
          <ul className="text-white/75 text-lg flex flex-col gap-2">
            <li>Start Trading</li>
            <li>Earn Free Crypto</li>
            <li>Crypto Wallet</li>
            <li>Payment Option</li>
          </ul>
        </div>
      </div>

      <div className="w-full border-b border-white/25"></div>
        <p className="text-center md:text-left px-2 text-white/75 mt-2">
          © Copyright 2024, all right reserve by{" "}
          <a href="https://github.com/GoatMoaz" target="_blank" className="font-bold">
            Moaz Ayman
          </a>
        </p>
    </footer>
  );
}
