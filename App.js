import React, {Component} from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { Styles } from "./source/common";

const instruction = Platform.select(
  {
    ios: "Press cmd+R to reload",
    android:"Press double R to reload"
  }
);
const statusBar = {
  width: "100%",
  height: "6%",
  backgroundColor: "#020424",
  borderWidth: 1,
  borderColor: "white"
}
const lookingBar = {
  width: "100%",
  height: "8%",
  backgroundColor: "#020424",
  borderWidth: 1,
  borderColor: "white"
}
const top = {
  width: "100%",
  height: "8%",
  backgroundColor: "#020424",
  borderWidth: 1,
  borderColor: "white"
}

const listSong = {
  width: "100%",
  height: "24%",
  backgroundColor: "#020424",
  borderWidth: 1,
  borderColor: "white"
}
const album = {
  width: "100%",
  height: "30%",
  backgroundColor: "#020424",
  borderWidth: 1,
  borderColor: "white"
}
const playbar = {
  width: "100%",
  height: "8%",
  backgroundColor: "#020424",
  borderWidth: 1,
  borderColor: "white"
}
const toolbar = {
  width: "100%",
  height: "8%",
  backgroundColor: "#020424",
  borderWidth: 1,
  borderColor: "white"
}

type Props = {};
export default class App extends  Component <Props>{
  render(){
    return (
      <View style = {{height: "100%"}}>
        <View style = {statusBar}>
          <Text style = {[{color: "#aaabbd"},{fontSize: 25 }]}>StatusBar</Text>
        </View>
        <View style = {lookingBar}>
          <Text style = {[{color: "#aaabbd"},{fontSize: 25 }]}>lookingBar</Text>
        </View>
        <View style = {top}>
          <Text style = {[{color: "#aaabbd"},{fontSize: 25 }]}>Top yêu thích</Text>
        </View>
        <View style = {listSong}>
          <Text style = {[{color: "#aaabbd"},{fontSize: 25 }]}>ListSong</Text>
        </View>
        <View style = {flexrow}>
          <View style = {[{width:"30%"}, {height:'100%'}, {borderWidth:1}, {borderColor: "white"}]}>
          <Text style = {[{color: "#aaabbd"},{fontSize: 25 }]}>Album</Text>
          </View>
          <View style = {[{width:"70%"}, {height:'100%'}, {borderWidth:1}, {borderColor: "white"}]}></View>
        </View>
        <View style = {album}>
          <Text style = {[{color: "#aaabbd"},{fontSize: 25 }]}>Album</Text>
        </View>
        <View style = {playbar}>
          <Text style = {[{color: "#aaabbd"},{fontSize: 25 }]}>PLayingbar</Text>
        </View>
        <View style = {flexcolumn}>
          <View style = {[{width:"25%"}, {height:'100%'}, {borderWidth:1}, {borderColor: "white"}]}>
          <Text style = {[{color: "#aaabbd"},{fontSize: 25 }]}>Home</Text>
          </View>
          <View style = {[{width:"25%"}, {height:'100%'}, {borderWidth:1}, {borderColor: "white"}]}>
          <Text style = {[{color: "#aaabbd"},{fontSize: 25 }]}>Top</Text>
          </View>
          <View style = {[{width:"25%"}, {height:'100%'}, {borderWidth:1}, {borderColor: "white"}]}>
          <Text style = {[{color: "#aaabbd"},{fontSize: 25 }]}>Thể loại</Text>
          </View>
          <View style = {[{width:"25%"}, {height:'100%'}, {borderWidth:1}, {borderColor: "white"}]}>
          <Text style = {[{color: "#aaabbd"},{fontSize: 25 }]}>Cá nhân</Text>
          </View>
        </View>

      </View>
    );
  }
}
const flexrow = {
  flexDirection: "row",
  height: "8%",
  width:" 100%",
  backgroundColor: "#020424",
  borderWidth: 1,
  borderColor: "white"
}
const flexcolumn = {
  flexDirection: "row",
  height: "8%",
  width:" 100%",
  backgroundColor: "#020424",
  borderWidth: 1,
  borderColor: "white"
}
