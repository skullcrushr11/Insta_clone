import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, Modal, Button, BackHandler, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const StoryScreen = ({ route }) => {
  const { storyData } = route.params;
  const navigation = useNavigation();
  const [isLiked, setIsLiked] = useState(false);
  const [replyText, setReplyText] = useState('');
  const [isReplyMode, setIsReplyMode] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.goBack();
    }, 6000);

    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      clearTimeout(timer);
      navigation.goBack();
      return true;
    });

    return () => {
      clearTimeout(timer); // Cleanup the timer on unmount
      backHandler.remove(); // Remove the back press event listener
    };
  }, [navigation]);

  const handleLikePress = () => {
    setIsLiked(!isLiked);
    setIsReplyMode(false);
  };

  const handleSharePress = () => {
    setIsReplyMode(false);
    
  };

  const handleReplyPress = () => {
    setIsReplyMode(true);
  };

  const handleOverlayPress = () => {
    if (isReplyMode) {
      console.log('Replying to Story:', replyText);
      setIsReplyMode(false);
      setReplyText('');
    }
  };

  return (
    <Modal visible={true} animationType="slide">
      <View style={styles.container}>
        <Image source={{ uri: storyData.posturl }} style={styles.storyImage} />
        <View style={styles.userInfoContainer}>
          <Image source={{ uri: storyData.imageUrl }} style={styles.profilePicture} />
          <Text style={styles.username}>{storyData.username}</Text>
        </View>
        <View style={styles.actionContainer}>
          <TextInput
            placeholder="Reply to Story"
            placeholderTextColor="white"
            style={styles.replyInput}
            onChangeText={text => setReplyText(text)}
            value={replyText}
            editable={!isReplyMode}
          />
          <TouchableOpacity onPress={handleLikePress} style={styles.actionButton}>
            <Icon name={isLiked ? 'heart' : 'heart-o'} size={24} color={isLiked ? 'red' : 'white'} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleSharePress} style={styles.actionButton}>
            <Icon name="share" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  storyImage: {
    flex: 1,
  },
  profilePicture: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  username: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  userInfoContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  actionContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'space-between',
  },
  actionButton: {
    marginHorizontal: 10,
  },
  replyInput: {
    flex: 1, 
    color: 'white',
    padding: 10,
    marginRight: 10,
  },
});

export default StoryScreen;
