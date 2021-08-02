/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTrack = /* GraphQL */ `
  query GetTrack($id: Int!) {
    getTrack(id: $id) {
      id
      name
      duration_ms
    }
  }
`;
export const listEvents = /* GraphQL */ `
  query ListEvents($limit: Int, $nextToken: String) {
    listEvents(limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        duration_ms
      }
      nextToken
    }
  }
`;
export const listTracks = /* GraphQL */ `
  query ListTracks {
    listTracks {
      listenCount
      trackId
      name
    }
  }
`;
export const listTopAlbums = /* GraphQL */ `
  query ListTopAlbums {
    listTopAlbums {
      listenCount
      trackId
      name
    }
  }
`;
export const listTopArtists = /* GraphQL */ `
  query ListTopArtists {
    listTopArtists {
      listenCount
      artistId
    }
  }
`;
export const getSpotifyToken = /* GraphQL */ `
  query GetSpotifyToken($userId: String) {
    getSpotifyToken(userId: $userId) {
      userId
      accessToken
      refreshToken
      email
      lastModified
    }
  }
`;
export const getArtist = /* GraphQL */ `
  query GetArtist($id: Int!) {
    getArtist(id: $id) {
      id
      name
    }
  }
`;
export const listArtists = /* GraphQL */ `
  query ListArtists {
    listArtists {
      id
      name
    }
  }
`;
export const getArtist_track = /* GraphQL */ `
  query GetArtist_track($artistId: Int!) {
    getArtist_track(artistId: $artistId) {
      trackId
      artistId
    }
  }
`;
export const listArtist_tracks = /* GraphQL */ `
  query ListArtist_tracks {
    listArtist_tracks {
      trackId
      artistId
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($userId: String!) {
    getUser(userId: $userId) {
      userId
      refreshToken
      accessToken
      email
      lastModified
    }
  }
`;
export const getToken = /* GraphQL */ `
  query GetToken($refreshToken: String!) {
    getToken(refreshToken: $refreshToken)
  }
`;
export const getUserTokensSpotify = /* GraphQL */ `
  query GetUserTokensSpotify($userId: String) {
    getUserTokensSpotify(userId: $userId) {
      userId
      accessToken
      refreshToken
    }
  }
`;
