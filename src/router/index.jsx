import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Favorites from "../pages/Favorites";
import Saved from "../pages/Saved";
import NotFound from "../pages/NotFound";
import { useDispatch } from "react-redux";
import { setFavorites } from "../utils/redux/reducers/reducers";

const index = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getWord = localStorage.getItem("favWords");
    if (getWord) {
      dispatch(setFavorites(JSON.parse(getWord)));
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/favorites" element={<Favorites />}></Route>
        <Route path="/saved/:word" element={<Saved />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default index;
