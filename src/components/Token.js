import * as React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import * as Linking from 'expo-linking';
import * as WebBrowser from 'expo-web-browser';
import { Auth } from 'aws-amplify';
import Constants from 'expo-constants';
var my_client_id = '2277813cdcf24255897300ffdbf856cf'; // Test
// var redirect_uri = 'https://7pwa2q2ix7.execute-api.ap-southeast-2.amazonaws.com/Prod/api/token'; // Your redirect ur
let redirect_uri = 'https://7pwa2q2ix7.execute-api.ap-southeast-2.amazonaws.com/Prod/api/token';
// var redirect_uri = 'localhost:3000/dashboard'; // Your redirect uri?
var scopes = 'user-read-email%20user-read-recently-played%20user-top-read';
let state = 'hey';

export default class App extends React.Component {
  state = {
    redirectData: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>You need to link your account with Spotify</Text>
        <Button onPress={this._openAuthSessionAsync} title='Tap here to link account' />

        {this._maybeRenderRedirectData()}
      </View>
    );
  }

  _openAuthSessionAsync = async () => {
    try {
      let result = await WebBrowser.openAuthSessionAsync(
        `https://accounts.spotify.com/authorize?response_type=code&client_id=${my_client_id}&scope=${scopes}&redirect_uri=${redirect_uri}&state=${state}`,
      );
      let redirectData;
      if (result.url) {
        redirectData = Linking.parse(result.url);
      }
      this.setState({ result, redirectData });
    } catch (error) {
      alert(error);
      console.log(error);
    }
  };

  _maybeRenderRedirectData = () => {
    if (!this.state.redirectData) {
      return;
    }

    return <Text style={{ marginTop: 30 }}>{JSON.stringify(this.state.redirectData)}</Text>;
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 40,
  },
  header: {
    fontSize: 25,
    marginBottom: 25,
  },
});
