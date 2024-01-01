import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import yelp from "../api/yelp";

const ResultsShowScreen = ({ route }) => {
  const [response, setResponse] = useState(null);
  const id = route.params.id;

  const getResult = async (id) => {
    const response = await yelp.get(`${id}`);
    setResponse(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!response) {
    return null;
  }

  return (
    <View>
      <Text>{response.name}</Text>
      <FlatList
        data={response.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image styles={styles.image} source={{ uri: item }} />;
        }}
      />
      <Text></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 300,
  },
});

export default ResultsShowScreen;
