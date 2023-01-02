import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Box from "../components/Box";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useTitle } from "../utils/useTitle";

const Saved = () => {
  const favWords = useSelector((state) => state.data.favorites);
  const [data, setData] = useState([]);
  const params = useParams();
  useTitle(`Saved - ${params.word}`);
  const currentWord = favWords.filter((item) => item.word === params.word);

  useEffect(() => {
    setData(currentWord[0]);
  }, []);

  return (
    <Layout>
      <div className="px-5">
        <Box data={data} params={params} />
      </div>
    </Layout>
  );
};

export default Saved;
