import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Alert,
  TouchableHighlight,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import axios from "axios";

import { useState } from "react";

export default function Main({ navigation }) {
  const [text, onChangeText] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);
  const [store, setStore] = React.useState();

  const sov = {
    number: text,
    passvord: number,
  };

  const getPassvord = () => {
    axios
      .get("https://63580267c27556d28934a1f9.mockapi.io/stavks")
      .then((response) => {
        setStore(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const postPassvords = () => {
    axios
      .post("https://63580267c27556d28934a1f9.mockapi.io/stavks", {
        number: text,
        passvord: number,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handlePush = () => {
    // navigation.navigate("home");
    getPassvord();
  };

  return (
    <View style={styles.container}>
      <View style={styles.cont}>
        <Text style={styles.reg}>Войдите в учетную запись</Text>
        <SafeAreaView>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholder="Нрмер телефона"
            keyboardType="default"
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="Пароль"
            keyboardType="numeric"
          />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.butText}>войти</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </View>
      <View style={styles.logoCont}>
        <Image
          style={styles.img}
          source={require("/Users/macbookair/Desktop/soljaa/assets/soljapng.png")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor:"#FFF",
    display:"flex",
    height:25,
    width:100,
    justifyContent:'center',
    alignItems:'center',
    marginLeft:85
  },
  butText: {
    color:"red"
  },
  container: {
    flex: 1,
    display: "flex",
    backgroundColor: "#fff",
    alignItems: "center",
    flexDirection: "column",
  },
  cont: {
    display:'flex',
    justifyContent: "center",
    alignItems:'center',
    borderWidth: 1,
    borderRadius: 20,
    marginTop: 50,
    backgroundColor: "#000",
    paddingBottom: 20,
 
  },
  logoCont: {
    width: 355,
    height: 860,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    marginTop: -20,
  },
  img: {
    width: "25%",
    height: "5%",
  },
  reg: {
    marginLeft: 17,
    marginBottom: 10,
  },
  input: {
    width: 250,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#FFF",
    borderRadius: 10,
    color: "#666",
  },
});
