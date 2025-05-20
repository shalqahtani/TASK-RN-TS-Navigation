import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

interface TripCardProps {
  trip: {
    id: number;
    name: string;
    city: string;
    slug: string;
    length1: string;
    difficulty: string;
    details: string;
    img: string;
    rating: string;
  };
}

const TripCard = ({ trip }: TripCardProps) => {
  return (
    <Link style={styles.container} href={"/trips/TripDetails"} >
      <Image source={{ uri: trip.img }} style={styles.image} />
    </Link>
  );
};

export default TripCard;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  container: {
    margin: 10,
    borderRadius: 10,
    overflow: "hidden",
  },
});
