import React from 'react';
import { VStack, HStack, Link, Button, Text, Box } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { TbBrandX } from 'react-icons/tb'; // New Twitter symbol (X)
import { motion, isValidMotionProp } from 'framer-motion';
import { chakra } from '@chakra-ui/react';
import './styles/Contact.css';

// Create Motion components to apply animations properly
const MotionBox = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === 'children',
});

const MotionVStack = chakra(motion(VStack), {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === 'children',
});

const animationVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const iconVariants = {
  hover: { rotate: 360, scale: 1.2, transition: { duration: 0.8, ease: 'easeInOut' } },
};

const Contact = () => {
  return (
    <Box id="contact" className="contact-section">
      <MotionVStack
        spacing={6}
        initial="hidden"
        animate="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={animationVariants}
      >
        {/* Resume Download Section */}
        <Text className="resume-title">
          To know me better, grab a copy of my resume!
        </Text>
        <Button
          className="resume-button"
          as="a"
          href="/resume/ResumeOct.pdf"
          download
        >
          Download My Resume
        </Button>

        {/* Add margin between resume button and the email icon */}
        <Box mt={8}>
          <MotionBox
            variants={iconVariants}
            whileHover="hover"
          >
            <FaEnvelope size={48} color="white" />
          </MotionBox>
        </Box>

        <Text className="contact-title">Get in Touch!</Text>
        <Text className="contact-description">
          Whether you have an idea for a project or just want to chat, feel free to shoot me an email!
        </Text>
        <Button
          className="contact-button"
          as="a"
          href="mailto:chshankar261@gmail.com"
        >
          Say Hello
        </Button>

        {/* Social Icons Section */}
        <HStack spacing={6} className="contact-icons" mt={4}>
          {[
            { href: "https://github.com/chshankar19", icon: FaGithub },
            { href: "https://www.linkedin.com/in/gschintala/", icon: FaLinkedin },
            { href: "https://www.instagram.com/ch.shankar_/", icon: FaInstagram },
            { href: "https://x.com/_shankarCh", icon: TbBrandX }, // Updated Twitter icon (X)
          ].map(({ href, icon: IconComponent }, index) => (
            <Link key={index} href={href} isExternal>
              <MotionBox
                variants={iconVariants}
                whileHover="hover"
              >
                <IconComponent size={28} color="white" />
              </MotionBox>
            </Link>
          ))}
        </HStack>

        <Text className="footer-text">© Gowri Shankar Chintala 2024</Text>
      </MotionVStack>
    </Box>
  );
};

export default Contact;
