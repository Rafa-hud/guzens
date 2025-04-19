import React, { useState } from 'react';
import { 
  FaSpotify, 
  FaYoutube, 
  FaFacebook, 
  FaTiktok,
  FaInstagram
} from 'react-icons/fa';
import { artist } from '../data/artistData';

const SocialMedia = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  // Estilos en objeto (CSS-in-JS)
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '2rem 1rem',
      background: 'rgba(26, 26, 46, 0.8)',
      borderRadius: '15px',
      margin: '2rem auto',
      maxWidth: '900px',
      width: '90%',
      boxShadow: '0 10px 30px rgba(169, 69, 255, 0.3)',
      border: '1px solid rgba(169, 69, 255, 0.3)'
    },
    title: {
      color: '#fff',
      fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
      marginBottom: '2rem',
      background: 'linear-gradient(90deg, #a945ff, #00f7ff)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      textAlign: 'center',
      textTransform: 'uppercase',
      letterSpacing: '1px',
      fontWeight: 'bold',
      padding: '0 1rem'
    },
    subtitle: {
      color: 'rgba(255, 255, 255, 0.8)',
      fontSize: '1rem',
      textAlign: 'center',
      marginBottom: '2rem',
      maxWidth: '600px',
      lineHeight: '1.6'
    },
    iconsContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(80px, 1fr))',
      gap: '1.5rem',
      width: '100%',
      maxWidth: '600px',
      padding: '0 1rem'
    },
    iconLink: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textDecoration: 'none',
      transition: 'all 0.3s ease'
    },
    iconContainer: {
      width: '70px',
      height: '70px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'rgba(15, 12, 41, 0.7)',
      boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
      transition: 'all 0.3s ease',
      position: 'relative',
      overflow: 'hidden',
      '@media (max-width: 480px)': {
        width: '60px',
        height: '60px'
      }
    },
    iconHoverEffect: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      background: 'linear-gradient(135deg, rgba(169,69,255,0.3), rgba(0,247,255,0.3))',
      opacity: 0,
      transition: 'opacity 0.3s ease'
    },
    icon: {
      fontSize: '1.8rem',
      zIndex: 2,
      transition: 'all 0.3s ease',
      '@media (max-width: 480px)': {
        fontSize: '1.5rem'
      }
    },
    iconLabel: {
      color: '#fff',
      marginTop: '0.8rem',
      fontSize: '0.9rem',
      fontWeight: '500',
      opacity: 0.8,
      transition: 'all 0.3s ease',
      textAlign: 'center',
      '@media (max-width: 480px)': {
        fontSize: '0.8rem',
        marginTop: '0.6rem'
      }
    },
    // Colores específicos para cada plataforma
    spotify: { color: '#1DB954' },
    youtube: { color: '#FF0000' },
    facebook: { color: '#1877F2' },
    twitter: { color: '#1DA1F2' },
    tiktok: { color: '#FE2C55' },
    instagram: { 
      background: 'linear-gradient(45deg, #405DE6, #5851DB, #833AB4, #C13584, #E1306C, #FD1D1D, #F56040, #F77737, #FCAF45, #FFDC80)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    }
  };

  return (
    <section style={styles.container}>
      <h2 style={styles.title}>Sígueme en Redes</h2>
      <p style={styles.subtitle}>
        Conéctate conmigo a través de mis redes sociales y plataformas musicales
      </p>
      
      <div style={styles.iconsContainer}>
        {/* Spotify */}
        <a 
          href={artist.socialMedia.spotify} 
          target="_blank" 
          rel="noopener noreferrer"
          style={styles.iconLink}
          onMouseEnter={() => setHoveredIcon('spotify')}
          onMouseLeave={() => setHoveredIcon(null)}
        >
          <div 
            style={{
              ...styles.iconContainer,
              transform: hoveredIcon === 'spotify' ? 'translateY(-5px)' : 'none',
              boxShadow: hoveredIcon === 'spotify' ? '0 10px 20px rgba(29, 185, 84, 0.4)' : styles.iconContainer.boxShadow
            }}
          >
            <div 
              style={{
                ...styles.iconHoverEffect,
                opacity: hoveredIcon === 'spotify' ? 1 : 0
              }} 
            />
            <FaSpotify 
              style={{
                ...styles.icon,
                ...styles.spotify,
                transform: hoveredIcon === 'spotify' ? 'scale(1.2)' : 'scale(1)'
              }} 
            />
          </div>
          <span style={styles.iconLabel}>Spotify</span>
        </a>
        
        {/* YouTube */}
        <a 
          href={artist.socialMedia.youtube} 
          target="_blank" 
          rel="noopener noreferrer"
          style={styles.iconLink}
          onMouseEnter={() => setHoveredIcon('youtube')}
          onMouseLeave={() => setHoveredIcon(null)}
        >
          <div 
            style={{
              ...styles.iconContainer,
              transform: hoveredIcon === 'youtube' ? 'translateY(-5px)' : 'none',
              boxShadow: hoveredIcon === 'youtube' ? '0 10px 20px rgba(255, 0, 0, 0.4)' : styles.iconContainer.boxShadow
            }}
          >
            <div 
              style={{
                ...styles.iconHoverEffect,
                opacity: hoveredIcon === 'youtube' ? 1 : 0
              }} 
            />
            <FaYoutube 
              style={{
                ...styles.icon,
                ...styles.youtube,
                transform: hoveredIcon === 'youtube' ? 'scale(1.2)' : 'scale(1)'
              }} 
            />
          </div>
          <span style={styles.iconLabel}>YouTube</span>
        </a>
        
        {/* Facebook */}
        <a 
          href={artist.socialMedia.facebook} 
          target="_blank" 
          rel="noopener noreferrer"
          style={styles.iconLink}
          onMouseEnter={() => setHoveredIcon('facebook')}
          onMouseLeave={() => setHoveredIcon(null)}
        >
          <div 
            style={{
              ...styles.iconContainer,
              transform: hoveredIcon === 'facebook' ? 'translateY(-5px)' : 'none',
              boxShadow: hoveredIcon === 'facebook' ? '0 10px 20px rgba(24, 119, 242, 0.4)' : styles.iconContainer.boxShadow
            }}
          >
            <div 
              style={{
                ...styles.iconHoverEffect,
                opacity: hoveredIcon === 'facebook' ? 1 : 0
              }} 
            />
            <FaFacebook 
              style={{
                ...styles.icon,
                ...styles.facebook,
                transform: hoveredIcon === 'facebook' ? 'scale(1.2)' : 'scale(1)'
              }} 
            />
          </div>
          <span style={styles.iconLabel}>Facebook</span>
        </a>
        
        
        
        {/* TikTok */}
        <a 
          href={artist.socialMedia.tiktok} 
          target="_blank" 
          rel="noopener noreferrer"
          style={styles.iconLink}
          onMouseEnter={() => setHoveredIcon('tiktok')}
          onMouseLeave={() => setHoveredIcon(null)}
        >
          <div 
            style={{
              ...styles.iconContainer,
              transform: hoveredIcon === 'tiktok' ? 'translateY(-5px)' : 'none',
              boxShadow: hoveredIcon === 'tiktok' ? '0 10px 20px rgba(254, 44, 85, 0.4)' : styles.iconContainer.boxShadow
            }}
          >
            <div 
              style={{
                ...styles.iconHoverEffect,
                opacity: hoveredIcon === 'tiktok' ? 1 : 0
              }} 
            />
            <FaTiktok 
              style={{
                ...styles.icon,
                ...styles.tiktok,
                transform: hoveredIcon === 'tiktok' ? 'scale(1.2)' : 'scale(1)'
              }} 
            />
          </div>
          <span style={styles.iconLabel}>TikTok</span>
        </a>
        
        {/* Instagram */}
        {artist.socialMedia.instagram && (
          <a 
            href={artist.socialMedia.instagram} 
            target="_blank" 
            rel="noopener noreferrer"
            style={styles.iconLink}
            onMouseEnter={() => setHoveredIcon('instagram')}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            <div 
              style={{
                ...styles.iconContainer,
                transform: hoveredIcon === 'instagram' ? 'translateY(-5px)' : 'none',
                boxShadow: hoveredIcon === 'instagram' ? '0 10px 20px rgba(225, 48, 108, 0.4)' : styles.iconContainer.boxShadow
              }}
            >
              <div 
                style={{
                  ...styles.iconHoverEffect,
                  opacity: hoveredIcon === 'instagram' ? 1 : 0
                }} 
              />
              <FaInstagram 
                style={{
                  ...styles.icon,
                  ...styles.instagram,
                  transform: hoveredIcon === 'instagram' ? 'scale(1.2)' : 'scale(1)'
                }} 
              />
            </div>
            <span style={styles.iconLabel}>Instagram</span>
          </a>
        )}
      </div>
    </section>
  );
};

export default SocialMedia;