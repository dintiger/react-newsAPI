import React from 'react'
import {useParams} from 'react-router-dom'
import {useGetHeadlineNews} from "../services/use-get-headline-news";
import {useGetCountryNews} from "../services/use-get-country-news";

export function CountryNews(){
    const { country } = useParams()
    const newsHook = useGetHeadlineNews()
    const countryNewsHook = useGetCountryNews(country)

    return (
        <div>
            <h3>CountryNews</h3>
            {countryNewsHook.news.map(newsArticle => (
                <div>{newsArticle.title}</div>
            ))}
            <h3>Related Headlines</h3>
            {newsHook.news.map(newsArticle => (
                <div>{newsArticle.title}</div>
            ))}
        </div>
    )
}