import React, { useState } from 'react';
import { artist } from '../data/artistData';
import { FaSpotify, FaYoutube } from 'react-icons/fa';

const SpotifyAlbum = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [showOptions, setShowOptions] = useState(false);

  // Estilos en objeto (CSS-in-JS)
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '2rem',
      background: 'rgba(26, 26, 46, 0.7)',
      borderRadius: '15px',
      margin: '2rem auto',
      maxWidth: '500px',
      boxShadow: '0 10px 30px rgba(169, 69, 255, 0.2)',
      position: 'relative'
    },
    title: {
      color: '#fff',
      fontSize: '1.8rem',
      marginBottom: '1.5rem',
      background: 'linear-gradient(90deg, #a945ff, #00f7ff)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      textAlign: 'center'
    },
    albumCover: {
      width: '100%',
      maxWidth: '300px',
      borderRadius: '10px',
      transition: 'all 0.3s ease',
      transform: isHovered ? 'scale(1.03)' : 'scale(1)',
      boxShadow: isHovered 
        ? '0 0 30px rgba(0, 247, 255, 0.7)' 
        : '0 10px 20px rgba(169, 69, 255, 0.3)',
      cursor: 'pointer',
      marginBottom: '1rem'
    },
    listeners: {
      color: '#fff',
      fontSize: '1rem',
      marginTop: '0.5rem'
    },
    optionsContainer: {
      position: 'absolute',
      bottom: '100px',
      left: '50%',
      transform: 'translateX(-50%)',
      display: showOptions ? 'flex' : 'none',
      gap: '1.5rem',
      background: 'rgba(15, 12, 41, 0.9)',
      padding: '1rem 2rem',
      borderRadius: '50px',
      boxShadow: '0 5px 20px rgba(0, 0, 0, 0.5)',
      zIndex: 10,
      border: '1px solid rgba(169, 69, 255, 0.3)'
    },
    optionButton: {
      background: 'transparent',
      border: 'none',
      color: '#fff',
      fontSize: '2.5rem',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    spotifyButton: {
      ':hover': {
        color: '#1DB954',
        transform: 'scale(1.1)'
      }
    },
    youtubeButton: {
      ':hover': {
        color: '#FF0000',
        transform: 'scale(1.1)'
      }
    },
    optionLabel: {
      fontSize: '0.8rem',
      marginTop: '0.3rem'
    }
  };

  const handleAlbumClick = () => {
    setShowOptions(!showOptions);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Último lanzamiento</h2>
      
      <img 
        src={artist.latestRelease.cover} 
        alt={artist.latestRelease.title}
        style={styles.albumCover}
        onClick={handleAlbumClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
      
      <h3 style={{color: '#fff', textAlign: 'center'}}>
        {artist.latestRelease.title}
      </h3>
      
      {showOptions && (
        <div style={styles.optionsContainer}>
          <button 
            style={{...styles.optionButton, ...styles.spotifyButton}}
            onClick={() => window.open(artist.latestRelease.spotifyUrl, '_blank')}
          >
            <FaSpotify />
            <span style={styles.optionLabel}>Spotify</span>
          </button>
          <button 
            style={{...styles.optionButton, ...styles.youtubeButton}}
            onClick={() => window.open(artist.latestRelease.youtubeUrl, '_blank')}
          >
            <FaYoutube />
            <span style={styles.optionLabel}>YouTube</span>
          </button>
        </div>
      )}
      
     
    </div>
  );
};

export default SpotifyAlbum;