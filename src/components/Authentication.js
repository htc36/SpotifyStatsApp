import React, { useContext, useEffect, useState } from 'react';
import { View, Text } from 'react-native';
// import UserContext from '../context/UserContext';
import Navigation from './Navigation';
import { setToken } from '../api/spotifyApi';
var SpotifyWebApi = require('spotify-web-api-js');
import Token from './Token';
const Authentication = () => {
  // var s = new Spotify();
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [needsSpotifyLogin, setLoggedInToSpotify] = useState(false);
  // const { data, setUser } = useContext(UserContext);
  const fetchData = async () => {
    if (!(await setToken())) {
      setLoggedInToSpotify(true);
    } else {
      setAuthenticated(true);
    }
  };
  useEffect(() => {
    try {
      fetchData();
    } catch (e) {
      console.log(e);
    }
  }, []);
  // return { data.isAuthenticated ? <Navigation></Navigation> : <Text>Loading</Text>}
  // return <View style={{ flex: 1 }}> {isAuthenticated ? <Navigation></Navigation> : <View></View>}</View>;
  return (
    <View style={{ flex: 1 }}>
      {needsSpotifyLogin ? (
        <Token setSpotifyToken={(isLoggedIn) => setLoggedInToSpotify(isLoggedIn)} fetchData={() => fetchData()}></Token>
      ) : (
        <View style={{ flex: 1 }}>{isAuthenticated ? <Navigation></Navigation> : <Text>Loading</Text>}</View>
      )}
    </View>
  );
  // );
};
export default Authentication;
