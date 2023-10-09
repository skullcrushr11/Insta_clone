import React from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation from @react-navigation/native

const Explore = () => {
  const numColumns = 3;
  const navigation = useNavigation(); // Get the navigation prop using useNavigation

  const posts = [
    {
      id: '1',
      imageUrl: 'https://picsum.photos/id/34/200/300.jpg',
      userProfile: 'https://picsum.photos/id/50/200/300.jpg',
      username: 'user1',
    },
    {
      id: '2',
      imageUrl: 'https://picsum.photos/id/35/200/300.jpg',
      userProfile: 'https://picsum.photos/id/51/200/300.jpg',
      username: 'user2',
    },
    {
      id: '3',
      imageUrl: 'https://picsum.photos/id/36/200/300.jpg',
      userProfile: 'https://picsum.photos/id/52/200/300.jpg',
      username: 'user3',
    },
    {
      id: '4',
      imageUrl: 'https://picsum.photos/id/37/200/300.jpg',
      userProfile: 'https://picsum.photos/id/53/200/300.jpg',
      username: 'user4',
    },
    {
      id: '5',
      imageUrl: 'https://picsum.photos/id/38/200/300.jpg',
      userProfile: 'https://picsum.photos/id/54/200/300.jpg',
      username: 'user5',
    },
    {
      id: '6',
      imageUrl: 'https://picsum.photos/id/39/200/300.jpg',
      userProfile: 'https://picsum.photos/id/55/200/300.jpg',
      username: 'user6',
    },
    {
      id: '7',
      imageUrl: 'https://picsum.photos/id/40/200/300.jpg',
      userProfile: 'https://picsum.photos/id/56/200/300.jpg',
      username: 'user7',
    },
    {
      id: '8',
      imageUrl: 'https://picsum.photos/id/41/200/300.jpg',
      userProfile: 'https://picsum.photos/id/57/200/300.jpg',
      username: 'user8',
    },
    {
      id: '9',
      imageUrl: 'https://picsum.photos/id/42/200/300.jpg',
      userProfile: 'https://picsum.photos/id/58/200/300.jpg',
      username: 'user9',
    },
    {
      id: '10',
      imageUrl: 'https://picsum.photos/id/43/200/300.jpg',
      userProfile: 'https://picsum.photos/id/59/200/300.jpg',
      username: 'user10',
    },
    {
      id: '11',
      imageUrl: 'https://picsum.photos/id/44/200/300.jpg',
      userProfile: 'https://picsum.photos/id/60/200/300.jpg',
      username: 'user11',
    },
    {
      id: '12',
      imageUrl: 'https://picsum.photos/id/45/200/300.jpg',
      userProfile: 'https://picsum.photos/id/61/200/300.jpg',
      username: 'user12',
    },

  ];
  
  return (
    <View style={styles.container}>
      <View style={styles.searchBarContainer}>
        <TextInput style={styles.searchBar} placeholder="Search" />
      </View>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        numColumns={numColumns}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.postContainer}
            onPress={() => navigation.navigate('PostView', { post: item })}
          >
            <Image source={{ uri: item.imageUrl }} style={styles.postImage} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  searchBarContainer: {
    padding: 10,
  },
  searchBar: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
  },
  postContainer: {
    marginBottom: 2,
    flex: 1,
    margin: 2,
    width: '33.33%',
  },
  postImage: {
    width: '100%',
    height: 200,
  },
});

export default Explore;
