// screens/NewsDetailScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NewsDetailScreen = ({ route }) => {
  const { newsItem } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.newsTitle}>{newsItem.title}</Text>
      <Text style={styles.newsContent}>{newsItem.content}</Text>
      <Text>{newsItem.source} | {newsItem.publishedAt}</Text>
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
  newsTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  newsContent: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default NewsDetailScreen;
