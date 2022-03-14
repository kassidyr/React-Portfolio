import React from "react";
import { FaRegEnvelope, FaLinkedin, FaGithub, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Contact = ({ contactEmail, contactPara, socialLinks }) => {
  return (
    <div className="contact_container">
      {/* <h1>Get in touch.</h1>
      <p>{contactPara}</p>
      <br></br> */}
      <div style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
        <div style={{display:'flex',flexDirection:'column',alignItems:'start'}}>
          <a className="email_link" style={{fontSize:'1.8em',display:'flex',alignItems:'center',marginTop:'1rem'}} href={`mailto:${contactEmail}`}>
            <FaRegEnvelope style={{marginInlineEnd:'1rem'}}></FaRegEnvelope>{contactEmail}
          </a>
          <a className="email_link" style={{fontSize:'1.8em',display:'flex',alignItems:'center',marginTop:'1rem'}} href={`mailto:${contactEmail}`}>
            <FaPhoneAlt style={{marginInlineEnd:'1rem'}}></FaPhoneAlt>(918) 850-9870
          </a>
          <a className="email_link" style={{fontSize:'1.8em',display:'flex',alignItems:'center',marginTop:'1rem'}} href={`mailto:${contactEmail}`}>
            <FaMapMarkerAlt style={{marginInlineEnd:'1rem'}}></FaMapMarkerAlt>Fort Myers, FL
          </a>
        </div>
        <ul className="social_links">
          <li>
            <a href={socialLinks[0].url}>
              <FaLinkedin></FaLinkedin>
            </a>
          </li>
          <li>
            <a href={socialLinks[1].url}>
              <FaGithub></FaGithub>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
