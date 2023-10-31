import {
    StyleSheet,
    Text,
    View,
    TextInput,
    FlatList,
    TouchableOpacity,
  } from 'react-native';
  import React, {useState, useEffect} from 'react';
  import {ArrowLeftIcon} from 'react-native-heroicons/solid';
  import Card from './components/Card';
  import axios from 'axios';

  const Search = ({navigation}) => {
    const [SearchText, setSearchText] = useState('');
    const [Data, setData] = useState([]);
    // const searchNews = async text => {
    //   setSearchText(text);
    //   if (text.length > 1) {
    //     const response = await fetch(
    //       `https://newsapi.org/v2/top-headlines?country=in&apiKey=9b2bec38269a4a7ab665833a16afe05f&q=${text}`,
    //     );
  
    //     const data = await response.json();
    //     setData(data.articles);
    //   }
    // };
    const [articles, setArticles] = useState([]);

    const searchNews =  (text) => {
      setSearchText(text);
    axios.get("https://linesnews.onrender.com/api/news-datas  ")
      
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
    searchNews();
    
  }, []);

    const filteredNews = articles.filter((item) => {
      return item.attributes.headline.includes(SearchText);
    });
    return (
      <View className="flex-1">
        <View className="bg-blue-300 flex-row items-center space-x-4 px-4 pt-8 text-xl">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <ArrowLeftIcon color={'white'} size={18} />
          </TouchableOpacity>
          <TextInput
            placeholder="Enter your query.."
            value={SearchText}
            placeholderTextColor={'white'}
            onChangeText={text => {
              setSearchText(text);
            }}
            className="text-lg text-white pb-2"
          />
        </View>
  
        <View className="mb-16 bg-white">
          <FlatList
            showsVerticalScrollIndicator={false}
            data={filteredNews}
            renderItem={({item }) => {
              return <Card item={item}  />;
            }}
          />
        </View>
      </View>
    );
  };
  
  export default Search;
  
  const styles = StyleSheet.create({});