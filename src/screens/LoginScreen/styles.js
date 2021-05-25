import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  title: {},
  logo: {
    flex: 1,
    height: 120,
    width: 90,
    alignSelf: "center",
    margin: 30,
  },
  input: {
    fontSize: 20,
    height: 48,
    overflow: "hidden",
    borderBottomColor: "rgba(0,0,0,.2)",
    borderBottomWidth: 1,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 30,
    marginRight: 30,
    paddingLeft: 16,
    color: "rgba(0,0,0, .56)",
    fontFamily: "sans-serif",
  },
  button: {
    backgroundColor: "#008248",
    borderColor: "#008248",
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    height: 48,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    width: 110,
    position: "absolute",
    bottom: 0,
    right: 0,
  },
  buttonTitle: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  footerView: {
    flex: 1,
    alignItems: "flex-start",
    marginTop: 20,
    marginLeft: 40,
  },
  footerText: {
    fontSize: 16,
    color: "#008248",
  },
  footerLink: {
    position: "absolute",
    color: "#008248",
    fontWeight: "bold",
    fontSize: 16,
  },
  signInButton: {
    height: 400,
  },
});
