import React from 'react';
import { Box, Text, Flex, Image } from '@chakra-ui/react';
import { useTypewriter } from 'react-simple-typewriter';
import './styles/Hero.css';
import ProfilePic from './images/PassportPicture.jpg';

const Hero = () => {
  const [text] = useTypewriter({
    words: [
      'Full Stack Developer',
      'Machine Learning Enthusiast',
      'Data Engineer',
    ],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 50,
    delaySpeed: 1500,
  });

  return (
    <Box id="home" className="hero-container">
      <Image className="hero-image" src={ProfilePic} alt="Gowri Shankar" />
      <Flex className="hero-text-container" direction="column" gap={6}>
        <Text as="h1" className="hero-title">
          Hello, I'm <span className="highlight">Gowri Shankar Chintala</span>
        </Text>

        <Text as="p" className="hero-typewriter">
          {text}
          <span className="cursor">_</span>
        </Text>

        <Text as="p" className="hero-description">
          Passionate Data Engineer with over 2 years of experience in building
          data solutions and web development. Skilled in GCP, PySpark, SQL, and
          full-stack technologies, including React and API.
        </Text>
      </Flex>
    </Box>
  );
};

export default Hero;
