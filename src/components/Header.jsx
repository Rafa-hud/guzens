import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaMusic, FaBars, FaTimes, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      setDropdownOpen(false);
    }
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Estilos en objeto JavaScript
  const styles = {
    header: {
      background: 'linear-gradient(135deg, #1a1a2e 0%, #0f0c29 100%)',
      padding: '1rem 2rem',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      boxShadow: '0 4px 30px rgba(169, 69, 255, 0.3)',
      borderBottom: '1px solid rgba(0, 247, 255, 0.2)',
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)'
    },
    nav: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      maxWidth: '1200px',
      margin: '0 auto',
      position: 'relative'
    },
    logo: {
      color: '#fff',
      textDecoration: 'none',
      fontSize: '1.8rem',
      fontWeight: 'bold',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      background: 'linear-gradient(90deg, #a945ff, #00f7ff)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      textTransform: 'uppercase',
      letterSpacing: '1px',
      fontFamily: '"Montserrat", sans-serif',
      transition: 'all 0.3s ease',
      zIndex: 1001
    },
    logoHover: {
      textShadow: '0 0 15px rgba(169, 69, 255, 0.7)'
    },
    navLinks: {
      display: 'flex',
      listStyle: 'none',
      gap: '2rem',
      margin: 0,
      padding: 0,
      '@media (max-width: 768px)': {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        background: 'rgba(15, 12, 41, 0.98)',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        clipPath: isMenuOpen ? 'circle(150% at 90% -10%)' : 'circle(0px at 90% -10%)',
        transition: 'clip-path 0.8s ease-in-out',
        zIndex: 1000
      }
    },
    navLink: {
      position: 'relative',
      '@media (max-width: 768px)': {
        margin: '1rem 0'
      }
    },
    link: {
      color: '#fff',
      textDecoration: 'none',
      fontSize: '1.1rem',
      fontWeight: '600',
      padding: '0.5rem 0',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      '@media (max-width: 768px)': {
        fontSize: '1.5rem'
      }
    },
    linkHover: {
      color: '#00f7ff'
    },
    linkAfter: {
      content: '""',
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: 0,
      height: '3px',
      background: 'linear-gradient(90deg, #a945ff, #00f7ff)',
      transition: 'width 0.3s ease',
      '@media (max-width: 768px)': {
        display: 'none'
      }
    },
    linkHoverAfter: {
      width: '100%'
    },
    musicIcon: {
      fontSize: '1.2rem'
    },
    menuButton: {
      display: 'none',
      background: 'transparent',
      border: 'none',
      color: '#fff',
      fontSize: '1.5rem',
      cursor: 'pointer',
      zIndex: 1001,
      '@media (max-width: 768px)': {
        display: 'block'
      }
    },
    closeButton: {
      position: 'absolute',
      top: '2rem',
      right: '2rem',
      background: 'transparent',
      border: 'none',
      color: '#fff',
      fontSize: '1.5rem',
      cursor: 'pointer',
      display: isMenuOpen ? 'block' : 'none'
    },
    dropdown: {
      position: 'relative',
      display: 'inline-block'
    },
    dropdownContent: {
      display: dropdownOpen ? 'block' : 'none',
      position: 'absolute',
      backgroundColor: 'rgba(26, 26, 46, 0.9)',
      minWidth: '160px',
      boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
      zIndex: 1,
      borderRadius: '5px',
      overflow: 'hidden',
      top: '100%',
      left: 0,
      transition: 'all 0.3s ease',
      opacity: dropdownOpen ? 1 : 0,
      transform: dropdownOpen ? 'translateY(0)' : 'translateY(-10px)',
      '@media (max-width: 768px)': {
        position: 'static',
        display: dropdownOpen ? 'block' : 'none',
        width: '100%',
        backgroundColor: 'transparent',
        boxShadow: 'none',
        textAlign: 'center',
        opacity: 1,
        transform: 'none'
      }
    },
    dropdownLink: {
      color: '#fff',
      padding: '12px 16px',
      textDecoration: 'none',
      display: 'block',
      transition: 'all 0.3s ease',
      ':hover': {
        backgroundColor: 'rgba(169, 69, 255, 0.3)',
        color: '#00f7ff'
      },
      '@media (max-width: 768px)': {
        fontSize: '1.2rem',
        padding: '1rem'
      }
    }
  };

  return (
    <header style={styles.header}>
      <nav style={styles.nav}>
        <Link 
          to="/" 
          style={styles.logo}
          onMouseEnter={e => e.currentTarget.style.textShadow = styles.logoHover.textShadow}
          onMouseLeave={e => e.currentTarget.style.textShadow = 'none'}
        >
          <FaMusic style={styles.musicIcon} />
          Guzens "El Imaginante"
        </Link>
        
        <button 
          style={styles.menuButton} 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <ul style={styles.navLinks}>
          {isMobile && (
            <button 
              style={styles.closeButton} 
              onClick={toggleMenu}
              aria-label="Close menu"
            >
              <FaTimes />
            </button>
          )}
          
         

          {/* Menú desplegable para laptop */}
          {!isMobile && (
            <li style={{ ...styles.navLink, ...styles.dropdown }}>
              <div 
                style={styles.link}
                onClick={toggleDropdown}
                onMouseEnter={() => !isMobile && setDropdownOpen(true)}
                onMouseLeave={() => !isMobile && setTimeout(() => setDropdownOpen(true), 300)}
              >
                Menu {dropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
              </div>
              <div 
                style={styles.dropdownContent}
                onMouseEnter={() => !isMobile && setDropdownOpen(true)}
                onMouseLeave={() => !isMobile && setDropdownOpen(false)}
              >
                
                <li style={styles.navLink}>
            <Link 
              to="/" 
              style={styles.link}
              onClick={() => {
                setIsMenuOpen(false);
                setDropdownOpen(false);
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = styles.linkHover.color;
                e.currentTarget.nextSibling.style.width = styles.linkHoverAfter.width;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = styles.link.color;
                e.currentTarget.nextSibling.style.width = '0';
              }}
            >
              Inicio
            </Link>
            <span style={{...styles.linkAfter, width: window.location.pathname === '/' ? '100%' : '0'}} />
          </li>
          
          <li style={styles.navLink}>
            <Link 
              to="/events" 
              style={styles.link}
              onClick={() => {
                setIsMenuOpen(false);
                setDropdownOpen(false);
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = styles.linkHover.color;
                e.currentTarget.nextSibling.style.width = styles.linkHoverAfter.width;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = styles.link.color;
                e.currentTarget.nextSibling.style.width = '0';
              }}
            >
              Eventos
            </Link>
            <span style={{...styles.linkAfter, width: window.location.pathname === '/events' ? '100%' : '0'}} />
          </li>

          <li style={styles.navLink}>
            <Link 
              to="/hire" 
              style={styles.link}
              onClick={() => {
                setIsMenuOpen(false);
                setDropdownOpen(false);
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = styles.linkHover.color;
                e.currentTarget.nextSibling.style.width = styles.linkHoverAfter.width;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = styles.link.color;
                e.currentTarget.nextSibling.style.width = '0';
              }}
            >
              Contrataciones
            </Link>
            <span style={{...styles.linkAfter, width: window.location.pathname === '/hire' ? '100%' : '0'}} />
          </li>
              </div>
            </li>
          )}

          {/* Versión móvil del menú desplegable */}
          {isMobile && (
            <li style={styles.navLink}>
              <div 
                style={styles.link}
                onClick={toggleDropdown}
              >
                Menu {dropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
              </div>
              <div style={styles.dropdownContent}>
              <li style={styles.navLink}>
            <Link 
              to="/" 
              style={styles.link}
              onClick={() => {
                setIsMenuOpen(false);
                setDropdownOpen(false);
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = styles.linkHover.color;
                e.currentTarget.nextSibling.style.width = styles.linkHoverAfter.width;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = styles.link.color;
                e.currentTarget.nextSibling.style.width = '0';
              }}
            >
              Inicio
            </Link>
            <span style={{...styles.linkAfter, width: window.location.pathname === '/' ? '100%' : '0'}} />
          </li>
          
          <li style={styles.navLink}>
            <Link 
              to="/events" 
              style={styles.link}
              onClick={() => {
                setIsMenuOpen(false);
                setDropdownOpen(false);
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = styles.linkHover.color;
                e.currentTarget.nextSibling.style.width = styles.linkHoverAfter.width;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = styles.link.color;
                e.currentTarget.nextSibling.style.width = '0';
              }}
            >
              Eventos
            </Link>
            <span style={{...styles.linkAfter, width: window.location.pathname === '/events' ? '100%' : '0'}} />
          </li>

          <li style={styles.navLink}>
            <Link 
              to="/hire" 
              style={styles.link}
              onClick={() => {
                setIsMenuOpen(false);
                setDropdownOpen(false);
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = styles.linkHover.color;
                e.currentTarget.nextSibling.style.width = styles.linkHoverAfter.width;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = styles.link.color;
                e.currentTarget.nextSibling.style.width = '0';
              }}
            >
              Contrataciones
            </Link>
            <span style={{...styles.linkAfter, width: window.location.pathname === '/hire' ? '100%' : '0'}} />
          </li>
              </div>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;