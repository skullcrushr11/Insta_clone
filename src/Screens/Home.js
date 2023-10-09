
import React, { useState } from 'react';
import { ScrollView,View, Text, StyleSheet, Image, FlatList, TouchableOpacity,TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/AntDesign';

import { useNavigation, } from '@react-navigation/native'; 

const Home = () => {

  const navigation = useNavigation();

  const initialPosts = [
    {
      id: '1',
      username: 'user1',
      imageUrl: 'https://picsum.photos/200/300.jpg',
      posturl:'https://picsum.photos//id/30/200/300.jpg',
      isLiked: false,
    },
    {
      id: '2',
      username: 'user2',
      imageUrl: 'https://picsum.photos/200/300',
      posturl:'https://picsum.photos//id/31/200/300.jpg',
      isLiked: false,
    },
    {
      id: '3',
      username: 'user3',
      imageUrl: 'https://picsum.photos/200/300.jpg',
      posturl:'https://picsum.photos//id/32/200/300.jpg',
      isLiked: false,
    },
  
  ];
  
  const initialComments = {};
initialPosts.forEach((post) => {
  initialComments[post.id] = [];
});

const [comments, setComments] = useState(initialComments);

  const [posts, setPosts] = useState(initialPosts);
  const [showCommentInput, setShowCommentInput] = useState({});
  const [commentText, setCommentText] = useState({});


  const handleLikePress = (postId) => {
    // Update the like status for the selected post
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId ? { ...post, isLiked: !post.isLiked } : post
      )
    );
  };


  const handleCommentPress = (postId) => {
    // Toggle the comment input for the selected post
    setShowCommentInput((prevShowCommentInput) => ({
      ...prevShowCommentInput,
      [postId]: !prevShowCommentInput[postId],
    }));
  
    // Initialize the comment text state
    if (!commentText[postId]) {
      setCommentText({
        ...commentText,
        [postId]: "",
      });
    }
  };

  const handleCommentSubmit = (postId) => {
    // Handle comment submission here
    const newComment = { text: commentText[postId], user: 'You' };
    setComments((prevComments) => ({
      ...prevComments,
      [postId]: [...(prevComments[postId] || []), newComment],
    }));
  
    // Clear the comment input field
    setCommentText((prevCommentText) => ({
      ...prevCommentText,
      [postId]: "", // Clear the comment text
    }));
  
    // Hide the comment input field
    setShowCommentInput((prevShowCommentInput) => ({
      ...prevShowCommentInput,
      [postId]: false,
    }));
  };
  
  
  const renderPost = ({ item }) => (
    <View style={styles.postContainer}>
      <View style={styles.postHeader}>
        <Image source={{ uri: item.imageUrl }} style={styles.profilePicture} />
        <Text style={styles.username}>{item.username}</Text>
      </View>
      <Image source={{ uri: item.posturl }} style={styles.postImage} />
      <View style={styles.postActionsContainer}>
        <View style={styles.postActions}>
          <TouchableOpacity onPress={() => handleLikePress(item.id)}>
            {item.isLiked ? (
              <Icon name="heart" size={30} style={styles.iconLiked} />
            ) : (
              <Icon name="heart-o" size={30} style={styles.icon} />
            )}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleCommentPress(item.id)}>
            <Icon1 name="message1" size={30} style={styles.icon} />
          </TouchableOpacity>
          <Icon1 name="sharealt" size={30} style={styles.icon} />
        </View>
        {showCommentInput[item.id] && (
          <View style={styles.commentInputContainer}>
            <TextInput
              placeholder="Add a comment..."
              style={styles.commentInput}
              value={commentText[item.id]}
              onChangeText={(text) => setCommentText({ ...commentText, [item.id]: text })}
              onSubmitEditing={() => handleCommentSubmit(item.id)}
            />
          </View>
        )}
        {comments[item.id] && (
          <ScrollView style={styles.commentsContainer}>
            {comments[item.id].map((comment, index) => (
              <View key={index} style={styles.comment}>
                <Text style={styles.commentText}>
                  <Text style={styles.commentUsername}>You: </Text>
                  {comment.text}
                </Text>
              </View>
            ))}
          </ScrollView>
        )}
      </View>
    </View>
  );
  

  //handling stories
  const handleStoryClick = (storyData) => {
    navigation.navigate('StoryScreen', { storyData }); // Navigate to StoryScreen and pass the story data
  };

  // Render each story
  const renderStory = ({ item }) => (
    <TouchableOpacity onPress={() => handleStoryClick(item)}>
      <View style={styles.storyContainer}>
      <View style={styles.storyImageContainer}>
                <View style={styles.storyBorder} />
                <Image source={{ uri: item.imageUrl }} style={styles.storyImage} />
              </View>
              <View style={styles.storyUsernameContainer}>
                <Text style={styles.storyUsername}>{item.username}</Text>
              </View>
      </View>
    </TouchableOpacity>
  );

  // Dummy data for stories
  const stories = [
    {
      username: 'user1',
      imageUrl: 'https://picsum.photos/id/25/200/300',
      posturl:'https://picsum.photos//id/61/200/300.jpg',
    },
    {
      username: 'user2',
      imageUrl: 'https://picsum.photos/id/26/200/300',
      posturl:'https://picsum.photos//id/62/200/300.jpg',
    },
    {
      username: 'user3',
      imageUrl: 'https://picsum.photos/id/27/200/300',
      posturl:'https://picsum.photos//id/63/200/300.jpg',
    },
    {
      username: 'user4',
      imageUrl: 'https://picsum.photos/id/23/200/300',
      posturl:'https://picsum.photos//id/64/200/300.jpg',
    },
    {
      username: 'user5',
      imageUrl: 'https://picsum.photos/id/29/200/300',
      posturl:'https://picsum.photos//id/65/200/300.jpg',
    },
    {
      username: 'user6',
      imageUrl: 'https://picsum.photos/id/28/200/300',
      posturl:'https://picsum.photos//id/66/200/300.jpg',
    },
  
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>Instagram</Text>
        <View style={styles.iconContainer}>
          <Icon name="heart-o" size={30} style={styles.icon} />
          <Icon1 name="message1" size={30} style={styles.icon} />
        </View>
      </View>

      {/* Stories */}
      <View style={styles.storyScrollContainer}>
      <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={stories}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderStory} 
        />
      </View>

      {/* Posts */}
      <FlatList
        data={posts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderPost}
        style={styles.postList}
      />
    </View>
  );



};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginBottom: 10,
  },
  text: {
    fontSize: 27,
    fontFamily: 'Instagram Sans Headline',
  },
  iconContainer: {
    width: 90, 
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 10, 
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 10, 
  },
  storyScrollContainer: {
    width: '100%',
    flexDirection: 'row',
    marginBottom: 10,
  },
  storyContainer: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  storyImageContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#dd2a7b',
    alignItems: 'center',
    justifyContent: 'center',
  },
  storyImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  storyBorder: {
    width: 84,
    height: 84,
    borderRadius: 42,
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#dd2a7b',
    position: 'absolute',
  },
  storyUsernameContainer: {
    marginTop: 5,
  },
  storyUsername: {
    textAlign: 'center',
  },
  postList: {
    flex: 1,
  },
  postContainer: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  profilePicture: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  username: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  postImage: {
    width: '100%',
    height: 300,
  },
  postActionsContainer: {
    paddingHorizontal: 10,
    paddingBottom: 10,
    marginTop: 10, 
  },
  postActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconLiked: {
    width: 30,
    height: 30,
    color: 'red',
    marginRight: 10,
  },
  commentUsername: {
    fontWeight: 'bold',
  },
  
});

export default Home;