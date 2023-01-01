import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { AiTwotoneSound } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";

const home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [keyword, setKeyword] = useState("");

  const searchWord = async (e) => {
    e.preventDefault();
    try {
      const response = await window.fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`
      );
      const results = await response.json();
      setData(results[0]);
      console.log(results[0]);
    } catch {
      alert("error");
    }
  };

  return (
    <Layout>
      <div className="px-5">
        <h1 className="text-xl font-semibold mt-5 mb-2 text-center sticky">
          Find the meaning of the word
        </h1>
        <form
          onSubmit={(e) => searchWord(e)}
          className="w-64 mt-form-control input rounded-lg border border-black border-lg flex justify-center items-center px-3 py-2 text-center mx-auto sticky"
        >
          <input
            onChange={(e) => setKeyword(e.target.value)}
            value={keyword}
            type="text"
            className="w-full focus:outline-none"
            placeholder="Type in here..."
            required
          />

          <BsSearch />
        </form>
        {!data || data.length === 0 ? (
          <p className="text-center mt-3">No Data</p>
        ) : (
          <div className="mt-5">
            <p className="text-2xl">
              Results of <span className="font-semibold">{data.word}</span>
            </p>

            <div>
              <div className="flex space-x-5 items-center my-3">
                <div className="rounded-full shadow-lg shadow-gray-500 p-4">
                  <AiTwotoneSound size={30} />
                </div>
                <div className="flex flex-col space-y-2">
                  <p className="font-semibold text-xl">{data.word}</p>
                  <p>{data.phonetics[0]?.text}</p>
                </div>
              </div>
              <div className="flex flex-col my-10">
                <p className="font-semibold text-lg">Meaning</p>
                {data?.meanings?.map((item, index) => (
                  <div key={index} className="flex flex-col space-y-3 mb-2">
                    <div className="flex space-x-10">
                      <p>Part of</p>
                      <p className="font-semibold">: {item.partOfSpeech}</p>
                    </div>
                    <div className="flex space-x-5">
                      <p>Definition</p>
                      <p>{item.defini}</p>
                    </div>
                    <div className="flex space-x-5">
                      <p>Synonym</p>
                      <p>: No</p>
                    </div>
                    <div className="flex space-x-6">
                      <p>Antonym</p>
                      <p>: No</p>
                    </div>
                    <div className="flex space-x-9">
                      <p>Source</p>
                      <a href="">: Link URL</a>
                    </div>
                    <hr />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default home;
