import AsyncStorage from "@react-native-async-storage/async-storage";
import moment from "moment";

const prefix = "cache";
const expiryInMinutes = 5;
const store = async (key, value) => {
  try {
    const item = {
      value,
      timeStamp: Date.now(),
    };
    await AsyncStorage.setItem(prefix + key, JSON.stringify(item));
  } catch (ex) {
    console.log(ex);
  }
};

const isExpired = (item) => {
  const now = moment(Date.now());
  const storedTime = moment(item.timeStamp);
  return now.diff(storedTime, "minutes") > expiryInMinutes;
};
const get = async (key) => {
  try {
    const value = await AsyncStorage.getItem(prefix + key);
    const item = JSON.parse(item);

    if (!item) return null;

    if (isExpired(item)) {
      AsyncStorage.removeItem(prefix + key);
      return null;
    }
    return item.value;
  } catch (ex) {
    console.log(ex);
  }
};

export default {
  store,
  get,
};