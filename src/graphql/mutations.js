/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const putPost = /* GraphQL */ `
  mutation PutPost($id: ID!, $title: String!) {
    putPost(id: $id, title: $title) {
      id
      name
      duration_ms
    }
  }
`;
export const deleteTrack = /* GraphQL */ `
  mutation DeleteTrack($id: Int!) {
    deleteTrack(id: $id) {
      id
      name
      duration_ms
    }
  }
`;
export const createTrack = /* GraphQL */ `
  mutation CreateTrack($createTrackInput: CreateTrackInput!) {
    createTrack(createTrackInput: $createTrackInput) {
      id
      name
      duration_ms
    }
  }
`;
export const updateTrack = /* GraphQL */ `
  mutation UpdateTrack($updateTrackInput: UpdateTrackInput!) {
    updateTrack(updateTrackInput: $updateTrackInput) {
      id
      name
      duration_ms
    }
  }
`;
export const deleteArtist = /* GraphQL */ `
  mutation DeleteArtist($id: Int!) {
    deleteArtist(id: $id) {
      id
      name
    }
  }
`;
export const createArtist = /* GraphQL */ `
  mutation CreateArtist($createArtistInput: CreateArtistInput!) {
    createArtist(createArtistInput: $createArtistInput) {
      id
      name
    }
  }
`;
export const updateArtist = /* GraphQL */ `
  mutation UpdateArtist($updateArtistInput: UpdateArtistInput!) {
    updateArtist(updateArtistInput: $updateArtistInput) {
      id
      name
    }
  }
`;
export const deleteArtist_track = /* GraphQL */ `
  mutation DeleteArtist_track($artistId: Int!) {
    deleteArtist_track(artistId: $artistId) {
      trackId
      artistId
    }
  }
`;
export const createArtist_track = /* GraphQL */ `
  mutation CreateArtist_track(
    $createArtist_trackInput: CreateArtist_trackInput!
  ) {
    createArtist_track(createArtist_trackInput: $createArtist_trackInput) {
      trackId
      artistId
    }
  }
`;
export const updateArtist_track = /* GraphQL */ `
  mutation UpdateArtist_track(
    $updateArtist_trackInput: UpdateArtist_trackInput!
  ) {
    updateArtist_track(updateArtist_trackInput: $updateArtist_trackInput) {
      trackId
      artistId
    }
  }
`;
