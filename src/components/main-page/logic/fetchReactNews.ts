"use client";

import axios from "axios";

export const fetchReactNews = async () => {
  const response = await axios.get(
    "https://api.github.com/repos/facebook/react/releases"
  );
  return response.data;
};
