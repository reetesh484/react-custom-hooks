/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";

export const useFetch = (url) => {
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState([])
    const [isError,setIsError] = useState(false);

    const getData = async() => {
        // const response = await fetch(url);
        // console.log(response)
        // if(!(response.status >=200 && response.status<=299)){
        //     setIsError(true);
        //     setIsLoading(false);
        //     return;
        // }
        // const data = await response.json();
        // setData(data);
        // setIsLoading(false);

        await fetch(url).then(res => res.json()).then(data => {
            setData(data);
            setIsLoading(false);
        }).catch(err => setIsError(true))
    };

    useEffect(() => {
        getData();
    },[url]);

    return [isLoading,data,isError];
}