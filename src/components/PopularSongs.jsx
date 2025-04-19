import React, { useState } from 'react';
import { FaSpotify, FaYoutube, FaPlay } from 'react-icons/fa';
import { popularSongs } from '../data/songsData';

const PopularSongs = () => {
  const [selectedSong, setSelectedSong] = useState(null);
  const [showOptions, setShowOptions] = useState(false);

  // Estilos en objeto (CSS-in-JS)
  const styles = {
    container: {
      padding: '2rem',
      background: 'rgba(26, 26, 46, 0.8)',
      borderRadius: '15px',
      margin: '2rem auto',
      maxWidth: '1200px',
      boxShadow: '0 10px 30px rgba(169, 69, 255, 0.2)'
    },
    title: {
      textAlign: 'center',
      marginBottom: '2rem',
      fontSize: '2rem',
      color: '#fff',
      background: 'linear-gradient(90deg, #a945ff, #00f7ff)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      textTransform: 'uppercase',
      letterSpacing: '1px',
      fontWeight: 'bold'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
      gap: '1.5rem',
      '@media (max-width: 768px)': {
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))'
      }
    },
    card: {
      background: 'rgba(15, 12, 41, 0.6)',
      borderRadius: '10px',
      overflow: 'hidden',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      textAlign: 'center',
      paddingBottom: '1rem',
      position: 'relative',
      transform: 'translateY(0)',
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
      border: '1px solid rgba(169, 69, 255, 0.2)',
      ':hover': {
        transform: 'translateY(-5px)',
        boxShadow: '0 15px 30px rgba(0, 247, 255, 0.3)',
        background: 'rgba(15, 12, 41, 0.8)'
      }
    },
    coverContainer: {
      position: 'relative',
      width: '100%',
      height: '250px',
      overflow: 'hidden'
    },
    cover: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'all 0.5s ease'
    },
    playButton: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      background: 'rgba(0, 0, 0, 0.7)',
      width: '60px',
      height: '60px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      opacity: '0',
      transition: 'all 0.3s ease',
      color: '#fff',
      fontSize: '1.5rem',
      border: '2px solid #a945ff'
    },
    cardHover: {
      opacity: '1',
      background: 'rgba(169, 69, 255, 0.7)'
    },
    titleText: {
      margin: '1rem 0 0.5rem',
      color: '#fff',
      fontSize: '1.2rem',
      padding: '0 1rem',
      fontWeight: '600',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    },
    optionsContainer: {
      position: 'fixed',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      background: 'rgba(0, 0, 0, 0.8)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: '1000',
      opacity: showOptions ? '1' : '0',
      pointerEvents: showOptions ? 'auto' : 'none',
      transition: 'opacity 0.3s ease'
    },
    optionsBox: {
      background: 'rgba(26, 26, 46, 0.95)',
      padding: '2rem',
      borderRadius: '15px',
      textAlign: 'center',
      maxWidth: '400px',
      width: '90%',
      border: '1px solid rgba(169, 69, 255, 0.3)',
      boxShadow: '0 0 30px rgba(169, 69, 255, 0.5)'
    },
    songTitle: {
      color: '#fff',
      fontSize: '1.5rem',
      marginBottom: '1.5rem',
      fontWeight: 'bold'
    },
    optionButton: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '10px',
      width: '100%',
      padding: '12px',
      margin: '10px 0',
      borderRadius: '50px',
      border: 'none',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease'
    },
    spotifyButton: {
      background: '#1DB954',
      color: '#fff',
      ':hover': {
        transform: 'translateY(-3px)',
        boxShadow: '0 5px 15px rgba(29, 185, 84, 0.5)'
      }
    },
    youtubeButton: {
      background: '#FF0000',
      color: '#fff',
      ':hover': {
        transform: 'translateY(-3px)',
        boxShadow: '0 5px 15px rgba(255, 0, 0, 0.5)'
      }
    },
    closeButton: {
      background: 'transparent',
      border: '1px solid #a945ff',
      color: '#a945ff',
      ':hover': {
        background: 'rgba(169, 69, 255, 0.2)'
      }
    }
  };

  const handleCardClick = (song) => {
    setSelectedSong(song);
    setShowOptions(true);
  };

  const closeOptions = () => {
    setShowOptions(false);
  };

  const handlePlatformClick = (url) => {
    window.open(url, '_blank');
    closeOptions();
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Canciones Populares</h2>
      <div style={styles.grid}>
        {popularSongs.map((song) => (
          <div 
            key={song.id}
            style={styles.card}
            onClick={() => handleCardClick(song)}
          >
            <div style={styles.coverContainer}>
              <img 
                src={song.coverArt} 
                alt={`Portada de ${song.title}`}
                style={styles.cover}
              />
              <div 
                style={{
                  ...styles.playButton,
                  ...styles.cardHover
                }}
                className="play-button"
              >
                <FaPlay />
              </div>
            </div>
            <h3 style={styles.titleText}>{song.title}</h3>
          </div>
        ))}
      </div>

      {/* Modal de opciones de reproducción */}
      <div style={styles.optionsContainer}>
        {selectedSong && (
          <div style={styles.optionsBox}>
            <h3 style={styles.songTitle}>{selectedSong.title}</h3>
            
            <button 
              style={{...styles.optionButton, ...styles.spotifyButton}}
              onClick={() => handlePlatformClick(selectedSong.spotifyUrl)}
            >
              <FaSpotify /> Reproducir en Spotify
            </button>
            
            <button 
              style={{...styles.optionButton, ...styles.youtubeButton}}
              onClick={() => handlePlatformClick(selectedSong.youtubeUrl)}
            >
              <FaYoutube /> Reproducir en YouTube
            </button>
            
            <button 
              style={{...styles.optionButton, ...styles.closeButton}}
              onClick={closeOptions}
            >
              Cerrar
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PopularSongs;