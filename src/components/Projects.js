import React, { useEffect, useRef, useState } from 'react';
import { VStack, Text, Box, Button, HStack, Link } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './styles/Projects.css';

const MotionBox = motion(Box);

const projects = [
  {
    title: 'Student Online Examination System',
    description:
      'Led the development of a real-time examination portal using Python, MySQL, and Apache for managing backend operations with a user-friendly interface designed using HTML and CSS.'
  },
  {
    title: 'Student Information Chatbot',
    description:
      'Created a chatbot using JavaScript and HTML/CSS to provide instant responses to students regarding their academic information. Led debugging and coding efforts to ensure system reliability.'
  },
  {
    title: 'Smart Disease Detector using AI',
    description:
      'Conducted a systematic review on the applications of machine learning and deep learning techniques in disease prediction and diagnosis focusing on heart disease, liver disease, kidney disease, and diabetes.'
  },
  {
    title: 'GitHub Finder',
    description:
      'Developed a React web application using the GitHub API to allow users to search for GitHub profiles and view detailed user information such as repositories, followers, and more.',
      github: 'https://github.com/chshankar19/github-finder.git',
      website: 'https://githubfinder-one-zeta.vercel.app/'
  },
  {
    title: 'Face and Emotion Detection Web App',
    description:
      'Created a real-time face detection and emotion classification web app using face-api.js, capable of identifying emotions, age, and gender through a webcam feed.',
      github: 'https://github.com/chshankar19/FaceDetection-App.git',
      website: 'https://chshankar19.github.io/FaceDetection-App/'
  },
  {
    title: 'Language Translator Web App',
    description:
      'Built a web-based language translation tool with real-time translation capabilities, integrating a free translation API.',
      github: 'https://github.com/chshankar19/LanguageTranslator.git',
      website: 'https://chshankar19.github.io/LanguageTranslator/'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Faster stagger for smoother animation
      duration: 0.8,
      ease: 'easeOut'
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -150 }, // Increased movement from the left
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const Projects = () => {
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        } else {
          setIsInView(false); // Reset animation when leaving the section
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <VStack
      id="projects"
      ref={sectionRef}
      spacing={8}
      className="projects-container"
    >
      <Text className="projects-title">Projects</Text>
      <MotionBox
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={containerVariants}
        className="projects-content"
      >
        {projects.map((project, index) => (
          <MotionBox
            key={index}
            className="project-card"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }} // Subtle hover effect
          >
            <Text className="project-title">{project.title}</Text>
            <Text className="project-description">{project.description}</Text>
            <HStack spacing={4} marginTop="10px">
              {project.github && (
                <Link href={project.github} isExternal>
                  <Button
                    leftIcon={<FaGithub />}
                    colorScheme="teal"
                    variant="outline"
                  >
                    GitHub
                  </Button>
                </Link>
              )}
              {project.website && (
                <Link href={project.website} isExternal>
                  <Button
                    leftIcon={<FaExternalLinkAlt />}
                    colorScheme="blue"
                    variant="outline"
                  >
                    Website
                  </Button>
                </Link>
              )}
            </HStack>
          </MotionBox>
        ))}
      </MotionBox>
    </VStack>
  );
};

export default Projects;
