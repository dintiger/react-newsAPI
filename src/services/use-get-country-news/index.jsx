import React from 'react'
import axios from "axios";
export function useGetCountryNews(country){
    const [news, setNews] = React.useState([])
    const [loading, setLoading] = React.useState(true)

    React.useEffect(() => {
        setTimeout(()=>{
            (async() => {
                try{
                    const res = await axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${process.env.REACT_APP_API_KEY}`)
                    setNews(res.data.articles)
                    setLoading(false)
                }  catch (e) {
                    setLoading(false)
                }
            })()
        }, 1000)
    }, [country])

    return {
        loading: loading,
        news: news
    }
}