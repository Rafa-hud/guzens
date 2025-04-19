import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaComment, FaPaperPlane } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    telefono: '',
    asunto: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Inicializa EmailJS con tu Public Key
      emailjs.init('ye_xijHB98wMOCVMe');
      
      // Envía el formulario usando EmailJS
      const result = await emailjs.send(
        'service_ig5oqht', // Service ID
        'template_8xwnuc8', // Template ID
        {
          from_name: formData.nombre,
          from_email: formData.correo,
          phone: formData.telefono,
          message: formData.asunto,
          reply_to: formData.correo
        }
      );

      if (result.status === 200) {
        setSubmitStatus('success');
        setFormData({
          nombre: '',
          correo: '',
          telefono: '',
          asunto: ''
        });
      } else {
        throw new Error('Error al enviar el mensaje');
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Error al enviar el formulario:', error);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  // Estilos (CSS-in-JS)
  const styles = {
    container: {
      maxWidth: '600px',
      margin: '2rem auto',
      padding: '2.5rem',
      background: 'rgba(26, 26, 46, 0.9)',
      borderRadius: '20px',
      boxShadow: '0 15px 40px rgba(169, 69, 255, 0.25)',
      border: '1px solid rgba(169, 69, 255, 0.3)',
      '@media (max-width: 768px)': {
        padding: '1.8rem',
        margin: '1.5rem',
        width: 'auto'
      },
      '@media (max-width: 480px)': {
        padding: '1.5rem 1rem',
        margin: '1rem 0.5rem'
      }
    },
    title: {
      color: '#fff',
      fontSize: '2.2rem',
      marginBottom: '1.8rem',
      background: 'linear-gradient(90deg, #a945ff, #00f7ff)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      textAlign: 'center',
      textTransform: 'uppercase',
      letterSpacing: '1px',
      fontWeight: 'bold',
      '@media (max-width: 768px)': {
        fontSize: '1.8rem',
        marginBottom: '1.5rem'
      },
      '@media (max-width: 480px)': {
        fontSize: '1.5rem'
      }
    },
    formGroup: {
      marginBottom: '1.8rem',
      position: 'relative',
      '@media (max-width: 480px)': {
        marginBottom: '1.5rem'
      }
    },
    input: {
      width: '100%',
      padding: '15px 20px 15px 50px',
      borderRadius: '10px',
      border: '1px solid rgba(169, 69, 255, 0.4)',
      background: 'rgba(15, 12, 41, 0.6)',
      color: '#fff',
      fontSize: '1.1rem',
      transition: 'all 0.3s ease',
      '@media (max-width: 768px)': {
        padding: '13px 18px 13px 45px',
        fontSize: '1rem'
      },
      '@media (max-width: 480px)': {
        padding: '12px 15px 12px 40px',
        fontSize: '0.95rem'
      },
      ':focus': {
        outline: 'none',
        borderColor: '#00f7ff',
        boxShadow: '0 0 15px rgba(0, 247, 255, 0.4)',
        background: 'rgba(15, 12, 41, 0.8)'
      },
      '::placeholder': {
        color: 'rgba(255, 255, 255, 0.6)'
      }
    },
    icon: {
      position: 'absolute',
      left: '18px',
      top: '50%',
      transform: 'translateY(-50%)',
      color: '#a945ff',
      fontSize: '1.3rem',
      transition: 'all 0.3s ease',
      '@media (max-width: 768px)': {
        fontSize: '1.2rem',
        left: '15px'
      },
      '@media (max-width: 480px)': {
        fontSize: '1.1rem',
        left: '12px'
      }
    },
    textarea: {
      width: '100%',
      padding: '15px 20px 15px 50px',
      borderRadius: '10px',
      border: '1px solid rgba(169, 69, 255, 0.4)',
      background: 'rgba(15, 12, 41, 0.6)',
      color: '#fff',
      fontSize: '1.1rem',
      minHeight: '150px',
      resize: 'vertical',
      transition: 'all 0.3s ease',
      '@media (max-width: 768px)': {
        padding: '13px 18px 13px 45px',
        fontSize: '1rem',
        minHeight: '130px'
      },
      '@media (max-width: 480px)': {
        padding: '12px 15px 12px 40px',
        fontSize: '0.95rem',
        minHeight: '120px'
      },
      ':focus': {
        outline: 'none',
        borderColor: '#00f7ff',
        boxShadow: '0 0 15px rgba(0, 247, 255, 0.4)',
        background: 'rgba(15, 12, 41, 0.8)'
      },
      '::placeholder': {
        color: 'rgba(255, 255, 255, 0.6)'
      }
    },
    submitButton: {
      background: 'linear-gradient(135deg, #a945ff, #00f7ff)',
      color: '#fff',
      border: 'none',
      padding: '16px 30px',
      borderRadius: '50px',
      fontSize: '1.1rem',
      fontWeight: '600',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '12px',
      width: '100%',
      transition: 'all 0.4s ease',
      boxShadow: '0 5px 15px rgba(169, 69, 255, 0.4)',
      position: 'relative',
      overflow: 'hidden',
      '@media (max-width: 768px)': {
        padding: '14px 25px',
        fontSize: '1rem'
      },
      '@media (max-width: 480px)': {
        padding: '12px 20px',
        fontSize: '0.95rem'
      },
      ':hover': {
        transform: 'translateY(-3px)',
        boxShadow: '0 8px 25px rgba(0, 247, 255, 0.5)',
        '::after': {
          transform: 'translateX(0)'
        }
      },
      ':disabled': {
        opacity: '0.7',
        cursor: 'not-allowed',
        transform: 'none',
        boxShadow: 'none'
      },
      '::after': {
        content: '""',
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
        transform: 'translateX(-100%)',
        transition: 'transform 0.6s ease'
      }
    },
    statusMessage: {
      marginTop: '1.5rem',
      padding: '12px',
      borderRadius: '8px',
      textAlign: 'center',
      fontSize: '1rem',
      fontWeight: '500',
      '@media (max-width: 480px)': {
        fontSize: '0.9rem',
        padding: '10px'
      }
    },
    success: {
      color: '#00ffaa',
      background: 'rgba(0, 255, 170, 0.15)',
      border: '1px solid rgba(0, 255, 170, 0.3)'
    },
    error: {
      color: '#ff5555',
      background: 'rgba(255, 85, 85, 0.15)',
      border: '1px solid rgba(255, 85, 85, 0.3)'
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Contáctame</h2>
      
      <form onSubmit={handleSubmit}>
        <div style={styles.formGroup}>
          <FaUser style={styles.icon} />
          <input
            type="text"
            name="nombre"
            placeholder="Nombre completo"
            value={formData.nombre}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        
        <div style={styles.formGroup}>
          <FaEnvelope style={styles.icon} />
          <input
            type="email"
            name="correo"
            placeholder="Correo electrónico"
            value={formData.correo}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        
        <div style={styles.formGroup}>
          <FaPhone style={styles.icon} />
          <input
            type="tel"
            name="telefono"
            placeholder="Número de teléfono"
            value={formData.telefono}
            onChange={handleChange}
            style={styles.input}
          />
        </div>
        
        <div style={styles.formGroup}>
          <FaComment style={{...styles.icon, top: '20px'}} />
          <textarea
            name="asunto"
            placeholder="Tu mensaje o consulta..."
            value={formData.asunto}
            onChange={handleChange}
            required
            style={styles.textarea}
          />
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          style={styles.submitButton}
        >
          <FaPaperPlane />
          {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
        </button>
        
        {submitStatus === 'success' && (
          <div style={{...styles.statusMessage, ...styles.success}}>
            ¡Mensaje enviado con éxito! Te responderé a la brevedad.
          </div>
        )}
        
        {submitStatus === 'error' && (
          <div style={{...styles.statusMessage, ...styles.error}}>
            Error al enviar el mensaje. Por favor intenta nuevamente.
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;