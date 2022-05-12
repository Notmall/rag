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

export default class Family extends Component {
  state = {
    alignment: new Animated.Value(height),
    cardAlignment: new Animated.Value(400),
    cards: [
      {
        id: 1,
        title: "Музей космонавтики",
        location: "просп. Мира, 111 ",
        description: "большой музей посвещенный космосу",
        information:
          "Просторное помещение разделено на восемь выставочных залов. Также здесь есть небольшой кинотеатр и зал для проведения конференций. Коллекция состоит из 93 тысяч единиц хранения: оригинального космического оборудования, документов, предметов изобразительного искусства, нумизматики, вещественных реликвий, макетов, тренажеров.",
       
        detailedDescription:
          "32 минуты на общественном транспорте от Красной Площади",
        image: require("../assets/images/space.jpg"),
      },
      {
        id: 2,
        title: "Москвариум",
        location: " просп. Мира, 119, стр. 23 ",
        information:
          "В 2015 году на территории ВДНХ открылся «Москвариум» – самый крупный в Европе Центр морской биологии и океанографии. Его площадь составляет 53 000 м²!",
        detailedDescription:
          "55 минуты на общественном транспорте от Красной Площади",

        description: "Центр океанографии и морской биологии",
        image: require("../assets/images/aqua.jpg"),
      },
      {
        id: 3,
        title: "Московский зоопарк",
        location: "Большая Грузинская ул., 1, стр. 1",
        information:
          "Первый зоосад в России имеет официальный статус главного зоопарка страны и является активным участником международных организаций, занимающихся изучением и сохранением редких видов диких животных в естественной среде и неволе.",
        detailedDescription:
          "27 минуты на общественном транспорте от Красной Площади",

        description: "Самый большой зоопарк в России",
        image: require("../assets/images/zoo.jpg"),
      },
      {
        id: 4,
        title: "Третьяковская галерея",
        location: "Лаврушинский пер., 10",
        information:
          "Третьяковская галерея – бесценная сокровищница, в которой хранится самое большое в мире собрание полотен русских художников",
        detailedDescription:
          "20 минуты на общественном транспорте от Красной Площади",

        description: "Государственная галерея",
        image: require("../assets/images/galery.jpg"),
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
