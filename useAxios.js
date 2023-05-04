/* eslint-disable no-unused-vars */
import { useCallback, useEffect, useState } from "react";
import axios from "axios";

export const useAxios = (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState([]);

  const getData = useCallback(async () => {
    axios
      .get(url)
      .then((res) => res)
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((_err) => {
        setIsError(true);
        setIsLoading(false);
      });
  }, [url]);

  useEffect(() => {
    getData();
  }, [url, getData]);

  return [isLoading, isError, data];
};
