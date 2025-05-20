import { Ionicons } from "@expo/vector-icons";
import { Stack, Tabs } from "expo-router";

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#fff",
        tabBarStyle: {
          backgroundColor: "#1abc9c",
        },
        headerStyle: {
          backgroundColor: "#1abc9c",
        },
        headerTintColor: "#1abc9c",
      }}
    >
      <Tabs.Screen
        name="trips"
        options={{
          title: "Trips",
          tabBarIcon: () => <Ionicons name="home" size={24} color="#fff" />,
        }}
      />
      <Tabs.Screen
        name="stays"
        options={{
          title: "Stays",
          tabBarIcon: () => <Ionicons name="person" size={24} color="#fff" />,
        }}
      />
    </Tabs>
  );
}
