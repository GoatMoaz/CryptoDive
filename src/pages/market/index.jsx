import { useEffect, useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function Market() {
  const [coins, setCoins] = useState([]);
  const [page, setPage] = useState(1);
  const itemsPerPage = 20;

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const res = await fetch(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false`
        );
        const data = await res.json();
        localStorage.setItem("coins", JSON.stringify(data));
        setCoins(data);
      } catch (error) {
        console.error("Failed to fetch coins:", error);
      }
    };

    if (localStorage.getItem("coins")) {
      setCoins(JSON.parse(localStorage.getItem("coins")));
    } else {
      fetchCoins();
    }
  }, []);

  const nextPageHandler = () => {
    if (page === Math.ceil(coins.length / itemsPerPage)) return;
    setPage((prev) => prev + 1);
  };

  const prevPageHandler = () => {
    if (page === 1) return;
    setPage((prev) => prev - 1);
  };

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentCoins = coins.slice(startIndex, endIndex);

  return (
    <section className="w-full md:container mx-auto flex flex-col items-center p-2 pt-32">
      <h1 className="text-4xl font-bold text-white">
        Live Crypto Price Market
      </h1>
      {/* searchbar */}
      <div className="flex items-center w-full md:w-2/4 mx-auto mt-8">
        <input
          type="text"
          placeholder="Search for a coin"
          className="w-full p-3 rounded-l-lg focus:outline-none"
        />
        <button className="bg-slate-700 hover:bg-slate-800 text-white p-2 rounded-r-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14"
            />
          </svg>
        </button>
      </div>
      {/* coins */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-8 w-full md:w-auto">
        {currentCoins.map((coin) => (
          <div
            key={coin.id}
            className="flex cursor-pointer flex-col justify-between w-full items-center p-4 bg-slate-800 rounded-lg hover:bg-slate-700"
          >
            <img src={coin.image} alt={coin.name} className="w-20 h-20" />
            <div className="">
              <h2 className="text-white text-center text-lg font-bold">
                {coin.name}
              </h2>
              <p className="text-white text-center text-sm">
                ${coin.current_price}
              </p>
            </div>
          </div>
        ))}
      </div>
      {/* pagination */}

      <Pagination className="mt-8 cursor-pointer">
        <PaginationPrevious onClick={prevPageHandler}>
          <PaginationLink>Previous</PaginationLink>
        </PaginationPrevious>
        <PaginationNext onClick={nextPageHandler}>
          <PaginationLink>Next</PaginationLink>
        </PaginationNext>
      </Pagination>
    </section>
  );
}
