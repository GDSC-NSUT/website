import React, { useEffect, useRef } from "react";
import Card from "./Card";
import "./events.css";
import { useState } from "react";
import upcomingEvents from "./events_upcoming.json";
import pastEvents from "./events_upcoming.json";
import { MdArrowBackIosNew, MdFilterList } from "react-icons/md";
import { RiSearchLine } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { HiLocationMarker } from "react-icons/hi";
import Carousel from "./Carousel";
import Image from "../../Assets/Images/events-workshop.jpg";

const Events = () => {
  const [events, setEvents] = useState("U");
  const [modalEvent, setModalEvent] = useState({});
  const modalOverlayRef = useRef();
  const modalRef = useRef();

  function showEventModal(event) {
    modalOverlayRef.current.classList.add("show");
    setModalEvent(event);
  }

  function hideEventModal(e) {
    modalOverlayRef.current.classList.remove("show");
  }

  function handleShowDropdown(e) {
    const isDropdownButton = e.target.matches(".dropdown-btn");
    if (!isDropdownButton && e.target.closest(".dropdown") != null) return;

    let currentDropdown;
    if (isDropdownButton) {
      currentDropdown = e.target.closest(".dropdown");
      currentDropdown.classList.add("show");
    }

    document.querySelectorAll(".dropdown.show").forEach(dropdown => {
      if (dropdown === currentDropdown) return;
      dropdown.classList.remove("show");
    })
  }

  useEffect(() => {
    // toggle dropdown
    document.addEventListener("click", handleShowDropdown);
    return () => document.removeEventListener("click", handleShowDropdown);
  }, [])

  const data = [
    { key: 1, Image, title: "UX Tech 2022", desc: "A user interface and experience workshop" },
    { key: 2, Image, title: "UX Tech 2022", desc: "A user interface and experience workshop" },
    { key: 3, Image, title: "UX Tech 2022", desc: "A user interface and experience workshop" }
  ];

  return (
    <>
      <main>
        <div className={'carousel-container'}>
          <Carousel data={data} />
        </div>
        <div className={'search-container'}>
          <div className="search-wrapper">
            <input type="text" className="search-input" placeholder="Search" />
            <div className="search-icon">
              <RiSearchLine />
            </div>
          </div>
          <div className="dropdown">
            <button className="dropdown-btn" onFocus={handleShowDropdown}>
              <div className="category-icon">
                <MdFilterList />
              </div>
              <span>Categories</span>
              <div className="dropdown-toggle">
                <IoIosArrowDown />
              </div>
            </button>
            <div className="dropdown-menu">
              <div className="dropdown-item" onClick={() => setEvents("P")}>Past Events</div>
              <div className="dropdown-item" onClick={() => setEvents("U")}>Upcoming Events</div>
            </div>
          </div>
        </div>
        <div className={'events-container'}>
          <div className={'events-header'}>
            <h1>{events === "U" ? "Upcoming" : "Past"} Events</h1>
            <span>View All</span>
          </div>
          <div className="event-cards">
            {
              events === "U" ?
                upcomingEvents.map(event => {
                  return <Card key={event.id} event={event} showEventModal={showEventModal} />
                }) :
                pastEvents.map(event => {
                  return <Card key={event.id} event={event} showEventModal={showEventModal} />
                })
            }
          </div>
        </div>
      </main>
      <div ref={modalOverlayRef} className="modal-overlay">
        <div ref={modalRef} className="modal" tabIndex={-1}>
          {
            Object.keys(modalEvent).length > 0 &&
            <>
              <div className="event-cover-image-container">
                <img className="event-cover-image" src={require(`../../Assets/Images/${modalEvent.coverImage}`)} alt={modalEvent.name} />
                <div className="modal-close" onClick={hideEventModal}>
                  <MdArrowBackIosNew />
                </div>
              </div>
              <div className="event-content-container">
                <div className="event-content-header">
                  <div>
                    <h2>{modalEvent.name}</h2>
                    <p style={{ fontSize: "1.4rem" }}>Organized By {modalEvent.organizer}</p>
                  </div>
                  <div className="event-register">
                    <button className="register-btn">Register</button>
                    <p>Registration ends on</p>
                    <p>{modalEvent.registrationEndDate}</p>
                  </div>
                </div>
                <div className="event-content-about">
                  <h3>About</h3>
                  <p>{modalEvent.description}</p>
                </div>
                <div className="event-content-info">
                  {
                    (modalEvent.info ?? []).map((info, index) => {
                      return (
                        <div key={index}>
                          <h3>{info.title}</h3>
                          {
                            info.title?.toLowerCase() === "location" ?
                              <p className="event-location"><HiLocationMarker /> {info.description}</p> :
                              info.title?.toLowerCase() === "contact" ?
                                <p className="event-contact">{info.description}</p> :
                                <p>{info.description}</p>
                          }
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            </>
          }
        </div>
      </div>
    </>
  );
};

export default Events;
