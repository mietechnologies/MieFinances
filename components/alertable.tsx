import { Alert } from "react-native";

export const DeleteAlert = (
  name: string,
  type: string,
  onAccept: () => any
) => {
  return Alert.alert(
    `Delete ${name}`,
    `Are you sure you want to delete this ${type}`,
    [
      {
        text: "Yes",
        style: "destructive",
        onPress: onAccept,
      },
      {
        text: "No",
      },
    ]
  );
};
