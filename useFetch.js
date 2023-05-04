/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useCallback } from "react";

export const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState(false);

  const getData = useCallback(async () => {
    const response = await fetch(url);
    if (!(response.status >= 200 && response.status <= 299)) {
      setIsError(true);
      setIsLoading(false);
      return;
    }
    const data = await response.json();
    setData(data);
    setIsLoading(false);
  }, [url]);

  useEffect(() => {
    getData();
  }, [url, getData]);

  return [isLoading, isError, data];
};
