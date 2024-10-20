import React, { useState, useEffect } from 'react';
import { Flex, IconButton, Button, useDisclosure } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import './styles/Navbar.css';

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const Links = ['home', 'passion', 'experience', 'skills', 'projects', 'contact'];

  const [navbarClass, setNavbarClass] = useState('navbar-gradient'); // Default to gradient

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    const navbarHeight = document.querySelector('.navbar').offsetHeight;

    if (section) {
      window.scrollTo({
        top: section.offsetTop - navbarHeight, // Adjust for navbar height
        behavior: 'smooth',
      });
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
      { threshold: 0.5 } // Adjust sensitivity
    );

    Links.forEach((link) => {
      const section = document.getElementById(link);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect(); // Cleanup observer on unmount
  }, [Links]);

  return (
    <Flex className={`navbar ${navbarClass}`}>
      <IconButton
        size="md"
        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
        aria-label="Open Menu"
        display={{ base: 'inline-flex', md: 'none' }}
        onClick={isOpen ? onClose : onOpen}
        bg="transparent"
        _hover={{ bg: 'teal.600' }}
      />
      <Flex
        className="navbar-links"
        display={{ base: isOpen ? 'flex' : 'none', md: 'flex' }}
        direction={{ base: 'column', md: 'row' }}
        position={{ base: 'absolute', md: 'static' }}
        top={{ base: '60px', md: 'auto' }}
      >
        {Links.map((link) => (
          <Button
            key={link}
            onClick={() => {
              handleScroll(link);
              onClose();
            }}
            variant="ghost"
            className="navbar-link"
          >
            {link.charAt(0).toUpperCase() + link.slice(1)}
          </Button>
        ))}
      </Flex>
    </Flex>
  );
};

export default Navbar;
