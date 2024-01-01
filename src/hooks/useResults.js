import { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");

  const searchApi = async (searchRestaurant) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchRestaurant,
          location: "san jose",
        },
      });
      setResults(response.data.businesses);
    } catch (error) {
      setError("Something went wrong");
    }
  };

  useEffect(() => {
    searchApi("burger");
  }, []);

  return [searchApi, results, error];
};
