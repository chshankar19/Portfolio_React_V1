import React, { useRef, useEffect, useState } from 'react';
import { Box, Flex, Text, VStack } from '@chakra-ui/react';
import { motion, useAnimation } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import './styles/Experience.css';

const MotionBox = motion(Box);

const experiences = [
  {
    company: 'Accenture Solutions Pvt Ltd',
    title: 'Data Engineering Associate',
    duration: 'Oct 2021 - Dec 2022',
    description:
      'Worked on data pipelines, automated scripts, and developed key data service components using Databricks, PySpark, and Power BI.',
  },
  {
    company: 'Codemania',
    title: 'Machine Learning Intern',
    duration: 'May - August 2019',
    description:
      'Developed a house price prediction model using Python and algorithms such as Linear Regression and Decision Trees.',
  },
  {
    company: 'Raghu Engineering College',
    title: 'Blockchain Intern',
    duration: 'March - April 2020',
    description:
      'Worked on a blockchain-based project, gaining insights into blockchain fundamentals, cryptographic hashing, and consensus algorithms.',
  },
];

const Experience = () => {
  const sectionRef = useRef(null);
  const controls = useAnimation(); // Animation controls

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start('visible'); // Start animation on scroll
        } else {
          controls.start('hidden'); // Reset when out of view
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [controls]);

  const boxVariants = (index) => ({
    hidden: { x: index % 2 === 0 ? -150 : 150, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 12,
        delay: index * 0.2, // Delay each box by 0.2s
      },
    },
  });

  return (
    <VStack
      id="experience"
      ref={sectionRef}
      spacing={8}
      align="stretch"
      className="experience-container"
    >
      <Text fontSize="4xl" fontWeight="bold" className="typing-heading">
        <Typewriter
          words={['My Experience']}
          loop={false}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </Text>
      <Flex className="experience-boxes" wrap="wrap" gap={10} justify="space-evenly">
        {experiences.map((exp, index) => (
          <MotionBox
            key={index}
            className="experience-box"
            initial="hidden"
            animate={controls}
            variants={boxVariants(index)}
          >
            <Text fontSize="2xl" fontWeight="bold" className="experience-company">
              {exp.company}
            </Text>
            <Text fontSize="lg" className="experience-title">
              {exp.title}
            </Text>
            <Text fontSize="md" className="experience-duration">
              {exp.duration}
            </Text>
            <Text fontSize="md" marginTop="10px">
              {exp.description}
            </Text>
          </MotionBox>
        ))}
      </Flex>
    </VStack>
  );
};

export default Experience;
