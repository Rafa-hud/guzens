import React from 'react';
import ArtistBio from '../components/ArtistBio';
import PopularSongs from '../components/PopularSongs';
import SpotifyAlbum from '../components/SpotifyAlbum';
import SocialMedia from '../components/SocialMedia';

const Home = () => {
  return (
    <div className="home">
      <ArtistBio />
      <PopularSongs />
      <SpotifyAlbum />
      <SocialMedia />
      
    </div>
  );
};

export default Home;