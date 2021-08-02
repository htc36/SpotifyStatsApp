import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, ImageBackground, ScrollView } from 'react-native';

import { API, graphqlOperation } from 'aws-amplify';
import { listTracks } from '..//graphql/queries';
import UserContext from '../context/UserContext';
import { Card, Title, Avatar, Button } from 'react-native-paper';
import { getApiObject } from '../api/spotifyApi';
import { authorize } from 'react-native-app-auth';
import * as AuthSession from 'expo-auth-session';

// react-native-app-auth
const Tracks = () => {
  const [tracks, setTracks] = useState([]);
  const [trackCounts, setTrackCounts] = useState({});
  const { data } = useContext(UserContext);

  useEffect(() => {
    fetchTodos();
  }, []);

  async function fetchTodos() {
    try {
      const tracks = await API.graphql(graphqlOperation(listTracks));
      let spotifyApi = getApiObject();
      console.log(tracks);
      let tracksObject = tracks.data.listTracks.reduce((obj, item) => ((obj[item.trackId] = item.listenCount), obj), {});
      setTrackCounts(tracksObject);
      let trackIdString = Object.keys(tracksObject);
      let response = await spotifyApi.getTracks(trackIdString);
      setTracks(response.tracks);
    } catch (err) {
      console.log(err);
      console.log('error fetching todos');
    }
  }

  return (
    <ScrollView style={{}}>
      <View style={styles.container}>
        {tracks.map((todo, index) => (
          <View key={index} style={styles.card}>
            <ImageBackground source={{ uri: todo.album.images[0].url }} style={{ height: 170, width: '100%' }} imageStyle={{ borderRadius: 6 }}>
              <View style={{ flex: 1, justifyContent: 'space-between' }}>
                <Text style={styles.title}>#{trackCounts[todo.id]}</Text>
                <Text style={styles.title}>{todo.name}</Text>
              </View>
            </ImageBackground>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    color: 'white',
    overflow: 'hidden',
    height: 40,
    marginLeft: 3,
    // need to lok into better font weight alternative
    fontWeight: '500',
    textShadowColor: 'rgba(0, 0, 0, 1)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  container: { flexDirection: 'row', flexWrap: 'wrap', width: '100%', justifyContent: 'space-evenly', flex: 1 },
  card: { display: 'flex', flexDirection: 'row', justifyContent: 'space-around', fontWeight: 'bold', width: '45%' },
  input: { height: 50, backgroundColor: '#ddd', marginBottom: 10, padding: 8 },
  todoName: { fontSize: 18 },
});

export default Tracks;
