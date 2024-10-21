import React from 'react';
import { Box, Text, Flex, Image } from '@chakra-ui/react';
import { useTypewriter } from 'react-simple-typewriter';
import './styles/Hero.css';
import ProfilePic from './images/PassportPicture.jpg';

const Hero = () => {
  const [text] = useTypewriter({
    words: [
      'Full Stack Developer',
      'Doctor Strange',
      'Machine Learning Enthusiast',
      'Data Engineer',
      'Software Developer'
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
          <span className="highlight">Gowri Shankar Chintala</span>
        </Text>

        <Text as="p" className="hero-typewriter">
          {text}
          <span className="cursor">_</span>
        </Text>

        <Text as="p" className="hero-description">
        I am a passionate Data Engineer with over two years of experience in building, optimizing, and automating data pipelines. 
        Skilled in GCP, PySpark, SQL, Databricks, and React.js, I enjoy solving complex challenges by creating efficient and scalable solutions. 
        Alongside data engineering, I have hands-on experience in web development and API integration using Node.js. 
        Currently pursuing a Master’s in Computer Science at Texas A&M University-Commerce, 
        I am committed to continuous learning and aspire to develop impactful software solutions through innovation and technical expertise.
        </Text>
      </Flex>
    </Box>
  );
};

export default Hero;
