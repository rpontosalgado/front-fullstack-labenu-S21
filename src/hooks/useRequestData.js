import { useState, useEffect } from "react";
import { getUserMusic } from "../services/music";

const useGetUserMusic = (initialState, endpoint) => {
  const [data, setData] = useState(initialState);

  useEffect(() => getUserMusic(endpoint, setData), [endpoint]);

  const updateData = () => getUserMusic(endpoint, setData);

  return [data, updateData];
}

export default useGetUserMusic;