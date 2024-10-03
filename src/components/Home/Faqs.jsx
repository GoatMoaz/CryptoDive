import FaqsContent from "./FaqsContent";

const questions1 = [
  {
    question: "What is cryptocurrency?",
    answer:
      "Cryptocurrency is a digital currency secured by cryptography and operating on decentralized networks.",
  },
  {
    question: "What is blockchain?",
    answer:
      "A blockchain is a distributed ledger that records transactions across many computers in such a way that the registered transactions cannot be altered retroactively.",
  },
  {
    question: "What is cryptocurrency wallet?",
    answer:
      "A cryptocurrency wallet is a digital tool for storing, sending, and receiving cryptocurrencies.",
  },
];
const questions2 = [
  {
    question: "How do I start investing in cryptocurrency?",
    answer:
      "Choose a reliable exchange, create an account, verify your identity, deposit funds, and start trading.",
  },
  {
    question: "How do I keep my cryptocurrency safe?",
    answer:
      "Use strong passwords, enable two-factor authentication, and store your private keys in a secure place.",
  },
  {
    question: "What are the most popular cryptocurrencies?",
    answer:
      "Bitcoin, Ethereum, Binance Coin, Cardano, and Solana are some of the most popular cryptocurrencies.",
  },
];
export default function Faqs() {
  return (
    <section className="py-8 flex flex-col justify-center items-center w-full gap-4 text-white">
      <h3 className="text-center text-2xl text-[#00FFA0] bg-[#00FFA0] bg-opacity-5 px-16 py-4 rounded-full">
        FAQs
      </h3>
      <h1 className="text-center text-2xl sm:text-3xl w-full md:w-auto md:text-5xl">
        Frequently Asked Questions
      </h1>
      <p className="text-white/75 px-2 text-center w-full md:max-w-xl">
        Here are some of the most frequently asked questions about
        cryptocurrency.
      </p>
      <div className="flex flex-col lg:flex-row justify-center items-center w-full">
        <FaqsContent questions={questions1} />
        <FaqsContent questions={questions2} />
      </div>
    </section>
  );
}
