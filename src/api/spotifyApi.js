import { Auth, API, graphqlOperation } from 'aws-amplify';
var SpotifyWebApi = require('spotify-web-api-js');
import { getUserTokensSpotify, getToken } from '../graphql/queries';
var spotifyApi;
export const setToken = async () => {
  let user = await API.graphql(graphqlOperation(getUserTokensSpotify));
  if (!user.data.getUserTokensSpotify) return false;
  console.log(user);
  let token = await API.graphql(graphqlOperation(getToken, { refreshToken: user.data.getUserTokensSpotify.refreshToken }));
  spotifyApi = new SpotifyWebApi();
  spotifyApi.setAccessToken(token.data.getToken);
  return spotifyApi;
};
export const getApiObject = () => {
  return spotifyApi;
};
