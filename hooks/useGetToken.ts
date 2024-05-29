import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

export function useToken() {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const fetchToken = async () => {
      const storedToken = await AsyncStorage.getItem("@token");
      setToken(storedToken);
    };

    fetchToken();
  }, []);

  return token;
}
