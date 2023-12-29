import './navbar.css';
import { NavLink, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { setIndex } from '../../app/store';

const links = [
  {
    path: '/',
    label: 'Home',
  },
  {
    path: '/events',
    label: 'Events',
  },
  {
    path: '/team',
    label: 'Our Team',
  },
  {
    path: '/blogs',
    label: 'Blogs',
  },
  {
    path: '/feed',
    label: 'Feed',
  },
  {
    path: '/contact',
    label: 'Contact Us',
  },
];

const NavLinkWithUnderline = ({ to, text, index }) => {
  const [linkOpen, setLinkOpen] = useState(false);

  return (
    <div className={linkOpen ? 'active-link' : ''}>
      <NavLink
        key={index}
        to={to}
        className={({ isActive }) => setLinkOpen(isActive)}
      >
        {text}
      </NavLink>
    </div>
  );
};

function Navbar() {
  const [expanded, setExpanded] = useState(false);
  const [elevate, setElevate] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    setExpanded(false);
    dispatch(setIndex(links.findIndex((x) => location.pathname === x.path)));
  }, [location, dispatch]);

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  const navState = useSelector((state) => state.navLogoState.logoState);

  const scrollHandler = (event) => {
    window.scrollY > 0 ? setElevate(true) : setElevate(false);
  };

  return (
    <div
      className={`navbar ${elevate ? 'elevate' : ''} ${
        location.pathname === '/' ? 'home' : ''
      }`}
    >
      <div
        className={`navbar-container ${
          navState || location.pathname !== '/' ? '' : 'right'
        }`}
      >
        <div className='navbar-logo'>
          <img src='/gdsc-logo.png' alt='GDSC Logo' />
          <div className='navbar-logo-text'>
            <span>Google Developer Student Clubs</span>
            <span>Netaji Subhas University of Technology</span>
          </div>
        </div>

        <div className={`navbar-links ${expanded ? 'expanded' : ''}`}>
          {links.map((link, n) => {
            return (
              <NavLinkWithUnderline
                to={link.path}
                text={link.label}
                index={n}
                key={n}
              />
            );
          })}
        </div>
        {expanded ? (
          <FaTimes onClick={() => setExpanded(false)} />
        ) : (
          <FaBars onClick={() => setExpanded(true)} />
        )}
      </div>
    </div>
  );
}

export default Navbar;
