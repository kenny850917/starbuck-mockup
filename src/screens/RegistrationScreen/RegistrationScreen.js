import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import styles from "./styles";
import { firebase } from "../../firebase/config";
import { ScrollView } from "react-native-gesture-handler";

export default function RegistrationScreen({ navigation }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onFooterLinkPress = () => {
    navigation.navigate("Sign in to Rewards");
  };

  const onRegisterPress = () => {
    if (password !== confirmPassword) {
      alert("Passwords don't match.");
      return;
    }

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        const uid = response.user.uid;
        const data = {
          id: uid,
          email,
          fullName,
        };
        const usersRef = firebase.firestore().collection("users");
        usersRef
          .doc(uid)
          .set(data)
          .then(() => {
            navigation.navigate("Home", { user: data });
          })
          .catch((error) => {
            alert(error);
          });
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
        style={{ flex: 1, width: "100%" }}
        keyboardShouldPersistTaps="always"
      >
        <Text style={styles.text}>Personal info</Text>

        <TextInput
          style={styles.input}
          placeholder="Full Name"
          placeholderTextColor="#aaaaaa"
          onChangeText={(text) => setFullName(text)}
          value={fullName}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <ScrollView>
          <TextInput
            style={styles.input}
            placeholder="E-mail"
            placeholderTextColor="#aaaaaa"
            onChangeText={(text) => setEmail(text)}
            value={email}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
          />

          <Text style={styles.text}>Security</Text>

          <TextInput
            style={styles.input}
            placeholderTextColor="#aaaaaa"
            secureTextEntry
            placeholder="Password"
            onChangeText={(text) => setPassword(text)}
            value={password}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholderTextColor="#aaaaaa"
            secureTextEntry
            placeholder="Confirm Password"
            onChangeText={(text) => setConfirmPassword(text)}
            value={confirmPassword}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
          />

          <View style={styles.footerView}>
            <Text style={styles.footerText}>
              Already got an account?{" "}
              <Text onPress={onFooterLinkPress} style={styles.footerLink}>
                Log in
              </Text>
            </Text>
          </View>
          <View style={styles.footerView}>
            <Text style={styles.footerText}>
              Already have a Starbucks gift card?{" "}
            </Text>
          </View>
          <View>
            <Text style={styles.text}>Preferences & Terms</Text>
          </View>
          <View>
            <Text style={styles.text2}>Yes I'd like email from Starbucks</Text>
            <Text style={styles.text3}>
              Know about product offers. announcements and initiatives.
            </Text>
          </View>
          <View>
            <Text style={styles.text2}>I'd like to sign in faster</Text>
            <Text style={styles.text3}>
              Use Face ID and iCloud KeyChain to sign in.
            </Text>
          </View>
          <View>
            <Text style={styles.text2}>For scroll view purpose</Text>
            <Text style={styles.text3}>For scroll view purpose</Text>
          </View>
          <View>
            <Text style={styles.text2}>For scroll view purpose</Text>
            <Text style={styles.text3}>For scroll view purpose</Text>
          </View>
          <View style={styles.registerButton}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => onRegisterPress()}
            >
              <Text style={styles.buttonTitle}>Create account</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAwareScrollView>
    </View>
  );
}
