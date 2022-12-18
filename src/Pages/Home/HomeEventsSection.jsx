import React from 'react'
import { Link } from "react-router-dom";
import Carousel from '../Events/Carousel';
import Image from '../../Assets/Images/events-workshop.jpg';

export default function HomeEventsSection() {

    const data = [
        { key: 1, Image, title: "Orientation for Batch 2026", desc: "Welcome Batch of 2026!" },
    ];

    console.log(data.length);

    return (
        <>
            {
                data.length > 0 ?
                    (
                        <section className="home-section events-section">
                            <div className="title" style={{ margin: "5px 80px 20px" }}>Featured Events</div>
                            <div className={'carousel-container'} style={{ margin: "0 80px" }}>
                                <Carousel data={data} />
                            </div>
                        </section>
                    ) :
                    (
                        <section className="home-section events-section">
                            <div className="wrapper">
                                <div className="home-triangle-box"></div>
                                <div className="home-triangle-box-2"></div>
                                <div className="home-events-inner-container">
                                    <div className="content">
                                        <h1 className="title">No upcoming events</h1>
                                        <p className="info">Stay tuned with us for amazing events, workshops and other incredible opporutinities.</p>
                                        <Link className="home-know-more-btn" to="/">Know More</Link>
                                        <div className="home-events-host">
                                            <p>Want to host an event with GDSC NSUT?</p>
                                            <Link to="/">Connect with us</Link>
                                        </div>
                                    </div>
                                    <img className="home-events-image" src={'/assets/images/calender.png'} alt="Events"></img>
                                </div>
                            </div>
                        </section>
                    )
            }
        </>

    )
}
