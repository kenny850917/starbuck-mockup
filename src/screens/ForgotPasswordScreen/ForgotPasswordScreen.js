import React, { useState } from "react";
import { firebase } from "../../firebase/config";
import styles from "./styles";
import {
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

// import { withFirebaseHOC } from "../config/Firebase";
import { render } from "react-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const onForgotPress = () => {
    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(function (user) {
        alert("Please check your email...");
      })
      .catch(function (e) {
        console.log(e);
      });
  };

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
        style={{ flex: 1, width: "100%" }}
        keyboardShouldPersistTaps="always"
      >
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          placeholderTextColor="#aaaaaa"
          onChangeText={(text) => setEmail(text)}
          value={email}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />

        <View style={styles.forgotButton}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => onForgotPress()}
          >
            <Text style={styles.buttonTitle}>Reset</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default ForgotPassword;
