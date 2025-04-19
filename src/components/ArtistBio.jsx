import React, { useState } from 'react';
import { artist } from '../data/artistData';

const ArtistBio = () => {
  const [showFullBio, setShowFullBio] = useState(false);
  
  // Función para limitar el texto a 38 palabras
  const truncateBio = (text, wordCount) => {
    const words = text.split(' ');
    if (words.length <= wordCount) return text;
    return words.slice(0, wordCount).join(' ') + '...';
  };

  // Estilos en objeto (CSS-in-JS) - Mantenidos iguales
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '2rem',
      background: 'rgba(26, 26, 46, 0.7)',
      borderRadius: '15px',
      margin: '2rem auto',
      maxWidth: '900px',
      boxShadow: '0 10px 30px rgba(169, 69, 255, 0.2)'
    },
    image: {
      width: '100%',
      maxWidth: '300px',
      height: 'auto',
      borderRadius: '50%',
      border: '4px solid #a945ff',
      boxShadow: '0 0 20px rgba(169, 69, 255, 0.5)',
      objectFit: 'cover',
      aspectRatio: '1/1', // Mantiene relación cuadrada
      transition: 'all 0.3s ease',
      marginBottom: '1.5rem',
      ':hover': {
        transform: 'scale(1.03)',
        boxShadow: '0 0 30px rgba(0, 247, 255, 0.7)',
        borderColor: '#00f7ff'
      }
    },
    name: {
      background: 'linear-gradient(90deg, #a945ff, #00f7ff)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      fontSize: '2.5rem',
      margin: '0.5rem 0',
      textAlign: 'center',
      textTransform: 'uppercase',
      letterSpacing: '1px'
    },
    bio: {
      color: '#fff',
      fontSize: '1.1rem',
      lineHeight: '1.6',
      textAlign: 'justify', // Cambiado a justificado
      maxWidth: '600px',
      padding: '0 1rem',
      marginBottom: '1rem'
    },
    readMoreButton: {
      background: 'linear-gradient(90deg, #a945ff, #00f7ff)',
      border: 'none',
      color: '#fff',
      padding: '0.5rem 1.5rem',
      borderRadius: '25px',
      cursor: 'pointer',
      fontSize: '1rem',
      fontWeight: '600',
      transition: 'all 0.3s ease',
      marginTop: '0.5rem',
      ':hover': {
        transform: 'translateY(-2px)',
        boxShadow: '0 5px 15px rgba(169, 69, 255, 0.4)'
      }
    }
  };

  return (
    <section style={styles.container}>
      <img 
        src={artist.profileImage} 
        alt={artist.name}
        style={styles.image}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.03)';
          e.currentTarget.style.boxShadow = '0 0 30px rgba(0, 247, 255, 0.7)';
          e.currentTarget.style.borderColor = '#00f7ff';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 0 20px rgba(169, 69, 255, 0.5)';
          e.currentTarget.style.borderColor = '#a945ff';
        }}
      />
      <h1 style={styles.name}>{artist.name}</h1>
      <p style={styles.bio}>
        {showFullBio ? artist.bio : truncateBio(artist.bio, 36)}
      </p>
      {artist.bio.split(' ').length > 35 && (
        <button 
          style={styles.readMoreButton}
          onClick={() => setShowFullBio(!showFullBio)}
        >
          {showFullBio ? 'Mostrar menos' : 'Seguir leyendo'}
        </button>
      )}
    </section>
  );
};

export default ArtistBio;