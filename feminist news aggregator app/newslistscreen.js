// screens/NewsListScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';

const NewsListScreen = ({ navigation }) => {
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    axios.get('https://api.example.com/news')
      .then(response => {
        setNewsList(response.data);
      })
      .catch(error => {
        console.error('Error fetching news:', error);
      });
  }, []);

  const renderNewsItem = ({ item }) => (
    <TouchableOpacity style={styles.newsItem} onPress={() => navigation.navigate('NewsDetail', { newsItem: item })}>
      <Text style={styles.newsTitle}>{item.title}</Text>
      <Text>{item.source} | {item.publishedAt}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={newsList}
        renderItem={renderNewsItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  newsItem: {
    marginBottom: 20,
  },
  newsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default NewsListScreen;
