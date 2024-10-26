import React, { useEffect, useRef } from 'react';
import { Box, Flex, VStack, Icon, Text } from '@chakra-ui/react';
import { FaLaptopCode, FaLightbulb, FaPaintBrush } from 'react-icons/fa';
import { motion, useAnimation } from 'framer-motion';
// import { Typewriter } from 'react-simple-typewriter'; // Import typewriter effect
import './styles/Passion.css';

const MotionVStack = motion(VStack);

const Passion = () => {
  const controls = useAnimation(); // Control animations
  const sectionRef = useRef(null); // Track section visibility

  const itemVariants = {
    hidden: { y: -150, opacity: 0 }, // Start off-screen
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.4, // Stagger animation
        type: 'spring',
        stiffness: 80,
        damping: 12,
      },
    }),
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start('visible'); // Trigger animation
        } else {
          controls.start('hidden'); // Reset animation when out of view
        }
      },
      { threshold: 0.3 } // Trigger when 30% of the section is visible
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, [controls]);

  const passionItems = [
    {
      icon: FaPaintBrush,
      title: 'Design',
      description:
        'Design goes beyond the appearance and feel of a product; it encompasses its internal functionality and overall user experience. I aim to create interfaces and experiences that are engaging and enjoyable across all digital platforms.',
    },
    {
      icon: FaLaptopCode,
      title: 'Development',
      description:
        'With a solid foundation in computer science, I’m passionate about web design and development, with a growing interest in mobile app development. As I advance as a developer, my goal is to write clean, readable code that others can use and build upon to create elegant, impactful software.',
    },
    {
      icon: FaLightbulb,
      title: 'Involvement',
      description:
        'I’m a final-year graduate with experience in multiple projects. Explore my work on GitHub! I excel at balancing academics with personal interests, ensuring neither is compromised. My dedication to responsibilities remains unwavering, fueled by my passion for hobbies.',
    },
  ];

  return (
    <Box id="passion" ref={sectionRef} className="passion-section">
      <Text className="section-title">
        {/* <Typewriter
          words={['What I do..']} // Typewriter effect for heading
          loop={false}
          cursor
          cursorStyle="_"
          typeSpeed={80}
          deleteSpeed={50}
          delaySpeed={1000}
        /> */}
        What I do..
      </Text>
      <Flex className="passion-content" wrap="wrap" justify="space-around" align="center">
        {passionItems.map((item, index) => (
          <MotionVStack
            key={index}
            className="passion-item"
            spacing={6}
            initial="hidden"
            animate={controls}
            custom={index}
            variants={itemVariants}
          >
            <Icon as={item.icon} className="passion-icon" />
            <Text className="passion-title">{item.title}</Text>
            <Text className="passion-description">{item.description}</Text>
          </MotionVStack>
        ))}
      </Flex>
    </Box>
  );
};

export default Passion;
