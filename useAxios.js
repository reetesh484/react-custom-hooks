/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import axios from "axios";

export const useAxios = (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState([]);

  const getData = async () => {
    axios
      .get(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((_err) => {
        setIsError(true);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getData();
  }, [url]);

  return [isLoading, isError, data];
};
