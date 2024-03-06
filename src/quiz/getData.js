import { useState, useEffect } from "react";
import axios from "axios";

export function useAxios(url) {
  const [data, setData] = useState({ results: [] });
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(url);
        const text = await response.data;
        setData(text);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [url]);
  return data;
}

export default useAxios;
