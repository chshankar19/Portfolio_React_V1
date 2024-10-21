import React, { useRef, useEffect } from 'react';
import { Box, Flex, Text, VStack } from '@chakra-ui/react';
import { motion, useAnimation } from 'framer-motion';
import './styles/Skills.css';

const skillCategories = {
  Methodologies: ['SDLC', 'Agile', 'Waterfall', 'Scrum'],
  'Programming Languages': [
    'Python', 'C programming', 'C++', 'Java', 'SQL', 'JavaScript', 'CSS', 'HTML'
  ],
  Database: ['MySQL', 'PySparkSQL', 'MongoDB', 'Oracle DB'],
  'Libraries & Frameworks': [
    'PySpark', 'React.js', 'Flask', 'NumPy', 'Hadoop', 
    'Angular', 'Pandas', 'Rest API',
  ],
  'Tools & Technologies': [
    'Postman', 'GCP', 'Kubernetes', 'Docker', 'LLM’s', 'Kafka', 'Jira', 
    'Git', 'Databricks', 'PowerBI'
  ],
};

const MotionVStack = motion(VStack);
const MotionText = motion(Text);

const Skills = () => {
  const sectionRef = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start('visible');
        } else {
          controls.start('hidden');
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [controls]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: -30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <Box id="skills" ref={sectionRef} className="skills-container">
      <Text className="skills-title">Skills</Text>
      <Flex className="skills-content" justify="center" gap={10}>
        {Object.entries(skillCategories).map(([category, skills], index) => (
          <MotionVStack
            key={index}
            align="center" // Center-align skills under headings
            spacing={5}
            initial="hidden"
            animate={controls}
            variants={containerVariants}
          >
            <MotionText className="category-title" variants={itemVariants}>
              {category}
            </MotionText>
            {skills.map((skill, idx) => (
              <MotionText key={idx} className="skill-item" variants={itemVariants}>
                {skill}
              </MotionText>
            ))}
          </MotionVStack>
        ))}
      </Flex>
    </Box>
  );
};

export default Skills;
