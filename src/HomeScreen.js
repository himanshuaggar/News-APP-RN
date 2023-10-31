import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ActivityIndicator, Image
} from "react-native";
import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import axios from "axios";

const HomeScreen = ({ navigation }) => {
  const [Select, setSelect] = useState(0);
  const [Laoding, setLaoding] = useState(false);
  const [Category, setCategory] = React.useState([
    {
      id: 1,
      name: "Top Headlines",
      category: "general",
    },
    {
      id: 5,
      name: "Sports",
      category: "sports",
    },
    {
      id: 2,
      name: "Business",
      category: "business",
    },
    {
      id: 3,
      name: "Entertainment",
      category: "entertainment",
    },
    {
      id: 4,
      name: "Health",
      category: "health",
    },
    {
      id: 6,
      name: "Science",
      category: "science",
    },
    {
      id: 7,
      name: "Technology",
      category: "technology",
    },
  ]);

  const [articles, setArticles] = useState([]);
  const getNews = () => {
    axios
      .get(
        "https://linesnews.onrender.com/api/news-datas  ")
      .then((response) => {
        // handle success
        setArticles(response.data.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };

  useEffect(() => {
    getNews();
    console.log(getNews());
  }, []);

  return (
    <>
      {Laoding ? (
        <View className="flex-1 justify-center items-center">
          <ActivityIndicator color={"#db393c"} size={36} />
        </View>
      ) : (
        <View className="flex-1">
          <Header navigation={navigation} />

          <View className="px-4 py-2 mt-4">
            <FlatList
              data={Category}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item, index }) => {
                return (
                  <TouchableOpacity
                    className={
                      index == Select
                        ? "px-4 py-2  mr-3 rounded-md bg-blue-300"
                        : "px-4 py-2  mr-3 rounded-md bg-gray-200"
                    }
                    onPress={() => {
                      setSelect(index);
                      getData2(Category[index].category);
                    }}
                  >
                    <Text
                      className={
                        index == Select
                          ? "text-white font-Regular"
                          : "text-gray-600 font-Regular"
                      }
                    >
                      {item.name}
                    </Text>
                  </TouchableOpacity>
                );
              }}
            />
          </View>

          <View className="mb-16 rounded-lg m-4">
            <FlatList
        data={articles}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card item={item} navigation={navigation}  />
        )}
      />
          </View>
        </View>
      )}
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
