import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { AiTwotoneSound } from "react-icons/ai";

const Box = ({ data, handleFavorites, params, audio }) => {
  return (
    <>
      {data?.length === 0 || !data ? (
        ""
      ) : data ? (
        <div className="mt-5">
          <div className="flex space-x-10">
            <p className="text-2xl">
              Results of{" "}
              <span className="font-semibold capitalize">"{data?.word}"</span>
            </p>
            {!params && (
              <div
                onClick={handleFavorites}
                className="flex flex-row space-x-4 text-blue-500 items-center cursor-pointer"
              >
                <p>Add to Favorites</p>
                <AiFillStar size={25} />
              </div>
            )}
          </div>

          <div>
            <div className="flex space-x-5 items-center my-3 capitalize">
              {audio.src !== null && (
                <div
                  onClick={() => {
                    audio.play();
                  }}
                  className="rounded-full shadow-lg shadow-gray-500 p-4 cursor-pointer"
                >
                  <AiTwotoneSound size={30} />
                </div>
              )}
              <div className="flex flex-col space-y-2">
                <p className="font-semibold text-xl capitalize">{data?.word}</p>
                <p>{data?.phonetics[0]?.text}</p>
              </div>
            </div>
            <div className="flex flex-col my-10">
              <p className="font-semibold text-lg">Meaning</p>
              {data?.meanings?.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col space-y-3 mb-2 shadow-lg p-5"
                >
                  <div className="flex space-x-10">
                    <p>Part of</p>
                    <p className="font-semibold capitalize">
                      : {item.partOfSpeech}
                    </p>
                  </div>
                  <div className="flex space-x-5">
                    <p>Definition</p>
                    <div className="flex flex-col space-y-3">
                      {item?.definitions?.map((item, index) => (
                        <div key={index}>
                          <p>: {item.definition}</p>
                          {item.example && <p> Ex: {item.example}</p>}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex space-x-5">
                    <p>Synonym</p>
                    {item.synonyms && (
                      <p>: {item.synonyms.map((item) => item + ", ")}</p>
                    )}
                  </div>
                  <div className="flex space-x-6">
                    <p>Antonym</p>
                    {item.antonyms && (
                      <p>: {item.antonyms.map((item) => item + ", ")}</p>
                    )}
                  </div>
                  <div className="flex space-x-9">
                    <p>Source</p>
                    <a
                      href={data?.sourceUrls}
                      target="blank"
                      rel="noopener noreferrer"
                    >
                      : {data?.sourceUrls}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <p className="text-center">No Data</p>
      )}
    </>
  );
};

export default Box;
