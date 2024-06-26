import React from "react";
import Weather from "../assets/portfolio/Weather.jpg";
import BoxOffice from "../assets/portfolio/BoxOffice.jpg";
import HairStyle from "../assets/portfolio/HairStyle.jpg";
import Sanjivini from "../assets/portfolio/Sanjivini.jpg";
import web3 from "../assets/portfolio/web3.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: Sanjivini,
      name: "Sanjeevani",
      demo : "https://treetagging.vercel.app/",
      code : "https://github.com/Programmer0909/treetagging"
    },
    {
      id: 2,
      src: HairStyle,
      name: "HairStyle Recommender ",
      demo : "https://github.com/Programmer0909/hairstyle_recommendator",
      code : "https://github.com/Programmer0909/hairstyle_recommendator"
    },
    {
      id: 3,
      src: Weather,
      name: "Weather App",
      demo : "https://programmer0909.github.io/weather/",
      code : "https://github.com/Programmer0909/weatherapp"
    },
    {
      id: 4,
      src: BoxOffice,
      name: "BoxOffice App",
      demo : "https://programmer0909.github.io/movie-suggester/",
      code : "https://github.com/Programmer0909/movie-suggester"
    },
    {
      id: 5,
      src: web3,
      name: "Crypto Transfer",
      demo : "https://basic-dapp-sigma.vercel.app/",
      code : "https://github.com/Programmer0909/basic_dapp"
    }
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full py-16">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src , name, demo , code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
            <div className="flex justify-center p-3 font-bold text-gray-300">
              {name} 
            </div>
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={demo}>Demo</a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={code}>Code</a>

                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
