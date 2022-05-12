import React, { Component } from "react";
import {
  View,
  ImageBackground,
  Dimensions,
  Text,
  Animated,
  Easing,
} from "react-native";
import { styles } from "../styles/luxury";
import { FlatList } from "react-native-gesture-handler";
import Card from "../components/card";

const { width, height } = Dimensions.get("screen");

export default class Luxury extends Component {
  state = {
    alignment: new Animated.Value(height),
    cardAlignment: new Animated.Value(400),
    cards: [
      {
        id: 1,
        title: "«Марио»",
        location: "ул. Климашкина, 17, Москва",
        description: "дорогой ресторан",
        information:
          "Марио один из топовых ресторанов Москвы, его можно охарактеризовать одним словом - ДОРОГО. Дорого и богато, весь столичный бомонд собирается там, контингент достаточно взрослый. Место отлично подходит для семейных встреч, встреч с друзьями, деловых встреч. ",

        detailedDescription:
          "35 минут от красной площади на общественном транспорте от Красной Площади",
        image: require("../assets/images/mario.jpg"),
      },
      {
        id: 2,
        title: "клуб витязб",
        location: "Севастопольский просп., 35, Москва",
        information:
          "Великолепное и весёлое времяприпровождение , но к сожалению одна игра стоит дорого",
        
        detailedDescription:
          "52 минуты на общественном транспорте от Красной Площади",

        description: "Пейнтбольный клуб",
        image: require("../assets/images/viraz.jpg"),
      },
      {
        id: 3,
        title: "Большой театр",
        location: "ТЕАТРАЛЬНАЯ ПЛОЩАДЬ, 1",
        information:
          "Лучший театр России. Репертуар на всех сценах восхищает. Историческая сцена радует классикой, новая сцена молодыми дарованиями и новинками. Гастролеры не всегда на высоте,",
        detailedDescription:
          "12 минуты на общественном транспорте от Красной Площади",

        description: "Главный театр Москвы",
        image: require("../assets/images/big.jpg"),
      },
      {
        id: 4,
        title: "Цум",
        location: "ул. Петровка, 2, Москва",
        information:
          "Это торговый центр премиум класса! Здесь представлены элитные бренды ведущих Домов моды мирового уровня. Можно найти «все и вся»! ",
        detailedDescription:
          "12 минут на общественном транспорте от Красной Площади",

        description: "Самый большой и дорогой магазин",
        image: require("../assets/images/cum.jpg"),
      },
    ],
  };

  AnimateUI = () => {
    Animated.sequence([
      Animated.timing(this.state.alignment, {
        toValue: height / 3,
        duration: 800,
        easing: Easing.back(),
        useNativeDriver: false,
      }),
      Animated.timing(this.state.cardAlignment, {
        toValue: 0,
        duration: 700,
        easing: Easing.ease,
        useNativeDriver: true,
      }),
    ]).start();
  };

  componentDidMount() {
    this.AnimateUI();
  }

  handlePress = (id) => {
    // Find The Item By ID
    const card = this.state.cards.find((item) => item.id === id);

    // Navigate To Details Screen With The Card Data

    this.props.navigation.navigate("Details", { card });
  };

  render() {
    const AnimatedBackground = {
      height: this.state.alignment,
    };

    const AnimatedCards = {
      transform: [
        {
          translateX: this.state.cardAlignment,
        },
      ],
    };

    return (
      <View>
        <Animated.View style={[{ width: width }, AnimatedBackground]}>
          <ImageBackground
            source={this.props.route.params.image}
            style={styles.backgroundImage}
          >
            <View style={styles.textView}>
              <Text style={styles.title}>
                {this.props.route?.params?.title}
              </Text>
              <Text style={styles.description}>
                {this.props.route?.params.slogan}
              </Text>
            </View>
          </ImageBackground>
        </Animated.View>
        <Animated.View style={[styles.cardView, AnimatedCards]}>
          <FlatList
            data={this.state.cards}
            renderItem={({ item }) => (
              <Card
                title={item.title}
                image={item.image}
                location={item.location}
                description={item.description}
                onPress={() => this.handlePress(item.id)}
              />
            )}
          />
        </Animated.View>
      </View>
    );
  }
}
