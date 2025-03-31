
import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Form submission logic
    console.log('Form submitted');
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Contact Me</h2>
          <div className="section-divider"></div>
          <p className="section-description">
            Let's connect and discuss how we can work together on your next project.
          </p>
        </div>
        
        <div className="contact-container">
          <div className="contact-info">
            <h3 className="contact-title">Get In Touch</h3>
            <p className="contact-description">
              Feel free to reach out if you have any questions, project inquiries, 
              or just want to say hello. I'll get back to you as soon as possible.
            </p>
            
            <div className="contact-details">
              <div className="contact-detail">
                <div className="contact-detail-icon">
                  <MapPin size={20} />
                </div>
                <div className="contact-detail-text">
                  <h4>Location</h4>
                  <p>San Beda College Alabang</p>
                </div>
              </div>
              
              <div className="contact-detail">
                <div className="contact-detail-icon">
                  <Mail size={20} />
                </div>
                <div className="contact-detail-text">
                  <h4>Email</h4>
                  <p>joaquin@jorquia.com</p>
                </div>
              </div>
              
              <div className="contact-detail">
                <div className="contact-detail-icon">
                  <Phone size={20} />
                </div>
                <div className="contact-detail-text">
                  <h4>Phone</h4>
                  <p>+63 912 345 6789</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="contact-form">
            <h3 className="form-title">Send Me a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="form-input" 
                  placeholder="Enter your name" 
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email" className="form-label">Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="form-input" 
                  placeholder="Enter your email" 
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="form-input" 
                  placeholder="Enter subject" 
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea 
                  id="message" 
                  className="form-textarea" 
                  placeholder="Enter your message" 
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="form-button">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
