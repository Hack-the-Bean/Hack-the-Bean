import { Stack } from "expo-router";
import NavBar from "@/components/NavBar";
import { useEffect } from "react";

export default function RootLayout() {
  useEffect(() => {
    document.title = "HackTheBean";
  }, []);
  
  return (
    <>
      <NavBar />
      <Stack 
        screenOptions={{
          headerShown: false
        }}
      />
    </>
  )
}
