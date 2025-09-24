// import { StyleSheet, Text, TextInput, View } from "react-native";

// const Input = ({
//   label,
//   placeholder,
//   secureTextEntry,
//   value,
//   onChangeText,
// }) => {
//   return (
//     <View style={{ marginBottom: 20 }}>
//       <Text style={styles.label}>{label}</Text>
//       <TextInput
//         style={styles.input}
//         placeholder={placeholder}
//         secureTextEntry={secureTextEntry}
//         value={value}
//         onChangeText={onChangeText}
//       />
//     </View>
//   );
// };

// export default Input;

// const styles = StyleSheet.create({
//   label: {
//     fontSize: 16,
//     marginBottom: 5,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: "#ccc",
//     borderRadius: 5,
//     padding: 10,
//   },
// });

//exercise6

import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

interface Props {
  label: string;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  keyboardType?: "default" | "email-address" | "numeric";
}

const TextInputField: React.FC<Props> = ({
  label,
  placeholder,
  value,
  onChangeText,
  keyboardType = "default",
}) => {
  return (
    <View style={{ marginBottom: 15 }}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
      />
    </View>
  );
};

export default TextInputField;

const styles = StyleSheet.create({
  label: {
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
  },
});
