/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTrack = /* GraphQL */ `
  subscription OnCreateTrack {
    onCreateTrack {
      id
      name
      duration_ms
    }
  }
`;
export const onCreateArtist = /* GraphQL */ `
  subscription OnCreateArtist {
    onCreateArtist {
      id
      name
    }
  }
`;
export const onCreateArtist_track = /* GraphQL */ `
  subscription OnCreateArtist_track {
    onCreateArtist_track {
      trackId
      artistId
    }
  }
`;
