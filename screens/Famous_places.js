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

export default class Famous_places extends Component {
  state = {
    alignment: new Animated.Value(height),
    cardAlignment: new Animated.Value(400),
    cards: [
      {
        id: 1,
        title: "Красная площадь",
        location: "Красная площадь",
        description: "Центральная площадь Москвы",
        information:
          "Главная площадь Москвы, расположена между Московским Кремлём и Китай-городом. Главный обьект для любого туриста",
        detailedDescription:
          "Центральная площадь Москвы.",
        image: require("../assets/images/red.jpg"),
      },
      {
        id: 2,
        title: "ВДНХ",
        location: "просп. Мира, 119",
        information:
          "Когда-то грандиозная Выставка достижений народного хозяйства превратилась в один из самых масштабных в стране памятников советской эпохи и популярнейшее место для отдыха",
        detailedDescription:
          "53 минуты на общественном транспорте от КРасной площади",

        description: "Знаменитый парк",
        image: require("../assets/images/vdnh.jpeg"),
      },
      {
        id: 3,
        title: "Храм Василия Блаженного",
        location: "Красная пл., д. 2",
        information:
          "православный храм на Красной площади в Москве, памятник русской архитектуры. Строительство собора велось с 1555 по 1561 год",
        detailedDescription:
          "5 Минут хотьбы от Красной площади",

        description: "самый знаменитый храм",
        image: require("../assets/images/chram.jpg"),
      },
      {
        id: 4,
        title: "Мавзолей В. И. Ленина",
        location: "Красная площадь",
        information:
          "Мемориальная усыпальница на Красной площади, в которой с 1924 года лежит тело В. И. Ленина, – одна из самых посещаемых и неоднозначных достопримечательностей страны.",
        detailedDescription:
          "На красной плоащди",

        description: "Мавзолей",
        image: require("../assets/images/lenin.jpg"),
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
