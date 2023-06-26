import React from "react";
import { useGetHeadlineNews } from "../services/use-get-headline-news";

export function Home() {
  const newsHook = useGetHeadlineNews();
  return (
    <div>
      <h3>Headline News</h3>
      {newsHook.loading && <div>loading news....</div>}
      {newsHook.news.map((newsArticle) => (
        <div>{newsArticle.title}</div>
      ))}
    </div>
  );
}
