// import React, {useState} from 'react';
// import {View, StyleSheet} from 'react-native';
// import Title from './components/Title';
// import Input from './components/Input';
// import Button from './components/Button';

// const App = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   return (
//     <View style={styles.container}>
//       <Title text="Welcome" />

//       <Input
//         label="Username"
//         placeholder="Masukan username anda"
//         value={username}
//         onChangeText={text => setUsername(text)}
//       />

//       <Input
//         label="Password"
//         placeholder="Masukan password anda"
//         secureTextEntry
//         value={password}
//         onChangeText={text => setPassword(text)}
//       />

//       <Button
//         label="Sign In"
//         color="orange"
//         colorText="#fff"
//         onPress={() => alert(Login dengan ${username})}
//       />

//       <View style={{marginTop: 20, gap: 10}}>
//         <Button
//           label="Sign in Google"
//           color="red"
//           colorText="#fff"
//           onPress={() => alert('Login dengan Google')}
//         />
//         <Button
//           label="Sign in Facebook"
//           color="blue"
//           colorText="#fff"
//           onPress={() => alert('Login dengan Facebook')}
//         />
//         <Button
//           label="Sign in Apple"
//           color="black"
//           colorText="#fff"
//           onPress={() => alert('Login dengan Apple')}
//         />
//       </View>
//     </View>
//   );
// };

// export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     padding: 20,
//     backgroundColor: '#fff',
//   },
// });

//exercise6
import React from "react";
import { StyleSheet, Text } from "react-native";

const Title = ({ children }: { children: string }) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
});
