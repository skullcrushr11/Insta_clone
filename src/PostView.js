import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const PostView = ({ route }) => {
  const { post } = route.params;

  const [isLiked, setIsLiked] = useState(false);
  const [comment, setComment] = useState('');
  const [showCommentBox, setShowCommentBox] = useState(false);

  const handleLikePress = () => {
    setIsLiked(!isLiked);
  };

  const handleCommentPress = () => {
    setShowCommentBox(true);
  };

  const handleCommentSubmit = () => {
    console.log('Comment submitted:', comment);
    setComment('');
    setShowCommentBox(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.userInfoContainer}>
        <Image source={{ uri: post.userProfile }} style={styles.profilePicture} />
        <Text style={styles.username}>{post.username}</Text>
      </View>
      <Image source={{ uri: post.imageUrl }} style={styles.postImage} />
      <View style={styles.actionsContainer}>
        <TouchableOpacity style={styles.actionButton} onPress={handleLikePress}>
          <Icon name={isLiked ? 'heart' : 'heart-o'} size={30} color={isLiked ? 'red' : 'black'} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton} onPress={handleCommentPress}>
          <Icon name="comment-o" size={30} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Icon name="share-square-o" size={30} />
        </TouchableOpacity>
      </View>
      {showCommentBox && (
        <View style={styles.commentBox}>
          <TextInput
            placeholder="Add a comment..."
            style={styles.commentInput}
            onChangeText={(text) => setComment(text)}
            value={comment}
          />
          <TouchableOpacity style={styles.commentButton} onPress={handleCommentSubmit}>
            <Text style={styles.commentButtonText}>Post</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  userInfoContainer: {
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
  actionsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  actionButton: {
    marginHorizontal: 10,
  },
  commentBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  commentInput: {
    flex: 1,
    padding: 10,
  },
  commentButton: {
    marginLeft: 10,
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
  commentButtonText: {
    color: 'white',
  },
});

export default PostView;
