import React, { useEffect, useState } from "react";

export default function Market() {
  const [resData, setResData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,dogecoin&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d"
      );
      if (!res.ok) {
        throw new Error("Something went wrong");
      }
      const data = await res.json();
      localStorage.setItem("cryptoData", JSON.stringify(data));
      setResData(data);
    };

    const localData = localStorage.getItem("cryptoData");

    if (localData) {
      setResData(JSON.parse(localData));
    } else {
      fetchData();
    }
  }, []);

  return (
    <section className="text-white py-8 px-2">
      <h1 className="font-medium text-2xl sm:text-4xl md:text-5xl text-center">
        Crypto Market Metrics
      </h1>
      <table className="mt-8 min-w-full text-center hidden md:table">
        <tbody>
          {resData &&
            resData.map((coin) => (
              <tr key={coin.id}>
                <td className="flex justify-center items-center gap-4 p-8">
                  <img src={coin.image} alt={coin.name} className="w-12 h-12" />
                  <p className="text-xl font-bold">{coin.name}</p>
                </td>

                <td className="p-8">
                  <p className="text-white/75 text-xl">Price</p>
                  <p>$ {coin.current_price}</p>
                </td>
                <td className="p-8">
                  <p className="text-white/75 text-xl">Change</p>
                  <p
                    className={`${
                      coin.price_change_percentage_24h > 0
                        ? "text-[#00FFA0]"
                        : "text-red-500"
                    }`}
                  >
                    {coin.price_change_percentage_24h > 0 ? "+" : ""}
                    {coin.price_change_percentage_24h}%
                  </p>
                </td>
                <td className="p-8">
                  <button className="font-semibold text-lg rounded-full text-[#00FFA0] bg-[#00FFA0] bg-opacity-10 px-6 py-2">
                    View More
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <div className="md:hidden">
        {resData &&
          resData.map((coin) => (
            <div
              key={coin.id}
              className="flex flex-col justify-center items-center mt-4 gap-4 p-4 border border-white/10 rounded-lg"
            >
              <img src={coin.image} alt={coin.name} className="w-12 h-12" />
              <button className="font-semibold text-lg rounded-full text-[#00FFA0] bg-[#00FFA0] bg-opacity-10 px-6 py-2">
                View More
              </button>
            </div>
          ))}
      </div>

      <div className="flex justify-center items-center">
        <button className="w-full md:w-1/3 mt-8 bg-[#00FFA0] bg-opacity-15 py-4 font-semibold text-xl text-[#00FFA0] rounded-full border-2 border-[#00FFA0] hover:bg-[#00FFA0] hover:text-black transition-colors duration-300">
          View Other Crypto
        </button>
      </div>
    </section>
  );
}
