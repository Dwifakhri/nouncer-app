import React from "react";
import { useSelector } from "react-redux";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";

const Favorites = () => {
  const favWords = useSelector((state) => state.data.favorites);

  return (
    <Layout>
      <div className="px-5">
        <p className="font-semibold text-2xl text-center mb-10">Favorites</p>
        <div className="grid md:grid-cols-4 lg:grid-cols-5 gap-3">
          {favWords.map((item, index) => (
            <Link key={index} to={`/saved/${item.word}`}>
              <div
                key={index}
                className="p-2 shadow-md rounded-lg hover:scale-105 cursor-pointer border  hover:bg-blue-200"
              >
                {item.word}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Favorites;
