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

//exercise5

// Komponen Title
// const Title = ({ children }) => {
//   return (
//     <h1 className="text-3xl font-bold text-foreground mb-6 text-center">
//       {children}
//     </h1>
//   );
// };

// // Komponen TextInput
// const TextInput = ({
//   label,
//   placeholder,
//   value,
//   onChange,
//   maxLength,
//   type = "text",
//   ...props
// }) => {
//   return (
//     <div className="mb-4">
//       <label className="block text-foreground text-sm font-medium mb-2">
//         {label}
//       </label>
//       <input
//         type={type}
//         value={value}
//         onChange={onChange}
//         placeholder={placeholder}
//         maxLength={maxLength}
//         className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
//         {...props}
//       />
//     </div>
//   );
// };

// // Komponen Button
// const Button = ({
//   children,
//   onClick,
//   disabled = false,
//   type = "button",
//   ...props
// }) => {
//   return (
//     <button
//       type={type}
//       onClick={onClick}
//       disabled={disabled}
//       className="w-full bg-primary text-primary-foreground py-3 px-6 rounded-lg font-medium hover:bg-primary/90 disabled:bg-muted disabled:text-muted-foreground disabled:cursor-not-allowed transition-colors"
//       {...props}
//     >
//       {children}
//     </button>
//   );
// };

// // Halaman utama
// const PhoneRegistrationPage = () => {
//   const [formData, setFormData] = useState({
//     nama: "",
//     alamat: "",
//     email: "",
//     noTelepon: "",
//   });

//   const handleInputChange = (field, value) => {
//     if (field === "noTelepon") {
//       // Hanya mengizinkan input angka untuk nomor telepon
//       const numericValue = value.replace(/[^0-9]/g, "");
//       setFormData((prev) => ({ ...prev, [field]: numericValue }));
//     } else {
//       setFormData((prev) => ({ ...prev, [field]: value }));
//     }
//   };

//   const handleSubmit = () => {
//     console.log("Data yang diisi:", formData);
//   };

//   return (
//     <div className="min-h-screen bg-background flex items-center justify-center p-4">
//       <div className="w-full max-w-md bg-card rounded-2xl shadow-lg p-8">
//         <Title>Registrasi Pengguna</Title>

//         <div className="space-y-4">
//           <TextInput
//             label="Nama Lengkap"
//             placeholder="Masukkan nama lengkap Anda"
//             value={formData.nama}
//             onChange={(e) => handleInputChange("nama", e.target.value)}
//             maxLength={50}
//           />

//           <TextInput
//             label="Alamat"
//             placeholder="Masukkan alamat lengkap"
//             value={formData.alamat}
//             onChange={(e) => handleInputChange("alamat", e.target.value)}
//             maxLength={100}
//           />

//           <TextInput
//             label="Email"
//             placeholder="contoh@email.com"
//             value={formData.email}
//             onChange={(e) => handleInputChange("email", e.target.value)}
//             type="email"
//             maxLength={50}
//           />

//           <TextInput
//             label="Nomor Telepon"
//             placeholder="08xxxxxxxxxx"
//             value={formData.noTelepon}
//             onChange={(e) => handleInputChange("noTelepon", e.target.value)}
//             type="tel"
//             maxLength={15}
//           />
//         </div>

//         <div className="mt-8">
//           <Button onClick={handleSubmit}>Daftar Sekarang</Button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PhoneRegistrationPage;
