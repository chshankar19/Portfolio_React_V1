// Updated Resume.js
import React from 'react';
import { Button } from '@chakra-ui/react';

const Resume = () => {
  return (
    <div id="resume" className="resume-section">
      <Button colorScheme="teal" size="lg">
        <a href="/resume/ResumeOct.pdf" download>
          Download My Resume
        </a>
      </Button>
    </div>
  );
};

export default Resume;