import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
  const [searchTerm, setSearchterm] = useState("");
  const [searchApi, results, error] = useResults();

  const filterByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <>
      <SearchBar
        searchTerm={searchTerm}
        onSearchTermChange={setSearchterm}
        onTermSubmit={() => searchApi(searchTerm)}
      />
      <ScrollView>
        <ResultsList title="Cost Effective" result={filterByPrice("$")} />
        <ResultsList title="Bit Pricier" result={filterByPrice("$$")} />
        <ResultsList title="Big Spender" result={filterByPrice("$$$")} />
        <ResultsList title="Super Expensive" result={filterByPrice("$$$$")} />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    paddingTop: 10,
    flex: 1,
  },
});

export default SearchScreen;
