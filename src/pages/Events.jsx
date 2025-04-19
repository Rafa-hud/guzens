import React from 'react';
import EventMap from '../components/EventMap';
import { events } from '../data/eventsData';

const Events = () => {
  return (
    <div className="events-page">
      <h1>Próximos Eventos en México</h1>
      
      {/* Mapa interactivo */}
      <EventMap />
      
      {/* Lista de eventos */}
      <div className="events-list">
        {events.map((event) => (
          <div key={event.id} className="event-card neon-hover">
            <h3>{event.name}</h3>
            <p><strong>Fecha:</strong> {event.date}</p>
            <p><strong>Ubicación:</strong> {event.location}, {event.state}</p>
            <div className="event-marker"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;