import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="StayIndex" />
      <Stack.Screen name="Staydetails" />
      <Stack.Screen name="TripDetails" />
    </Stack>
  );
}

export const unstable_settings = {
  initialRouteName: "index",
};
