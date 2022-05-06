import AsyncStorage from "@react-native-async-storage/async-storage";

// Fetches a JSON object and/or array of objects from local storage.
async function getJsonItemsFor(key) {
  const raw = await AsyncStorage.getItem(key);
  const result = JSON.parse(raw);
  // console.log("result", result);
  return result;
}

async function setJsonItemsFor(key, items) {
  const json = JSON.stringify(items);
  await AsyncStorage.setItem(key, json);
  return json;
}

export const Storage = { getJsonItemsFor, setJsonItemsFor };
