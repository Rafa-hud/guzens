import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { events } from '../data/eventsData';

// Configuración del ícono de ubicación personalizado
const locationIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-violet.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
  shadowSize: [41, 41],
  shadowAnchor: [12, 41]
});

const EventMap = () => {
  // Centro del mapa en México con zoom adecuado
  const mapCenter = [23.6345, -102.5528];
  
  // Estilos en objeto (CSS-in-JS)
  const styles = {
    container: {
      padding: '2rem',
      background: 'rgba(26, 26, 46, 0.8)',
      borderRadius: '15px',
      margin: '2rem auto',
      maxWidth: '1200px',
      boxShadow: '0 10px 30px rgba(169, 69, 255, 0.3)',
      border: '1px solid rgba(169, 69, 255, 0.2)'
    },
    title: {
      textAlign: 'center',
      marginBottom: '1.5rem',
      fontSize: '2rem',
      color: '#fff',
      background: 'linear-gradient(90deg, #a945ff, #00f7ff)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      textTransform: 'uppercase',
      letterSpacing: '1px',
      fontWeight: 'bold'
    },
    mapContainer: {
      height: '600px',
      width: '100%',
      borderRadius: '15px',
      overflow: 'hidden',
      border: '1px solid rgba(169, 69, 255, 0.3)',
      boxShadow: '0 5px 20px rgba(0, 0, 0, 0.5)'
    },
    popupContent: {
      padding: '0.5rem',
      minWidth: '200px'
    },
    popupTitle: {
      color: '#a945ff',
      fontSize: '1.1rem',
      marginBottom: '0.5rem',
      fontWeight: 'bold',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem'
    },
    popupDetail: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      margin: '0.3rem 0',
      color: '#333',
      fontSize: '0.9rem'
    },
    popupIcon: {
      color: '#00f7ff'
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Ubicación de Eventos</h2>
      
      <div style={styles.mapContainer}>
        <MapContainer 
          center={mapCenter} 
          zoom={6} 
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          
          {events.map((event) => (
            <Marker 
              key={event.id} 
              position={[event.lat, event.lng]} 
              icon={locationIcon}
            >
              <Popup>
                <div style={styles.popupContent}>
                  <h3 style={styles.popupTitle}>
                    <FaMapMarkerAlt style={styles.popupIcon} /> {event.name}
                  </h3>
                  <p style={styles.popupDetail}>
                    <strong>Ciudad:</strong> {event.city}, {event.state}
                  </p>
                  <p style={styles.popupDetail}>
                    <strong>Lugar:</strong> {event.location}
                  </p>
                  <p style={styles.popupDetail}>
                    <strong>Fecha:</strong> {event.date}
                  </p>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default EventMap;