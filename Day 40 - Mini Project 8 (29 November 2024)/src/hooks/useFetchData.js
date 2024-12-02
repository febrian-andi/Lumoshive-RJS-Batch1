import useSWR from "swr";
import axios from "axios";

const API_URL = "https://lumoshive-academy-media-api.vercel.app/api";

const fetcher = (url) => axios.get(url).then((res) => res.data);

export const useFetchData = (blogId = null) => {
  const { data, error, isLoading: loading } = useSWR(
    blogId ? `${API_URL}/detail/${blogId}` : `${API_URL}/tech`,
    fetcher
  );
  
  const errorMessage = error ? (error?.response?.data?.error || "Something went wrong") : null;

  return { data, error : errorMessage, loading };
};
