import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Searchbar from "@/component/Searchbar";
import Line from "@/component/Line";
import stays from "@/data/stays";
import StaysList from "@/app/(tabs)/stays/StaysList";

const StayIndex = () => {
  const [search, setSearch] = useState("");
  const displayStays = stays.filter((stay) =>
    stay.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Explore Stays</Text>
      <Searchbar setSearch={setSearch} />
      <View
        style={{
          flexDirection: "row",
          gap: 10,
          paddingLeft: 10,
          paddingRight: 10,
        }}
      >
        <Line width={"50%"} color="#1abc9c" />
        <Line width={"50%"} color="#1abc9c" />
      </View>

      <StaysList stays={displayStays} />
    </View>
  );
};

export default StayIndex;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
  },

  line: {
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 10,
    alignItems: "center",
    backgroundColor: "white",
    width: "90%",
    height: 10,
    marginTop: 20,
  },
  textContainer: {
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    backgroundColor: "white",
  },
});
