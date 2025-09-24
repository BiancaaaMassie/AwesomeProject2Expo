import React, { useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import Button from "../components/Button/index";
import Input from "../components/TextInput/index";
import Title from "../components/Title/index";
const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    address: "",
    phoneNumber: "",
  });
  const handleChange = (field: string, value: string) => {
    if (field === "phoneNumber") {
      const numericValue = value.replace(/[^0-9]/g, "");
      setFormData({ ...formData, [field]: numericValue });
    } else {
      setFormData({ ...formData, [field]: value });
    }
  };
  const handleSubmit = () => {
    console.log("Data yang diisi:", formData);
    Alert.alert("Registrasi", "Data berhasil dikirim! (Cek console log)");
  };
  return (
    <View style={styles.container}>
      <Title>Registration</Title>
      <Input
        label="Name"
        placeholder="Masukan nama lengkap anda"
        value={formData.name}
        onChangeText={(val) => handleChange("name", val)}
      />
      <Input
        label="Username"
        placeholder="Masukan username anda"
        value={formData.username}
        onChangeText={(val) => handleChange("username", val)}
      />
      <Input
        label="Email"
        placeholder="Masukan email anda"
        value={formData.email}
        onChangeText={(val) => handleChange("email", val)}
        keyboardType="email-address"
      />
      <Input
        label="Address"
        placeholder="Masukan alamat anda"
        value={formData.address}
        onChangeText={(val) => handleChange("address", val)}
      />
      <Input
        label="Phone Number"
        placeholder="Masukan nomor telepon anda"
        value={formData.phoneNumber}
        onChangeText={(val) => handleChange("phoneNumber", val)}
        keyboardType="numeric"
      />
      <Button label="Register" onPress={handleSubmit} />
    </View>
  );
};
export default RegistrationPage;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});
