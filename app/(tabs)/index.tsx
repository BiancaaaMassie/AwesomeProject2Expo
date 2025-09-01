import { Image, ScrollView, StyleSheet, Text } from "react-native";

export default function Index() {
  // base64 contoh gambar kotak biru kecil (dummy aja biar ga kepanjangan)
  const base64Image =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA" +
    "AAAFCAYAAACNbyblAAAAHElEQVQI12P4" +
    "//8/w38GIAXDIBKE0DHxgljNBAAO" +
    "9TXL0Y4OHwAAAABJRU5ErkJggg==";

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Hello, Doraemon! 💙</Text>

      {/* 1. Local Image */}
      <Text style={styles.label}>Static / Local Image</Text>
      <Image
        source={require("../../assets/images/OIP.jpg")}
        style={styles.image}
      />

      {/* 2. Network Image */}
      <Text style={styles.label}>Network Image</Text>
      <Image
        source={{
          uri: "https://tse3.mm.bing.net/th/id/OIP.MvlHxMfGBN93A_WAsRbMcQHaHZ?pid=Api&P=0&h=220",
        }}
        style={styles.image}
      />

      {/* 3. Base64 Image */}
      <Text style={styles.label}>Base64 Image</Text>
      <Image source={{ uri: base64Image }} style={styles.image} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: "bold",
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 30,
    resizeMode: "contain",
  },
});
