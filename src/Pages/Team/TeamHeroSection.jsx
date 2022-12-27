import React from 'react';
import TeamHeroImage from "../../Assets/Images/team-hero-image.png"; 

export default function TeamHeroSection() {
  return (
    <section className="team-section team-hero-section">
        <div className="left-container">
            <div className="title">Our Team</div>
            <div className="content">Strength of GDSC NSUT. We create , implement and accomplish the ideas. Learn and acquire knowledge with us through great, idiosyncratic experiences and skills.</div>
        </div>
        <div className="right-container">
            <img src={TeamHeroImage} alt="" />
        </div>
    </section>
  )
}
