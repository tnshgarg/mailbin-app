import AsyncStorage from "@react-native-async-storage/async-storage";
import { Redirect } from "expo-router";
import React, { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";

const Index = () => {
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchToken = async () => {
      const storedToken = await AsyncStorage.getItem("@token");
      console.log("token: ", storedToken);
      setToken(storedToken);
      setIsLoading(false);
    };
    
    fetchToken();
  }, []);

  if (isLoading) {
    return <ActivityIndicator size={"large"} color={"red"} />; // or a loading spinner if you prefer
  }

  if (token == null) {
    console.log("NULL STATE");
    return <Redirect href="/signin" />;
  } else {
    console.log("TABS STATE");
    return <Redirect href="/(tabs)" />;
  }
};

export default Index;

