import React from 'react';
import {  StyleSheet,
  StatusBar,
  View,
  TouchableOpacity,
  Text,
  Image,
  Button,
  FlatList,
  RefreshControl,
  ScrollView, } from 'react-native';

import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";  import cartIcon from "../../assets/icons/cart_beg.png";
import scanIcon from "../../assets/icons/scan_icons.png";
import OtakuOasislogo from "../../assets/logo/logo.png";
// import { colors } from "../../constants";
import SearchableDropdown from "react-native-searchable-dropdown";
import { SliderBox } from "react-native-image-slider-box";
// import { network } from "../../constants";
import { ViewPropTypes } from 'deprecated-react-native-prop-types';



const category = [
  {
    _id: "62fe244f58f7aa8230817f89",
    title: "Garments",
    image: require("../../assets/icons/garments.png"),
  },
  {
    _id: "62fe243858f7aa8230817f86",
    title: "Electornics",
    image: require("../../assets/icons/electronics.png"),
  },
  {
    _id: "62fe241958f7aa8230817f83",
    title: "Cosmentics",
    image: require("../../assets/icons/cosmetics.png"),
  },
  {
    _id: "62fe246858f7aa8230817f8c",
    title: "Groceries",
    image: require("../../assets/icons/grocery.png"),
  },
];

const slides = [
  require("../../assets/image/banners/banner.png"),
  require("../../assets/image/banners/banner.png"),
];





const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topBarContainer}>
        <TouchableOpacity disabled>
          <Ionicons name="menu" size={30} color="#707981" />
        </TouchableOpacity>
        <View style={styles.topbarlogoContainer}>
          <Image source={OtakuOasislogo} style={styles.logo} />
          <Text style={styles.toBarText}>OtakuOasis</Text>
        </View>
        <View style={{ width: 30 }} />
      </View>

      
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#F5F5F5',
    paddingBottom: 0,
    flex: 1,
  },
  topBarContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  topbarlogoContainer: {
    flexDirection: 'column',
    alignItems: 'center',

  },
  logo: {
    width: 30, 
    height: 30, 
    resizeMode: "contain",
  },
  toBarText: {
    fontSize: 20,
    fontWeight: '600',
  },
});


export default HomeScreen;
