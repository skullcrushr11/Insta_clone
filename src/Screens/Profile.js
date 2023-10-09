import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Profile = () => {
  return (
    <View style={styles.container}>
      {/* Profile Header */}
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <Text style={styles.username}>Username</Text>
          <TouchableOpacity>
            <Icon name="cog" size={24} style={styles.settingsIcon} />
          </TouchableOpacity>
        </View>
        <View style={styles.profileStats}>
          <Image
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/f/f0/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006_edit_1.jpg', // Replace with your profile image URL
            }}
            style={styles.profilePicture}
          />
          <View style={styles.stats}>
            <Text style={styles.statsText}>10</Text>
            <Text style={styles.statsText}>Posts</Text>
          </View>
          <View style={styles.stats}>
            <Text style={styles.statsText}>1.5K</Text>
            <Text style={styles.statsText}>Followers</Text>
          </View>
          <View style={styles.stats}>
            <Text style={styles.statsText}>500</Text>
            <Text style={styles.statsText}>Following</Text>
          </View>
        </View>
        <Text style={styles.bio}>I love coding in React Native</Text>
      </View>

      {/* More Profile Content Goes Here */}
      {/* You can add tabs or other sections for posts, followers, following, etc. */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
  },
  username: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  settingsIcon: {
    color: 'black',
  },
  profileStats: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 16,
  },
  stats: {
    alignItems: 'center',
    flex: 1, // Equal spacing using flex
  },
  statsText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  bio: {
    marginTop: 16,
    fontSize: 16,
    color: '#777',
  },
});

export default Profile;
