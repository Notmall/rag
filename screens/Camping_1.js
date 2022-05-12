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

export default class Camping extends Component {
  state = {
    alignment: new Animated.Value(height),
    cardAlignment: new Animated.Value(400),
    cards: [
      {
       id: 1,
        title: "Мутабор",
        location: "Шарикоподшипниковская улица, 13с32",
        information:
          "Клуб со своей атмосферой, идеей, сам по себе - арт-объект. Несколько залов/танцполов, балкончики, Очень крутой внутренний дворик с беседками/очагами, разные инсталляции на территории клуба. ",
        detailedDescription:
          "35 минут на общественном транспорте от Красной Площади",

        description: "ночной клуб",
        image: require("../assets/images/mutabor.jpg"),
      },
      {
        id: 2,
        title: "Mitzva Bar",
        location: "Москва, Пятницкая, 3/4, стр. 1",
        information:
          "Бар в подвале в начале Пятницкой, уже во второй редакции. Теперь Mitzva — это коктейли и израильская еда. Новое меню разработал бренд-шеф-израильтянин Марк Тов; оно включает разделы «Поесть» (закуски), «Основательно поесть» и «Сладкое»",
        detailedDescription:
          "20 минуты на общественном транспорте от Красной Площади",

        description: "Бар в Израильском стиле",
        image: require("../assets/images/mitzva.jpg"),
      },
      {
        id: 3,
        title: "Mandy's Apothecary Irish Pub",
        location: "Москва, Кузнецкий Мост, 19, стр. 1",
        information:
          "Бар, сфокусированный на алкогольных вечных ценностях — пиве и виски; по крепким напиткам при этом уклон идет в ирландскую тематику. Кроме общепринятого набора брендов есть также резервные, десятилетние сорта, односолодовые виски и редкие марки, чьи названия в силу действующего законодательства РФ огласить не можем. ",
        detailedDescription:
          "16 минуты на общественном транспорте от Красной Площади",

        description: "Бар и Ирландском стиле",
        image: require("../assets/images/irish.jpg"),
      },
      {
        id: 4,
        title: "Noor",
        location: "Москва, Тверская, 23",
        information:
          "Один из лучших баров в Москве, названный то ли в честь фотоагентства Noor, то ли в честь граната (по-армянски noor и значит «гранат», а гранатовый тини исправно присутствует в меню уже долгие годы). ",
        detailedDescription:
          "20 минуты на общественном транспорте от Красной Площади",

        description: "Гранатовый бар",
        image: require("../assets/images/noor.jpg"),
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
