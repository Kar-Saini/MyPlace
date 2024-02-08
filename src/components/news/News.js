import React, { useEffect } from "react";
import NewsCard from "./NewsCard";
import { useDispatch, useSelector } from "react-redux";
import { addNews } from "../../utils/slice/newsSlice";

export default function News() {
  const newsData = useSelector((store) => store.news.news);
  const showNews = useSelector((store) => store.news.showNews);
  const dispatch = useDispatch();
  useEffect(() => {
    async function getNewsData() {
      const data = await fetch(
        "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=87128298a49c4fe78ba2e07e296a5202"
      );
      const jsonData = await data.json();
      dispatch(addNews(jsonData.articles));
    }
    getNewsData();
  }, []);
  console.log(newsData);
  return (
    <div className=" m-2 p-2  w-[30%] ] overflow-y-scroll">
      <div className=" justify-center flex border-b-2 border-black text-2xl font-semibold">
        NEWS
      </div>
      <div className="">
        {showNews &&
          newsData[0].map((ele) => (
            <NewsCard
              key={Math.random()}
              image={ele.urlToImage}
              title={ele.title}
              date={ele.publishedAt}
              description={ele.description}
            />
          ))}
      </div>
    </div>
  );
}
