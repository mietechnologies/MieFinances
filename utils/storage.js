import AsyncStorage from "@react-native-async-storage/async-storage";
import { Utility } from "./utility";

// Fetches a JSON object and/or array of objects from local storage.
async function getItemFor(key) {
  const raw = await AsyncStorage.getItem(key);
  const result = JSON.parse(raw);
  return result;
}

async function setItemFor(key, items) {
  const json = JSON.stringify(items);
  await AsyncStorage.setItem(key, json);
  return json;
}

async function addIncome(source) {
  const key = "incomes";

  // If source has an id, it has already been created, so we need to edit
  if (source.id) {
    return editIncome(source);
  }

  // Otherwise, this is a new income source, so we need to set the id before
  // we continue
  source.id = Utility.uuidv4();

  if (Storage.incomes.length) {
    // Incomes already exist, expand and add new source then save
    Storage.incomes = [...Storage.incomes, source];
  } else {
    // No existing items; create array from source and save
    Storage.incomes = [source];
  }

  const storedItems = await setItemFor(key, Storage.incomes);
  return storedItems;
}

async function deleteIncome(source) {
  const key = "incomes";
  const newItems = Storage.incomes.filter(function (value, index, array) {
    return value.id != source.id;
  });

  Storage.incomes = newItems;
  const storedItems = await setItemFor(key, Storage.incomes);
  return storedItems;
}

async function editIncome(source) {
  const key = "incomes";
  for (let index = 0; Storage.incomes.length; index++) {
    if (Storage.incomes[index].id === source.id) {
      Storage.incomes[index] = source;
      break;
    }
  }

  const storedItems = await setItemFor(key, Storage.incomes);
  return storedItems;
}

async function addExpense(source) {}

async function deleteExpense(source) {}

async function editExpense(source) {}

export const Storage = {
  addIncome,
  deleteIncome,
  editIncome,
  getItemFor,
  setItemFor,
  incomes: [],
  expenses: [],
};
