import React, { useState, useEffect, useMemo } from 'react';
import { Flex, IconButton, Button, Box } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import './styles/Navbar.css';

const Navbar = () => {
  const Links = useMemo(() => ['home', 'passion', 'experience', 'skills', 'projects', 'contact'], []);

  const [isMenuOpen, setIsMenuOpen] = useState(false); // Track menu state
  const [navbarClass, setNavbarClass] = useState('navbar-gradient'); // Default class

  const toggleMenu = () => setIsMenuOpen((prev) => !prev); // Toggle menu

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    const navbarHeight = document.querySelector('.navbar').offsetHeight;

    if (section) {
      window.scrollTo({
        top: section.offsetTop - navbarHeight,
        behavior: 'smooth',
      });
      setIsMenuOpen(false); // Close menu after clicking link on mobile
    }
  };

  useEffect(() => {
    const sectionColors = {
      home: 'navbar-home',
      passion: 'navbar-passion',
      experience: 'navbar-experience',
      skills: 'navbar-skills',
      projects: 'navbar-projects',
      contact: 'navbar-contact',
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            setNavbarClass(sectionColors[sectionId] || 'navbar-gradient');
          }
        });
      },
      { threshold: 0.3 }
    );

    Links.forEach((link) => {
      const section = document.getElementById(link);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect(); // Cleanup observer
  }, [Links]);

  return (
    <Flex className={`navbar ${navbarClass}`} as="nav">
      {/* Hamburger button (visible only on mobile) */}
      <IconButton
        size="md"
        icon={isMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
        aria-label="Toggle Menu"
        display={{ base: 'inline-flex', md: 'none' }}
        onClick={toggleMenu}
        bg="transparent"
        _hover={{ bg: 'teal.600' }}
      />

      {/* Navbar links */}
      {/* <Box
        className={`navbar-links ${isMenuOpen ? 'open' : 'closed'}`}
        display={{ base: isMenuOpen ? 'flex' : 'none', md: 'flex' }} // Always show on desktop
        flexDirection={{ base: 'column', md: 'row' }}
        alignItems="center"
        justifyContent={{ base: 'flex-start', md: 'flex-end' }}
        position={{ base: 'absolute', md: 'static' }}
        top={{ base: '60px', md: 'auto' }}
        right={{ base: '0', md: '2rem' }}
        width={{ base: '100%', md: 'auto' }}
        bg={{ base: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.1))', md: 'transparent' }}
        zIndex="1000"
      > */}
      {/* Navbar links */}
      <Box
        className={`navbar-links ${isMenuOpen ? 'open' : 'closed'}`}
        display={{ base: isMenuOpen ? 'flex' : 'none', md: 'flex' }} // Always show on desktop
        flexDirection={{ base: 'column', md: 'row' }}
        alignItems="center"
        justifyContent={{ base: 'flex-start', md: 'flex-end' }}
        position={{ base: 'absolute', md: 'static' }}
        top={{ base: '60px', md: 'auto' }}
        right={{ base: '0', md: '2rem' }}
        width={{ base: '100%', md: 'auto' }}
        bg={{ base: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.1))', md: 'transparent' }}
        zIndex="1000"
        boxShadow={{ base: '0 4px 15px rgba(255, 255, 255, 0.4)', md: 'none' }} // White shadow effect
      >
      
        {Links.map((link) => (
          <Button
            key={link}
            onClick={() => handleScroll(link)}
            variant="ghost"
            className={`navbar-link ${isMenuOpen ? 'mobile-menu-open' : ''}`} // Add class when menu is open
            _hover={{ bg: 'white', color: 'teal' }}
          >
            {link.charAt(0).toUpperCase() + link.slice(1)}
          </Button>
        ))}
      </Box>
    </Flex>
  );
};

export default Navbar;
