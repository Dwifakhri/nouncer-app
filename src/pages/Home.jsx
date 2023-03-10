import React, { useEffect, useState } from "react";
import Box from "../components/Box";
import Layout from "../components/Layout";
import { BsSearch } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { setFavorites } from "../utils/redux/reducers/reducers";
import { useTitle } from "../utils/useTitle";

const home = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [audio, setAudio] = useState(null);
  // const [loading, setLoading] = useState(false);
  const [keyword, setKeyword] = useState("");
  useTitle("Home");

  const searchWord = async (e) => {
    e.preventDefault();
    try {
      const response = await window.fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`
      );
      const results = await response.json();
      setData(results[0]);
      const phonetics = results[0].phonetics;
      if (!phonetics.length) return;
      const url = phonetics[0].audio;
      setAudio(new Audio(url));
    } catch {
      alert("Error");
    }
  };
  const handleFavorites = async (data) => {
    const myLocalWord = localStorage.getItem("favWords");
    if (myLocalWord) {
      const objWord = JSON.parse(myLocalWord);
      const sameWord = objWord.find((item) => item.word === data.word);
      if (sameWord) {
        const tempWord = objWord.filter((item) => item.word !== data.word);
        objWord.pop(tempWord);
        alert("Already in favorites");
      } else {
        objWord.push(data);
        alert("Success");
        const storageWord = JSON.stringify(objWord);
        dispatch(setFavorites(objWord));
        localStorage.setItem("favWords", storageWord);
      }
    } else {
      const storageWord = JSON.stringify([data]);
      dispatch(setFavorites([data]));
      alert("Success to add");
      localStorage.setItem("favWords", storageWord);
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

          <BsSearch className="cursor-pointer" onClick={searchWord} />
        </form>
        <Box
          data={data}
          audio={audio}
          handleFavorites={() => handleFavorites(data)}
        />
      </div>
    </Layout>
  );
};

export default home;
