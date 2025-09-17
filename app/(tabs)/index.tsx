//Exercise2:

// import { Image, ScrollView, StyleSheet, Text } from "react-native";

// export default function Index() {
//   const base64Image =
//     "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA" +
//     "AAAFCAYAAACNbyblAAAAHElEQVQI12P4" +
//     "//8/w38GIAXDIBKE0DHxgljNBAAO" +
//     "9TXL0Y4OHwAAAABJRU5ErkJggg==";

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Text style={styles.title}> Hallow, Doraemon! :D </Text>

//       <Text style={styles.label}> Local Image </Text>
//       <Image
//         source={require("../../assets/images/OIP.jpg")}
//         style={styles.image}
//       />

//       <Text style={styles.label}> Network Image </Text>
//       <Image
//         source={{
//           uri: "https://tse3.mm.bing.net/th/id/OIP.MvlHxMfGBN93A_WAsRbMcQHaHZ?pid=Api&P=0&h=220",
//         }}
//         style={styles.image}
//       />

//       <Text style={styles.label}> Base64 Image </Text>
//       <Image source={{ uri: base64Image }} style={styles.image} />
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#fff",
//     padding: 20,
//   },
//   title: {
//     fontSize: 30,
//     marginBottom: 20,
//     fontWeight: "bold",
//   },
//   label: {
//     fontSize: 17,
//     marginBottom: 10,
//   },
//   image: {
//     width: 200,
//     height: 200,
//     marginBottom: 30,
//     resizeMode: "contain",
//   },
// });

//exercise3:
// import React from "react";
// import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

// export default function Exercise3() {
//   return (
//     <ScrollView style={styles.container}>
//       {/* profile photo */}
//       <View style={styles.header}>
//         <Image
//           source={require("../../assets/images/BIBI.jpg")}
//           style={styles.profileImage}
//         />
//         <Text style={styles.name}>Bianca Carolyne Massie</Text>
//         <Text style={styles.subText}>Information Systems Student</Text>
//       </View>

//       {/* identity */}
//       <View style={styles.section}>
//         <Text style={styles.title}>Identity</Text>
//         <Text>Student ID: 105012310054</Text>
//         <Text>Registration Number: S22310400</Text>
//       </View>

//       {/* profile */}
//       <View style={styles.section}>
//         <Text style={styles.title}>Profile</Text>
//         <Text>
//           Student at Universitas Klabat, majoring in Information Systems.
//         </Text>
//         <Text>
//           Loves learning new things, enjoys challenges, passionate about music,
//           and outdoor activities.
//         </Text>
//       </View>

//       {/* skills */}
//       <View style={styles.section}>
//         <Text style={styles.title}>Skills</Text>
//         <Text>- React Native</Text>
//         <Text>- HTML, CSS, JavaScript</Text>
//         <Text>- Canva Design</Text>
//         <Text>- Communication & Teamwork</Text>
//       </View>

//       {/* education */}
//       <View style={styles.section}>
//         <Text style={styles.title}>Education</Text>
//         <Text>Universitas Klabat - Information Systems (2023 - Present)</Text>
//       </View>

//       {/* contact */}
//       <View style={styles.section}>
//         <Text style={styles.title}>Contact</Text>
//         <Text>Email: s22310400@student.unklab.ac.id</Text>
//         <Text>Phone: 081524207316</Text>
//       </View>

//       {/* quote */}
//       <View style={styles.section}>
//         <Text style={styles.title}>Quote</Text>
//         <Text style={styles.quote}>
//           "Fear kills dreams more than failure ever will."
//         </Text>
//       </View>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#ffd9c2ff",
//     padding: 16,
//   },
//   header: {
//     alignItems: "center",
//     marginBottom: 20,
//   },
//   profileImage: {
//     width: 120,
//     height: 120,
//     borderRadius: 60,
//     marginBottom: 10,
//   },
//   name: {
//     fontSize: 22,
//     fontWeight: "bold",
//   },
//   subText: {
//     fontSize: 15,
//     color: "#666",
//   },
//   section: {
//     marginBottom: 16,
//     padding: 12,
//     backgroundColor: "#f4c5c5ff",
//     borderRadius: 10,
//     elevation: 2,
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: "600",
//     marginBottom: 6,
//     color: "#3b82f6",
//   },
//   quote: {
//     fontStyle: "italic",
//     color: "#333",
//   },
// });

//Exercise4
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

// --- Component Title ---
const Title = ({ text }) => <Text style={styles.title}>{text}</Text>;

// --- Component Input ---
const Input = ({
  label,
  placeholder,
  secureTextEntry,
  value,
  onChangeText,
}) => (
  <View style={{ marginBottom: 20 }}>
    <Text style={styles.label}>{label}</Text>
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      value={value}
      onChangeText={onChangeText}
    />
  </View>
);

// --- Component Button ---
const Button = ({ text, color, onPress }) => (
  <TouchableOpacity
    style={[styles.button, { backgroundColor: color }]}
    onPress={onPress}
  >
    <Text style={styles.buttonText}>{text}</Text>
  </TouchableOpacity>
);

export default function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Title text="Welcome" />

      <Input
        label="Username"
        placeholder="Masukan username anda"
        value={username}
        onChangeText={setUsername}
      />

      <Input
        label="Password"
        placeholder="Masukan password anda"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      {/* Button Sign In utama */}
      <Button
        text="Sign In"
        color="orange"
        onPress={() => alert(`Login dengan ${username}`)}
      />

      {/* Button Social */}
      <View style={{ marginTop: 20, gap: 10 }}>
        <Button
          text="Sign in with Google"
          color="red"
          onPress={() => alert("Login dengan Google")}
        />
        <Button
          text="Sign in with Facebook"
          color="blue"
          onPress={() => alert("Login dengan Facebook")}
        />
        <Button
          text="Sign in with Apple"
          color="black"
          onPress={() => alert("Login dengan Apple")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 40,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
  },
  button: {
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
