import React from "react";
import './styles.css'
const maps = () => {
  return (
    <div className="map-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14290.338157567383!2d91.4286612!3d26.4368806!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375bcd90facd6de7%3A0x20219fa94724407c!2sLuitomania%20Digital%20services!5e0!3m2!1sen!2sin!4v1677742824322!5m2!1sen!2sin"
        className="responsive-iframe"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default maps;


