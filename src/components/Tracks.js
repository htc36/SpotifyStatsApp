import React, { useContext, useEffect, useState } from 'react';
import { FlatList, View, Text, StyleSheet, TextInput, ImageBackground, ScrollView } from 'react-native';

import { API, graphqlOperation } from 'aws-amplify';
import { getTracks, getArtists } from '..//graphql/queries';
import UserContext from '../context/UserContext';
import { Card, Title, Avatar, Button } from 'react-native-paper';
import { getApiObject } from '../api/spotifyApi';
import { authorize } from 'react-native-app-auth';
import * as AuthSession from 'expo-auth-session';

// react-native-app-auth
const Tracks = ({ metric, type }) => {
  const [metrics, setMetrics] = useState([]);
  const [trackCounts, setMetricCounts] = useState({});
  const { data } = useContext(UserContext);

  useEffect(() => {
    fetchMetric(metric, type);
  }, []);

  async function fetchMetric(metric, type) {
    try {
      let query = metric == 'getTracks' ? getTracks : getArtists;
      const result = await API.graphql(graphqlOperation(query));
      let spotifyApi = getApiObject();
      let metricObject = result.data[metric].reduce((obj, item) => ((obj[item.id] = item.listenCount), obj), {});
      setMetricCounts(metricObject);
      let trackIdString = Object.keys(metricObject);
      let response = await spotifyApi[metric](trackIdString);
      setMetrics(response[type]);
    } catch (err) {
      console.log(err);
      console.log('error fetching todos');
    }
  }

  return (
    <ScrollView style={{}}>
      <View style={styles.container}>
        {/* {metrics.map((metric, index) => ( */}
        <FlatList
          data={metric}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ metric }) => (
            <View style={styles.card}>
              <ImageBackground
                source={{ uri: type == 'artists' ? metric?.images[0].url : metric.album.images[0].url }}
                style={{ height: 170, width: '100%' }}
                imageStyle={{ borderRadius: 6 }}
              >
                <View style={{ flex: 1, justifyContent: 'space-between' }}>
                  <Text style={styles.title}>#{trackCounts[metric.id]}</Text>
                  <Text style={styles.title}>{metric.name}</Text>
                </View>
              </ImageBackground>
            </View>
          )}
        />
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
  container: { marginTop: 10, flexDirection: 'row', flexWrap: 'wrap', width: '100%', justifyContent: 'space-evenly', flex: 1 },
  card: { display: 'flex', marginBottom: 20, flexDirection: 'row', justifyContent: 'space-around', fontWeight: 'bold', width: '45%' },
  input: { height: 50, backgroundColor: '#ddd', marginBottom: 10, padding: 8 },
  todoName: { fontSize: 18 },
});

export default Tracks;
