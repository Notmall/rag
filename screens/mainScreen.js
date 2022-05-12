import React, { Component } from "react";
import { View, Text, SafeAreaView, Image, Dimensions } from "react-native";
import { styles } from "../styles/styles";
import ImageButton from "../components/ImageButton";
import Animated, { Easing } from "react-native-reanimated";

const { height } = Dimensions.get("screen");

export default class MainScreen extends Component {
  state = {
    alignment: new Animated.Value(height),
  };

  componentDidMount() {
    this.AnimateHeader();
  }

  AnimateHeader = () => {
    Animated.timing(this.state.alignment, {
      toValue: 200,
      duration: 700,
      easing: Easing.back(),
      useNativeDriver: true,
    }).start();
  };


  toCategory = (image, title, slogan) => {
    this.props.navigation.navigate("Luxury", {
      image,
      title,
     
    });
  };
  toCategory2 = (image, title, slogan) => {
    this.props.navigation.navigate("Family", {
      image,
      title,
     
    });
  };


  third_screen = (image, title, slogan) => {
    this.props.navigation.navigate("Camping", {
      image,
      title,
     
    });
  };


  toCategory4 = (image, title, slogan) => {
    this.props.navigation.navigate("Famous_places", {
      image,
      title,
     
    });
  };


  render() {
    const AnimatedHeader = {
      height: this.state.alignment,
    };

    return (
      <View>
        
        <View style={{ alignItems: "center" }}>

          <View style={styles.imageContainer}>
            <View style={styles.imageView}>
              <Image
                source={require("../assets/images/expensive.jpg")}
                style={styles.image}
              />
              <ImageButton
                onPress={() =>
                  this.toCategory(
                    require("../assets/images/expensive.jpg"),
                    "дорогие места",
                   
                  )
                }
                title="дорогие места"
                
              />
            </View>
            <View style={styles.imageView}>
              <Image
                source={require("../assets/images/family.jpg")}
                style={styles.image}
              />
              <ImageButton
                onPress={() =>
                  this.toCategory2(
                    require("../assets/images/family.jpg"),
                    "семейный отдых",
                    
                  )
                }
                title="семейный отдых"
               
              />
            </View>
          </View>
          <View style={styles.imageContainer}>
            <View style={styles.imageView}>
              <Image
                source={require("../assets/images/night.jpg")}
                style={styles.image}
              />
              <ImageButton
                onPress={() =>
                  this.third_screen(
                    require("../assets/images/night.jpg"),
                    "Ночная жизнь",
                   
                  )
                }
                title="Ночная жизнь"
              
              />
            </View>
            <View style={styles.imageView}>
              <Image
                source={require("../assets/images/famous.jpeg")}
                style={styles.image}
              />
              <ImageButton
                onPress={() =>
                  this.toCategory4(
                    require("../assets/images/famous.jpeg"),
                    "популярные места",
                    
                  )
                }
                title="популярные места"
                
              />
            </View>
          </View>
        </View>
        <Animated.View style={[styles.header, AnimatedHeader]}>
          
        </Animated.View>
      </View>
    );
  }
}
