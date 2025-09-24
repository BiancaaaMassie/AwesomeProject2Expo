// import { StyleSheet, Text, TouchableOpacity } from "react-native";

// const Button = ({ label, color = "orange", colorText = "white", onPress }) => {
//   return (
//     <TouchableOpacity
//       style={styles.button(color)}
//       activeOpacity={0.5}
//       onPress={onPress}
//     >
//       <Text style={styles.buttonText(colorText)}>{label}</Text>
//     </TouchableOpacity>
//   );
// };

// export default Button;

// const styles = StyleSheet.create({
//   button: (color) => ({
//     padding: 15,
//     borderRadius: 5,
//     alignItems: "center",
//     backgroundColor: color,
//   }),
//   buttonText: (colorText) => ({
//     color: colorText,
//     fontSize: 16,
//     fontWeight: "bold",
//   }),
// });

//exercise6
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface Props {
  label: string;
  onPress: () => void;
}

const Button: React.FC<Props> = ({ label, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#a020f0",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
});
