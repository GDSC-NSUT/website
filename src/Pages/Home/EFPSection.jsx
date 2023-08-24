import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { VscArrowRight } from "react-icons/vsc";

const images = [
  "/assets/images/home-events-img.png",
  "/assets/images/home-feed-img.png",
  "/assets/images/home-projects-img.png",
];

export function EFPCard(props) {
  const { Image, Title, Content, To } = props;
  return (
    <Link to={To}>
      <div className="home-card">
        <div
          style={{ backgroundImage: `url("${Image}")` }}
          className="img"
        ></div>
        <div className="title">{Title}</div>
        <div className="content">{Content}</div>
        <div className="spacer" style={{ flex: 1 }}></div>
        <div className="arrow">
          <Link to={To}>
            <VscArrowRight />
          </Link>
        </div>
      </div>
    </Link>
  );
}

EFPCard.defaultProps = {
  Image: "",
  Title: "Events",
  Content:
    "Lorem ipsum dolor sit, sjhd lawb jhwfgebhifs b aufgeprug egfhapji bghjbgv chid nwe maxime ducimus debitis voluptatem.",
  To: "/",
};

EFPCard.propTypes = {
  Title: PropTypes.string,
  Content: PropTypes.string,
};

export default function EFPSection() {
  return (
    <section className="home-section efp-section">
      <div className="wrapper">
        <div className="home-card-container">
          <EFPCard
            Image={images[0]}
            Title="Events"
            To="/events"
            Content="We host multiple events throughout the year such as Solution Challenge, Android Jams, Speaker sessions and much more."
          />
          <EFPCard
            Image={images[1]}
            Title="Feed"
            To="/feed"
            Content="Have a sneak peak at our GDSC's Experience on our socials and discover the power of Technology and Collaboration"
          />
          <EFPCard
            Image={images[2]}
            Title="Team"
            To="/team"
            Content="From fostering collaboration to driving innovation, our members contribute significantly. Get to know them here."
          />
        </div>
      </div>
    </section>
  );
}
